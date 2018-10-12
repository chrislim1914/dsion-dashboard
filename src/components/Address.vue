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

              <div class="row" ref="notice" v-if="displays.isApproved && displays.showNotice">

                <div class="col-12">
                  <h3 class="text-left font-weight-bold">
                      Notice
                  </h3>
                </div>

                <span class="col-12" v-if="isSaleEnded" v-html="$t('address.noticesaleended')">
                </span>

                <span class="col-12" v-else>
                  <div class="col-10 ml-3 text-justify">
                    <p>
                      {{ $t('address.notice') }}
                    </p>
                  </div>
                  <div class="col-10 ml-3 text-justify">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="agree" v-model="displays.isChecked">
                      <label class="form-check-label font-weight-bold" for="agree">
                        {{ $t('address.agreeCheckbox') }}
                      </label>
                    </div>
                  </div>
                  <div class="col-12 col-lg-6 mt-3 mx-auto">
                    <a @click="receive" class="btn btn-primary text-white" style="width:100%;">
                        {{ $t('address.confirmButton') }}
                    </a>
                  </div>
                </span>

              </div>

              <div class="get-token" v-if="!displays.showNotice">
                <div class="row">
                  <div class="col-12">
                    <h5 class="text-left font-weight-bold">
                        {{ $t('address.walletHeading') }}
                    </h5>
                  </div>
                </div>
                <div class="row mt-2 justify-content-center text-center">
                  <div class="col-12">
                    <input type="text" id="token-code" class="form-control form-control-lg text-center" v-model="tokenCode" disabled>
                  </div>
                  <div class="col-6 mt-4 pl-lg-0">
                    <a class="btn btn-primary text-white font-weight-bold col-6" v-clipboard:model="tokenCode" v-clipboard:success="onCopy" v-clipboard:error="onErrorCopy" style="padding-right:10px;padding-left:10px;">
                        {{ $t('address.walletCopy') }}
                    </a>
                  </div>
                  <div class="col-12 text-center mt-5">
                    <qriously :value="tokenCode" :size="200" />
                  </div>
                </div>
              </div>

            </div>
            <!-- .user-panel -->
          </div>
        </div>
        <!-- .d-flex -->
      </div>
      <!-- .container -->
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
      isLoading: false,
      isSaleEnded: false
    }
  },
  computed: {
    ...mapState({
      'userResponse': ({users}) => users.responseData,
      'sales': ({sales}) => sales.activeSale
    })
  },
  methods: {
    ...mapActions(['fetchUserInfo', 'fetchActiveSale']),
    receive () {
      if (this.displays.isChecked) {
        this.displays.showNotice = false
      } else {
        this.$awn.warning('Please agree to the notice before proceeding.')
      }
    },
    onCopy () {
      this.$awn.info('Code copied.')
    },
    onErrorCopy () {
      this.$awn.alert('Failed to copy the code.')
    }
  },
  created () {
    this.fetchActiveSale().then(() => {
      if (this.sales.enddate === this.moment().format('YYYY-MM-DD')) {
        this.isSaleEnded = true
      }
    })
  }
}
</script>

<style media="screen">
  @media (min-width: 320px) and (max-width: 575px) {
    #token-code {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    #token-code {
      font-size: 18px;
    }
  }
</style>
