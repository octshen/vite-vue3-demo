import { createApp } from 'vue'
import { ElButton, ElSelect, ElMessage } from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'

// 如果要使用.scss样式文件，则需要引入base.scss文件
import 'element-plus/packages/theme-chalk/src/base.scss'

const app = createApp(App)
app.component(ElButton.name, ElButton)
app.component(ElSelect.name, ElSelect)

app.use(ElMessage)

app.use(router).use(store).mount('#app')
