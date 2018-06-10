<template lang="html">
  <section class="contato">
    <div class="container">
      <div class="contato-infos">
        <div class="left">
          <h3>Entre em contato</h3>
          <p>Quer saber mais sobre o app, oferecer apoio ou escrever uma matéria
            sobre o Mete a Colher? Manda um email! Nossa equipe vai retornar seu
            contato o mais breve possível.</p>
            <p>E para fazer parte da nossa comunidade de empoderamento
              feminino, acompanhe o Mete a Colher nas redes sociais!</p>
        </div>
        <div class="right">
          <form>
            <input type="text" placeholder="Seu nome">
            <input type="text" placeholder="Seu email">
            <textarea rows="8" cols="80" placeholder="Assunto"></textarea>
            <button type="submit" class="btn-custom-2">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.contato {
  background: url('https://static.wixstatic.com/media/d5ab62_a119953be24e4ea4a460685884163a08.png/v1/fill/w_1905,h_1042,al_c,usm_0.66_1.00_0.01/d5ab62_a119953be24e4ea4a460685884163a08.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 50px 0 30px 0;

  .contato-infos {
    display: flex;
    justify-content: space-between;

    .left {

      color: #fff;
      h3 {
        margin-bottom: 20px;
        text-transform: uppercase;
      }

      p {
        margin-bottom: 20px;

        &:last-child {
          margin: 0;
        }
      }
    }

    .right {
      form {
        display: flex;
        flex-direction: column;

        input {
          border: none;
          height: 40px;
          margin-bottom: 10px;
          padding: 10px;
        }

        textarea {
          padding: 10px;
        }

        .btn-custom-2 {
          background: lightpink;
          color: white;
          position: relative;
          width: 150px;
          height: 50px;
          margin: 0 auto;
          bottom: 20px;
          border: none;
        }
      }
    }

    .left,
    .right {
      width: 45%;
    }
  }
}

@media (max-width: 767px) {
  .contato {

    .contato-infos {
      flex-direction: column;

      .left,
      .right {
        width: 100%;
      }

      .left {
        margin-bottom: 40px;
      }
    }
  }
}
</style>
