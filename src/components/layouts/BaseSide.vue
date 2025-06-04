<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

// const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
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
    <el-menu-item index="3">
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
  </el-menu>
</template>
