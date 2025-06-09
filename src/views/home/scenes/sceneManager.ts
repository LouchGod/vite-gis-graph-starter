// src/scene/sceneManager.ts
import { ref } from 'vue'

/**
 * 单个内容块，type 可扩展，payload 为内容
 */
export interface SceneContentBlock {
  type: string // 如 text, image, table, video, chart, ...
  payload: any // 具体内容
}

/**
 * 场景结果对象，可扩展更多区域
 */
export interface SceneResult {
  blocks: SceneContentBlock[] // 问答区内容
  mapAction?: { type: string, payload: any } // 地图联动
  apiAction?: { url: string, method?: string, params?: any } // 第三方接口
  [key: string]: any // 允许未来扩展更多区域
}

/**
 * 场景处理函数类型
 */
export type SceneHandler = (args: string) => Promise<SceneResult>

/**
 * 场景注册表
 */
const sceneHandlers: Record<string, SceneHandler> = {}

/**
 * 注册场景
 */
export function registerScene(command: string, handler: SceneHandler) {
  sceneHandlers[command] = handler
}

/**
 * 场景管理器
 */
export function useSceneManager() {
  /**
   * 处理输入，返回场景结果
   */
  async function handle(input: string): Promise<SceneResult> {
    const [cmd, ...args] = input.trim().split(' ')
    const handler = sceneHandlers[cmd]
    if (handler) {
      return await handler(args.join(' '))
    }
    return {
      blocks: [{ type: 'text', payload: '未知指令，请输入 /help 查看支持的指令' }],
    }
  }
  return { handle }
}
