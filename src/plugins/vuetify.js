import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#ff5722',
    secondary: '#ffc107',
    accent: '#ffeb3b',
    error: '#f44336',
    warning: '#ff9800',
    info: '#03a9f4',
    success: '#4caf50'
  }
})
