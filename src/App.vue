<template>
  <div id="app">
    <Topbar class="darkGrey"></Topbar>
    <router-view class="container wavesImage"/>
    <Bottombar class="darkGrey"></Bottombar>
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

.container{
  min-height: 100%;
  min-width: 100%;
  padding: 20px 150px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
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

.darkGrey {
  background-color: #404243;
}

.whiteFont {
  color:white;
}

.wavesImage {
  background-image: url('./assets/images/waves.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.buttonStyle {
  background-color: rgba(255, 255, 255, 0.6);
  color: #404243;
  border-radius: 5px;
}

</style>
