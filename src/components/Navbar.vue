<template>
  <div class="nav">
    <div>
      <div class="phone-viewport">
        <md-bottom-bar md-sync-route>
          <md-bottom-bar-item to="/components/camera" md-label="Scan" md-icon="receipt"></md-bottom-bar-item>
          <md-bottom-bar-item to="/components/profile" md-label="Profile" md-icon="account_circle"></md-bottom-bar-item>
        </md-bottom-bar>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'BarRouter'
  }
</script>

<style scoped>
.phone-viewport {
  width: 375px;
  height: 600px;
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.26);
  background: white;
}
</style>
