import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    kyc{
      heading: 'Identification',
      paragraphOne: 'When you apply for KYC, upload your ID card for proof. Your name and photo should be clearly visible along with the country name that issued your ID, and you can upload up to 2 pages. Your name mentioned on the form above must match the name of your government issued ID.',
      paragraphTwo: ' The attached identification document must be valid for at least one month. The validity of an expired or one month old identification document is not checked.',
      paragraphThree: 'I certify that I am not a citizen of the United States of America, a resident of the United States of America or a resident of a jurisdiction that prohibits participation in the ICO.',
      acceptButton: 'I agree',
      info: 'Some countries and regions can not pass the KYC process, so token sales are limited.'
    },
    kycApplication: {
      stepOneHeading: 'Enter personal information',
      stepOneParagraph: 'Enter simple personal information required for authentication',
      stepOneNote: 'Please enter your personal information correctly in the format below. Once submitted, it cannot be change.',
      stepTwoHeading: 'Identification',
      stepTwoParagraph: 'Please upload the following documents or photos to verify your identity.',
      stepTwoNote: 'Please select one of the following documents and upload it.',
      uploadTitle: 'Please check the following to make sure your upload does not interfere .',
      uploadFormat: 'Formats allowed: JPG and PNG files. Maximum size: 6MB',
      uploadPassportNoteOne: 'Please upload a copy of your passport.',
      uploadPassportNoteTwo: 'Please upload a picture of you holding up your passport.',
      uploadWarning: 'KYC certification may be rejected if your ID card is not match with your picture.',
      stepThreeHeading: 'Ethereum sending wallet address',
      stepThreeNote: 'Please send Ethereum and enter your wallet address to receive the token',
      walletAddressNote: 'Please enter your Ethereum wallet address',
      walletAddressWarning: 'Note: Wallet address must be compatible with ERC20. You must have a purse private key.',
      completedButton: 'Completed'
    },
    address: {
      notice: 'If you deposit to the Ethereum address , you will receive a Dsion token in the Ethereum wallet when you enter KYC.',
      agreeCheckbox: 'I agree to the above',
      confirmButton: 'Confirm deposit address'
    }
  },
  kr: {
    kyc{
      heading: '신분 확인',
      paragraphOne: 'KYC신청시 증명에 사용할 신분증을 업로드 합니다. 귀하의 이름과 사진은 신분증을 발급한 국가 이름과 함께 명확하게 보여야 하며, 최대 2페이지를 업로드 할 수 있습니다. 위에 양식에 언급된 귀하의 이름은 정부 발급 신분증의 이름과 일치 해야 합니다.',
      paragrahTwo: '첨부된 신분증명 서류는 적어도 한달 동안 유효 해야 합니다. 만료 혹은 한달 이하의 된 신분 증명 서류의 유효성은 검사되지 않습니다.',
      paragraphThree: '본인은 본인이 미합중국의 시민권자, 미합중국의 거주자 또는 ICO에 참여하는 것을 금지하는 관할권의 거주자가 아님을 확인 합니다.',
      acceptButton: '동의합니다',
      info: '일부 국가 및 지역은 KYC 프로세스를 통과할 수 없으므로 토큰 판매가 제한됩니다.'
    },
    kycApplication: {
      stepOneHeading: '개인정보 입력',
      stepOneParagraph: '인증에 필요한 간단한 개인정보를 입력합니다',
      stepOneNote: '아래 형식에 개인정보를 정확하게 입력해 주세요. 제출한 후에는 편집할 수 없습니다.',
      stepTwoHeading: '신분 확인',
      stepTwoParagraph: '신분 확인을 위해 아래 문서 혹은 사진을 업로드 해주세요.',
      stepTwoNote: '다음 문서중 하나를 선택해 업로드 해주세요.',
      uploadTitle: '업로드에 지장이 없도록 다음 사항을 확인해주세요.',
      uploadFormat: 'jpg, png 형식의 파일만 업로드가 가능합니다. 최대용량: 6MB',
      uploadPassportNoteOne: '여권 사본을 업로드 해주세요',
      uploadPassportNoteTwo: '여권을 들고 찍은 본인 사진을 업로드 해주세요',
      uploadWarning: '신분증과 본인사진 불 일치시 KYC 인증이 거절될 수 있습니다.'
      stepThreeHeading: '이더리움 발송 지갑 주소',
      stepThreeNote: '이더리움을 발송하고 토큰을 받으실 지갑 주소를 입력해주세요.',
      walletAddressNote: '본인의 이더리움 지갑 주소를 입력하세요',
      walletAddressWarning: '참고: 지갑 주소는 반드시 ERC20이 호환가능해야합니다. 지갑 Private key 를 반드시 보유해야합니다.',
      completedButton: '작성 완료'
    },
    address: {
      notice: '해당 ETH 주소로 입금하시면, KYC 입력시 입력한 Ethereum Wallet으로 Dsion 토큰을 받게 됩니다.',
      agreeCheckbox: '위 사항에 동의합니다.',
      confirmButton: '입금 주소 확인'
    }
  }
}

const i18n = new VueI18n({
  locale: 'kr',
  messages
})

export default i18n
