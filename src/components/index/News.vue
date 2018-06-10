<template lang="html">
  <section>
    <div class="container">
      <div class="news">
        <div class="arrow-down" style="color:#433D52">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>
        <div class="titulo">
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-6">
            <p class="text_sobre">Lorem ipsum mi nostra posuere urna porttitor placerat,
              nisi aenean diam vestibulum congue dolor, sodales risus
              ante lacinia aptent hendrerit. risus eget condimentum sodales
              dapibus interdum mattis nostra urna, quam blandit sit adipiscing
              libero lacus pretium enim, placerat eleifend sodales. <b>Fames
              adipiscing fringilla felis.</b></p>
              <button type="submit" class="btn-custom-2">Junte-se a nós</button>
          </div>
          <div class="col-md-6 col-lg-6">
            <p class="text_nomes">
              
            </p>
          </div>
        </div>

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
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

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
        font-family: 'Roboto', sans-serif;
        font-weight: bolder;
        color: #433D52;
        margin-bottom: 50px;
      }
    }
    .assuntos-listagem {
      width: 100%;
    }
    .btn-custom-2{
      color: #fff;
      font-weight: bolder;
      font-family: 'Open Sans', sans-serif;
      background-color: #5F469F;
      border: none;
      padding: 17px;
    }
    .btn-custom-2:hover{
      background-color: #433D52;
      border: none;
    }
  }

  .text_sobre{
    font-size: 17px;
    color: #4f4f4f;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: .05em;
    line-height: 2.5em;
    text-align: justify;
  }

  .text_nomes{
    font-size: 12px;
    color: #7D5DD2;
    font-weight: bolder;
    font-family: 'Open Sans', sans-serif;
    text-align: justify;
  }

  @media (max-width: ) {

  }
</style>
