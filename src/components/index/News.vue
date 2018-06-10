<template lang="html">
  <section class="news">
    <div class="container">
          <div class="new">
            <p>Quer acessar nosso App? Inscreva-se na nossa newsletter e seja a primeira a saber sobre o lançamento do App!
            </p>
            <form>
              <input type="text" placeholder="Seu nome">
              <input type="text" placeholder="Seu email">
              <button type="submit" class="btn-custom-2">Enviar</button>
            </form>
          </div>
        </div>
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

.news {
  background-color: #312552;
  padding: 30px 0;
  align-items: center;

  .new {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      margin-bottom: 30px;
    }

    p {
      font-size: 17px;
      color: #fff;
      font-family: 'Open Sans', sans-serif;
      letter-spacing: .05em;
      line-height: 2.5em;
      text-align: justify;
    }
    form {
      input {
        border: none;
        height: 40px;
        margin-bottom: 10px;
        padding: 10px;
      }

      .btn-custom-2 {
        color: #fff;
        font-weight: bolder;
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        background-color: #5F469F;
        border: none;
        width: 150px;
        height: 40px;
        margin: 0 auto;
        bottom: 20px;
      }
      .btn-custom-2:hover{
        background-color: #A592D9;
        border: none;
      }
    }
  }
}
</style>
