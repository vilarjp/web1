<template lang="html">
  <section class="section-grupos">
    <div class="container">
      <div class="grupos">
        <div class="titulo">
          <section-titulo>APOIO</section-titulo>
        </div>
        <div class="carrossel">
          <carousel
          :perPage="5"
          :perPageCustom="[[320, 1], [768, 3], [992, 5]]"
          >
            <slide>
              <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/02/Total-png-logo-download.png" alt="">
            </slide>
            <slide>
              <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/02/Total-png-logo-download.png" alt="">
            </slide>
            <slide>
              <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/02/Total-png-logo-download.png" alt="">
            </slide>
            <slide>
              <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/02/Total-png-logo-download.png" alt="">
            </slide>
            <slide>
              <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/02/Total-png-logo-download.png" alt="">
            </slide>
            <slide>
              <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/02/Total-png-logo-download.png" alt="">
            </slide>
            <slide>
              <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/02/Total-png-logo-download.png" alt="">
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import SectionTitulo from '@/components/basics/SectionTitulo'
export default {
  components: {
    Carousel,
    Slide,
    SectionTitulo
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

  .section-grupos {
    padding: 30px 0;
    .grupos {
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

      .titulo {
          font-family: 'Roboto', sans-serif;
          font-weight: bolder;
          color: #433D52;
          margin-bottom: 30px;
          font-size: 30px;
      }

      .carrossel {
        max-width: 100%;

        .VueCarousel {
          text-align: center;

          .VueCarousel-slide {
            width: 180px;
            height: 100px;

            img {
              max-width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          li.VueCarousel-dot.VueCarousel-dot--active,
          li.VueCarousel-dot {
            margin: 20px 0 0 0 !important;
            padding: 0 10px !important;
          }
        }
      }

    }
  }
</style>
