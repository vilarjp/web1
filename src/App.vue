<template>
  <div id="app">
    <nav-header/>
    <nav-bar/>
    <main>
      <router-view/>
    </main>
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

#app {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
