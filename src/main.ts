import type { UserModule } from './types'
import * as Cesium from 'cesium'

import ElementPlus from 'element-plus'

import { ViteSSG } from 'vite-ssg'
// if you do not need ssg:
import { createApp } from 'vue'

// or use cdn, uncomment cdn link in `index.html`

// import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import router from './route'

import 'normalize.css'
import 'cesium/Build/Cesium/Widgets/widgets.css'
// import '~/styles/element/index.scss'

// import all element css, uncommented next line
import 'element-plus/dist/index.css'
import '~/styles/index.scss'
import 'uno.css'
// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'

import 'element-plus/theme-chalk/src/message-box.scss'

// 替换为你的实际 Token（从 Cesium Ion 获取）
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhZmM0MmI1MS1iMTgzLTQ4ODQtODhmYS1kYmEyOTIxNzI0MTUiLCJpZCI6MjMyODU5LCJpYXQiOjE3MjI5MDk2MDl9.C7bbzUFHfAWJaSxBKrzAn-PWPCpmHdPAVnPiOfwl5A8'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

// https://github.com/antfu/vite-ssg
// export const createApp = ViteSSG(
//   App,
//   {
//     routes,
//     base: import.meta.env.BASE_URL,
//   },
//   (ctx) => {
//     // install all modules under `modules/`
//     Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
//       .forEach(i => i.install?.(ctx))
//     // ctx.app.use(Previewer)
//   },
// )
