<template lang="html">
  <section>
    <div class="container">
      <div class="assuntos">
        <div class="arrow-down">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
        <div class="titulo">
          <section-titulo>
            Assuntos
          </section-titulo>
        </div>
        <div class="assuntos-listagem">
          <assuntos-lista/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AssuntosLista from '@/components/index/AssuntosLista'
import SectionTitulo from '@/components/basics/SectionTitulo'
export default {
  components: {
    AssuntosLista,
    SectionTitulo
  }
}
</script>

<style lang="scss">
  .assuntos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    .arrow-down {
      display: flex;
      margin-bottom: 20px;

      .fa-angle-down {
        font-weight: bold;
        font-size: 80px;
      }
    }

    .titulo {
      h2 {
        margin-bottom: 50px;
      }
    }

    .assuntos-listagem {
      width: 100%;
    }
  }

  @media (max-width: ) {

  }
</style>
