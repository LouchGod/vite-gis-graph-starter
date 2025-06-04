<script>
export default {
  inject: ['getGraph', 'getNode'],

  // props: {
  //   label: {
  //     type: String,
  //     default: '',
  //   },

  //   data: {
  //     type: Object,
  //     default: () => ({}),
  //   },
  // },

  data() {
    return {
      curNode: null,
      nodeData: {},
    }
  },

  created() {
    this.curNode = this.getNode()
    this.$nextTick(() => {
      this.getNodeData()
      this.registerEvent()
    })
  },
  methods: {
    getNodeData() {
      const nodeData = this.curNode.getData()
      Object.assign(this.nodeData, nodeData)
    },
    registerEvent() {
      this.curNode.on('change:data', (data) => {
        const { current } = data
        this.nodeData = current
      })
    },
  },
}
</script>

<template>
  <div class="custom-node">
    <div class="node-icon">
      {{ nodeData.label }}
    </div>
    <!-- <div class="node-icon">{{ nodeData }}</div> -->
  </div>
</template>

<style>
.custom-node {
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100px; */
  /* height: 50px; */
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}

.node-icon {
  font-size: 14px;
}
</style>
