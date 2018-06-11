<template lang="html">
  <div class="login_tela">
    <div class="login-mask">
      <div class="container">
        <div class="formulario">
          <div class="titulo">
            <section-titulo>LOGIN</section-titulo>
          </div>
          <form>
            <div class="campo">
              <label for="login">Login</label>
              <input type="text" id="email">
            </div>
            <div class="campo">
              <label for="senha"><b>Senha</b></label>
              <input type="password">
            </div>
            <div class="link">
              <a href="#">Esqueceu a senha ?</a>
            </div>
            <button type="submit" class="btn-custom">
              <router-link :to="{ name: 'Sistema', params: {} }" class="nav-link">Entrar</router-link>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
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

  .login_tela {
    background: url('../assets/foto_index.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    flex: 1;

    .login-mask {
      background: #312552;
      opacity: 0.9;
      display: flex;
      flex-direction: column;
      flex: 1;

      .container {
        margin: auto;
      }
    }

    .formulario {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px 30px;
      width: 400px;
      margin: 0 auto;
      color: #fff;


      @media (max-width: 767px) {
        width: auto;
      }

      h1 {
        text-align: left;
        width: 100%;
        margin: 0;
      }

      .titulo {
          font-family: 'Roboto', sans-serif;
          font-weight: bolder;
          color: #fff;
          margin-bottom: 30px;
          font-size: 30px;
      }

      p{
        font-size: 14px;
        color: #fff;
        font-weight: bolder;
        font-family: 'Open Sans', sans-serif;
        text-align: justify;
      }

      form {
        font-family: 'Open Sans', sans-serif;
        font-weight: bolder;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-top: 10px;

        a{
          color:white;
        }
         .campo input {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 340px;
          height: 40px;
          margin-bottom: 30px;
          border: none;
          padding: 10px;
          opacity: 0.4;
        }

        .checkbox {
          display: flex;
          align-items: center;
          label {
            margin: 0 0 0 5px;
          }
        }

        .btn-custom {
          color: #fff;
          font-weight: bolder;
          font-size: 14px;
          font-family: 'Open Sans', sans-serif;
          background-color: #A592D9;
          width: 150px;
          height: 50px;
          margin: 20px auto 0 auto;
          bottom: 20px;
          border: none;
          &:hover {
            cursor: pointer;
            background-color: #5F469F;
            border: none;
          }
        }

      }
    }
  }
</style>
