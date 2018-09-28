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
              <h2 class="user-panel-title">Status - KYC</h2>
              <p>To comply with regulation each participant will have to go through indentity verification (KYC). So please complete our fast and secure verification process to participate in our token sale. You can proceed from here to verify your indentity
                and also you can check your application status if you submit already. </p>
              <div class="gaps-2x"></div>

              <div class="status status-thank">
                <div class="status-icon">
                  <em class="ti ti-files"></em>
                  <div class="status-icon-sm">
                    <em class="ti ti-alarm-clock"></em>
                  </div>
                </div>
                <span class="status-text">Thank you! You have completed the process for your Identity verification.</span>
                <p>We are still waiting for your identity verification. Once our team verified your indentity, you will be whitelisted and notified by email.</p>
              </div>
              <!-- .status -->

              <div class="status status-process">
                <div class="status-icon">
                  <em class="ti ti-files"></em>
                  <div class="status-icon-sm">
                    <em class="ti ti-alarm-clock"></em>
                  </div>
                </div>
                <span class="status-text">Your Application under Process for Varification.</span>
                <p>We are still working on your identity verification. Once our team verified your indentity, you will be whitelisted and notified by email.</p>
              </div>
              <!-- .status -->

              <div class="status status-canceled">
                <div class="status-icon">
                  <em class="ti ti-files"></em>
                  <div class="status-icon-sm">
                    <em class="ti ti-close"></em>
                  </div>
                </div>
                <span class="status-text">Your application rejected by admin.</span>
                <p>In our verification process, we found information incurrect. It would great if you resubmit the form. If face problem in submission please contact us with support team.</p>
                <a href="kyc-application.html" class="btn btn-primary">Resubmit</a>
              </div>
              <!-- .status -->

              <div class="status status-warnning">
                <div class="status-icon">
                  <em class="ti ti-files"></em>
                  <div class="status-icon-sm">
                    <em class="ti ti-alert"></em>
                  </div>
                </div>
                <span class="status-text">We found some information missing in application.</span>
                <p>In our verification process, we found information are missing. It would great if you resubmit the form. If face problem in submission please contact us with support team.</p>
                <a href="kyc-application.html" class="btn btn-primary">Submit Again</a>
              </div>
              <!-- .status -->

              <div class="status status-verified">
                <div class="status-icon">
                  <em class="ti ti-files"></em>
                  <div class="status-icon-sm">
                    <em class="ti ti-check"></em>
                  </div>
                </div>
                <span class="status-text">Your Identity Verified.</span>
                <p>One fo our team verified your indentity.
                  <br class="d-none d-md-block">You are now in whitelisted for token sale.</p>
                <div class="gaps-2x"></div>
                <a href="kyc-application.html" class="ucap">Resubmit the application</a>
              </div>
              <!-- .status -->

              <div class="note note-md note-info note-plane">
                <em class="fas fa-info-circle"></em>
                <p>Some of contries and regions will not able to pass KYC process and therefore are restricted from token sale.</p>
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
    name: 'UnknownComponent',
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
