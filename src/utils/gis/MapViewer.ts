import type {
  Cartesian3,
} from 'cesium'
import {
  Cartographic,
  Math as CesiumMath,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  Viewer,
} from 'cesium'

export class MapViewer {
  private containerId: string
  private viewer: Viewer
  private handler: ScreenSpaceEventHandler

  constructor(containerId: string, options: {
    imageryProvider?: any
    vrButton?: boolean
    homeButton?: boolean
    events?: {
      onLeftClick?: (cartesian: Cartesian3) => void
      onRightClick?: (cartesian: Cartesian3) => void
      onMouseMove?: (cartesian: Cartesian3) => void
    }
  } = {}) {
    this.containerId = containerId
    this.viewer = new Viewer(containerId, {
      // imageryProvider 不是 Viewer 构造参数的标准属性，需后续 setImageryProvider
      baseLayerPicker: false,
      vrButton: options.vrButton || false,
      homeButton: options.homeButton || false,
      shouldAnimate: true,
      animation: false,
      timeline: false,
      navigationHelpButton: false,
      scene3DOnly: true,
      creditContainer: document.createElement('div'),
      fullscreenButton: false,
      geocoder: false,
      infoBox: false,
      contextOptions: {
        webgl: {
          alpha: true,
          depth: true,
          stencil: true,
          antialias: true,
          premultipliedAlpha: true,
          // 通过canvas.toDataURL()实现截图需要将该项设置为true
          preserveDrawingBuffer: true,
          failIfMajorPerformanceCaveat: true,
        },
      },
    })
    if (options.imageryProvider) {
      this.setImageryProvider(options.imageryProvider)
    }
    this.handler = new ScreenSpaceEventHandler(this.viewer.scene.canvas)

    // Initialize scale bar
    this.initScaleBar()

    // Initialize events
    if (options.events) {
      this.initEvents(options.events)
    }

    // Display coordinates on mouse move
    this.initCoordinateDisplay()
  }

  initScaleBar() {
    this.viewer.scene.postRender.addEventListener(() => {
      const scaleBar = document.getElementById('scaleBar')
      if (scaleBar) {
        // scaleBar.innerText = `Scale: ${this.viewer.camera.getMagnitude?.().toFixed(2) ?? ''} meters`
      }
    })
  }

  initEvents(events: {
    onLeftClick?: (cartesian: Cartesian3) => void
    onRightClick?: (cartesian: Cartesian3) => void
    onMouseMove?: (cartesian: Cartesian3) => void
  }) {
    if (events.onLeftClick) {
      this.handler.setInputAction((movement: any) => {
        const cartesian = this.viewer.camera.pickEllipsoid(movement.position)
        if (cartesian) {
          events.onLeftClick!(cartesian)
        }
      }, ScreenSpaceEventType.LEFT_CLICK)
    }
    if (events.onRightClick) {
      this.handler.setInputAction((movement: any) => {
        const cartesian = this.viewer.camera.pickEllipsoid(movement.position)
        if (cartesian) {
          events.onRightClick!(cartesian)
        }
      }, ScreenSpaceEventType.RIGHT_CLICK)
    }
    if (events.onMouseMove) {
      this.handler.setInputAction((movement: any) => {
        const cartesian = this.viewer.camera.pickEllipsoid(movement.endPosition)
        if (cartesian) {
          events.onMouseMove!(cartesian)
        }
      }, ScreenSpaceEventType.MOUSE_MOVE)
    }
  }

  initCoordinateDisplay() {
    const coordinatesDiv = document.createElement('div')
    coordinatesDiv.style.position = 'absolute'
    coordinatesDiv.style.bottom = '5px'
    coordinatesDiv.style.right = '10px'
    coordinatesDiv.style.padding = '5px'
    coordinatesDiv.style.background = 'rgba(42, 42, 42, 0.8)'
    coordinatesDiv.style.color = '#ffffff'
    coordinatesDiv.style.fontSize = '12px'
    coordinatesDiv.id = 'coordinateDisplay'

    const container = document.querySelector(`#${this.containerId}`)
    if (container) {
      container.appendChild(coordinatesDiv)
    }

    this.handler.setInputAction((movement: any) => {
      const cartesian = this.viewer.camera.pickEllipsoid(movement.endPosition)
      if (cartesian) {
        const cartographic = Cartographic.fromCartesian(cartesian)
        const longitude = CesiumMath.toDegrees(cartographic.longitude).toFixed(10)
        const latitude = CesiumMath.toDegrees(cartographic.latitude).toFixed(10)
        coordinatesDiv.textContent = `经度: ${longitude}, 纬度: ${latitude}`
      }
    }, ScreenSpaceEventType.MOUSE_MOVE)
  }

  setImageryProvider(imageryProvider: any) {
    this.viewer.imageryLayers.addImageryProvider(imageryProvider)
  }

  destroy() {
    if (this.handler) {
      this.handler.destroy()
    }
    if (this.viewer) {
      this.viewer.destroy()
    }
    const coordinatesDiv = document.getElementById('coordinateDisplay')
    if (coordinatesDiv && coordinatesDiv.parentNode) {
      coordinatesDiv.parentNode.removeChild(coordinatesDiv)
    }
  }
}

export default MapViewer
