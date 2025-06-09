<script setup lang="ts">
import ChatBox from './ChatBox.vue'
import ChatMap from './ChatMap.vue'
// import MapView from '@/components/MapView.vue'
</script>

<template>
  <div class="home-layout">
    <ChatMap class="map-area" />
    <ChatBox class="chat-area px-4 py-4" />
  </div>
</template>

<style scoped>
.home-layout {
  display: flex;
  /* height: 100vh; */
  width: 100%;
  height: calc(100vh - 60px);
  position: relative;
  /* overflow: hidden; */
}
.map-area {
  flex: 1;
  height: 100%;
  border-right: 1px solid #eee;
}
.chat-area {
  /* flex: 1; */
  width: 500px;
  /* height: 100%; */
  /* display: flex;
  flex-direction: column; */
}
</style>
