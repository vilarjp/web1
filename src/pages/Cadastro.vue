<template lang="html">
  <div class="cadastro">
    <div class="cadastro-mask">
      <div class="container">
        <div class="formulario">
          <h1>Cadastro</h1>
          <form>
            <div class="campo">
              <label for="email">Email</label>
              <input type="text" id="email">
            </div>
            <div class="campo">
              <label for="senha">Senha</label>
              <input type="password">
            </div>
            <div class="checkbox">
              <input type="checkbox" name="" value="">
              <label for="">Cadastrar como anônimo</label>
            </div>
            <button type="submit" class="btn-custom">Confirmar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

  .cadastro {
    background: url('../assets/foto_index.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    flex: 1;

    .cadastro-mask {
      background: linear-gradient(to bottom right, rgba(177, 162, 217, 0.5), rgba(49, 37, 82, 0.9));
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
          margin-bottom: 30px;
        }

        .checkbox {
          display: flex;
          align-items: center;
          label {
            margin: 0 0 0 5px;
          }
        }

        .btn-custom {
          border: none;
          background: pink;
          width: 100px;
          border-radius: 3px;
          margin: 10px auto 0 auto;
          text-align: center;

          &:hover {
            cursor: pointer;
          }
        }

      }
    }
  }
</style>
