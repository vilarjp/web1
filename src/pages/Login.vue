<template lang="html">
  <div class="login">
    <div class="container">
      <div class="formulario">
        <h1>Entrar</h1>
        <form>
          <div class="campo" :class="{'animacao' : selected == 1 || email}">
            <label for="email">Email</label>
            <input type="text" id="email" v-model="email" @focus="selected = 1" @blur="selected = 0">
          </div>
          <div class="campo" :class="{'animacao' : selected == 2 || senha}">
            <label for="senha">Senha</label>
            <input type="password" id="senha" v-model="senha" @focus="selected = 2" @blur="selected = 0">
          </div>
          <a href="#">Esqueceu seu email ou senha?</a>
          <button type="submit" class="btn-custom">Entrar</button>
          <div class="login-face">
            <a href="#">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
              Conectar com Facebook
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      senha: '',
      selected: 0
    }
  }
}
</script>

<style lang="scss">

  .login {
    margin: auto 0;
    .formulario {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid gray;
      padding: 40px 30px;
      width: 400px;
      margin: 0 auto;
      @media (max-width: 767px) {
        width: auto;
      }

      h1 {
        text-align: left;
        width: 100%;
        margin: 0;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-top: 10px;

        .campo {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
          height: 50px;
          margin-bottom: 20px;

          label {
            margin: 20px 0 0 0;
          }

          input {
            border: none;
            border-bottom: 1px solid gray;
            height: 0;
          }
        }

        .animacao {

          label {
            margin: 0;
            opacity: 0.6;
          }

          input {
            height: auto;
            padding: 0 5px;
          }
        }

        a {
          text-decoration: underline;
          color: #000;

          &:hover {
            color: lightblue;
          }
        }

        .btn-custom {
          border: none;
          background: lightgray;
          width: 100%;
          margin: 5px 0 20px 0;

          &:hover {
            cursor: pointer;
          }
        }

        .login-face {

          a {
            text-decoration: none;
            display: flex;

            .fa {
              margin-right: 15px;
              font-size: 36px;
            }
          }
        }
      }
    }
  }
</style>
