<template>
  <div>
    <md-card class="backgroundStyle">
      <md-card-header>
        <div class="md-title">Ashley Mykhaela </div>
      </md-card-header>

      <md-card-content class="thinFont">
        <div class="row">
          <p>Email: ash@gmail.com</p>
          <md-button class="md-icon-button circleButton">
            <md-icon>edit</md-icon>
          </md-button>
        </div>

        <div class="row">
          <p>Password: ******</p>
          <md-button class="md-icon-button circleButton">
            <md-icon>edit</md-icon>
          </md-button>
        </div>

        <md-button to="/" class="buttonStyle">Log Out</md-button>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'TextFields',
    data: () => ({
      initial: 'Initial Value',
    })
  }
</script>

<style scoped>
  .thinFont {
    font-weight: 400 !important;
    font-size: 20px;
  }
</style>
