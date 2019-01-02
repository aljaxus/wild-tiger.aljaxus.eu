<template>
  <v-app>
    <Navigation />

    <v-content>
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </v-content>

    <Footer />
    <SnackbarSwUpdated />
  </v-app>
</template>

<script>
import store from './store'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SnackbarSwUpdated from './components/SnackbarSwUpdated'

export default {
  name: 'App',
  components: {
    SnackbarSwUpdated, Navigation, Footer
  },
  data () {
    return {
      store
    }
  }
}
</script>
<style>
@import './assets/master.css';
@import './assets/vue.css';
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s }
.fade-enter, .fade-leave-active { opacity: 0 }
</style>
