<template>
  <div class="user-dashboard">
    <global-topbar></global-topbar>
    <!-- TopBar End -->

    <div class="user-wraper">
      <div class="container">
        <div class="d-flex">
          <global-sidebar></global-sidebar>

          <div class="user-content">
            <div class="user-kyc">
              <form action="#">
                <div class="from-step">
                  <div class="from-step-item">
                    <div class="from-step-heading">
                      <div class="from-step-number">01</div>
                      <div class="from-step-head">
                        <h4>Step 1 : {{ $t('kycApplication.stepOneHeading') }}</h4>
                        <p>{{ $t('kycApplication.stepOneParagraph') }}</p>
                      </div>
                    </div>
                    <div class="from-step-content">
                      <div class="note note-md note-info note-plane">
                        <em class="fas fa-info-circle"></em>
                        <p>{{ $t('kycApplication.stepOneNote') }}</p>
                      </div>
                      <div class="gaps-2x"></div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="input-item input-with-label">
                            <label for="first-name" class="input-item-label">
                              First Name
                              <span :class="{'d-none': locale !== 'kr'}">(이름)</span>
                            </label>
                            <input v-model="kycForm.firstName" class="input-bordered" type="text" id="first-name" name="first-name" required>
                          </div>
                          <!-- .input-item -->
                        </div>
                        <!-- .col -->
                        <div class="col-md-6">
                          <div class="input-item input-with-label">
                            <label for="last-name" class="input-item-label">
                              Last Name
                              <span :class="{'d-none': locale !== 'kr'}">(성)</span>
                            </label>
                            <input v-model="kycForm.lastName" class="input-bordered" type="text" id="last-name" name="last-name" required>
                          </div>
                          <!-- .input-item -->
                        </div>
                        <!-- .col -->
                        <div class="col-md-6">
                          <div class="input-item input-with-label">
                            <label for="email-address" class="input-item-label">
                              Email Address
                              <span :class="{'d-none': locale !== 'kr'}">(이메일주소)</span>
                            </label>
                            <input v-model="kycForm.email" class="input-bordered" type="text" id="email-address" name="email-address" required>
                          </div>
                          <div class="input-item input-with-label">
                            <label for="nationality" class="input-item-label">
                              Nationality
                              <span :class="{'d-none': locale !== 'kr'}">(국적)</span>
                            </label>
                            <select v-model="kycForm.nationality" class="input-bordered" name="nationality" id="nationality">
                              <option :value="nationality" :key="index" v-for="(nationality, index) in nationalities">
                                {{ nationality }}
                              </option>
                            </select>
                          </div>
                          <!-- .input-item -->
                        </div>
                        <!-- .col -->
                        <div class="col-md-6">
                          <div class="input-item input-with-label">
                            <label for="phone-number" class="input-item-label">
                              Phone Number
                              <span :class="{'d-none': locale !== 'kr'}">(전화번호)</span>
                            </label>
                            <select v-model="kycForm.countryCode" class="input-bordered" name="country-code" id="countrycode">
                              <option :value="countrycode.dial_code" :key="index" v-for="(countrycode, index) in countrycodes">
                                {{ countrycode.name }} <span class="text-right">{{ countrycode.dial_code }}<span>
                              </option>
                            </select>
                            <div class="gaps-1x"></div>
                            <input v-model="kycForm.phoneNumber" class="input-bordered" type="tel" id="phone-number" name="phone-number" required>
                          </div>
                          <!-- .input-item -->
                        </div>
                        <!-- .col -->
                        <div class="col-md-6">
                          <!-- <div class="input-item input-with-label">
                            <label for="nationality" class="input-item-label">
                              Nationality
                              <span :class="{'d-none': locale !== 'kr'}">(국적)</span>
                            </label>
                            <select v-model="kycForm.nationality" class="input-bordered" name="nationality" id="nationality">
                              <option :value="nationality" :key="index" v-for="(nationality, index) in nationalities">
                                {{ nationality }}
                              </option>
                            </select>
                          </div> -->
                          <!-- .input-item -->
                        </div>
                        <!-- .col -->
                      </div>
                      <!-- .row -->
                    </div>
                    <!-- .from-step-content -->
                  </div>
                  <!-- .from-step-item -->
                  <div class="from-step-item">
                    <div class="from-step-heading">
                      <div class="from-step-number">02</div>
                      <div class="from-step-head">
                        <h4>Step 2 : {{ $t('kycApplication.stepTwoHeading') }}</h4>
                        <p>{{ $t('kycApplication.stepTwoParagraph') }}</p>
                      </div>
                    </div>
                    <div class="from-step-content">
                      <div class="note note-md note-info note-plane">
                        <em class="fas fa-info-circle"></em>
                        <p>{{ $t('kycApplication.stepTwoNote') }}</p>
                      </div>
                      <div class="gaps-2x"></div>
                      <ul class="nav nav-tabs nav-tabs-bordered" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active" data-toggle="tab" href="#passport" @click="changeDocumentType('여권')">
                            <div class="nav-tabs-icon">
                              <img src="/static/images/icon-passport.png" alt="icon">
                              <img src="/static/images/icon-passport-color.png" alt="icon">
                            </div>
                            <span>{{ $t('kycApplication.uploadTypeOne') }}</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="tab" href="#id-card" @click="changeDocumentType('주민등록증')">
                            <div class="nav-tabs-icon">
                              <img src="/static/images/icon-national-id.png" alt="icon">
                              <img src="/static/images/icon-national-id-color.png" alt="icon">
                            </div>
                            <span>{{ $t('kycApplication.uploadTypeTwo') }}</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="tab" href="#drivers-license" @click="changeDocumentType('운전면허증')">
                            <div class="nav-tabs-icon">
                              <img src="/static/images/icon-licence.png" alt="icon">
                              <img src="/static/images/icon-licence-color.png" alt="icon">
                            </div>
                            <span>{{ $t('kycApplication.uploadTypeThree') }}</span>
                          </a>
                        </li>
                      </ul>
                      <!-- .nav-tabs-line -->
                      <div class="tab-content" id="myTabContent">

                        <div class="tab-pane fade show active" id="passport">
                          <h5 class="kyc-upload-title">{{ $t('kycApplication.uploadTitle') }}</h5>
                          <ul class="kyc-upload-list">
                            <li>{{ $t('kycApplication.uploadFormat') }}</li>
                          </ul>
                          <div class="gaps-4x"></div>
                          <span class="upload-title">{{ $t('kycApplication.uploadPassportNoteOne') }}</span>
                          <div class="row align-items-center">
                            <div class="col-8 col-lg-7">
                              <input type="file" class="btn col text-dark" ref="kycForm_frontPassport" accept="image/*" style="background-color: #f3f8ff;"/>
                            </div>
                            <div class="col-4 ml-lg-3">
                              <div class="kyc-upload-img">
                                <img src="/static/images/vector-id-front.png" alt="vector">
                              </div>
                            </div>
                          </div>
                          <div class="gaps-1x"></div>
                          <span class="upload-title">{{ $t('kycApplication.uploadPassportNoteTwo') }}</span>
                          <div class="row align-items-center">
                            <div class="col-8 col-lg-7">
                              <input type="file" class="btn col text-dark" ref="kycForm_selfiePassport" accept="image/*" style="background-color: #f3f8ff;" />
                            </div>
                            <div class="col-4 col-lg-5">
                              <div class="kyc-upload-img">
                                <img src="/static/images/selfie_example.png" alt="vector">
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="tab-pane fade" id="id-card">
                          <h5 class="kyc-upload-title">{{ $t('kycApplication.uploadTitle') }}</h5>
                          <ul class="kyc-upload-list">
                            <li>{{ $t('kycApplication.uploadFormat') }}</li>
                          </ul>
                          <div class="gaps-4x"></div>
                          <span class="upload-title">
                            {{ $t('kycApplication.uploadIdCardOne') }}
                          </span>
                          <div class="row align-items-center">
                            <div class="col-8 col-lg-7">
                              <input type="file" class="btn col text-dark" ref="kycForm_frontIdCard" accept="image/*" style="background-color: #f3f8ff;" />
                            </div>
                            <div class="col-4 ml-lg-3">
                              <div class="kyc-upload-img">
                                <img src="/static/images/vector-id-front.png" alt="vector">
                              </div>
                            </div>
                          </div>
                          <div class="gaps-4x"></div>
                          <span class="upload-title">
                            {{ $t('kycApplication.uploadIdCardTwo') }}
                          </span>
                          <div class="row align-items-center">
                            <div class="col-8 col-lg-7">
                              <input type="file" class="btn col text-dark" ref="kycForm_backIdCard" accept="image/*" style="background-color: #f3f8ff;" />
                            </div>
                            <div class="col-4 ml-lg-3">
                              <div class="kyc-upload-img">
                                <img src="/static/images/vector-id-back.png" alt="vector">
                              </div>
                            </div>
                          </div>
                          <div class="gaps-4x"></div>
                          <span class="upload-title">
                            {{ $t('kycApplication.uploadIdCardThree') }}
                          </span>
                          <div class="row align-items-center">
                            <div class="col-8 col-lg-7">
                              <input type="file" class="btn col text-dark" ref="kycForm_selfieIdCard" accept="image/*" style="background-color: #f3f8ff;" />
                            </div>
                            <div class="col-4 col-lg-5">
                              <div class="kyc-upload-img">
                                <img src="/static/images/selfie_example.png" alt="vector">
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="tab-pane fade" id="drivers-license">
                          <h5 class="kyc-upload-title">{{ $t('kycApplication.uploadTitle') }}</h5>
                          <ul class="kyc-upload-list">
                            <li>{{ $t('kycApplication.uploadFormat') }}</li>
                          </ul>
                          <div class="gaps-4x"></div>
                          <span class="upload-title">
                            {{ $t('kycApplication.uploadDriverLicenseOne') }}
                          </span>
                          <div class="row align-items-center">
                            <div class="col-8 col-lg-7">
                              <input type="file" class="btn col text-dark" ref="kycForm_frontDrivingLicense" accept="image/*" style="background-color: #f3f8ff;" />
                            </div>
                            <div class="col-4">
                              <div class="kyc-upload-img">
                                <img src="/static/images/vector-id-front.png" alt="vector">
                              </div>
                            </div>
                          </div>
                          <div class="gaps-4x"></div>
                          <span class="upload-title">
                            {{ $t('kycApplication.uploadDriverLicenseTwo') }}
                          </span>
                          <div class="row align-items-center">
                            <div class="col-8 col-lg-7">
                              <input type="file" class="btn col text-dark" ref="kycForm_backDrivingLicense" accept="image/*" style="background-color: #f3f8ff;" />
                            </div>
                            <div class="col-4">
                              <div class="kyc-upload-img">
                                <img src="/static/images/vector-id-front.png" alt="vector">
                              </div>
                            </div>
                          </div>
                          <div class="gaps-4x"></div>
                          <span class="upload-title">
                            {{ $t('kycApplication.uploadDriverLicenseThree') }}
                          </span>
                          <div class="row align-items-center">
                            <div class="col-8 col-lg-7">
                              <input type="file" class="btn col text-dark" ref="kycForm_selfieDrivingLicense" accept="image/*" style="background-color: #f3f8ff;" />
                            </div>
                            <div class="col-4 col-lg-5">
                              <div class="kyc-upload-img">
                                <img src="/static/images/selfie_example.png" alt="vector">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="gaps-2x" id="img-upload-note" style="color: red;font-weight: bold;">* {{ $t('kycApplication.uploadWarning') }}</div>
                    </div>
                    <!-- .from-step-content -->
                  </div>
                  <!-- .from-step-item -->

                  <div class="from-step-item">
                    <div class="from-step-heading">
                      <div class="from-step-number">03</div>
                      <div class="from-step-head">
                        <h4>Step 3 : {{ $t('kycApplication.stepThreeHeading') }}</h4>
                        <p>{{ $t('kycApplication.stepThreeNote') }}</p>
                      </div>
                    </div>
                    <div class="from-step-content">
                      <div class="note note-md note-info note-plane">
                        <em class="fas fa-info-circle"></em>
                        <p>{{ $t('kycApplication.stepThreeNoteTwo') }}</p>
                      </div>
                      <div class="gaps-2x"></div>
                      <div class="row">
                      </div>
                      <!-- .row -->
                      <div class="input-item input-with-label">
                        <label for="eth_address" class="input-item-label">{{ $t('kycApplication.walletAddressNote') }}</label>
                        <input class="input-bordered" type="text" v-model="kycForm.eth_address" id="eth_address" ref="eth_address" name="eth_address">
                        <span class="input-note">{{ $t('kycApplication.walletAddressWarning') }}</span>
                      </div>
                      <!-- .input-item -->
                      <div class="gaps-2x"></div>
                      <!-- 20px gap -->
                      <a class="btn btn-primary text-white" @click="onSubmitKycApplication">{{ $t('kycApplication.completedButton') }}</a>
                      <div class="gaps-2x"></div>
                      <!-- 20px gap -->
                    </div>
                    <!-- .from-step-content -->
                  </div>
                  <!-- .from-step-item -->
                </div>
                <!-- .from-step -->
              </form>
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

    <loading :active.sync="isLoading" :is-full-page="true"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'
import Topbar from './Globals/Topbar'
import Sidebar from './Globals/Sidebar'
import Footer from './Globals/Footer'
import Nationalities from 'static/nationality.json'
import CountryCodes from 'static/countrycode.json'
import Validate from '@/validate'
import {
  mapActions,
  mapState
} from 'vuex'
export default {
  name: 'KycApplication',
  components: {
    Loading,
    'global-topbar': Topbar,
    'global-sidebar': Sidebar,
    'global-footer': Footer
  },
  data () {
    return {
      isLoading: false,
      locale: '',
      nationalities: Nationalities,
      countrycodes: CountryCodes,
      kycForm: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        countryCode: '',
        documentType: '여권',
        nationality: '',
        documentFront: '',
        documentBack: '',
        selfie: '',
        eth_address: ''
      },
      user: {
        iduser: '',
        token: ''
      }
    }
  },
  computed: {
    ...mapState({
      'token': ({
        tokens
      }) => tokens.token,
      'userData': ({
        users
      }) => users.user,
      'kycResponse': ({
        kyc
      }) => kyc.responseData
    })
  },
  methods: {
    ...mapActions(['storeKycApplication']),
    changeDocumentType (document) {
      this.kycForm.documentType = document
    },
    onSubmitKycApplication () {
      // Create form data for multipart
      const formData = new FormData()
      // Check if all data is filled
      if (this.kycForm.firstName && this.kycForm.lastName && this.kycForm.email && this.kycForm.phoneNumber && this.kycForm.documentType && this.kycForm.nationality && this.kycForm.eth_address) {
        // Validates if the email is valid
        if (Validate.isValidEmail(this.kycForm.email)) {
          // Identify document type
          if (this.kycForm.documentType) {
            // Switch thru different cases using document type
            switch (this.kycForm.documentType) {
              // Falls when passport is used
              case '여권':
                this.kycForm.documentFront = this.$refs.kycForm_frontPassport.files[0]
                this.kycForm.documentBack = this.$refs.kycForm_frontPassport.files[0]
                this.kycForm.selfie = this.$refs.kycForm_selfiePassport.files[0]
                break
              // Falls when id card is used
              case '주민등록증':
                this.kycForm.documentFront = this.$refs.kycForm_frontIdCard.files[0]
                this.kycForm.documentBack = this.$refs.kycForm_backIdCard.files[0]
                this.kycForm.selfie = this.$refs.kycForm_selfieIdCard.files[0]
                break
              // Falls when drivers license is used
              case '운전면허증':
                this.kycForm.documentFront = this.$refs.kycForm_frontDrivingLicense.files[0]
                this.kycForm.documentBack = this.$refs.kycForm_backDrivingLicense.files[0]
                this.kycForm.selfie = this.$refs.kycForm_selfieDrivingLicense.files[0]
                break
            }

            // Check if document file upload is all given.
            if (this.kycForm.documentFront && this.kycForm.documentBack && this.kycForm.selfie) {
              // Validate image size uploaded
              if (Validate.isValidImageFileSize(this.kycForm.documentFront.size) && Validate.isValidImageFileSize(this.kycForm.documentBack.size) && Validate.isValidImageFileSize(this.kycForm.selfie.size)) {
                // Validate if wallet given is valid
                if (Validate.isValidWalletAddress(this.kycForm.eth_address)) {
                  // Enable loading overlay
                  this.isLoading = true
                  // Appends data to the form data
                  formData.append('first_name', this.kycForm.firstName) // firstName
                  formData.append('last_name', this.kycForm.lastName) // last_name
                  formData.append('email', this.kycForm.email) // email
                  formData.append('contactnumber', this.kycForm.countryCode + this.kycForm.phoneNumber) // contactnumber
                  formData.append('doctype', this.kycForm.documentType) // doctype
                  formData.append('nationality', this.kycForm.nationality) // nationality
                  formData.append('docfront', this.kycForm.documentFront) // docfront
                  formData.append('docback', this.kycForm.documentBack) // docback
                  formData.append('selfie', this.kycForm.selfie) // selfie
                  formData.append('iduser', this.user.iduser) // iduser
                  formData.append('token', this.user.token) // token
                  formData.append('eth_address', this.kycForm.eth_address) // eth_address

                  // Process for applying kyc application
                  this.storeKycApplication(formData).then(() => {
                    // Disable loading overlay
                    this.isLoading = false
                    // Checks if the application submitted
                    if (this.kycResponse.result) {
                      // Clear form
                      this.clearFields()
                      // Notify user kyc is submitted
                      this.$awn.success('KYC process has been submitted.')
                      // Push the page to the address w/ 800ms delay
                      setTimeout(() => {
                        this.$router.push({
                          name: 'DashboardAddress'
                        })
                      }, 500)
                    } else {
                      // Notify user kyc is not submitted
                      this.$awn.alert(this.kycResponse.message)
                    }
                  })
                } else {
                  // Falls if wallet not valid
                  this.$awn.warning('Wallet address is not acceptable.')
                }
              } else {
                // Falls if image is too big
                this.$awn.warning('Image uploaded must not exceed 10mb.')
              }
            } else {
              // Falls if document is missing
              this.$awn.warning('Please upload your document accordingly to chosen document type.')
            }
          } else {
            // Falls if no document type
            this.$awn.warning('문서 종류를 확인해주세요.')
          }
        } else {
          // Falls if email is not valid
          this.$awn.warning('이메일주소를 확인해주세요.')
        }
      } else {
        // Falls if form is incomplete
        this.$awn.warning('Please fill up the form completely.')
      }
    },
    clearFields () {
      this.kycForm.firstName = ''
      this.kycForm.lastName = ''
      this.kycForm.email = this.userData.email
      this.kycForm.phoneNumber = ''
      this.kycForm.countryCode = ''
      this.kycForm.documentType = '여권'
      this.kycForm.nationality = ''
      this.kycForm.documentFront = ''
      this.kycForm.documentBack = ''
      this.kycForm.selfie = ''
      this.kycForm.eth_address = ''
    }
  },
  created () {
    // Apply fetched user info to the kycform reactive data
    this.kycForm.email = this.userData.email
    // Apply fetched id user to user reactive data
    this.user.iduser = this.userData.iduser
    // Apply fetched user wallet to user reactive data
    this.kycForm.eth_address = this.userData.eth_address
    // Apply fetched user token to user reactive data
    this.user.token = this.token
    // Locale to reactive data
    if (this.$cookie.get('locale', {domain: '.dsion.io'})) {
      this.locale = this.$cookie.get('locale', {domain: '.dsion.io'})
    } else {
      this.locale = this.$i18n.locale
    }
  }
}
</script>

<style media="screen">
  @media (min-width: 320px) and (max-width: 575px) {
    #img-upload-note {
      margin-top: 15px;
      font-size: 10px;
    }
  }
</style>
