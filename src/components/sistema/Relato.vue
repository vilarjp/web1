<template lang="html">
  <div class="relato">
    <div class="titulo">
      <h1>Escreva aqui o seu relato</h1>
    </div>
    <div class="formulario">
      <form>
        <textarea></textarea>
        <div class="botoes">
          <button type="reset">Limpar</button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

  .relato {
    margin: 30px 0;
    padding: 30px 30px;
    background: #fff;
    .titulo {
      h1 {
        font-size: 24px;
        margin-bottom: 20px;
      }
    }

    .formulario {
      form {
        textarea {
          width: 100%;
          height: 100px;
        }

        .botoes {
          display: flex;
          justify-content: flex-end;

          button {
            border: none;
            background: transparent;

            &:last-child {
              margin-left: 30px;
            }
          }
        }
      }
    }
  }
</style>
