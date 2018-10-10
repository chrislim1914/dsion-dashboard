<template>
  <div>
    <a href="#" data-toggle="dropdown" aria-haspopup="true" class="text-uppercase"> {{ $i18n.locale }} <em class="ti ti-angle-up"></em> </a>
    <ul class="dropdown-menu">
      <li v-for="(locale, key) in locales" :key="key"><a href="javascript:void(0)" class="text-uppercase" @click="changeLocale(locale)">{{ locale }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Locale',
  methods: {
    changeLocale (lang) {
      this.$i18n.locale = lang
      this.$cookie.set('locale', lang, 1)
    }
  },
  computed: {
    locales () {
      return Object.keys(this.$i18n.messages)
    }
  },
  created () {
    // Set locale
    if (this.$cookie.get('locale')) {
      this.changeLocale(this.$cookie.get('locale'))
    } else {
      this.changeLocale(this.$i18n.locale)
    }
  }
}
</script>
