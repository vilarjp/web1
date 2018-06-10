<template lang="html">
  <section class="depoimentos">
    <div class="container">
      <div class="depoimento">
        <div class="titulo">
          <section-titulo>COMENTÁRIOS</section-titulo>
        </div>
        <p>Lorem ipsum mi nostra posuere urna porttitor placerat,
          nisi aenean diam vestibulum congue dolor, sodales risus
          ante lacinia aptent hendrerit. risus eget condimentum sodales
          dapibus interdum mattis nostra urna, quam blandit sit adipiscing
          libero lacus pretium enim, placerat eleifend sodales fames
          adipiscing fringilla felis.</p>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitulo from '@/components/basics/SectionTitulo'
export default {
  components: {
    SectionTitulo
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.depoimentos {
  background: #f8f9fa;
  padding: 30px 0;

  .depoimento {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      margin-bottom: 30px;
    }

    p {
      margin-bottom: 0;
      text-align: justify;
    }
  }
  .titulo {
    h2 {
      font-family: 'Roboto', sans-serif;
      font-weight: bolder;
      color: #433D52;
      margin-bottom: 50px;
      font-size: 30px;
    }
  }
}
</style>
