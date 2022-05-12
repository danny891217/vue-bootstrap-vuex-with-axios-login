import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import {storeConfig} from "./config/store.config";
import {axios_instance} from "./config/axios.config";


const app = createApp(App)

app.use(router)
app.use(VueAxios, axios_instance)
app.use(storeConfig)
app.mount('#app')
