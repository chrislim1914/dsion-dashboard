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
              <h2 class="user-panel-title">{{ $t('kyc.heading') }} - KYC</h2>
              <p class="text-justify">
                {{ $t('kyc.paragraphOne') }}
              </p>
              <p class="text-justify">
                {{ $t('kyc.paragraphTwo') }}
              </p>
              <p class="text-justify">
                {{ $t('kyc.paragraphThree') }}
              </p>
              <div class="gaps-2x"></div>
              <div class="status status-empty border-0">
                <router-link class="btn btn-primary" :to="{ name: 'DashboardKnowYourCustomerApplication' }">
                  {{ $t('kyc.acceptButton') }}
                </router-link>
              </div>
              <div class="note note-md note-info note-plane">
                <em class="fas fa-info-circle"></em>
                <p>{{ $t('kyc.info') }}</p>
              </div>
            </div>
            <!-- .user-kyc -->
          </div>
          <!-- .user-content -->
        </div>
        <!-- .d-flex -->
      </div>
      <!-- .container -->
    </div>
    <!-- UserWraper End -->
    <global-footer></global-footer>
    <!-- FooterBar End -->
  </div>
</template>

<script>
import Topbar from './Globals/Topbar'
import Sidebar from './Globals/Sidebar'
import Footer from './Globals/Footer'

export default {
  name: 'Kyc',
  components: {
    'global-topbar': Topbar,
    'global-sidebar': Sidebar,
    'global-footer': Footer
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
