<template>
  <topHead />
  <MainPage />
  <footer-page />
</template>

<script>
import topHead from './components/topHead.vue'
import MainPage from './components/MainPage.vue'
import footerPage from './components/footerPage.vue'

export default {
  name: 'App',
  components: {
    topHead,
    MainPage,
    footerPage
  }
}
</script>

<style>
@import "../public/css/main.min.css";
</style>
