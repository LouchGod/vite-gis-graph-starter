<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="main-container flex">
      <!-- <BaseSide v-show="false" /> -->
      <div w="full" class="py-0">
        <RouterView />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 4px);
}
</style>
