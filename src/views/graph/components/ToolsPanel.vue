<script setup>
const emit = defineEmits(['changeLayout'])
const layouts = [
  {
    name: 'force',
    label: '力导向布局',
    icon: 'i-material-symbols-graph-3',
  },
  {
    name: 'antv-dagre',
    label: 'Dagre 布局',
    icon: 'i-material-symbols-graph-2',
  },
  {
    name: 'grid',
    label: '网格布局',
    icon: 'i-material-symbols-graph-7',
  },
  {
    name: 'circular',
    label: '环形布局',
    icon: 'i-material-symbols-graph-6',
  },
  {
    name: 'compact-box',
    label: '树形布局',
    icon: 'i-material-symbols-graph-4',
  },
  {
    name: 'concentric',
    label: '同心圆布局',
    icon: 'i-material-symbols-graph-5',
  },
]
</script>

<template>
  <div class="tools-panell">
    <h3>布局方式</h3>
    <div class="layout-container">
      <div v-for="layout in layouts" :key="layout" class="layout-item" @click="emit('changeLayout', layout.name)">
        <div class="bg-blue-3 font-size-2xl c-blue-3" :class="layout.icon" />
        <div class="ml-2">
          {{ layout.label }}
        </div>
      </div>
    </div>

    <!-- 其他工具栏按钮 -->
  </div>
</template>

<style lang="scss" scoped>
  .tools-panell {
  width: 200px;
  border-right: 1px solid #eee;
  padding: 16px;
}
.layout-item {
  background: var(--ep-border-color-dark);
  display: flex;
  align-items: center;
  padding: 4px 8px;
  margin: 8px 0;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
}
</style>
