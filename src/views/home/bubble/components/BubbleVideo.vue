<script setup lang="ts">
defineProps<{ payload: string }>()
</script>

<template>
  <el-bubble type="warning">
    <video :src="payload" controls style="max-width: 100%" />
  </el-bubble>
</template>
