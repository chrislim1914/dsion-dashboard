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
                                            <h4>Step 1 : Personal Details</h4>
                                            <p>Simple personal information, required for identification</p>
                                        </div>
                                    </div>
                                    <div class="from-step-content">
                                        <div class="note note-md note-info note-plane">
                                            <em class="fas fa-info-circle"></em>
                                            <p>Please carefully fill out the form with your personal details. Your can’t edit these details once you submitted the form.</p>
                                        </div>
                                        <div class="gaps-2x"></div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="first-name" class="input-item-label">First Name</label>
                                                    <input v-model="kycForm.firstName" class="input-bordered" type="text" id="first-name" name="first-name" required>
                                                </div><!-- .input-item -->
                                            </div><!-- .col -->
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="last-name" class="input-item-label">Last Name</label>
                                                    <input v-model="kycForm.lastName" class="input-bordered" type="text" id="last-name" name="last-name" required>
                                                </div><!-- .input-item -->
                                            </div><!-- .col -->
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="email-address" class="input-item-label">Email Address</label>
                                                    <input v-model="kycForm.email" class="input-bordered" type="text" id="email-address" name="email-address" required>
                                                </div><!-- .input-item -->
                                            </div><!-- .col -->
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="phone-number" class="input-item-label">Phone Number</label>
                                                    <input v-model="kycForm.phoneNumber" class="input-bordered" type="text" id="phone-number" name="phone-number" required>
                                                </div><!-- .input-item -->
                                            </div><!-- .col -->
                                            <div class="col-md-6">
                                                <div class="input-item input-with-label">
                                                    <label for="nationality" class="input-item-label">Nationality</label>
                                                    <select v-model="kycForm.nationality" class="input-bordered" name="nationality" id="nationality">
                                                        <option :value="nationality" :key="index" v-for="(nationality, index) in nationalities">
                                                          {{ nationality }}
                                                        </option>
                                                    </select>
                                                </div><!-- .input-item -->
                                            </div><!-- .col -->
                                        </div><!-- .row -->
                                    </div><!-- .from-step-content -->
                                </div><!-- .from-step-item -->
                                <div class="from-step-item">
                                    <div class="from-step-heading">
                                        <div class="from-step-number">02</div>
                                        <div class="from-step-head">
                                            <h4>Step 2 : Indentity Verify</h4>
                                            <p>Upload documents to verify your indentity.</p>
                                        </div>
                                    </div>
                                    <div class="from-step-content">
                                        <div class="note note-md note-info note-plane">
                                            <em class="fas fa-info-circle"></em>
                                            <p>Please upload the following documents.</p>
                                        </div>
                                        <div class="gaps-2x"></div>
                                        <ul class="nav nav-tabs nav-tabs-bordered" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" data-toggle="tab" href="#passport" @click="changeDocumentType('여권')">
                                                    <div class="nav-tabs-icon">
                                                        <img src="/static/images/icon-passport.png" alt="icon">
                                                        <img src="/static/images/icon-passport-color.png" alt="icon">
                                                    </div>
                                                    <span>여권</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#id-card" @click="changeDocumentType('주민등록증')">
                                                    <div class="nav-tabs-icon">
                                                        <img src="/static/images/icon-national-id.png" alt="icon">
                                                        <img src="/static/images/icon-national-id-color.png" alt="icon">
                                                    </div>
                                                    <span>주민등록증</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#drivers-license" @click="changeDocumentType('운전면허증')">
                                                    <div class="nav-tabs-icon">
                                                        <img src="/static/images/icon-licence.png" alt="icon">
                                                        <img src="/static/images/icon-licence-color.png" alt="icon">
                                                    </div>
                                                    <span>운전면허증</span>
                                                </a>
                                            </li>
                                        </ul><!-- .nav-tabs-line -->
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="passport">
                                                <h5 class="kyc-upload-title">To avoid delays when verifying account, Please make sure bellow:</h5>
                                                <ul class="kyc-upload-list">
                                                    <li>Please upload jpg, png files only. Maximum upload file size: 6MB</li>
                                                    <li>jpg, png 형식의 파일만 업로드가 가능합니다. 최대용량: 6MB</li>
                                                </ul>
                                                <div class="gaps-4x"></div>
                                                <span class="upload-title">Upload Here Your Passport Copy</span>
                                                <div class="row align-items-center">
                                                    <div class="col-7">
                                                        <div class="upload-box">
                                                            <div class="upload-zone">
                                                                <div class="dz-message" data-dz-message>
                                                                    <input type="file" class="btn text-dark" ref="kycForm_front" accept="image/*" style="background-color: #f3f8ff;"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-4 ml-3">
                                                        <div class="kyc-upload-img">
                                                            <img src="/static/images/vector-id-front.png" alt="vector">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="gaps-1x"></div>
                                                <span class="upload-title">Upload Here Your Selfie Copy</span>
                                                <div class="row align-items-center">
                                                    <div class="col-7">
                                                        <div class="upload-box">
                                                            <div class="upload-zone">
                                                                <div class="dz-message" data-dz-message>
                                                                    <input type="file" class="btn text-dark" ref="kycForm_selfie" accept="image/*" style="background-color: #f3f8ff;"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-5">
                                                        <div class="kyc-upload-img">
                                                            <img src="/static/images/selfie_example.png" alt="vector">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="id-card">
                                                <h5 class="kyc-upload-title">To avoid delays when verifying account, Please make sure bellow:</h5>
                                                <ul class="kyc-upload-list">
                                                    <li>Please upload jpg, png files only. Maximum upload file size: 6MB</li>
                                                    <li>jpg, png 형식의 파일만 업로드가 가능합니다. 최대용량: 6MB</li>
                                                </ul>
                                                <div class="gaps-4x"></div>
                                                <span class="upload-title">Upload Here Your Id Card Front Side</span>
                                                <div class="row align-items-center">
                                                    <div class="col-7">
                                                        <div class="upload-box">
                                                            <div class="upload-zone">
                                                                <div class="dz-message" data-dz-message>
                                                                    <input type="file" class="btn text-dark" ref="kycForm_front" accept="image/*" style="background-color: #f3f8ff;"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-4 ml-3">
                                                        <div class="kyc-upload-img">
                                                            <img src="/static/images/vector-id-front.png" alt="vector">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="gaps-4x"></div>
                                                <span class="upload-title">Upload Here Your Id Card Back Side</span>
                                                <div class="row align-items-center">
                                                    <div class="col-7">
                                                        <div class="upload-box">
                                                            <div class="upload-zone">
                                                                <div class="dz-message" data-dz-message>
                                                                    <input type="file" class="btn text-dark" ref="kycForm_back" accept="image/*" style="background-color: #f3f8ff;"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-4 ml-3">
                                                        <div class="kyc-upload-img">
                                                            <img src="/static/images/vector-id-back.png" alt="vector">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="gaps-4x"></div>
                                                <span class="upload-title">Upload Here Your Selfie.</span>
                                                <div class="row align-items-center">
                                                    <div class="col-7">
                                                        <div class="upload-box">
                                                            <div class="upload-zone">
                                                                <div class="dz-message" data-dz-message>
                                                                    <input type="file" class="btn text-dark" ref="kycForm_selfie" accept="image/*" style="background-color: #f3f8ff;"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-5">
                                                        <div class="kyc-upload-img">
                                                            <img src="/static/images/selfie_example.png" alt="vector">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="drivers-license">
                                                <h5 class="kyc-upload-title">To avoid delays when verifying account, Please make sure bellow:</h5>
                                                <ul class="kyc-upload-list">
                                                    <li>Please upload jpg, png files only. Maximum upload file size: 6MB</li>
                                                    <li>jpg, png 형식의 파일만 업로드가 가능합니다. 최대용량: 6MB</li>
                                                </ul>
                                                <div class="gaps-4x"></div>
                                                <span class="upload-title">Upload Here Your Driving License Front Side</span>
                                                <div class="row align-items-center">
                                                    <div class="col-8">
                                                        <div class="upload-box">
                                                            <div class="upload-zone">
                                                                <div class="dz-message" data-dz-message>
                                                                    <input type="file" class="btn text-dark" ref="kycForm_front" accept="image/*" style="background-color: #f3f8ff;"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="kyc-upload-img">
                                                            <img src="/static/images/vector-id-front.png" alt="vector">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="gaps-4x"></div>
                                                <span class="upload-title">Upload Here Your Driving License Back Side</span>
                                                <div class="row align-items-center">
                                                    <div class="col-8">
                                                        <div class="upload-box">
                                                            <div class="upload-zone">
                                                                <div class="dz-message" data-dz-message>
                                                                    <input type="file" class="btn text-dark" ref="kycForm_back" accept="image/*" style="background-color: #f3f8ff;"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="kyc-upload-img">
                                                            <img src="/static/images/vector-id-front.png" alt="vector">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="gaps-4x"></div>
                                                <span class="upload-title">Upload Here Your Selfie.</span>
                                                <div class="row align-items-center">
                                                    <div class="col-7">
                                                        <div class="upload-box">
                                                            <div class="upload-zone">
                                                                <div class="dz-message" data-dz-message>
                                                                    <input type="file" class="btn text-dark" ref="kycForm_selfie" accept="image/*" style="background-color: #f3f8ff;"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-5">
                                                        <div class="kyc-upload-img">
                                                            <img src="/static/images/selfie_example.png" alt="vector">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gaps-2x"></div>
                                    </div><!-- .from-step-content -->
                                </div><!-- .from-step-item -->

                                <div class="from-step-item">
                                    <div class="from-step-heading">
                                        <div class="from-step-number">03</div>
                                        <div class="from-step-head">
                                            <h4>Step 3 : Your Paying Wallet</h4>
                                            <p>Submit your wallet address that you are going to send funds</p>
                                        </div>
                                    </div>
                                    <div class="from-step-content text-center">
                                        <div class="note note-md note-info note-plane">
                                            <em class="fas fa-info-circle"></em>
                                            <p>DO NOT USE your exchange wallet address such as Kraken, Bitfinex, Bithumb, Binance etc.</p>
                                        </div>
                                        <div class="gaps-2x"></div>
                                        <div class="row">
                                        </div><!-- .row -->
                                        <div class="input-item input-with-label">
                                            <label for="token-address" class="input-item-label">Enter your wallet address</label>
                                            <input class="input-bordered" type="text" id="token-address" name="token-address" value="">
                                            <span class="input-note">Note: Address should be ERC20-compliant. Make sure that you hold this wallet private key.</span>
                                        </div><!-- .input-item -->
                                        <div class="gaps-2x"></div><!-- 20px gap -->
                                        <a class="btn btn-primary text-white" @click="onSubmitKycApplication">Submit Details</a>
                                        <div class="gaps-2x"></div><!-- 20px gap -->
                                    </div><!-- .from-step-content -->
                                </div><!-- .from-step-item -->
                            </div><!-- .from-step -->
                        </form>
                    </div><!-- .user-kyc -->
                </div><!-- .user-content -->
            </div><!-- .d-flex -->
        </div><!-- .container -->
    </div>
    <!-- UserWraper End -->

    <div class="modal fade" id="kycConfirm" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="kyc-popup">
                    <h2 class="text-center">Confirm Information</h2>
                    <div class="input-item">
                        <input class="input-checkbox" id="term-condition" type="checkbox">
                        <label for="term-condition">I have read the <a href="#">Terms of Condition</a> and <a href="#">Privary Policy.</a></label>
                    </div>
                    <div class="input-item">
                        <input class="input-checkbox" id="info-currect" type="checkbox">
                        <label for="info-currect">All the personal information I have entered is correct.</label>
                    </div>
                    <div class="input-item">
                        <input class="input-checkbox" id="certification" type="checkbox">
                        <label for="certification">I certify that, I am perticipating in the token distribution event in the capacity of an individual (and benificial owner) and not as an agent (or representative of a third party corporate entity.</label>
                    </div>
                    <div class="input-item">
                        <input class="input-checkbox" id="tokenKnow" type="checkbox">
                        <label for="tokenKnow">I understand that, I can only in the token distribution event with the wallet address that was entered in the application form.</label>
                    </div>
                    <div class="gaps-2x"></div>
                    <div class="text-center">
                        <a class="btn btn-primary" @click="onSubmitKycApplication">Process for Verify</a>
                    </div>
                </div><!-- .modal-content -->
            </div><!-- .modal-content -->
        </div><!-- .modal-dialog -->
    </div><!-- Modal End -->

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
      nationalities: Nationalities,
      kycForm: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        documentType: '',
        nationality: '',
        documentFront: '',
        documentBack: '',
        selfie: ''
      }
    }
  },
  computed: {
    ...mapState({
      'kycResponse': ({kyc}) => kyc.responseData
    })
  },
  methods: {
    ...mapActions(['storeKycApplication']),
    changeDocumentType (document) {
      this.kycForm.documentType = document
    },
    onSubmitKycApplication () {
       this.isLoading = true
        this.documentFront = this.$refs.kycForm_front.files[0]
        this.documentBack = this.$refs.kycForm_back.files[0]
        this.selfie = this.$refs.kycForm_selfie.files[0]

        console.log(this.$refs.kycForm_front.files[0])
       const formData = new FormData()
       if (Validate.isValidEmail(this.kycForm.email)) {
         this.documentFront = this.$refs.kycForm_front.files[0]
         this.documentBack = this.$refs.kycForm_back.files[0]
         this.selfie = this.$refs.kycForm_selfie.files[0]
         formData.append('first_name', this.kycForm.firstName)
         formData.append('last_name', this.kycForm.lastName)
         formData.append('email', this.kycForm.email)
         formData.append('contactnumber', this.kycForm.phoneNumber)
         formData.append('doctype', this.kycForm.documentType)
         formData.append('nationality', this.kycForm.nationality)
         formData.append('docfront', this.documentFront)
         formData.append('docback', this.documentBack)
         formData.append('selfie', this.selfie)
         formData.append('iduser', this.$session.get('user').iduser)
         formData.append('token', this.$session.get('token'))
         this.storeKycApplication(formData).then(() => {
           this.isLoading = false
           console.log(this.kycResponse)
            this.$router.push({ name: 'DashboardMain' })
         })
       } else {
         this.isLoading = false
         this.$awn.alert('Invalid email')
       }
    }
  }
}
</script>
