<template>
  <div class="app-sidebar">
    <div class="user-sidebar">
        <div class="user-sidebar-overlay"></div>
        <div class="user-box d-none d-lg-block">
            <div class="user-image">
                <img src="/static/images/user-thumb-lg.png" alt="thumb">
            </div>
            <h6 class="user-name">{{ user.email }}</h6>
            <ul class="btn-grp guttar-10px">
                <h6 class="btn btn-xs bg-warning" v-if="kyc.kycApplication === 'Not Entered'">
                  KYC Not Entered
                </h6>
                <h6 class="btn btn-xs bg-info" v-if="kyc.kycApplication === 'Pending'">
                  KYC Pending
                </h6>
                <h6 class="btn btn-xs bg-danger" v-if="kyc.kycApplication === 'Rejected'">
                  KYC Rejected
                </h6>
                <h6 class="btn btn-xs bg-success" v-if="kyc.kycApplication === 'Approved'">
                  KYC Approved
                </h6>
            </ul>
        </div><!-- .user-box -->
        <ul class="user-icon-nav">
            <li>
              <router-link :to="{ name: 'DashboardMain' }"><em class="ti ti-dashboard"></em>Dashboard</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardAddress' }"><em class="ti ti-direction"></em>KYC/Address</router-link>
            </li>
            <li class="d-none">
              <router-link :to="{ name: 'DashboardKnowYourCustomer' }"><em class="ti ti-files"></em>KYC Application</router-link>
            </li>
            <li class="d-none">
              <router-link :to="{ name: 'DashboardContribution' }"><em class="ti ti-pie-chart"></em>Contributions</router-link>
            </li>
            <li class="d-none">
              <router-link :to="{ name: 'DashboardReferral' }"><em class="ti ti-infinite"></em>Referral</router-link>
            </li>
            <li class="d-none">
              <router-link :to="{ name: 'DashboardPromotion' }"><em class="ti ti-star"></em>Promotion</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardSetting' }"><em class="ti ti-settings"></em>Setting</router-link>
            </li>
        </ul><!-- .user-icon-nav -->
        <div class="user-sidebar-sap"></div><!-- .user-sidebar-sap -->
        <ul class="user-nav">
            <li v-if="locale === 'kr'">
              <a href="https://api.dsion.io/whitepaper/Dsion_whitepaperKorean.pdf" target="_blank">
                Whitepaper
              </a>
            </li>
            <li v-if="locale === 'en'">
              <a href="https://api.dsion.io/whitepaper/Dsion_whitepaperEnglish.pdf" target="_blank">
                Whitepaper
              </a>
            </li>
            <li>Contact Support<a href="mailto:contact@dsion.io" style="font-weight: 300 !important; text-transform: none;color: #6783b8;">contact@dsion.io</a></li>
            <li>
              <a @click="deleteAccount">
                Delete account
              </a>
            </li>
        </ul><!-- .user-nav -->
        <div class="d-lg-none">
            <div class="user-sidebar-sap"></div>
            <div class="gaps-1x"></div>
            <ul class="topbar-action-list">
                <li class="topbar-action-item topbar-action-link">
                    <a href="#"><em class="ti ti-home"></em> Go to main site</a>
                </li><!-- .topbar-action-item -->
                <li class="dropup topbar-action-item topbar-action-language">
                  <locale />
                </li><!-- .topbar-action-item -->
            </ul><!-- .topbar-action-list -->
        </div>
    </div><!-- .user-sidebar -->
  </div>
</template>

<script>
import Locale from './Locale'
import {
  mapState,
  mapActions
} from 'vuex'
export default {
  name: 'UnknownComponent',
  data () {
    return {
      locale: '',
      user: {
        email: ''
      },
      kyc: {
        kycApplication: ''
      }
    }
  },
  components: {
    locale: Locale
  },
  computed: {
    ...mapState({
      'userData': ({users}) => users.user
    })
  },
  methods: {
    ...mapActions(['deleteUser']),
    deleteAccount () {
      if (confirm('Do you really want to  delete account?')) {
        // this.deleteUser({
        //   iduser: 
        // }).then(() => {
        //   console.log('')
        // })
      }
    }
  },
  created () {
    this.user.email = this.userData.email
    this.kyc.kycApplication = this.userData.kyc_application
    this.locale = this.$i18n.locale
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
