<template>
  <div id="app">
    <Topbar></Topbar>
    <router-view class="container content"/>
    <Bottombar></Bottombar>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import Bottombar from './components/Bottombar.vue'

export default {
  name: 'app',
  components: {
    Topbar,
    Bottombar
  }
}
</script>

<style lang="scss">
.content {
  background-color: #55D6BE;
  flex: 1 0 auto;
}
.container{
  min-height: 100%;
  min-width: 100%;
  padding: 30px;
  display: flex;
  justify-content: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.md-ripple.md-disabled {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  color: white !important;
}

.md-app {
  max-height: 100%;
}

.center {
  justify-content: center;
}

.md-title {
  text-transform: uppercase;
  font-weight: 500 !important;
  letter-spacing: 0.35em !important;
  text-decoration: none !important;
}

.topbar, .bottombar {
  background-color: #404243;
}

.whiteFont {
  color:white;
}

.buttonStyle {
  background-color: rgba(255, 255, 255, 0.6);
  color: #404243;
  border-radius: 5px;
}

.circleButton {
  background-color: rgba(255, 255, 255, 0.6);
  color: #404243;
}

.backgroundStyle {
  background-color: rgba(255, 255, 255, 0.6);
  color: #404243;
  border-radius: 5px;
}

.row {
  display: flex;
  justify-content: center;
}

.navbarSize {
  font-size: 31px;
}

</style>
