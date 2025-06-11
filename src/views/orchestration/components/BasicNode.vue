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
      value1: true,
      config: {},

      activeNames: ['服务基本信息', '接口状态'],
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
      this.config = nodeData.config
      // this.activeNames = nodeData.config.category.map((e) => e.text).join();
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
  <div class="basic-node">
    <div class="header flex items-center p-x-3 p-y-1">
      <div :class="[config.iconColor]">
        <div class="font-size-2xl" :class="[config.icon]" />
      </div>
      <div class="ml-2">
        {{ config.title }}
      </div>
      <el-switch v-model="value1" class="ml-auto" />
    </div>

    <div v-for="cate in config.category" :key="cate.text" class="category mb-4">
      <div class="category-head">
        <span>{{ cate.text }}</span>

        <div class="i-carbon-chevron-down font-size-2xl" />
      </div>

      <div class="flex flex-wrap">
        <div v-for="item in cate.items" :key="item.label" class="attr-item" :style="{ width: item.width }">
          <span v-show="item.label" class="ml-2"> {{ item.label }}</span>

          <div
            class="content flex items-center"
            :class="{
              'justify-center': item.isCenter,
            }"
          >
            <span
              class="item-value"
              :class="{
                'flex-1': !item.isCenter,
              }"
            >{{ item.value }}</span>

            <div v-show="item.icon" class="font-size-xl" :class="[item.icon]" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="node-icon">{{ nodeData }}</div> -->
  </div>
</template>

<style>
.basic-node {
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  width: 250px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #fff;
  /* background-color: rgba(28, 28, 30, 0.5); */

  background-color: var(--ep-color-primary-light-9);
}

.category-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
}

.attr-item {
  font-size: 12px;
  padding: 0 12px;
  margin: 6px 0 0 0;

  .content {
    height: 30px;
    /* background: var(--el-color-primary-light-6); */
    background: var(--el-overlay-color);
    padding: 4px 8px;
    margin: 6px 0 0 0;
  }

  .item-value {
    text-wrap: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.node-icon {
  font-size: 14px;
}
</style>
