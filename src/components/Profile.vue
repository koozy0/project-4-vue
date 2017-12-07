<template>
  <div>
    <md-card-header>
      <div class="md-title">Ashley Mykhaela </div>
    </md-card-header>
    <md-field>
      <label>Email</label>
      <md-input v-model="initial"></md-input>
    </md-field>

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
