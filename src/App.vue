<template>
  <div id="app">
    <nav-header/>
    <nav-bar/>
    <router-view/>
    <page-footer/>
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar'
import NavHeader from '@/components/layout/Header'
import PageFooter from '@/components/layout/Footer'
export default {
  name: 'App',
  components: {
    NavBar,
    NavHeader,
    PageFooter
  }
}
</script>

<style lang="scss">

</style>
