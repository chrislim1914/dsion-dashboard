<template>
<div class="user-dashboard">
  <!-- topbar -->
  <global-topbar></global-topbar>
  <!-- topbar -->
  <!-- content -->
  <div class="user-wraper">
    <div class="container">
      <div class="d-flex">
        <!-- sidebar -->
        <global-sidebar></global-sidebar>
        <!-- sidebar -->
          <div class="user-content">
            <div class="user-panel">
                <h2 class="user-panel-title">Security Settings</h2>
                <p>You can control your password and account-access setting and toos that let you safe, protect your account.</p>
                <div class="tab-content" id="security-opt-tab">
                  <div class="tab-pane fade active show" id="password-opt">
                      <form action="#">
                          <div class="row">
                              <div class="col-lg">
                                  <div class="input-item input-with-label">
                                      <label for="swalllet" class="input-item-label">Change ETH Wallet Address</label>
                                      <input class="input-bordered" type="text" name="eth-address" v-model="settings.ethAddress" :disabled="isDisabled">
                                  </div><!-- .input-item -->
                              </div><!-- .col -->
                          </div><!-- .row -->
                          <div class="gaps-1x"></div><!-- 10px gap -->
                          <div class="d-sm-flex justify-content-between align-items-center">
                              <a class="btn btn-primary text-white" :class="{'disabled': isDisabled}" ref="btnChangeWallet" @click="changeWalletAddress">Update Wallet Address</a>
                          </div>
                      </form><!-- form -->
                      <form action="#" class="mt-5">
                          <div class="row">
                              <div class="col-lg">
                                  <div class="input-item input-with-label">
                                      <label for="swalllet" class="input-item-label">Old Password</label>
                                      <input class="input-bordered" type="password" name="old-password" v-model="settings.oldPassword">
                                  </div><!-- .input-item -->
                              </div><!-- .col -->
                          </div><!-- .row -->
                          <div class="row">
                              <div class="col-lg-6">
                                  <div class="input-item input-with-label">
                                      <label for="date-of-birth" class="input-item-label">New Password</label>
                                      <input class="input-bordered" type="password" name="new-password" v-model="settings.newPassword">
                                  </div><!-- .input-item -->
                              </div><!-- .col -->
                              <div class="col-lg-6">
                                  <div class="input-item input-with-label">
                                      <label for="date-of-birth" class="input-item-label">Confirm New Password</label>
                                      <input class="input-bordered" type="password" name="re-password" v-model="settings.reTypePassword">
                                  </div><!-- .input-item -->
                              </div><!-- .col -->
                          </div><!-- .row -->
                          <div class="note note-plane note-info">
                              <em class="fas fa-info-circle"></em>
                              <p>Passwords must be at least 8 characters in combination of two or more of uppercase and lowercase letters, numbers, and symbols.</p>
                          </div>
                          <div class="gaps-3x"></div>
                          <div class="gaps-1x"></div><!-- 10px gap -->
                          <div class="d-sm-flex justify-content-between align-items-center">
                              <a class="btn btn-primary text-white" @click="changePassword">Update Password</a>
                              <div class="gaps-2x d-sm-none"></div>
                          </div>
                      </form><!-- form -->
                  </div><!-- .tab-pane -->
              </div><!-- .tab-content -->
            </div><!-- .user-panel -->
          </div><!-- .user-content -->
      </div><!-- .d-flex -->
    </div><!-- .container -->
  </div> <!-- content -->

  <global-footer></global-footer>

  <loading :active.sync="isLoading" :is-full-page="true"></loading>
</div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'
import Topbar from './Globals/Topbar'
import Sidebar from './Globals/Sidebar'
import Footer from './Globals/Footer'
import Validate from '@/validate'
import {
  mapState,
  mapActions
} from 'vuex'
export default {
  name: 'Setting',
  components: {
    Loading,
    'global-topbar': Topbar,
    'global-sidebar': Sidebar,
    'global-footer': Footer
  },
  data () {
    return {
      isLoading: false,
      isDisabled: false,
      user: {
        iduser: '',
        token: ''
      },
      settings: {
        ethAddress: '',
        oldPassword: '',
        newPassword: '',
        reTypePassword: ''
      },
      errorMessage: {
        changeWallet: '',
        changePassword: ''
      }
    }
  },
  computed: {
    ...mapState({
      'userData': ({users}) => users.user,
      'userResponse': ({users}) => users.responseData
    })
  },
  methods: {
    ...mapActions(['changeUserPassword', 'changeUserWalletAddress']),
    changeWalletAddress () {
      // Check if the wallet address is valid.
      if (Validate.isValidWalletAddress(this.settings.ethAddress)) {
        // Enable loading overlay
        this.isLoading = true
        // Process of changing user wallet address
        this.changeUserWalletAddress({
          iduser: this.user.iduser,
          token: this.user.token,
          eth_address: this.settings.ethAddress
        }).then(() => {
          // Disabled loading overlay
          this.isLoading = false
          // Check if update success
          if (this.userResponse.result) {
            // Clear form
            this.clearFields()
            // Disable change wallet address
            this.isDisabled = true
            // Notify user success
            this.$awn.success('Change wallet success.')
          } else {
            // Clear form
            this.clearFields()
            // Notify user failed
            this.$awn.warning(this.userResponse.message)
          }
        })
      } else {
        // Notify user wallet is invalid
        this.$awn.warning('Wallet address is not acceptable.')
      }
    },
    changePassword () {
      // Check if new password is valid.
      if (Validate.isValidPassword(this.settings.newPassword)) {
        // Check if new password and retype password is equal
        if (this.settings.newPassword === this.settings.reTypePassword) {
          // Enable loading overlay
          this.isLoading = true
          // Process of changing user password
          this.changeUserPassword({
            iduser: this.user.iduser,
            oldPassword: this.settings.oldPassword,
            newPassword: this.settings.newPassword,
            token: this.user.token
          }).then(() => {
            // Disable loading overaly
            this.isLoading = false
            // Check if changing user password success
            if (this.userResponse.result) {
              // Clear form
              this.clearFields()
              // Notify user change password success
              this.$awn.success('Change password success.')
            } else {
              // Clear form
              this.clearFields()
              // Notify user change password failed
              this.$awn.warning(this.userResponse.message)
            }
          })
        } else {
          // Notify user new password and re-type password mismatched
          this.$awn.warning('비밀번호가 일치하지 않습니다.')
        }
      } else {
        // Notify user password is not valid
        this.$awn.warning('비밀번호는 대소문자, 숫자, 기호 중 2가지 이상을 조합하여 8자 이상을 사용해야합니다.')
      }
    },
    clearFields () {
      // Set the form to empty
      this.settings.oldPassword = ''
      this.settings.newPassword = ''
      this.settings.reTypePassword = ''
      this.errorMessage.changeWallet = ''
      this.errorMessage.changePassword = ''
    }
  },
  created () {
    // Apply fetched user info to users reactive data
    this.user.iduser = this.userData.iduser
    this.user.token = this.token

    // Checks if user have eth address
    if (this.userData.eth_address) {
      // Apply fetched eth address to settings reactive data
      this.settings.ethAddress = this.userData.eth_address
      // Disable update wallet address
      this.isDisabled = true
    }
  }
}
</script>
