<template>
  <div class="bottombar">
    <div class="phone-viewport">
      <md-bottom-bar md-sync-route class="md-elevation-0">
        <md-bottom-bar-item to="/camera" md-label="Scan" md-icon="receipt" class="bottomNavButton"></md-bottom-bar-item>
        <md-bottom-bar-item to="/profile" md-label="Profile" md-icon="account_circle" class="bottomNavButton"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bottombar'
  }
</script>

<style scoped>

</style>
