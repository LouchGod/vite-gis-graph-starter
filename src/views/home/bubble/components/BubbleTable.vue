<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ payload: any[] }>()
const columns = computed(() => {
  if (!props.payload.length)
    return []
  return Object.keys(props.payload[0]).map(key => ({ prop: key, label: key }))
})
</script>

<template>
  <el-bubble type="info">
    <el-table :data="payload" style="width: 100%">
      <el-table-column v-for="col in columns" :key="col.prop" :prop="col.prop" :label="col.label" />
    </el-table>
  </el-bubble>
</template>
