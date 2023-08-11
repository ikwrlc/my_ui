import { createApp } from 'vue'
import App from './App.vue'
//HqUI为自定义组件库名称
import HqUI from "../packages"
const app = createApp(App)

app.use(HqUI)

app.mount('#app')
