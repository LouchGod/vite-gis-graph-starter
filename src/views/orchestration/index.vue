<script setup>
import { Graph, Shape } from '@antv/x6'
import { getTeleport } from '@antv/x6-vue-shape'
import Toolbar from './components/Toolbar.vue'
import { defaultGraph } from './graph/data'
import './graph/shape'

let graph = null
const graphContainer = ref(null)
const draggingNode = ref(null)

// vue3中需要这个，不然无法使用el等全局组件
const TeleportContainer = getTeleport()
function initGraph() {
  // register({
  //   shape: 'custom-node',
  //   component: CustomNode,
  // });

  graph = new Graph({
    container: graphContainer.value,
    // width: 800,
    grid: true,
    // background: {
    //   color: '#f5f5f5', // 设置画布背景颜色
    // },
    // 配置滚动条
    panning: true, // 允许拖拽画布移动
    mousewheel: {
      enabled: true, // 开启鼠标滚轮缩放
      modifiers: 'ctrl', // 按住Ctrl键进行缩放
      factor: 1.1, // 缩放因子
      maxScale: 5, // 最大缩放比例
      minScale: 0.2, // 最小缩放比例
    },

    connecting: {
      // 全局连接配置
      connector: 'smooth', // "rounded" | "normal" | "loop" | "smooth" | "jumpover"
      router: {
        name: 'normal', // "normal" | "loop" | "oneSide" | "orth" | "metro" | "manhattan" | "er"
        args: {
          padding: 10, // 设置边与节点之间的间距
        },
      },
      createEdge() {
        // 创建边时的默认配置
        return new Shape.Edge({
          attrs: {
            line: {
              stroke: '#31d0c6', // 边颜色 79B8E8  31d0c6
              strokeWidth: 2, // 边宽度
            },
          },
        })
      },
      allowNode: false, // 是否允许边连接到节点（非节点上的连接桩）
      snap: true, // 开启和关闭连线过程中自动吸附
    },
  })

  graph.on('edge:click', ({ edge }) => {
    edge.remove()
  })
}

function handleDragStart(data) {
  draggingNode.value = data
}

function handleDrop(event) {
  if (!draggingNode.value)
    return

  // 获取鼠标在画布中的位置
  const { offsetX, offsetY } = event
  // 创建节点并设置位置
  const node = graph.createNode({
    shape: draggingNode.value.type,
    x: offsetX,
    y: offsetY,
    data: draggingNode.value,
  })

  // 添加节点到画布
  graph.addNode(node)

  // 重置拖拽状态
  draggingNode.value = null
}

function exportGraphData() {
  // 导出图数据为JSON
  const data = graph.toJSON()
  const jsonData = JSON.stringify(data, null, 2) // 将对象转化为JSON字符串，方便查看
  console.log(jsonData)
}

function drawGraphByData(graphData) {
  if (!graph || !graphData)
    return false
  // 从JSON数据中恢复图
  graph.fromJSON(graphData)

  // 如果需要调整视图以适应新添加的元素，可以调用下面的方法
  // graph.zoomToFit({
  //   padding: 20,
  //   maxScale: 1,
  // });
}

onMounted(() => {
  initGraph()

  nextTick(() => {
    drawGraphByData(defaultGraph)
  })
})
</script>

<template>
  <div class="container">
    <Toolbar @drag-start="handleDragStart" />
    <div ref="graphContainer" class="graph-container" @dragover.prevent @drop="handleDrop" />

    <TeleportContainer />

    <div v-if="false" class="operation">
      <el-button type="primary" @click="exportGraphData">
        导出图数据
      </el-button>
      <el-button type="primary" @click="drawGraphByData">
        回显图数据
      </el-button>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  height: calc(100vh - 60px);
}

.graph-container {
  flex: 1;
  height: 100%;
  border: 1px solid #ccc;
}

.operation {
  position: absolute;
  top: 10px;
  right: 50px;
}
</style>
