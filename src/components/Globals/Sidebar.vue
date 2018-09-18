<template>
  <div class="app-sidebar">
    <div class="user-sidebar">
        <div class="user-sidebar-overlay"></div>
        <div class="user-box d-none d-lg-block">
            <div class="user-image">
                <img src="/static/images/user-thumb-lg.png" alt="thumb">
            </div>
            <h6 class="user-name">{{ $session.get('user').email }}</h6>
        </div><!-- .user-box -->
        <ul class="user-icon-nav">
            <li>
              <router-link :to="{ name: 'Main' }"><em class="ti ti-dashboard"></em>Dashboard</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardAddress' }"><em class="ti ti-direction"></em>Address</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardKnowYourCustomer' }"><em class="ti ti-files"></em>KYC Application</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardContribution' }"><em class="ti ti-pie-chart"></em>Contributions</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardReferral' }"><em class="ti ti-infinite"></em>Referral</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardPromotion' }"><em class="ti ti-star"></em>Promotion</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DashboardSetting' }"><em class="ti ti-settings"></em>Setting</router-link>
            </li>
        </ul><!-- .user-icon-nav -->
        <div class="user-sidebar-sap"></div><!-- .user-sidebar-sap -->
        <ul class="user-nav">
            <li><a href="https://api.dsion.io/whitepaper/Dsion_whitepaperKorean.pdf" target="_blank">Whitepaper</a></li>
            <li>Contact Support<a href="mailto:contact@dsion.io" style="font-weight: 300 !important; text-transform: none;color: #6783b8;">contact@dsion.io</a></li>
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
