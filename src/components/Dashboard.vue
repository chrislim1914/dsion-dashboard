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
                  <h1 class="tile-info">{{ user.tokenBalance | digitCommafy }} DSN</h1>
                  <ul class="tile-list-inline">
                      <li> </li>
                      <li> </li>
                      <li> </li>
                  </ul>
                </div>
              </div><!-- .col -->
              <div class="col-md-6">
                <div class="tile-item tile-light">
                  <div class="tile-bubbles"></div>
                  <h6 class="tile-title">YOUR CONTRIBUTION</h6>
                  <ul class="tile-info-list">
                      <li><span>{{ user.contribution.eth | digitCommafy }}</span>ETH</li>
                      <li><span>=></span>&nbsp;</li>
                      <li><span>{{ user.contribution.dsn | digitCommafy }}</span>DSN</li>
                  </ul>
                </div>
              </div><!-- .col -->
            </div><!-- .row -->

            <div class="token-card" v-if="currentSale.length > 0">
              <div class="token-info">
                <span class="token-smartag">
                  {{ active.name }} ENDS
                </span>
                <h2 class="token-bonus">{{ active.bonusRate }}% <span>Current Bonus</span></h2>
                <ul class="token-timeline">
                  <li><span>START DATE</span>{{ active.startDate}}</li>
                  <li><span>END DATE</span>{{ active.endDate}}</li>
                </ul>
              </div>
              <div class="token-countdown" v-if="isSaleEnded">
                <span class="token-countdown-title">
                  {{ active.name }} ENDS
                </span>
                <Countdown :deadline="active.endDate | readerDate" @callback="saleEnded"></Countdown>
              </div>
              <div class="token-countdown" v-else>
                <span class="token-countdown-title">
                  THE BONUS END IN
                </span>
                <Countdown :deadline="active.endDate | readerDate" @callback="saleEnded"></Countdown>
              </div>
            </div><!-- .token-card -->

            <div class="token-card" v-else>
              <div class="token-info" v-if="pendingSale.length">
                <span class="token-smartag">
                  {{ pendingSale[0].name }}
                </span>
                <h2 class="token-bonus">{{ pendingSale[0].bonus_rate }}% <span>Current Bonus</span></h2>
                <ul class="token-timeline">
                  <li><span>START DATE</span>{{ pendingSale[0].startdate}}</li>
                  <li><span>END DATE</span>{{ pendingSale[0].enddate}}</li>
                </ul>
              </div>

              <div class="token-countdown" v-if="!pendingSale.length">
                <span class="token-countdown-title">
                  No on-going sale
                </span>
                <span>
                  <Countdown class="countdown" end="December 25, 1600"></Countdown>
                </span>
              </div>

              <div class="token-countdown" v-if="isSaleEnded && pendingSale.length">
                <span class="token-countdown-title">
                  {{ pendingSale[0].name }} OPEN
                </span>
                <span v-if="pendingSale[0].startdate && pendingSale[0].enddate">
                  <Countdown class="countdown" v-if="pendingSale[0].startdate" :end="pendingSale[0].startdate" @callback="saleEnded"></Countdown>
                </span>
              </div>
              <div class="token-countdown" v-if="!isSaleEnded && !pendingSale.length">
                <span class="token-countdown-title">
                  THE BONUS END IN
                </span>
                <Countdown :deadline="pendingSale[0].startdate" @callback="saleEnded"></Countdown>
              </div>
            </div><!-- .token-card -->

            <div class="progress-card">
              <h4>Token Sale Progress</h4>
              <div class="progress-bar">
                <div class="progress-hcap" style="width:90%">
                  <div>Hard cap <span>{{ salesData.Hard_Cap | digitCommafy }} DSN</span></div>
                </div>
                <div class="progress-scap" style="width:45%">
                  <div>
                    <span style="">1st Pre Sale</span><span style="">150,000,000 DSN</span>
                  </div>
                </div>
                <div class="progress-psale" style="width:12%">
                  <div>Soft cap<span>45,000,000 DSN</span></div>
                </div>
                <div class="progress-percent" style="width:45%"></div>
              </div>
            </div>
            <div class="gaps-3x"></div>
            <div class="table-responsive" v-if="salesTableData">
              <!-- <div class="sold-out font-weight-bold" v-if="isSaleEnded">
                {{ $t('dashboard.saleended') }}
              </div> -->
              <table class="table">
                <thead>
                  <tr>
                    <th :key="index" v-for="(sale, index) in salesTableData">
                      {{ sale.name }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- -->
                  <tr>
                    <td :key="index" v-for="(sale, index) in salesTableData">
                      <span>Start Date</span>
                      <p v-if="moment().format('YYYY-MM-DD') > moment(sale.enddate).format('YYYY-MM-DD')">
                        SOLD OUT
                      </p>
                      <p v-else>
                        {{ sale.startdate }}
                      </p>
                    </td>
                    <td class="sold-out d-none"></td>
                  </tr>
                  <!-- -->
                  <tr>
                    <td :key="index" v-for="(sale, index) in salesTableData">
                      <span>End Date</span>
                      <p v-if="moment().format('YYYY-MM-DD') > moment(sale.enddate).format('YYYY-MM-DD')">
                        SOLD OUT
                      </p>
                      <p v-else>
                        {{ sale.enddate }}
                      </p>
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
import Countdown from './Globals/DsionCountdown'
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
      salesTableData: [],
      user: {
        tokenBalance: 0,
        contribution: {
          eth: 0,
          dsn: 0
        }
      },
      active: {
        name: '',
        bonusRate: '',
        capLimit: '',
        startDate: '',
        endDate: ''
      },
      isLoading: false,
      isDataLoaded: false,
      isSaleEnded: true
    }
  },
  computed: {
    ...mapState({
      token: ({tokens}) => tokens.token,
      sales: ({sales}) => sales.sales,
      userData: ({users}) => users.user,
      userResponse: ({users}) => users.responseData,
      salesData: ({sales}) => sales.responseData,
      activeSale: ({sales}) => sales.activeSale
    }),
    ...mapGetters(['currentSale', 'pendingSale'])
  },
  methods: {
    ...mapActions([
      'fetchTotalSales',
      'getUserContribution',
      'fetchAllSaleStatus',
      'fetchActiveSale'
    ]),
    saleEnded (value) {
      if (value) {
        this.isSaleEnded = true
      }
    }
  },
  created () {
    // Fetch user contribution
    this.getUserContribution({
      iduser: this.userData.iduser,
      eth_address: this.userData.eth_address
    }).then(() => {
      if (this.userResponse.result) {
        this.user.tokenBalance = this.userResponse.eth_balance
        this.user.contribution.eth = this.userResponse.eth_count
        this.user.contribution.dsn = this.userResponse.total
      }
    })

    // Fetch all sale status
    this.fetchAllSaleStatus().then(() => {
      this.salesTableData = this.sales
      // Fetch active sale
      this.fetchActiveSale().then(() => {
        // Current active sale
        if (this.activeSale.result) {
          this.active.name = this.activeSale.name
          this.active.bonusRate = this.activeSale.bonus_rate
          this.active.capLimit = this.activeSale.cap_limit
          this.active.startDate = this.activeSale.startdate
          this.active.endDate = this.activeSale.enddate
        } else {
          this.isSaleEnded = true
        }
        this.fetchTotalSales().then(() => {
          this.isDataLoaded = true
        })
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
.sold-out {
  background: rgba(0,0,0,0.7);
  position:absolute;
  color:white;
  z-index:1000;
  width: 145px;
  line-height: 9;
  font-size: 25px;
  text-align: center;
}
</style>
