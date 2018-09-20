<template>
  <div class="user-ath d-none">
    <loading :active.sync="isLoading" :is-full-page="true"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'
export default {
  name: 'Login',
  components: {
    Loading
  },
  data () {
    return {
      isLoading: true
    }
  },
  created () {
    this.$router.push({ name: 'DashboardMain' })
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .debugger {
    border: 2px solid red;
  }
</style>
