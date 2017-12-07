<template>
  <div class="container" id="app">
    <Topbar></Topbar>
    <router-view class="black"/>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.md-ripple.md-disabled {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.26);
  background: white;
}

.md-app {
  max-height: 100%;
  border: 1px solid blue;
}

.center {
  justify-content: center;
}

.crimson {
  font-family: 'Crimson Text', serif;
  font-weight: 700;
  font-size: 20px;
}

.black {
  background-color: grey;
}

</style>
