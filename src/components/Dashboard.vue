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
                                    <h1 class="tile-info">120,000,000 IC0X</h1>
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
                                    <!-- <ul class="tile-info-list">
                                        <li><span>1.646</span>ETH</li>
                                        <li><span>~</span>BTC</li>
                                        <li><span>5,940</span>USD</li>
                                    </ul> -->
                                </div>
                            </div><!-- .col -->
                        </div><!-- .row -->
                        <div class="info-card info-card-bordered">
                            <div class="row align-items-center">
                                <div class="col-sm-3">
                                    <div class="info-card-image">
                                        <img src="/static/images/vector-a.png" alt="vector">
                                    </div>
                                    <div class="gaps-2x d-md-none"></div>
                                </div>
                                <div class="col-sm-9">
                                    <h4>Thank you for your interest towards to our ICO Crypto Projects</h4>
                                    <p>You can contribute ICOX tokens in <a href="#">Contributions</a> section.</p>
                                    <p>You can get a quick response to any questions, and chat with the project in our Telegram: <a href="htts://t.me/icocrypto">htts://t.me/icocrypto</a></p>
                                    <p>Don’t hesitate to invite your friends! If your invited referral purchased token then both of you get 10% bonus.</p>
                                </div>
                            </div>
                        </div><!-- .info-card -->
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
                                <Countdown deadline="October 1, 2018"></Countdown>
                            </div>
                        </div><!-- .token-card -->
                        <div class="progress-card">
                            <h4>Token Sale Progress</h4>
                            <ul class="progress-info">
                                <li><span>Raised -</span> 2,758 ICOX</li>
                                <li><span>TOTAL -</span> 1,500,000 ICOX</li>
                            </ul>
                            <div class="progress-bar">
                                <div class="progress-hcap" style="width:90%">
                                    <div>Hard cap <span>1,400,000</span></div>
                                </div>
                                <div class="progress-scap" style="width:34%">
                                    <div>Soft cap <span>40,000</span></div>
                                </div>
                                <div class="progress-psale" style="width:12%">
                                    <div>Pre Sale <span>10,000</span></div>
                                </div>
                                <div class="progress-percent" style="width:25%"></div>
                            </div>
                        </div>
                        <div class="gaps-3x"></div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th :key="index" v-for="(sale, index) in sales">
                                          {{ sale.name }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td :key="index" v-for="(sale, index) in sales">
                                            <span>Start Date</span>
                                            {{ sale.startdate }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td :key="index" v-for="(sale, index) in sales">
                                            <span>End Date</span>
                                            {{ sale.enddate }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td :key="index" v-for="(sale, index) in sales">
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
  computed: {
    ...mapState({
      'sales': ({sales}) => sales.responseData
    }),
    ...mapGetters([
      'activeSale'
    ])
  },
  methods: {
    ...mapActions([
      'fetchAllSaleStatus'
    ])
  },
  created () {
    if (!this.$session.exists()) {
      window.location.href = 'http://localhost:8081'
    } else {
      this.fetchAllSaleStatus()
    }
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
