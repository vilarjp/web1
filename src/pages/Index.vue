<template lang="html">
  <div class="index">
    <intro/>
    <assuntos/>
    <news/>
    <depoimentos/>
    <grupos/>
    <contato/>
  </div>
</template>

<script>
import Intro from '@/components/index/Intro'
import Assuntos from '@/components/index/Assuntos'
import News from '@/components/index/News'
import Depoimentos from '@/components/index/Depoimentos'
import Grupos from '@/components/index/Grupos'
import Contato from '@/components/index/Contato'
export default {
  components: {
    Intro,
    Assuntos,
    News,
    Depoimentos,
    Grupos,
    Contato
  }
}
</script>

<style lang="scss">
</style>
