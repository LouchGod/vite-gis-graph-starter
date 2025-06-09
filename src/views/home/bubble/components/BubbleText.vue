<script setup lang="ts">
defineProps<{ payload: string }>()
</script>

<template>
  <el-bubble type="primary">
    {{ payload }}
  </el-bubble>
</template>
