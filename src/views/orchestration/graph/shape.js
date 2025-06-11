import { Graph, Node, Path } from '@antv/x6'
import { register } from '@antv/x6-vue-shape'
import { cloneDeep } from 'lodash'
import AlgoNode from '../components/AlgoNode.vue'
import BasicNode from '../components/BasicNode.vue'
import CustomNode from '../components/CustomNode.vue'
import RuleNode from '../components/RuleNode.vue'
import { basicPorts, portsGroups } from './config'

const graphTheme = {
  strokeColor: '#2f8b8b',
  fillColor: '',
  edgeStroke: '#2f8b8b',
  edgeSelected: '#2cfeff',
}

register({
  shape: 'custom-node',
  component: CustomNode,

  zIndex: 99,
  ports: cloneDeep(basicPorts),
})

register({
  shape: 'basic-node',
  component: BasicNode,
  width: 250,
  height: 400,
  zIndex: 99,
  ports: cloneDeep(basicPorts),
})

register({
  shape: 'basic-node-rule',
  component: BasicNode,
  width: 250,
  height: 400,
  zIndex: 99,
  ports: {
    groups: cloneDeep(portsGroups),
    items: [
      {
        group: 'in',
      },
      {
        group: 'out',
      },

      {
        group: 'inLeftA',
      },
      {
        group: 'inRightB',
      },
    ],
  },
})

register({
  shape: 'rule-node',
  component: RuleNode,
  width: 250,
  height: 300,
  zIndex: 99,
  ports: cloneDeep(basicPorts),
})

register({
  shape: 'rule-node-1',
  component: RuleNode,
  width: 250,
  height: 300,
  zIndex: 99,
  ports: {
    groups: cloneDeep(portsGroups),
    items: [
      {
        group: 'in',
      },
      {
        group: 'out',
      },

      {
        group: 'left',
      },
      {
        group: 'right',
      },
    ],
  },
})

register({
  shape: 'algo-node',
  component: AlgoNode,
  width: 250,
  height: 300,
  zIndex: 99,
  ports: cloneDeep(basicPorts),
})

export class NodeGroup extends Node {
  // private collapsed: boolean = true

  // protected
  postprocess() {
    this.collapsed = true
    // this.toggleCollapse(true);    // 可以展开/收缩子节点的method
  }

  isCollapsed() {
    return this.collapsed
  }

  toggleCollapse(collapsed) {
    const target = collapsed == null ? !this.collapsed : collapsed
    if (target) {
      this.attr('buttonSign', { d: 'M 1 5 9 5 M 5 1 5 9' })
      this.resize(180, 50)
    }
    else {
      this.attr('buttonSign', { d: 'M 2 5 8 5' })
      this.resize(200, 200)
    }
    this.collapsed = target
  }
}

NodeGroup.config({
  shape: 'rect',
  data: {},
  markup: [
    {
      tagName: 'rect',
      selector: 'body',
    },
    {
      tagName: 'image',
      selector: 'image',
    },
    {
      tagName: 'text',
      selector: 'text',
    },
  ],
  attrs: {
    body: {
      refWidth: '100%',
      refHeight: '100%',
      strokeWidth: 1,
      fill: 'rgba(95,149,255,0.05)',
      stroke: '#5F95FF',
    },
    image: {
      'xlink:href': 'https://gw.alipayobjects.com/mdn/rms_0b51a4/afts/img/A*X4e0TrDsEiIAAAAAAAAAAAAAARQnAQ',
      'width': 16,
      'height': 16,
      'x': 8,
      'y': 12,
    },
    text: {
      fontSize: 12,
      fill: 'rgba(0,0,0,0.85)',
      refX: 30,
      refY: 15,
    },
  },
})

// 自定义边
Graph.registerEdge(
  'org-edge',
  {
    zIndex: -1,
    attrs: {
      line: {
        sourceMarker: null,
        targetMarker: null,
        strokeWidth: 1,
        stroke: graphTheme.edgeStroke,
      },
    },
  },
  true,
)
// 注册边Connector，
Graph.registerConnector(
  'curve',
  (sourcePoint, targetPoint) => {
    const path = new Path()
    path.appendSegment(Path.createSegment('M', sourcePoint))
    path.appendSegment(
      Path.createSegment(
        'C',
        sourcePoint.x + 100,
        sourcePoint.y,
        targetPoint.x - 100,
        targetPoint.y,
        targetPoint.x,
        targetPoint.y,
      ),
    )
    return path.serialize()
  },
  true,
)
Graph.registerNode('flowGroupNode', NodeGroup)
