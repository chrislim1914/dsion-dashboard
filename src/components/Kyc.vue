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
                        <h2 class="user-panel-title">Identity Verification - KYC</h2>
                        <p>To comply with regulation each participant will have to go through indentity verification (KYC). So please complete our fast and secure verification process to participate in our token sale. You can proceed from here to verify your indentity and also you can check your application status if you submit already. </p>
                        <div class="gaps-2x"></div>
                        <div class="status status-empty">
                            <div class="status-icon">
                                <em class="ti ti-files"></em>
                                <div class="status-icon-sm">
                                    <em class="ti ti-close"></em>
                                </div>
                            </div>
                            <span class="status-text">You have not submitted your KYC Application</span>
                            <a href="kyc-application.html" class="btn btn-primary">CLick to proceed</a>
                        </div>
                        <div class="note note-md note-info note-plane">
                            <em class="fas fa-info-circle"></em>
                            <p>Some of contries and regions will not able to pass KYC process and therefore are restricted from token sale.</p>
                        </div>
                    </div><!-- .user-kyc -->
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
