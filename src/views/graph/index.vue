<script setup>
import { ref } from 'vue'
import GraphCanvas from './components/GraphViewer.vue'
import PropertyPanel from './components/PropertyPanel.vue'
import ToolsPanel from './components/ToolsPanel.vue'

const currentLayout = ref('force')
const selectedItem = ref(null)

function handleChangeLayout(layout) {
  currentLayout.value = layout
}
function handleSelectItem(item) {
  selectedItem.value = item
}
</script>

<template>
  <div class="graph-analysis">
    <ToolsPanel @change-layout="handleChangeLayout" />
    <GraphCanvas
      :layout="currentLayout"
      @select-item="handleSelectItem"
    />
    <PropertyPanel
      v-if="selectedItem"
      :item="selectedItem"
      @close="selectedItem = null"
    />
  </div>
</template>

<style scoped>
.graph-analysis {
  display: flex;
  height: calc(100vh - 60px);
}
</style>
