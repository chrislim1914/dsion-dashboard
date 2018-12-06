<template>
  <div id="user-dashboard">
    <router-view></router-view>
  </div>
</template>

<script>
import CountryCode from '~static/countrycode.json'
export default {
  name: 'Dashboard',
  created () {
    console.log(CountryCode)
  }
}
</script>
