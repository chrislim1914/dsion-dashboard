<template>
  <div>
    <a href="#" data-toggle="dropdown" aria-haspopup="true" class="text-uppercase"> {{ locale }} <em class="ti ti-angle-up"></em> </a>
    <ul class="dropdown-menu">
      <li v-for="(locale, key) in locales" :key="key">
        <a href="javascript:void(0)" class="text-uppercase" @click="changeLocale(locale)">
          {{ locale }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Locale',
  data () {
    return {
      locale: ''
    }
  },
  methods: {
    changeLocale (lang) {
      this.$i18n.locale = lang
      this.$cookie.set('locale', lang, {expires: 1, domain: '.dsion.io'})
    }
  },
  computed: {
    locales () {
      return Object.keys(this.$i18n.messages)
    }
  },
  created () {
    // Set locale
    if (this.$cookie.get('locale', {domain: '.dsion.io'})) {
      this.locale = this.$cookie.get('locale', {domain: '.dsion.io'})
      this.changeLocale(this.$cookie.get('locale', {domain: '.dsion.io'}))
    } else {
      this.changeLocale(this.$i18n.locale)
    }
  }
}
</script>
