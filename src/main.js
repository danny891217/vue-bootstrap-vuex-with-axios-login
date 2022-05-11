import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
app.config.globalProperties.isLoginPage = false
