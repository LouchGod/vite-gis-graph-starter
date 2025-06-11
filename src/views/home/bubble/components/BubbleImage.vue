<script setup lang="ts">
defineProps<{ payload: string }>()
</script>

<template>
  <el-bubble type="success">
    <img :src="payload" style="max-width: 100%;">
  </el-bubble>
</template>
