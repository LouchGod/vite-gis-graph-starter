import type { GraphOptions } from '@antv/g6'
import { Graph } from '@antv/g6'
import { merge } from 'lodash'

export class G6Graph {
  private graph: any
  constructor(options: GraphOptions) {
    this.init(options)
  }

  init(options: GraphOptions) {
    const defaultOptions = {
      autoFit: 'center',
      node: {
        style: { size: 30 },
        state: {
          highlight: {
            fill: '#D580FF',
            halo: true,
            lineWidth: 0,
          },
          dim: {
            fill: '#99ADD1',
          },
        },
      },
      edge: {
        state: {
          highlight: {
            stroke: '#D580FF',
          },
        },
      },
      behaviors: [
        {
          type: 'hover-activate',
          enable: e => e.targetType === 'node',
          degree: 1, // 👈🏻 Activate relations.
          state: 'highlight',
          inactiveState: 'dim',
          onHover: (event) => {
            event.view.setCursor('pointer')
          },
          onHoverEnd: (event) => {
            event.view.setCursor('default')
          },
        },
        'drag-canvas',
        'zoom-canvas',
        'click-select',
      ],
      layout: {
        type: 'force',
        preventOverlap: true,
        nodeSize: 24,
      },
      animation: false,
      theme: 'dark',
    }

    this.graph = new Graph(merge(defaultOptions, options))
  }
}
