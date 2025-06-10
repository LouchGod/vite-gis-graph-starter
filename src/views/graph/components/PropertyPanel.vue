<script setup>
defineProps({ item: Object })
</script>

<template>
  <div class="property-panel">
    <button class="close-btn" @click="$emit('close')">
      关闭
    </button>
    <h3>属性面板</h3>
    <pre>{{ item }}</pre>
    <!-- 可根据item类型展示不同内容 -->
  </div>
</template>

  <style  lang="scss" scoped>
  .property-panel {
  width: 300px;
  border-left: 1px solid #eee;
  padding: 16px;
  background: var(--ep-bg-color-overlay);
  position: relative;
}
.close-btn {
  position: absolute;
  right: 8px;
  top: 8px;
}
</style>
