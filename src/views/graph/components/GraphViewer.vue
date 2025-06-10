<script setup>
import { CanvasEvent, EdgeEvent, Graph, GraphEvent, NodeEvent } from '@antv/g6'
import { onMounted, ref, watch } from 'vue'

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
  const data = {
    nodes: [
      { id: 'node-1', style: { x: 50, y: 50 } },
      { id: 'node-2', style: { x: 150, y: 50 } },
    ],
    edges: [{ source: 'node-1', target: 'node-2' }],
  }
  graph = new Graph({
    container: container.value,
    data,
    width: container.value.clientWidth,
    height: container.value.clientHeight,
    layout: { type: props.layout || 'force' },
    behaviors: ['drag-canvas', 'zoom-canvas', 'click-select'],
    // ...其他配置
  })

  graph.render()

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

  <style scoped>
  .graph-canvas {
  flex: 1;
  min-width: 0;
  height: calc(100vh - 60px);
}
</style>
