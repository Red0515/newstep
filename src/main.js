import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './styles/reset.css'
import './styles/index.less'
import './assets/iconfont/iconfont.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
