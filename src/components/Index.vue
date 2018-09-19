<template>
  <div id="user-dashboard">
    <router-view/>
  </div>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapState({
      'userResponse': ({users}) => users.responseData
    })
  },
  methods: {
    ...mapActions(['fetchUserInfo'])
  },
  created () {
    // condition to check if token is present.
    var tk = ''

    if (this.$route.query.tk) {
      tk = 'eyJ' + this.$route.query.tk.slice(3)
    } else if (this.$session.exists()) {
      tk = this.$session.get('token')
    } else {
      window.location.href = 'https://dsion.io'
    }

    this.fetchUserInfo({
      token: tk
    }).then(() => {
      // condition to check if token is valid by fetching the user info.
      if (this.userResponse !== '' && this.userResponse !== undefined) {
        this.$session.start()
        this.$session.set('token', tk)
        this.$session.set('user', this.userResponse)
        this.isLoading = false
        this.$router.push({ name: 'DashboardMain' })
      } else {
        window.location.href = 'https://dsion.io'
        // window.location.href = 'http://localhost:8081'
      }
    })
  }
}
</script>
