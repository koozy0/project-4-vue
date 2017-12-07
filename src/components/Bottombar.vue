<template>
  <div class="bottombar">
    <div class="phone-viewport">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item to="/camera" md-label="Scan" md-icon="receipt"></md-bottom-bar-item>
        <md-bottom-bar-item to="/profile" md-label="Profile" md-icon="account_circle"></md-bottom-bar-item>
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
