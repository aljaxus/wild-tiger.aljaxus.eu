<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <v-content>
      <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </v-content>
  </div>
</template>

<style>
@import './assets/vue.css';
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s }
.fade-enter, .fade-leave-active { opacity: 0 }
</style>
