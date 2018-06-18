<template lang="html">
  <section class="depoimentos">
    <div class="container">
      <div class="depoimento-index">
        <div class="titulo">
          <section-titulo>COMENTÁRIOS</section-titulo>
        </div>
        <div class="carrossel">
          <carousel
          :perPage="1"
          :navigationEnabled="true"
          :navigationNextLabel="proximo"
          :navigationPrevLabel="anterior"
          >
            <slide>
              <p class="citacao">“Lorem ipsum mi nostra posuere urna porttitor placerat, nisi aenean diam vestibulum congue dolor,
                sodales risus ante lacinia aptent hendrerit. risus eget condimentum sodales dapibus interdum mattis
                nostra urna, quam blandit sit adipiscing libero lacus pretium enim, placerat eleifend sodales.”</p>
              <p class="autor">
                John Snow, CEO, Mockinbird
              </p>
            </slide>
            <slide>
              <p class="citacao">“Lorem ipsum mi nostra posuere urna porttitor placerat, nisi aenean diam vestibulum congue dolor,
                sodales risus ante lacinia aptent hendrerit. risus eget condimentum sodales dapibus interdum mattis
                nostra urna, quam blandit sit adipiscing libero lacus pretium enim, placerat eleifend sodales.”</p>
              <p class="autor">
                John Snow, CEO, Mockinbird
              </p>
            </slide>
            <slide>
              <p class="citacao">“Lorem ipsum mi nostra posuere urna porttitor placerat, nisi aenean diam vestibulum congue dolor,
                sodales risus ante lacinia aptent hendrerit. risus eget condimentum sodales dapibus interdum mattis
                nostra urna, quam blandit sit adipiscing libero lacus pretium enim, placerat eleifend sodales.”</p>
              <p class="autor">
                John Snow, CEO, Mockinbird
              </p>
            </slide>
            <slide>
              <p class="citacao">“Lorem ipsum mi nostra posuere urna porttitor placerat, nisi aenean diam vestibulum congue dolor,
                sodales risus ante lacinia aptent hendrerit. risus eget condimentum sodales dapibus interdum mattis
                nostra urna, quam blandit sit adipiscing libero lacus pretium enim, placerat eleifend sodales.”</p>
              <p class="autor">
                John Snow, CEO, Mockinbird
              </p>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitulo from '@/components/basics/SectionTitulo'
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    SectionTitulo,
    Carousel,
    Slide
  },
  data () {
    return {
      proximo: '<i class="fa fa-chevron-right carousel-arrows">',
      anterior: '<i class="fa fa-chevron-left carousel-arrows">'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.depoimentos {
  background: #f8f9fa;
  padding: 30px 0;

  .depoimento-index {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .titulo {
      h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: bolder;
        color: #433D52;
        margin-bottom: 50px;
        font-size: 30px;
      }
    }

    .carrossel {
      max-width: 100%;
      .citacao {
        padding: 0 60px;
        font-style: italic;
        font-size: 18px;
        text-align: center;
      }

      .autor {
        text-align: center;
        font-size: 14px;
        opacity: 0.8;
      }
    }
  }
}

@media (max-width: 767px) {
  .depoimentos .depoimento-index .carrossel .citacao {
    padding: 0;
  }

  .depoimentos {
    .VueCarousel-navigation {
      display: none;
    }
  }
}
</style>
