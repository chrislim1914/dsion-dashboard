<template>
  <div class="user-ath">
    <h1>LOGIN</h1>
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
      isLoading: false
    }
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
