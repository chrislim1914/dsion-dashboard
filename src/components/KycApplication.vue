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
                      <h4>Step 1 : 개인정보 입력</h4>
                      <p>인증에 필요한 간단한 개인정보를 입력합니다</p>
                    </div>
                  </div>
                  <div class="from-step-content">
                    <div class="note note-md note-info note-plane">
                      <em class="fas fa-info-circle"></em>
                      <p>아래 형식에 개인정보를 정확하게 입력해 주세요. 제출한 후에는 편집할 수 없습니다.</p>
                    </div>
                    <div class="gaps-2x"></div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="input-item input-with-label">
                          <label for="first-name" class="input-item-label">First Name (이름)</label>
                          <input v-model="kycForm.firstName" class="input-bordered" type="text" id="first-name" name="first-name" required>
                              </div><!-- .input-item -->
                        </div><!-- .col -->
                        <div class="col-md-6">
                          <div class="input-item input-with-label">
                            <label for="last-name" class="input-item-label">Last Name (성)</label>
                            <input v-model="kycForm.lastName" class="input-bordered" type="text" id="last-name" name="last-name" required>
                              </div><!-- .input-item -->
                          </div><!-- .col -->
                          <div class="col-md-6">
                            <div class="input-item input-with-label">
                              <label for="email-address" class="input-item-label">Email Address (이메일주소)</label>
                              <input v-model="kycForm.email" class="input-bordered" type="text" id="email-address" name="email-address" required>
                             </div><!-- .input-item -->
                            </div><!-- .col -->
                            <div class="col-md-6">
                              <div class="input-item input-with-label">
                                <label for="phone-number" class="input-item-label">Phone Number (전화번호)</label>
                                <input v-model="kycForm.phoneNumber" class="input-bordered" type="text" id="phone-number" name="phone-number" required>
                              </div><!-- .input-item -->
                              </div><!-- .col -->
                              <div class="col-md-6">
                                <div class="input-item input-with-label">
                                  <label for="nationality" class="input-item-label">Nationality (국적)</label>
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
                              <h4>Step 2 : 신분 확인</h4>
                              <p>신분 확인을 위해 아래 문서 혹은 사진을 업로드 해주세요.</p>
                            </div>
                          </div>
                          <div class="from-step-content">
                            <div class="note note-md note-info note-plane">
                              <em class="fas fa-info-circle"></em>
                              <p>다음 문서중 하나를 선택해 업로드 해주세요.</p>
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
                                <h5 class="kyc-upload-title">업로드에 지장이 없도록 다음 사항을 확인해주세요.</h5>
                                <ul class="kyc-upload-list">
                                  <li>jpg, png 형식의 파일만 업로드가 가능합니다. 최대용량: 6MB</li>
                                </ul>
                                <div class="gaps-4x"></div>
                                <span class="upload-title">여권 사본을 업로드 해주세요</span>
                                <div class="row align-items-center">
                                  <div class="col-7">
                                    <div class="upload-box">
                                      <div class="upload-zone">
                                        <div class="dz-message" data-dz-message>
                                          <input type="file" class="btn text-dark" ref="kycForm_frontPassport" accept="image/*" style="background-color: #f3f8ff;"/>
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
                                    <span class="upload-title">여권을 들고 찍은 본인 사진을 업로드 해주세요</span>
                                    <div class="row align-items-center">
                                      <div class="col-7">
                                        <div class="upload-box">
                                          <div class="upload-zone">
                                            <div class="dz-message" data-dz-message>
                                              <input type="file" class="btn text-dark" ref="kycForm_selfiePassport" accept="image/*" style="background-color: #f3f8ff;"/>
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
                                        <h5 class="kyc-upload-title">업로드에 지장이 없도록 다음 사항을 확인해주세요.</h5>
                                        <ul class="kyc-upload-list">
                                          <li>jpg, png 형식의 파일만 업로드가 가능합니다. 최대용량: 6MB</li>
                                        </ul>
                                        <div class="gaps-4x"></div>
                                        <span class="upload-title">주민등록증 앞면 사본을 업로드 해주세요</span>
                                        <div class="row align-items-center">
                                          <div class="col-7">
                                            <div class="upload-box">
                                              <div class="upload-zone">
                                                <div class="dz-message" data-dz-message>
                                                  <input type="file" class="btn text-dark" ref="kycForm_frontIdCard" accept="image/*" style="background-color: #f3f8ff;"/>
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
                                            <span class="upload-title">주민등록증 뒷면 사본을 업로드 해주세요</span>
                                            <div class="row align-items-center">
                                              <div class="col-7">
                                                <div class="upload-box">
                                                  <div class="upload-zone">
                                                    <div class="dz-message" data-dz-message>
                                                      <input type="file" class="btn text-dark" ref="kycForm_backIdCard" accept="image/*" style="background-color: #f3f8ff;"/>
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
                                                <span class="upload-title">주민등록증을 들고 찍은 본인 사진을 업로드 해주세요</span>
                                                <div class="row align-items-center">
                                                  <div class="col-7">
                                                    <div class="upload-box">
                                                      <div class="upload-zone">
                                                        <div class="dz-message" data-dz-message>
                                                          <input type="file" class="btn text-dark" ref="kycForm_selfieIdCard" accept="image/*" style="background-color: #f3f8ff;"/>
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
                                                    <h5 class="kyc-upload-title">업로드에 지장이 없도록 다음 사항을 확인해주세요.</h5>
                                                    <ul class="kyc-upload-list">
                                                      <li>jpg, png 형식의 파일만 업로드가 가능합니다. 최대용량: 6MB</li>
                                                    </ul>
                                                    <div class="gaps-4x"></div>
                                                    <span class="upload-title">운전면허증 앞면 사본을 업로드 해주세요</span>
                                                    <div class="row align-items-center">
                                                      <div class="col-8">
                                                        <div class="upload-box">
                                                          <div class="upload-zone">
                                                            <div class="dz-message" data-dz-message>
                                                              <input type="file" class="btn text-dark" ref="kycForm_frontDrivingLicense" accept="image/*" style="background-color: #f3f8ff;"/>
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
                                                        <span class="upload-title">운전면허증 뒷면 사본을 업로드 해주세요</span>
                                                        <div class="row align-items-center">
                                                          <div class="col-8">
                                                            <div class="upload-box">
                                                              <div class="upload-zone">
                                                                <div class="dz-message" data-dz-message>
                                                                  <input type="file" class="btn text-dark" ref="kycForm_backDrivingLicense" accept="image/*" style="background-color: #f3f8ff;"/>
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
                                                            <span class="upload-title">운전면허증을 들고 찍은 본인 사진을 업로드 해주세요</span>
                                                            <div class="row align-items-center">
                                                              <div class="col-7">
                                                                <div class="upload-box">
                                                                  <div class="upload-zone">
                                                                    <div class="dz-message" data-dz-message>
                                                                      <input type="file" class="btn text-dark" ref="kycForm_selfieDrivingLicense" accept="image/*" style="background-color: #f3f8ff;"/>
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
                                                            <div class="gaps-2x" style="color: red;font-weight: bold;">* 신분증과 본인사진 불 일치시 KYC 인증이 거절될 수 있습니다.</div>
                                                          </div><!-- .from-step-content -->
                                                        </div><!-- .from-step-item -->

                                                        <div class="from-step-item">
                                                          <div class="from-step-heading">
                                                            <div class="from-step-number">03</div>
                                                            <div class="from-step-head">
                                                              <h4>Step 3 : 이더리움 발송 지갑 주소</h4>
                                                              <p>이더리움을 발송하고 토큰을 받으실 지갑 주소를 입력해주세요.</p>
                                                            </div>
                                                          </div>
                                                          <div class="from-step-content">
                                                            <div class="note note-md note-info note-plane">
                                                              <em class="fas fa-info-circle"></em>
                                                              <p>업비트, 빗썸, 코인원, 바이넨스 등과 같은 거래소 지갑주소는 사용이 불가능합니다.</p>
                                                            </div>
                                                            <div class="gaps-2x"></div>
                                                            <div class="row">
                                                            </div><!-- .row -->
                                                            <div class="input-item input-with-label">
                                                              <label for="eth_address" class="input-item-label">본인의 이더리움 지갑 주소를 입력하세요</label>
                                                              <input class="input-bordered" type="text" v-model="kycForm.eth_address" id="eth_address" ref="eth_address" name="eth_address">
                                                              <span class="input-note">참고: 지갑 주소는 반드시 ERC20이 호환가능해야합니다. 지갑 Private key 를 반드시 보유해야합니다.</span>
                                                            </div><!-- .input-item -->
                                                            <div class="gaps-2x"></div><!-- 20px gap -->
                                                            <a class="btn btn-primary text-white" @click="onSubmitKycApplication">작성 완료</a>
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
        email: this.$session.get('user').email,
        phoneNumber: '',
        documentType: '여권',
        nationality: '',
        documentFront: '',
        documentBack: '',
        selfie: '',
        eth_address: ''
      }
    }
  },
  computed: {
    ...mapState({
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
      const formData = new FormData()
      if (this.kycForm.firstName && this.kycForm.lastName && this.kycForm.email && this.kycForm.phoneNumber && this.kycForm.documentType && this.kycForm.nationality && this.kycForm.eth_address) {
        if (Validate.isValidEmail(this.kycForm.email)) {
          if (this.kycForm.documentType) {
            switch (this.kycForm.documentType) {
              case '여권':
                this.kycForm.documentFront = this.$refs.kycForm_frontPassport.files[0]
                this.kycForm.documentBack = this.$refs.kycForm_frontPassport.files[0]
                this.kycForm.selfie = this.$refs.kycForm_selfiePassport.files[0]
                break
              case '주민등록증':
                this.kycForm.documentFront = this.$refs.kycForm_frontIdCard.files[0]
                this.kycForm.documentBack = this.$refs.kycForm_backIdCard.files[0]
                this.kycForm.selfie = this.$refs.kycForm_selfieIdCard.files[0]
                break
              case '운전면허증':
                this.kycForm.documentFront = this.$refs.kycForm_frontDrivingLicense.files[0]
                this.kycForm.documentBack = this.$refs.kycForm_backDrivingLicense.files[0]
                this.kycForm.selfie = this.$refs.kycForm_selfieDrivingLicense.files[0]
                break
            }

            if (this.kycForm.documentFront && this.kycForm.documentBack && this.kycForm.selfie) {
              if (Validate.isValidImageFileSize(this.kycForm.documentFront.size) && Validate.isValidImageFileSize(this.kycForm.documentBack.size) && Validate.isValidImageFileSize(this.kycForm.selfie.size)) {
                if (Validate.isValidWalletAddress(this.kycForm.eth_address)) {
                  this.isLoading = true
                  formData.append('first_name', this.kycForm.firstName)
                  formData.append('last_name', this.kycForm.lastName)
                  formData.append('email', this.kycForm.email)
                  formData.append('contactnumber', this.kycForm.phoneNumber)
                  formData.append('doctype', this.kycForm.documentType)
                  formData.append('nationality', this.kycForm.nationality)
                  formData.append('docfront', this.kycForm.documentFront)
                  formData.append('docback', this.kycForm.documentBack)
                  formData.append('selfie', this.kycForm.selfie)
                  formData.append('iduser', this.$session.get('user').iduser)
                  formData.append('token', this.$session.get('token'))
                  formData.append('eth_address', this.kycForm.eth_address)

                  this.storeKycApplication(formData).then(() => {
                    this.isLoading = false
                    if (this.kycResponse.result) {
                      this.$session.set('kyc_status', this.kycResponse.idkyc)
                      this.$awn.success('KYC process has been submitted.')
                      setTimeout(() => {
                        this.$router.push({
                          name: 'DashboardAddress'
                        })
                      }, 1500)
                    } else {
                      this.$awn.alert(this.kycResponse.message)
                    }
                  })
                } else {
                  this.$awn.warning('Wallet address is not acceptable.')
                }
              } else {
                this.$awn.warning('Image uploaded must not exceed 10mb.')
              }
            } else {
              this.$awn.warning('Please upload your document accordingly to chosen document type.')
            }
          } else {
            this.$awn.warning('Please select a document type.')
          }
        } else {
          this.$awn.warning('문서 종류를 확인해주세요.')
        }
      } else {
        this.$awn.warning('이메일주소를 확인해주세요.')
      }
    }
  }
}
</script>
