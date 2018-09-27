<template>
  <div class="app-dashboard-topbar">
    <div class="topbar">
        <div class="topbar-md d-lg-none">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between">
                    <a class="toggle-nav">
                        <div class="toggle-icon">
                            <span class="toggle-line"></span>
                            <span class="toggle-line"></span>
                            <span class="toggle-line"></span>
                            <span class="toggle-line"></span>
                        </div>
                    </a><!-- .toggle-nav -->

                    <div class="site-logo">
                      <a href="https://dsion.io">
                        <img src="~images/logo_dsion.png" alt="Dsion logo">
                      </a>
                    </div><!-- .site-logo -->

                    <div class="dropdown topbar-action-item topbar-action-user">
                        <a href="#" data-toggle="dropdown"> <img class="icon" src="/static/images/user-thumb-sm.png" alt="thumb"> </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="user-dropdown">
                                <div class="user-dropdown-head">
                                    <span class="user-dropdown-email">{{ user.email }}</span>
                                </div>
                                <div class="user-dropdown-balance">
                                    <h6>ICO TOKEN BALANCE</h6>
                                    <h3>{{ user.tokenBalance }} DSN</h3>
                                </div>
                                <!--ul class="user-dropdown-btns btn-grp guttar-10px">
                                    <li><a href="#" class="btn btn-xs btn-warning">Confirm Email</a></li>
                                    <li><a href="kyc.html" class="btn btn-xs btn-warning">KYC Pending</a></li>
                                </ul-->
                                <div class="gaps-1x"></div>
                                <!--ul class="user-dropdown-links">
                                    <li><a href="account.html"><i class="ti ti-id-badge"></i>Setting</a></li>
                                </ul-->
                                <ul class="user-dropdown-links">
                                    <li><a @click="signOutUser" style="color: #6783b8;"><i class="ti ti-power-off"></i>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- .toggle-action -->
                </div><!-- .container -->
            </div><!-- .container -->
        </div><!-- .topbar-md -->
        <div class="container">
            <div class="d-lg-flex align-items-center justify-content-between">
                <div class="topbar-lg d-none d-lg-block">
                    <div class="site-logo">
                        <a href="https://dsion.io">
                            <img src="~images/logo_dsion.png" alt="Dsion logo">
                        </a>
                    </div><!-- .site-logo -->
                </div><!-- .topbar-lg -->

                <div class="topbar-action d-none d-lg-block">
                    <ul class="topbar-action-list">
                        <!--li class="topbar-action-item topbar-action-link">
                            <a href="https://dsion.io"><em class="ti ti-home"></em> Go to main site</a>
                        </li--><!-- .topbar-action-item -->

                        <!-- <li class="dropdown topbar-action-item topbar-action-language">
                            <a href="#" data-toggle="dropdown"> EN <em class="ti ti-angle-down"></em> </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">FR</a></li>
                                <li><a href="#">JY</a></li>
                                <li><a href="#">CH</a></li>
                            </ul>
                        </li> -->
                        <!-- .topbar-action-item -->

                        <li class="dropdown topbar-action-item topbar-action-user">
                            <a href="#" data-toggle="dropdown"> <img class="icon" src="/static/images/user-thumb-sm.png" alt="thumb"> </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <div class="user-dropdown">
                                    <div class="user-dropdown-head">
                                        <span class="user-dropdown-email">{{ user.email }}</span>
                                    </div>
                                    <div class="user-dropdown-balance">
                                        <h6>ICO TOKEN BALANCE</h6>
                                        <h3>{{ user.tokenBalance }} DSN</h3>
                                    </div>
                                    <ul class="user-dropdown-links">
                                        <li><a href="https://dsion.io" style="color: #6783b8;"><i class="fa fa-home mr-2"></i>Go to homepage</a></li>
                                        <li><a @click="signOutUser" style="color: #6783b8;"><i class="ti ti-power-off"></i>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li><!-- .topbar-action-item -->
                    </ul><!-- .topbar-action-list -->
                </div><!-- .topbar-action -->
            </div><!-- .d-flex -->
        </div><!-- .container -->
    </div>
        <loading :active.sync="isLoading" :is-full-page="false"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'
import { shifters, cookieNameCutter } from '@/libs'
import {
  mapState,
  mapActions
} from 'vuex'
export default {
  name: 'Topbar',
  components: {
    Loading
  },
  data () {
    return {
      user: {
        email: '',
        tokenBalance: 0
      },
      isLoading: false
    }
  },
  computed: {
    ...mapState({
      'token': ({tokens}) => tokens.token,
      'userData': ({users}) => users.user,
      'userResponse': ({users}) => users.responseData
    })
  },
  methods: {
    ...mapActions(['logoutUser']),
    signOutUser () {
      this.isLoading = true
      this.logoutUser({ token: this.token }).then(() => {
        if (this.userResponse.result) {
          this.isLoading = false

          // Metamorphosis controller
          var metaController = -cookieNameCutter('b')
          // Creating the monster
          var cookieMonster = shifters(cookieNameCutter('tka'), metaController) + '.' +
                              shifters(cookieNameCutter('tkp'), metaController) + '.' +
                              shifters(cookieNameCutter('tks'), metaController)
          var shifted = cookieMonster.split('.')

          document.cookie = 'tka=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.dsion.io'
          document.cookie = 'tkp=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.dsion.io'
          document.cookie = 'tks=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.dsion.io'
          document.cookie = 'b=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.dsion.io'

          // Development variables
          // window.location.href = 'http://localhost:8081'

          // Production variables
          window.location.href = 'https://dsion.io'
        } else {
          this.isLoading = false
          this.$awn.alert('Failed to logout.')
        }
      })
    }
  },
  created () {
    // Assigning to local reactive data
    this.user.email = this.userData.email
  }
}
</script>
