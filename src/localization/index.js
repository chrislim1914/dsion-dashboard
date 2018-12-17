import Vue from 'vue'
import VueI18n from 'vue-i18n'
import english from './english.json'
import korean from './korean.json'
import chinese from './chinese.json'

Vue.use(VueI18n)

const messages = {}
messages.en = english
messages.kr = korean
messages.cn = chinese

const i18n = new VueI18n({
  locale: 'kr',
  messages
})

export default i18n
