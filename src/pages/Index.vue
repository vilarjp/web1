<template lang="html">
  <div class="index">
    <intro/>
    <assuntos/>
    <depoimentos/>
    <grupos/>
    <contato/>
  </div>
</template>

<script>
import Intro from '@/components/index/Intro'
import Assuntos from '@/components/index/Assuntos'
import Depoimentos from '@/components/index/Depoimentos'
import Grupos from '@/components/index/Grupos'
import Contato from '@/components/index/Contato'
export default {
  components: {
    Intro,
    Assuntos,
    Depoimentos,
    Grupos,
    Contato
  }
}
</script>

<style lang="scss">
</style>
