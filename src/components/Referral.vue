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
                        <h2 class="user-panel-title">Referral</h2>
                        <h5>Invite your friends and family and recive free tokens</h5>
                        <p><strong>Each member recives a unique referral link to share with friends and family and recive a bonus - 5% of the value of their contribution.</strong></p>
                        <p>The referral link may be used during a token contribution, in the pre-sale and the ICO.</p>
                        <p>Imagine giving your unique referral link to your crypto-friend and he or she contributes tokens using your link, the bonus will be sent to your account automatically. The strategy is simple: the more links you send to your collagues, family and friends - the more tokens you may earn!</p>
                        <h6>My unique referral link</h6>
                        <div class="refferal-info">
                            <span class="refferal-copy-feedback copy-feedback"></span>
                            <em class="fas fa-link"></em>
                            <input type="text" class="refferal-address copy-address" value="https://demo.themenio.com/ico?ref=7d264f90653733592" disabled>
                            <a href="#" class="refferal-copy copy-trigger"><em class="ti ti-files"></em></a>
                        </div><!-- .refferal-info -->
                        <div class="gaps-2x"></div>
                        <ul class="share-links">
                            <li>Share with : </li>
                            <li><a href="#"><em class="fas fa-at"></em></a></li>
                            <li><a href="#"><em class="fab fa-twitter"></em></a></li>
                            <li><a href="#"><em class="fab fa-facebook-f"></em></a></li>
                            <li><a href="#"><em class="fab fa-google"></em></a></li>
                            <li><a href="#"><em class="fab fa-linkedin-in"></em></a></li>
                            <li><a href="#"><em class="fab fa-whatsapp"></em></a></li>
                            <li><a href="#"><em class="fab fa-viber"></em></a></li>
                            <li><a href="#"><em class="fab fa-vk"></em></a></li>
                        </ul><!-- .share-links -->
                        <div class="gaps-1x"></div>
                        <h4>Refferal Statistics</h4>
                        <div class="refferal-statistics">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="refferal-statistics-item">
                                        <h6>Visit Count</h6>
                                        <span>420</span>
                                    </div>
                                </div><!-- .col -->
                                <div class="col-md-4">
                                    <div class="refferal-statistics-item">
                                        <h6>Signin Count</h6>
                                        <span>31</span>
                                    </div>
                                </div><!-- .col -->
                                <div class="col-md-4">
                                    <div class="refferal-statistics-item">
                                        <h6>Total Bonus</h6>
                                        <span>155</span>
                                    </div>
                                </div><!-- .col -->
                            </div><!-- .row -->
                        </div><!-- .refferal-statistics -->
                        <h4>Refferal Lists</h4>
                        <table class="data-table refferal-table">
                            <thead>
                                <tr>
                                    <th class="refferal-name"><span>Referee</span></th>
                                    <th class="refferal-tokens"><span>Bought Token</span></th>
                                    <th class="refferal-bonus"><span>Bonus</span></th>
                                    <th class="refferal-date"><span>Date</span></th>
                                    <th class="refferal-channel"><span>Channel</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="refferal-name">Cynthia Foster</td>
                                    <td class="refferal-tokens">800</td>
                                    <td class="refferal-bonus">8</td>
                                    <td class="refferal-date">08-02-2018</td>
                                    <td class="refferal-channel">Facebook</td>
                                </tr>
                                <tr>
                                    <td class="refferal-name">Cynthia Foster</td>
                                    <td class="refferal-tokens">800</td>
                                    <td class="refferal-bonus">8</td>
                                    <td class="refferal-date">08-02-2018</td>
                                    <td class="refferal-channel">Facebook</td>
                                </tr>
                                <tr>
                                    <td class="refferal-name">Cynthia Foster</td>
                                    <td class="refferal-tokens">800</td>
                                    <td class="refferal-bonus">8</td>
                                    <td class="refferal-date">08-02-2018</td>
                                    <td class="refferal-channel">Facebook</td>
                                </tr>
                                <tr>
                                    <td class="refferal-name">Cynthia Foster</td>
                                    <td class="refferal-tokens">800</td>
                                    <td class="refferal-bonus">8</td>
                                    <td class="refferal-date">08-02-2018</td>
                                    <td class="refferal-channel">Facebook</td>
                                </tr>
                                <tr>
                                    <td class="refferal-name">Cynthia Foster</td>
                                    <td class="refferal-tokens">800</td>
                                    <td class="refferal-bonus">8</td>
                                    <td class="refferal-date">08-02-2018</td>
                                    <td class="refferal-channel">Facebook</td>
                                </tr>
                                <tr>
                                    <td class="refferal-name">Cynthia Foster</td>
                                    <td class="refferal-tokens">800</td>
                                    <td class="refferal-bonus">8</td>
                                    <td class="refferal-date">08-02-2018</td>
                                    <td class="refferal-channel">Facebook</td>
                                </tr>
                                <tr>
                                    <td class="refferal-name">Cynthia Foster</td>
                                    <td class="refferal-tokens">800</td>
                                    <td class="refferal-bonus">8</td>
                                    <td class="refferal-date">08-02-2018</td>
                                    <td class="refferal-channel">Facebook</td>
                                </tr>
                            </tbody>
                        </table>

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
