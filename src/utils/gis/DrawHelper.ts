import * as Cesium from 'cesium'

class DrawHandler {
  private viewer: Cesium.Viewer
  private handler: Cesium.ScreenSpaceEventHandler
  private positions: Cesium.Cartesian3[]
  private activeShape: Cesium.Entity | null
  private tempShape: Cesium.Entity | null
  private isDrawing: boolean

  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer
    this.handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
    this.positions = [] // 存储绘制的点
    this.activeShape = null // 当前绘制的图形（点、线、面）
    this.tempShape = null // 临时图形（用于预览）
    this.isDrawing = false // 是否正在绘制
  }

  // 开始绘制点
  drawPoint(callback: (point: Cesium.Entity) => void) {
    this.reset()
    this.isDrawing = true

    this.handler.setInputAction((click: Cesium.ScreenSpaceEventHandler.PositionedEvent) => {
      const position = this.viewer.scene.pickPosition(click.position)
      if (position && Cesium.defined(position)) {
        const point = this.viewer.entities.add({
          position,
          point: {
            pixelSize: 10,
            color: Cesium.Color.RED,
          },
        })
        callback(point) // 返回绘制的点
        this.reset()
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }

  // 开始绘制线
  drawLine(callback: (line: Cesium.Entity | null) => void) {
    this.reset()
    this.isDrawing = true

    // 鼠标移动时更新预览线
    this.handler.setInputAction((movement: Cesium.ScreenSpaceEventHandler.MotionEvent) => {
      if (this.isDrawing && this.positions.length > 0) {
        const position = this.viewer.scene.pickPosition(movement.endPosition)
        if (position && Cesium.defined(position)) {
          if (!this.tempShape) {
            this.tempShape = this.viewer.entities.add({
              polyline: {
                positions: new Cesium.CallbackProperty(() => [...this.positions, position], false),
                width: 2,
                material: Cesium.Color.BLUE.withAlpha(0.7),
              },
            })
          }
          else {
            this.tempShape.polyline!.positions = new Cesium.CallbackProperty(() => [...this.positions, position], false)
          }
        }
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)

    // 鼠标点击时添加点
    this.handler.setInputAction((click: Cesium.ScreenSpaceEventHandler.PositionedEvent) => {
      const position = this.viewer.scene.pickPosition(click.position)
      if (position && Cesium.defined(position)) {
        this.positions.push(position)

        if (this.positions.length === 1) {
          this.activeShape = this.viewer.entities.add({
            polyline: {
              positions: new Cesium.CallbackProperty(() => this.positions, false),
              width: 2,
              material: Cesium.Color.BLUE,
            },
          })
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

    // 双击结束绘制
    this.handler.setInputAction((click: Cesium.ScreenSpaceEventHandler.PositionedEvent) => {
      if (this.positions.length > 1) {
        this.isDrawing = false
        if (this.tempShape) {
          this.viewer.entities.remove(this.tempShape) // 移除预览线
          this.tempShape = null
        }
        callback(this.activeShape) // 返回绘制的线
        this.resetState() // 仅重置状态，不清除图形
      }
    }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
  }

  // 开始绘制多边形面
  drawPolygon(callback: (polygon: Cesium.Entity | null) => void) {
    this.reset()
    this.isDrawing = true

    // 鼠标移动时更新预览
    this.handler.setInputAction((movement: Cesium.ScreenSpaceEventHandler.MotionEvent) => {
      if (this.isDrawing && this.positions.length > 0) {
        const position = this.viewer.scene.pickPosition(movement.endPosition)
        if (position && Cesium.defined(position)) {
          if (this.positions.length === 1) {
            // 只有两个点时，预览线
            if (!this.tempShape) {
              this.tempShape = this.viewer.entities.add({
                polyline: {
                  positions: new Cesium.CallbackProperty(() => [...this.positions, position], false),
                  width: 1,
                  material: Cesium.Color.GREEN.withAlpha(0.5),
                },
              })
            }
            else {
              this.tempShape.polyline!.positions = new Cesium.CallbackProperty(() => [...this.positions, position], false)
            }
          }
          else if (this.positions.length >= 2) {
            // 超过两个点时，预览面
            if (this.tempShape && this.tempShape.polyline) {
              this.viewer.entities.remove(this.tempShape) // 移除预览线
              this.tempShape = null
            }
            if (!this.tempShape) {
              this.tempShape = this.viewer.entities.add({
                polygon: {
                  hierarchy: new Cesium.CallbackProperty(() => new Cesium.PolygonHierarchy([...this.positions, position]), false),
                  material: Cesium.Color.GREEN.withAlpha(0.5),
                },
              })
            }
            else {
              this.tempShape.polygon!.hierarchy = new Cesium.CallbackProperty(() => new Cesium.PolygonHierarchy([...this.positions, position]), false)
            }
          }
        }
      }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)

    // 鼠标点击时添加点
    this.handler.setInputAction((click: Cesium.ScreenSpaceEventHandler.PositionedEvent) => {
      const position = this.viewer.scene.pickPosition(click.position)
      if (position && Cesium.defined(position)) {
        this.positions.push(position)

        // 第二个点：显示线
        if (this.positions.length === 2) {
          this.activeShape = this.viewer.entities.add({
            polyline: {
              positions: new Cesium.CallbackProperty(() => this.positions, false),
              width: 1,
              material: Cesium.Color.GREEN.withAlpha(0.5),
            },
          })
        }

        // 第三个点及以上：显示面
        if (this.positions.length >= 3) {
          if (this.activeShape && this.activeShape.polyline) {
            this.viewer.entities.remove(this.activeShape) // 移除线
            this.activeShape = null
          }
          if (!this.activeShape) {
            this.activeShape = this.viewer.entities.add({
              polygon: {
                hierarchy: new Cesium.CallbackProperty(() => new Cesium.PolygonHierarchy(this.positions), false),
                material: Cesium.Color.GREEN.withAlpha(0.5),
              },
            })
          }
          else {
            this.activeShape.polygon!.hierarchy = new Cesium.CallbackProperty(() => new Cesium.PolygonHierarchy(this.positions), false)
          }
        }
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

    // 双击结束绘制
    this.handler.setInputAction((click: Cesium.ScreenSpaceEventHandler.PositionedEvent) => {
      if (this.positions.length >= 3) {
        this.isDrawing = false
        if (this.tempShape) {
          this.viewer.entities.remove(this.tempShape) // 移除预览
          this.tempShape = null
        }
        callback(this.activeShape) // 返回绘制的面
        this.resetState() // 仅重置状态，不清除图形
      }
    }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
  }

  // 重置绘制状态（不清除图形）
  resetState() {
    this.positions = []
    this.isDrawing = false
    this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
    this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
    this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
  }

  // 重置绘制状态并清除图形
  reset() {
    this.resetState()
    if (this.activeShape) {
      this.viewer.entities.remove(this.activeShape)
      this.activeShape = null
    }
    if (this.tempShape) {
      this.viewer.entities.remove(this.tempShape)
      this.tempShape = null
    }
  }

  // 销毁
  destroy() {
    this.reset()
    this.handler.destroy()
  }
}

export default DrawHandler
