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
                                    <h6 class="tile-title">YOUR CONTRIBUTION</h6>
                                    <ul class="tile-info-list">
                                        <li><span>{{ contribution }} DSN</span></li>
                                    </ul>
                                </div>
                            </div><!-- .col -->
                        </div><!-- .row -->
                        <div class="token-card">
                            <div class="token-info">
                                <span class="token-smartag">{{ activeSale[0].name }}</span>
                                <h2 class="token-bonus">{{ activeSale[0].bonus_rate }}% <span>Current Bonus</span></h2>
                                <ul class="token-timeline">
                                    <li><span>START DATE</span>{{ activeSale[0].startdate | shorterDate }}</li>
                                    <li><span>END DATE</span>{{ activeSale[0].enddate | shorterDate }}</li>
                                </ul>
                            </div>
                            <div class="token-countdown">
                                <span class="token-countdown-title">THE BONUS END IN</span>
                                <Countdown :deadline="activeSale[0].enddate | readerDate"></Countdown>
                            </div>
                        </div><!-- .token-card -->
                        <div class="progress-card">
                            <h4>Token Sale Progress</h4>
                            <div class="progress-bar">
                                <div class="progress-hcap" style="width:90%">
                                    <div>Hard cap <span>{{ salesData.Hard_Cap | digitCommafy }} DSN</span></div>
                                </div>
                                <div class="progress-scap" style="width:34%">
                                    <div>Soft cap <span>{{ salesData.Total_Soft_Cap | digitCommafy }} DSN</span></div>
                                </div>
                                <div class="progress-psale" style="width:12%">
                                    <div>{{ activeSale[0].name }}<span>{{ activeSale[0].cap_limit | digitCommafy }} DSN</span></div>
                                </div>
                                <div class="progress-percent" style="width:25%"></div>
                            </div>
                        </div>
                        <div class="gaps-3x"></div>
                        <div class="table-responsive">
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
                                        <td :key="index" v-for="(sale, index) in salesTableData" >
                                            <span>Start Date</span>
                                            {{ sale.startdate }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td :key="index" v-for="(sale, index) in salesTableData" >
                                            <span>End Date</span>
                                            {{ sale.enddate }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td :key="index" v-for="(sale, index) in salesTableData" >
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
  </div>
</template>

<script>
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
    Countdown,
    'global-topbar': Topbar,
    'global-sidebar': Sidebar,
    'global-footer': Footer
  },
  data () {
    return {
      tokenBalance: '0',
      contribution: '0',
      salesTableData: []
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
    this.fetchAllSaleStatus()
    this.fetchTotalSales().then(() => {
        this.salesTableData = this.sales
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
