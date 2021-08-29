import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './styles/reset.css'
import './styles/index.less'
// vant
import { Swipe, SwipeItem } from 'vant';
createApp(App).use(router).use(store).use(Swipe).use(SwipeItem).mount('#app')
