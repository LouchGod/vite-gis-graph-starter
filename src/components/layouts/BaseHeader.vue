<script lang="ts" setup>
import { toggleDark } from '~/composables'
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" router>
    <el-menu-item index="/">
      <div class="flex items-center justify-center">
        <div class="text-xl" i-ep-element-plus />
        <span>XXXXXXX</span>
      </div>
    </el-menu-item>

    <el-sub-menu index="assume">
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
        <span>想定管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/assume/area">
          区域管理
        </el-menu-item>
        <el-menu-item index="/assume/weather">
          天气管理
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="/assume/comp">
          编制管理
        </el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="/assume/plan">
        <template #title>
          <span>方案管理</span>
        </template>
        <el-menu-item index="/assume/plan/action">
          行动管理
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="/map">
      <el-icon>
        <IconMenu />
      </el-icon>
      <template #title>
        态势推演
      </template>
    </el-menu-item>
    <el-menu-item index="orchestration">
      <el-icon>
        <Document />
      </el-icon>
      <template #title>
        服务编排
      </template>
    </el-menu-item>
    <el-menu-item index="/graph">
      <el-icon>
        <Setting />
      </el-icon>
      <template #title>
        图谱分析
      </template>
    </el-menu-item>

    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="w-full cursor-pointer border-none bg-transparent"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss">
.el-menu-demo {
  &.ep-menu--horizontal > .ep-menu-item:nth-last-child(1) {
    margin-left: auto;
  }
}
</style>
