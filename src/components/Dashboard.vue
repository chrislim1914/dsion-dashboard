<template>
<div class="user-dashboard" v-if="isDataLoaded">

  <global-topbar></global-topbar>
  <!-- TopBar End -->

  <div class="user-wraper">
    <div class="container">
      <div class="d-flex">
        <global-sidebar></global-sidebar>

        <div class="user-content">
          <div class="user-panel">
            <div class="row">
              <div class="col-md-6">
                <div class="tile-item tile-primary">
                  <div class="tile-bubbles"></div>
                  <h6 class="tile-title">ICO TOKEN BALANCE</h6>
                  <h1 class="tile-info">{{ tokenBalance }} DSN</h1>
                  <!-- <ul class="tile-list-inline">
                                        <li>1.240 BTC</li>
                                        <li>19.043 ETH</li>
                                        <li>6,500.13 USD</li>
                                    </ul> -->
                </div>
              </div><!-- .col -->
              <div class="col-md-6">
                <div class="tile-item tile-light">
                  <div class="tile-bubbles"></div>
                  <h6 class="tile-title">TOKEN RATE VALUE</h6>
                  <ul class="tile-info-list">
                      <li><span>10</span>ETH</li>
                      <li><span>=></span>&nbsp;</li>
                      <li><span>30,000</span>DSN</li>
                  </ul>
                </div>
              </div><!-- .col -->
            </div><!-- .row -->
            <div class="token-card" v-if="active">
              <div class="token-info">
                <span class="token-smartag">{{ active.name }}</span>
                <h2 class="token-bonus">{{ active.bonusRate }}% <span>Current Bonus</span></h2>
                <ul class="token-timeline">
                  <li><span>START DATE</span>{{ active.startDate}}</li>
                  <li><span>END DATE</span>{{ active.endDate}}</li>
                </ul>
              </div>
              <div class="token-countdown" v-if="active.endDate">
                <span class="token-countdown-title">THE BONUS END IN</span>
                <Countdown :deadline="active.endDate | readerDate"></Countdown>
              </div>
            </div><!-- .token-card -->
            <div class="progress-card">
              <h4>Token Sale Progress</h4>
              <div class="progress-bar">
                <div class="progress-hcap" style="width:90%">
                  <div>Hard cap <span>{{ salesData.Hard_Cap | digitCommafy }} DSN</span></div>
                </div>
                <div class="progress-scap" style="width:30%">
                  <div>Soft cap <span>45,000,000 DSN</span></div>
                </div>
                <div class="progress-psale" style="width:12%">
                  <div>{{ active.name }}<span>40,000,000 DSN</span></div>
                </div>
                <div class="progress-percent" style="width:12%"></div>
              </div>
            </div>
            <div class="gaps-3x"></div>
            <div class="table-responsive" v-if="salesTableData">
              <table class="table">
                <thead>
                  <tr>
                    <th :key="index" v-for="(sale, index) in salesTableData">
                      {{ sale.name }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td :key="index" v-for="(sale, index) in salesTableData">
                      <span>Start Date</span>
                      {{ sale.startdate }}
                    </td>
                  </tr>
                  <tr>
                    <td :key="index" v-for="(sale, index) in salesTableData">
                      <span>End Date</span>
                      {{ sale.enddate }}
                    </td>
                  </tr>
                  <tr>
                    <td :key="index" v-for="(sale, index) in salesTableData">
                      <span>Bonus</span>
                      {{ sale.bonus_rate }}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div><!-- .user-panel -->
        </div><!-- .user-content -->
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
import Countdown from 'vuejs-countdown'
import Topbar from './Globals/Topbar'
import Sidebar from './Globals/Sidebar'
import Footer from './Globals/Footer'
import {
  mapActions,
  mapGetters,
  mapState
} from 'vuex'
export default {
  name: 'UnknownComponent',
  components: {
    Loading,
    Countdown,
    'global-topbar': Topbar,
    'global-sidebar': Sidebar,
    'global-footer': Footer
  },
  data () {
    return {
      tokenBalance: '0',
      contribution: '0',
      salesTableData: [],
      active: {
        name: '',
        bonusRate: '',
        capLimit: '',
        startDate: '',
        endDate: ''
      },
      isLoading: false,
      isDataLoaded: false
    }
  },
  computed: {
    ...mapState({
      'sales': ({sales}) => sales.sales,
      'salesData': ({sales}) => sales.responseData
    }),
    ...mapGetters([
      'activeSale'
    ])
  },
  methods: {
    ...mapActions([
      'fetchAllSaleStatus',
      'fetchTotalSales'
    ])
  },
  created () {
    this.isLoading = true
    this.fetchAllSaleStatus().then(() => {
      this.salesTableData = this.sales
      this.active.name = this.activeSale[0].name
      this.active.bonusRate = this.activeSale[0].bonus_rate
      this.active.capLimit = this.activeSale[0].cap_limit
      this.active.startDate = this.activeSale[0].startdate
      this.active.endDate = this.activeSale[0].enddate
      this.fetchTotalSales().then(() => {
        if (this.salesData) {
          this.isDataLoaded = true
          this.isLoading = false
        } else {
          this.$awn.warning('Problem loading sales data.')
        }
      })
    })
  }
}
</script>

<style lang="scss">
.vuejs-countdown {
    & li:nth-child(4) {
        display: none;
    }
    & li:nth-child(3) {
        &::after {
            display: none;
        }
    }
}
</style>
