<template>
  <div class="app-sidebar">
    <div class="user-sidebar">
        <div class="user-sidebar-overlay"></div>
        <div class="user-box d-none d-lg-block">
            <div class="user-image">
                <img src="~images/user-thumb-lg.png" alt="thumb">
            </div>
            <h6 class="user-name">Stefan Harary</h6>
            <div class="user-uid">Unique ID: <span>IXIA1A105</span></div>
            <ul class="btn-grp guttar-10px">
                <li><a href="#" class="btn btn-xs btn-warning">Confirm Email</a></li>
                <li><a href="kyc.html" class="btn btn-xs btn-warning">KYC Pending</a></li>
            </ul>
        </div><!-- .user-box -->
        <ul class="user-icon-nav">
            <li><a href="index.html"><em class="ti ti-dashboard"></em>Dashboard</a></li>
            <li><a href="kyc.html"><em class="ti ti-files"></em>KYC Application</a></li>
            <li><a href="tokens.html"><em class="ti ti-pie-chart"></em>Contributions</a></li>
            <li><a href="transactions.html"><em class="ti ti-control-shuffle"></em>Transactions</a></li>
            <li><a href="referrals.html"><em class="ti ti-infinite"></em>Referral</a></li>
            <li><a href="account.html"><em class="ti ti-user"></em>Account</a></li>
            <li><a href="security.html"><em class="ti ti-lock"></em>Security</a></li>
        </ul><!-- .user-icon-nav -->
        <div class="user-sidebar-sap"></div><!-- .user-sidebar-sap -->
        <ul class="user-nav">
            <li><a href="how-to.html">How to buy?</a></li>
            <li><a href="faq.html">Faqs</a></li>
            <li><a href="#">Whitepaper</a></li>
            <li>Contact Support<span>info@icocrypto.com</span></li>
        </ul><!-- .user-nav -->
        <div class="d-lg-none">
            <div class="user-sidebar-sap"></div>
            <div class="gaps-1x"></div>
            <ul class="topbar-action-list">
                <li class="topbar-action-item topbar-action-link">
                    <a href="#"><em class="ti ti-home"></em> Go to main site</a>
                </li><!-- .topbar-action-item -->
                <li class="dropup topbar-action-item topbar-action-language">
                    <a href="#" data-toggle="dropdown" aria-haspopup="true"> EN <em class="ti ti-angle-up"></em> </a>
                    <ul class="dropdown-menu">
                        <li><a href="#">FR</a></li>
                        <li><a href="#">JY</a></li>
                        <li><a href="#">CH</a></li>
                    </ul>
                </li><!-- .topbar-action-item -->
            </ul><!-- .topbar-action-list -->
        </div>
    </div><!-- .user-sidebar -->
  </div>
</template>

<script>
export default {
  name: 'UnknownComponent',
  data () {
    return {

    }
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
