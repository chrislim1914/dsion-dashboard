<template>
  <div>
    <a href="#" data-toggle="dropdown" aria-haspopup="true" class="text-uppercase"> {{ locale }} <em class="ti ti-angle-up"></em> </a>
    <div class="dropdown-menu">
      <a href="#" class="dropdown-item text-uppercase" v-for="(locale, key) in locales" :key="key" @click.prevent="changeLocaleReload(locale);">
        {{ locale }}
      </a>
    </div>
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
      this.locale = lang
      this.$i18n.locale = lang
      this.$cookie.set('locale', lang, {expires: 1, domain: '.dsion.io'})
    },
    changeLocaleReload (lang) {
      this.changeLocale(lang)
      window.location.reload()
    }
  },
  computed: {
    locales () {
      return Object.keys(this.$i18n.messages)
    }
  },
  created () {
    // Set locale
    if (this.$cookie.get('locale', {expires: 1, domain: '.dsion.io'})) {
      this.changeLocale(this.$cookie.get('locale', {expires: 1, domain: '.dsion.io'}))
    } else {
      this.changeLocale(this.$i18n.locale)
    }
  }
}
</script>
