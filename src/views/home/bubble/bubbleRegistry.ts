// src/components/bubbles/bubbleRegistry.ts

import BubbleImage from './BubbleImage.vue'
import BubbleTable from './BubbleTable.vue'
import BubbleText from './BubbleText.vue'
import BubbleVideo from './BubbleVideo.vue'
// 你可以继续引入更多自定义类型的 bubble 组件

const bubbleRegistry: Record<string, any> = {
  text: BubbleText,
  image: BubbleImage,
  table: BubbleTable,
  video: BubbleVideo,
  // 继续注册更多类型
}

export function getBubbleComponent(type: string) {
  return bubbleRegistry[type] || BubbleText // 未知类型默认用文本
}

export function registerBubble(type: string, component: any) {
  bubbleRegistry[type] = component
}
