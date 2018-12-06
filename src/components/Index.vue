<template>
  <div id="user-dashboard">
    <router-view></router-view>
  </div>
</template>

<script>
import CountryCode from 'static/countrycode.json'
export default {
  name: 'Dashboard',
  created () {
    CountryCode.forEach(function (x){
      console.log(x)
    })
  }
}
</script>
