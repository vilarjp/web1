<template lang="html">
  <section class="contato">
    <div class="sobreposicao">
      <div class="container">
        <div class="contato-infos">
          <div class="left">
            <h3>ENTRE EM CONTATO</h3>
            <p>Quer saber mais sobre o Manal, oferecer apoio ou escrever uma matéria
              sobre ? Manda um email! Retornaremos assim que possível. Conheça também nossas redes.</p>
              <div class="redes">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i class="fa fa-facebook-f" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
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
  </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.contato {
  background: url('https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/03/o-SMARTPHONE-facebook.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;


  .sobreposicao{
    background: #312552;
    color: #ffffff;
    opacity: 0.9;
    z-index: 2;
    display: flex;
    align-items: center;
    background-size: cover;
    padding: 50px 0 30px 0;
  }
  .container{
    z-index: 3;
  }

  .contato-infos {
    display: flex;
    justify-content: space-between;

    .left {
      color: #fff;
      h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: bolder;
        color: #fff;
        margin-bottom: 50px;
        font-size: 30px;
      }

      p {
        font-size: 17px;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: .05em;
        line-height: 2.5em;
        text-align: justify;

        &:last-child {
          margin: 0;
        }
      }

      .redes {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-between;

          ul {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;

            li {
              margin-left: 10px;
            }
          }


          a {
          color: #7D5DD2;
          font-size: 45px;
          margin-left: 20px;
        }
        a:hover {
          color: #fff;
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
          color: #fff;
          font-weight: bolder;
          font-size: 14px;
          font-family: 'Open Sans', sans-serif;
          background-color: #5F469F;
          position: relative;
          width: 150px;
          height: 50px;
          margin: 0 auto;
          bottom: 20px;
          border: none;
        }
        .btn-custom-2:hover{
          background-color: #A592D9;
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
