<template>
  <div class="user-dashboard">
    <global-topbar></global-topbar>
    <!-- TopBar End -->

    <div class="user-wraper">
        <div class="container">
            <div class="d-flex">
                <global-sidebar></global-sidebar>

                <div class="user-content">
                    <div class="user-panel">
                        <div class="row mt-5" v-if="!displays.isApproved">
                            <div class="col-12">
                                <h2 class="text-center text-danger font-weight-bold">
                                    You can get the transfer address after KYC.
                                </h2>
                            </div>
                            <div class="col-12 mt-3 mx-auto text-center">
                                <a class="font-weight-bold">
                                    KYC move >>
                                </a>
                            </div>
                        </div>
                        <div class="row mt-5" ref="notice" v-if="displays.isApproved && displays.showNotice">
                            <div class="col-12 d-none">
                                <h3 class="text-left font-weight-bold">
                                    Notice
                                </h3>
                            </div>
                            <div class="col-10 ml-3 text-justify d-none">
                                <p>
                                Their shadows do not disappear in heaven. This will be a remarkable example of the sun, even though it is not like him
                                </p>
                                <p>
                                Like the military that blooms in the mountains, the ideal is a salt that prevents corruption of human beings, and it becomes a material that gives value to life. Because they are long, the place where they are interested is great and they are hot. They
                                have the courage. Therefore, they are capable of treasure, and their ideals are beautiful,
                                </p>
                                <p>
                                It is to enrich our lives by creating a seedy fruit. Look youth! How strong are their bodies, how vivid their.
                                </p>
                            </div>
                            <div class="col-12 text-center d-none">
                                <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="agree" v-model="displays.isChecked">
                                <label class="form-check-label font-weight-bold" for="agree">
                                    I agree with the above
                                </label>
                                </div>
                            </div>
                            <div class="col-6 mt-3 mx-auto">
                                <a @click="receive" class="btn btn-primary text-white">
                                    Receive Transfer Address
                                </a>
                            </div>
                        </div>
                        <div class="get-token" v-if="!displays.showNotice">
                            <div class="row mt-5">
                                <div class="col-12">
                                <h5 class="text-left font-weight-bold">
                                    Get token Address
                                </h5>
                                </div>
                                <div class="col-2">
                                <a class="btn btn-primary text-white font-weight-bold">
                                    ETH
                                </a>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-9">
                                <input type="text" id="token-code" class="form-control form-control-lg" v-model="tokenCode" disabled>
                                </div>
                                <div class="col-3">
                                <a class="btn btn-primary text-white font-weight-bold" v-clipboard:model="tokenCode" v-clipboard:success="onCopy" v-clipboard:error="onErrorCopy">
                                    Copy
                                </a>
                                </div>
                                <div class="col-12 text-center mt-5">
                                <qriously :value="tokenCode" :size="200" />
                                </div>
                            </div>
                        </div>
                    </div><!-- .user-panel -->
                </div>
            </div><!-- .d-flex -->
        </div><!-- .container -->
    </div>
    <!-- UserWraper End -->

    <global-footer></global-footer>
    <!-- FooterBar End -->

    <loading :active.sync="isLoading" :is-full-page="true"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'
import Topbar from './Globals/Topbar'
import Sidebar from './Globals/Sidebar'
import Footer from './Globals/Footer'
import {
  mapActions,
  mapState
} from 'vuex'
export default {
  name: 'KycApplication',
  components: {
    Loading,
    'global-topbar': Topbar,
    'global-sidebar': Sidebar,
    'global-footer': Footer
  },
  data () {
    return {
      tokenCode: '0x96086bEcE95f45C0DA7664C1a6D233dDB3db0548',
      displays: {
        isApproved: true,
        isChecked: false,
        showNotice: true
      },
      isLoading: false
    }
  },
  computed: {
    ...mapState({
      'userResponse': ({users}) => users.responseData
    })
  },
  methods: {
    ...mapActions(['fetchUserInfo']),
    receive () {
        this.displays.showNotice = false
    //   if (this.displays.isChecked) {
        // this.displays.showNotice = false
    //   } else {
    //     this.$awn.warning('Please agree to the notice before proceeding.')
    //   }
    },
    onCopy () {
      this.$awn.info('Code copied.')
    },
    onErrorCopy () {
      this.$awn.alert('Failed to copy the code.')
    }
  },
  created () {
    this.fetchUserInfo({
        token: this.$session.get('token')
    }).then(() => {
        if (this.userResponse.kyc_status === '' || this.userResponse.kyc_status === undefined) {
            this.$router.push({ name: 'DashboardKnowYourCustomer' })
        }
    })
  }
}
</script>
