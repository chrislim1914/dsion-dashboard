<template>
  <div id="user-dashboard">
    <router-view/>
    <loading :active.sync="isLoading" :is-full-page="true"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'
import { jwtHeader } from '@/config.js'
import {
  mapActions,
  mapState
} from 'vuex'
export default {
  name: 'Dashboard',
  components: {
    Loading
  },
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState({
      'userResponse': ({users}) => users.responseData
    })
  },
  methods: {
    ...mapActions(['fetchUserInfo'])
  },
  created () {
    this.isLoading = true
    // condition to check if token is present.
    var tk = ''

    if (this.$route.query.tk) {
      tk = 'eyJ' + this.$route.query.tk.slice(3)
      this.fetchUserInfo({
        token: jwtHeader + tk
      }).then(() => {
        // condition to check if token is valid by fetching the user info.
        if (this.userResponse.iduser) {
          this.isLoading = false
          this.$session.start()
          this.$session.set('token', jwtHeader + tk)
          this.$session.set('kyc_status', this.userResponse.kyc_status)
          this.$session.set('user', this.userResponse)
          this.$router.push({ name: 'DashboardMain' })
        } else {
          window.location.href = 'https://dsion.io'
          // window.location.href = 'http://localhost:8081'
        }
      })
    } else if (!this.$session.exists() || !this.$cookie.get('__dsnuid')) {
      window.location.href = 'https://dsion.io'
    } else {
      this.isLoading = false
    }
  }
}
</script>
