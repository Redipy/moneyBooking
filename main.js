import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.url = 'localhost:3333'

const app = new Vue({
    ...App
})
app.$mount()
