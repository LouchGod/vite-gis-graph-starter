<script setup lang="ts">
import type { BubbleListItemProps, BubbleListProps } from 'vue-element-plus-x/types/BubbleList'
import { DocumentCopy, Refresh, Search, Star } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'

import { BubbleList, Sender } from 'vue-element-plus-x'
import { useSceneManager } from './scenes/sceneManager'

type listType = BubbleListItemProps & {
  key: number
  role: 'user' | 'ai'
}

// const messages = ref<{ type: string, content: string }[]>([])

const list = ref([] as listType[])
const sceneManager = useSceneManager()

const activeName = 'enter'
const senderValue = ref('')
const senderLoading = ref(false)

async function handleSubmit(value: string) {
  if (!value.trim()) {
    return
  }
  const result = await sceneManager.handle(value)
  console.log('sceneManager.handle:---', result)
  list.value.push({ role: 'user', content: value, placement: 'end', key: list.value.length + 1 })
  list.value.push({ role: 'ai', content: '暂无信息', placement: 'start', key: list.value.length + 1 })
  // if (result) {
  //   list.value.push({ role: 'ai', content: '暂无信息', key: list.value.length + 1 })
  // }
  senderValue.value = ''

  ElMessage.info(`发送中`)
  senderLoading.value = true
  setTimeout(() => {
    // 可以在控制台 查看打印结果
    senderLoading.value = false
    ElMessage.success(`发送成功`)
  }, 2000)
}
</script>

<template>
  <div>
    <BubbleList max-height="calc(100vh - 170px)" class="bubble-list" :list="list">
      <!-- 自定义头像 -->
      <template #avatar="{ item }">
        <div class="avatar-wrapper">
          <div v-if="item.role === 'ai'" class="i-carbon-code bg-blue-3 c-blue-3" />
          <div v-else class="i-carbon-user bg-yellow-6 c-yellow-6" />
        </div>
      </template>

      <!-- 自定义气泡内容 -->
      <template #content="{ item }">
        <div class="content-wrapper">
          <div class="content-text">
            {{ item.content }}
          </div>
        </div>
      </template>
    </BubbleList>
    <Sender v-model="senderValue" :input-style="{ color: '#626aef', fontWeight: 500 }" :submit-type="activeName" :loading="senderLoading" @submit="handleSubmit" />
  </div>
</template>

<style scoped>
.bubble-list {
  /* flex: 1; */
  height: calc(100vh - 100px);
  overflow-y: auto;
  margin-bottom: 10px;
}
</style>
