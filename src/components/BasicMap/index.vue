<script setup name="BasicMap">
import DrawHelper from '@/utils/gis/DrawHelper'

import { MapViewer } from '@/utils/gis/MapViewer'
import * as Cesium from 'cesium'
import { onMounted, onUnmounted, ref } from 'vue'

let viewer = null
let mapViewer = null
const drawHelper = ref(null)
let isDragging = false
let pickedEntity = null
onMounted(async () => {
  await initMapViewer()
  // viewer = new Cesium.Viewer('cesium-container', {
  //   terrainProvider,
  //   baseLayerPicker: false, // 图层选择器
  //   // imageryProvider: false, // 影像图层
  //   // terrainProvider: false, // 地形图层
  //   animation: false, // 动画
  //   fullscreenButton: false, // 全屏按钮
  //   geocoder: false, // 地理编码器
  //   homeButton: false, // 主页按钮
  //   infoBox: false, // 信息框
  //   sceneModePicker: false, // 场景模式选择器
  //   selectionIndicator: false, // 选择指示器
  //   timeline: false, // 时间轴
  //   navigationHelpButton: false, // 导航帮助按钮
  //   creditContainer: document.createElement('div'), // 不显示任何 credit

  // })
})

onUnmounted(() => {
  if (viewer) {
    viewer.destroy()
  }
  if (drawHelper.value) {
    drawHelper.value.destroy()
  }
  viewer = null
  mapViewer = null
  isDragging = false
  pickedEntity = null
})

async function initMapViewer() {
  const terrainProvider = await Cesium.createWorldTerrainAsync()
  mapViewer = new MapViewer('cesium-container', {
    // imageryProvider: false,
    terrainProvider,
    // events: {
    //   onLeftClick,
    //   onRightClick,
    //   onMouseMove,
    // },
  })

  viewer = mapViewer.viewer

  viewer.scene.globe.depthTestAgainstTerrain = false
  initEvent()
  // 初始化绘制工具
  drawHelper.value = new DrawHelper(viewer)

  flyToHome()
}

function leftDownHandler(movement) {
  const pickedObject = viewer.scene.pick(movement.position)
  if (Cesium.defined(pickedObject) && pickedObject.id && pickedObject.id.draggable) {
    isDragging = true
    pickedEntity = pickedObject.id
    viewer.scene.screenSpaceCameraController.enableRotate = false // 禁用旋转
  }
}
function leftUpHandler(movement) {
  if (isDragging) {
    isDragging = false
    viewer.scene.screenSpaceCameraController.enableRotate = true // 重新启用旋转

    // 获取最终位置
    const finalPosition = pickedEntity.position.getValue(viewer.clock.currentTime)
    const cartographic = Cesium.Cartographic.fromCartesian(finalPosition)
    const longitude = Cesium.Math.toDegrees(cartographic.longitude)
    const latitude = Cesium.Math.toDegrees(cartographic.latitude)
    const height = cartographic.height

    console.log(`'最终经纬度高度:', ${longitude.toFixed(10)}, ${latitude.toFixed(10)}, ${height} `)

    pickedEntity = null
  }
}
function mouseMoveHandler(movement) {
  if (isDragging && Cesium.defined(pickedEntity)) {
    const cartesian = viewer.camera.pickEllipsoid(movement.endPosition, viewer.scene.globe.ellipsoid)

    if (cartesian) {
      // pickedEntity.position = cartesian;
      const old = Cesium.Cartographic.fromCartesian(cartesian)
      const ng = Cesium.Cartographic.fromRadians(old.longitude, old.latitude, 50)
      const _cart3 = Cesium.Cartographic.toCartesian(ng)
      pickedEntity.position = _cart3
    }
  }
}
// LEFT_CLICK 事件处理
function handleLeftClick(event) {
  const cartesian = viewer.camera.pickEllipsoid(event.position)
  const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
  const lng = Cesium.Math.toDegrees(cartographic.longitude) // 经度
  const lat = Cesium.Math.toDegrees(cartographic.latitude) // 纬度
  const height = cartographic.height // 高度，椭球面height永远等于0
  const coordinate = {
    longitude: Number(lng.toFixed(14)),
    latitude: Number(lat.toFixed(14)),
    height: Number(height.toFixed(2)),
  }
  console.log(coordinate)
}
function initEvent() {
  const scene = viewer.scene
  const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas)
  handler.setInputAction(handleLeftClick, Cesium.ScreenSpaceEventType.LEFT_CLICK)
  handler.setInputAction(leftDownHandler, Cesium.ScreenSpaceEventType.LEFT_DOWN)
  handler.setInputAction(mouseMoveHandler, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
  handler.setInputAction(leftUpHandler, Cesium.ScreenSpaceEventType.LEFT_UP)
}

function flyToHome() {
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(114.58681125117589, 28.658181286220017, 10451576),
    orientation: {
      heading: Cesium.Math.toRadians(360),
      pitch: Cesium.Math.toRadians(-90),
      roll: Cesium.Math.toRadians(0),
    },
    duration: 1,
  })
}

// 开始绘制点
function startDrawPoint() {
  drawHelper.value.drawPoint((point) => {
    console.log('绘制的点:', point)
  })
}

// 开始绘制线
function startDrawLine() {
  drawHelper.value.drawLine((line) => {
    console.log('绘制的线:', line)
  })
}

// 开始绘制面
function startDrawPolygon() {
  drawHelper.value.drawPolygon((polygon) => {
    console.log('绘制的面:', polygon)
  })
}

// 清除所有绘制
function clearDrawings() {
  viewer.entities.removeAll()
}
</script>

<template>
  <div class="map-container">
    <div id="cesium-container" />
    <div v-if="false" class="controls">
      <button @click="startDrawPoint">
        绘制点
      </button>
      <button @click="startDrawLine">
        绘制线
      </button>
      <button @click="startDrawPolygon">
        绘制面
      </button>
      <button @click="clearDrawings">
        清除绘制
      </button>
    </div>
  </div>
</template>

<style scoped>
#cesium-container {
  width: 100%;
  height: 100%;
}

.controls {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
}

button {
  margin: 5px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
}
</style>
