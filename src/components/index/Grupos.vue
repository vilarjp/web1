<template lang="html">
  <section class="section-grupos">
    <div class="container">
      <div class="grupos">
        <div class="arrow-up">
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </div>
        <div class="titulo">
          <h3>Junte-se aos nossos grupos</h3>
        </div>
        <div class="carrossel">
          <carousel
          :perPage="5"
          :perPageCustom="[[320, 1], [768, 3], [992, 5]]"
          >
            <slide>
              <img src="https://followthecolours.com.br/wp-content/uploads/2016/05/follow-the-colours-curiosidades-cor-preta-cinza-pexels-grey.jpg" alt="">
            </slide>
            <slide>
              <img src="https://followthecolours.com.br/wp-content/uploads/2016/05/follow-the-colours-curiosidades-cor-preta-cinza-pexels-grey.jpg" alt="">
            </slide>
            <slide>
              <img src="https://followthecolours.com.br/wp-content/uploads/2016/05/follow-the-colours-curiosidades-cor-preta-cinza-pexels-grey.jpg" alt="">
            </slide>
            <slide>
              <img src="https://followthecolours.com.br/wp-content/uploads/2016/05/follow-the-colours-curiosidades-cor-preta-cinza-pexels-grey.jpg" alt="">
            </slide>
            <slide>
              <img src="https://followthecolours.com.br/wp-content/uploads/2016/05/follow-the-colours-curiosidades-cor-preta-cinza-pexels-grey.jpg" alt="">
            </slide>
            <slide>
              <img src="https://followthecolours.com.br/wp-content/uploads/2016/05/follow-the-colours-curiosidades-cor-preta-cinza-pexels-grey.jpg" alt="">
            </slide>
            <slide>
              <img src="https://followthecolours.com.br/wp-content/uploads/2016/05/follow-the-colours-curiosidades-cor-preta-cinza-pexels-grey.jpg" alt="">
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">

  .section-grupos {
    .grupos {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .arrow-up {
        .fa-angle-up {
          font-weight: bold;
          font-size: 60px;
        }
      }

      .titulo {
        width: 100%;
        h3 {
          text-align: left;
          margin-bottom: 30px;
        }
      }

      .carrossel {
        max-width: 100%;
        margin-bottom: 30px;

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
        }
      }
    }
  }
</style>
