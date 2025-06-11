import { cloneDeep } from "lodash";

// start-shape 节点链接桩群组的配置数据
export const circle = {
  r: 5,
  magnet: true,
  fill: '#79B8E8',
  fillOpacity: '1',
  stroke: '#79B8E8',
  strokeOpacity: '1',
  strokeWidth: 1,
  style: {
    visibility: 'visible',
  },
};

export const startPortsGroups = {
  in: {
    position: {
      name: 'top',
    },
    attrs: {
      circle: { ...circle },
    },
    zIndex: 99,
  },
  out: {
    position: {
      name: 'bottom',
    },
    attrs: {
      circle: { ...circle },
    },
    zIndex: 99,
  },
};

export const portsGroups = {
  in: {
    position: {
      name: 'top',
    },
    attrs: {
      circle: { ...circle },
    },
    zIndex: 99,
  },
  out: {
    position: {
      name: 'bottom',
    },
    attrs: {
      circle: { ...circle },
    },
    zIndex: 99,
  },

  left: {
    position: {
      name: 'left',
      args: { dy: -10 },
    },
    attrs: {
      circle: { ...circle },
    },
    zIndex: 99,
  },

  right: {
    position: {
      name: 'right',
      args: { dy: -10 },
    },
    attrs: {
      circle: { ...circle },
    },
    zIndex: 99,
  },

  inLeftA: {
    position: {
      name: 'left',
      args: { dx: 10, dy: 45 },
    },
    attrs: {
      circle: { ...circle },
    },
  },

  inRightB: {
    position: {
      name: 'right',
      args: { dx: -10, dy: 85 },
    },
    attrs: {
      circle: { ...circle },
    },
  },
};

export const basicPorts = {
  groups: cloneDeep(startPortsGroups),
  items: [
    {
      group: 'in',
    },
    {
      group: 'out',
    },
  ],
};

