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
                        <p class="text-justify">
                          KYC신청시 증명에 사용할 신분증을 업로드 합니다. 귀하의 이름과 사진은 신분증을 발급한 국가 이름과 함께 명확하게 보여야 하며, 최대 2페이지를 업로드 할 수 있습니다. 위에 양식에 언급된 귀하의 이름은 정부 발급 신분증의 이름과 일치 해야 합니다.
                        </p>
                        <p class="text-justify">
                          첨부된 신분증명 서류는 적어도 한달 동안 유효 해야 합니다. 만료 혹은 한달 이하의 된 신분 증명 서류의 유효성은 검사되지 않습니다.
                        </p>
                        <p class="text-justify">
                          본인은 본인이 미합중국의 시민권자, 미합중국의 거주자 또는 ICO에 참여하는 것을 금지하는 관할권의 거주자가 아님을 확인 합니다.
                        </p>
                        <p class="text-justify">
                          본인은 18세 이상임을 확인 합니다.
                        </p>
                        <div class="gaps-2x"></div>
                        <div class="status status-empty border-0">
                          <router-link class="btn btn-primary" :to="{ name: 'DashboardKnowYourCustomerApplication' }">
                            CLick to proceed
                          </router-link>
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
