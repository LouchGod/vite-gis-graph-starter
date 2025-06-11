<script setup>
import { toolsData } from '../graph/tools'

defineOptions({ name: 'GraphToolbar' })
const emit = defineEmits(['dragStart'])

const tools = ref(toolsData)

function handleDragStart(event, node) {
  const { type } = node
  event.dataTransfer.setData('text/plain', type)
  emit('dragStart', node)
}
</script>

<template>
  <div class="toolbar">
    <div v-for="tool in tools" :key="tool.type">
      <div class="mb-2 ml-2 mt-5 font-600">
        {{ tool.label }}
      </div>

      <div
        v-for="node in tool.nodes"
        :key="node.id"
        class="toolbar-item"
        draggable="true"
        @dragstart="handleDragStart($event, node)"
      >
        <span class="font-size-14px">
          {{ node.label }}
        </span>

        <div class="i-carbon-draggable font-size-3xl" />
      </div>
    </div>

    <div v-show="false" class="carbon-icon">
      <div class="i-carbon-earth-filled" />
      <div class="i-carbon-chevron-down" />
      <div class="i-carbon-share" />
      <div class="i-carbon-edit" />
      <div class="i-carbon-add" />
      <div class="i-carbon-rule bg-blue-4 c-blue-4" />
      <div class="i-carbon-share-knowledge bg-blue-3 c-blue-3" />
      <div class="i-carbon-code bg-yellow-6 c-yellow-6" />
      <div class="i-carbon-document-export bg-green-6 c-green-6" />
      <div class="sss" />
    </div>
  </div>
</template>

<style>
.toolbar {
  width: 200px;
  border-right: 1px solid #ccc;
  padding: 10px;
}

.toolbar-item {
  padding: 2px 0 2px 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  cursor: grab;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  /* background: var(--el-color-primary); */
  background: var(--ep-color-primary-light-9);
  /* background-color: var(--ep-color-primary-light-9); */
  border-radius: 5px;
}
</style>
