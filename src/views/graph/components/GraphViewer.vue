<script setup>
import { CanvasEvent, EdgeEvent, Graph, GraphEvent, NodeEvent } from '@antv/g6'
import { onMounted, ref, watch } from 'vue'
import { G6Graph } from '../utils'

const props = defineProps({
  layout: String,
})
const emit = defineEmits(['selectItem'])

const container = ref(null)
let graph = null

onMounted(() => {
  initGraph()
})

function initGraph() {
  const startTime = new Date('2023-08-01').getTime()
  const diff = 3600 * 24 * 1000
  const timebarData = [10, 2, 3, 4, 15, 10, 5, 0, 3, 1].map((value, index) => ({
    time: new Date(startTime + index * diff),
    value,
    label: new Date(startTime + index * diff).toLocaleString(),
  }))
  const graphData = {
    nodes: Array.from({ length: 49 }).fill(0).map((_, index) => ({
      id: `node-${index}`,
      data: {
        timestamp: startTime + (index % 10) * diff,
        value: index % 20,
        label: new Date(startTime + (index % 10) * diff).toLocaleString(),
      },
    })),
    edges: Array.from({ length: 49 }).fill(0).map((_, i) => ({
      id: `edge-${i}`,
      source: `node-${i % 30}`,
      target: `node-${(i % 20) + 29}`,
      data: {
        edgeType: 'e1',
      },
    })),
  }

  const g6Graph = new G6Graph({
    container: container.value,
    data: graphData,
    // plugins: [
    //   {
    //     type: 'timebar',
    //     key: 'timebar',
    //     data: timebarData,
    //     width: 1300,
    //     height: 40,
    //     loop: true,
    //     // timebarType: 'chart',
    //   },
    // ],

    plugins: [
      {
        type: 'timebar',
        key: 'timebar',
        data: timebarData,
        width: 1300,
        height: 60,
        loop: true,
        className: 'my-timebar-class',
        padding: [0, 20, 0, 20],
        // timebarType: 'chart',
      },
      {
        type: 'contextmenu',
        trigger: 'contextmenu', // 'click' or 'contextmenu'
        onClick: (value, target, current) => {
          // alert(`You have clicked the「${value}」item,${target},${current}`)
          console.log('------sss:', value, target, current)
        },
        getItems: () => {
          return [
            { name: '展开一度关系', value: 'spread' },
            { name: '查看详情', value: 'detail' },
          ]
        },
        enable: e => e.targetType === 'node',
      },
      {
        type: 'toolbar',
        position: 'left-top',
        className: 'my-toolbar-class',
        // onClick: (item) => {
        //   alert(`item clicked:${item}`)
        // },
        getItems: () => {
          // G6 内置了 9 个 icon，分别是 zoom-in、zoom-out、redo、undo、edit、delete、auto-fit、export、reset
          return [
            { id: 'zoom-in', value: 'zoom-in' },
            { id: 'zoom-out', value: 'zoom-out' },
            { id: 'redo', value: 'redo' },
            { id: 'undo', value: 'undo' },
            { id: 'edit', value: 'edit' },
            { id: 'delete', value: 'delete' },
            { id: 'auto-fit', value: 'auto-fit' },
            { id: 'export', value: 'export' },
            { id: 'reset', value: 'reset' },

            { id: 'request-fullscreen', value: 'request-fullscreen' },
            { id: 'exit-fullscreen', value: 'exit-fullscreen' },
          ]
        },

        onClick: (value) => {
        // redo、undo 需要配合 history 插件使用
          const history = graph.getPluginInstance('history')
          switch (value) {
            case 'zoom-in':
              graph.zoomTo()
              break
            case 'zoom-out':
              graph.zoomTo()
              break
            case 'undo':
              history?.undo()
              break
            case 'redo':
              history?.redo()
              break
            case 'auto-fit':
              graph.fitView()
              break
            default:
              break
          }
        },
      },
    ],
  })

  window._graph = graph = g6Graph.graph
  graph.render()
  // graph.setTheme('light')

  initGraphEvents()
}

function initGraphEvents() {
// 监听节点点击事件
  graph.on(NodeEvent.CLICK, (evt) => {
    const { target } = evt // 获取被点击节点的 ID
    console.log(`节点 ${target.id} 被点击了`)

    // 获取节点数据
    const nodeData = graph.getNodeData(target.id)
    console.log('节点数据:', nodeData)

    // 修改节点状态
    graph.setElementState(target.id, 'selected')

    emit('selectItem', nodeData)
  })
  graph.on(EdgeEvent.CLICK, (evt) => {
    const { target } = evt // 获取被点击节点的 ID
    // 获取节点数据
    const nodeData = graph.getNodeData(target.id)
    console.log('边数据:', nodeData)

    // 修改节点状态
    graph.setElementState(target.id, 'selected')

    emit('selectItem', nodeData)
  })

  // 监听边的鼠标进入事件
  graph.on(EdgeEvent.POINTER_OVER, (evt) => {
    const { target } = evt
    graph.setElementState(target.id, 'highlight')
  })

  // 监听画布拖拽事件
  graph.on(CanvasEvent.DRAG, (evt) => {
    console.log('画布正在被拖拽')
  })
}

watch(() => props.layout, async (newLayout) => {
  if (!graph) {
    return
  }
  console.log('newLayout-----')
  // 基于当前布局配置进行更新
  graph.setLayout((prevLayout) => {
  // 如果之前是力导向布局，调整其参数
    if (prevLayout.type === newLayout) {
      return {
        ...prevLayout,
        preventOverlap: true,
        nodeStrength: -100, // 增加斥力
        alphaDecay: 0.01, // 降低衰减率，让布局有更多迭代时间
      }
    }

    // 否则切换到放射状布局
    return {
      type: newLayout,
      // unitRadius: 100,
      // preventOverlap: true,
    }
  })

  // 执行布局
  await graph.layout()
  console.log('布局计算完成')
})
</script>

<template>
  <div ref="container" class="graph-canvas" />
</template>

  <style lang="scss" scoped>
  .graph-canvas {
  flex: 1;
  min-width: 500px;
  height: calc(100vh - 60px);
  overflow: hidden;

  :deep(.g6-toolbar) {
    background: var(--el-bg-color-page);
  }

  :deep(.g6-timebar) {
    // background: var(--el-bg-color-page);
  }
}

// .graph-canvas
</style>
