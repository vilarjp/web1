<template lang="html">
  <div class="depoimento">
    <div class="texto">
      <p>“Lorem ipsum mi nostra posuere urna porttitor placerat, nisi aenean diam vestibulum congue dolor,
        sodales risus ante lacinia aptent hendrerit. risus eget condimentum sodales dapibus interdum mattis
        nostra urna, quam blandit sit adipiscing libero lacus pretium enim, placerat eleifend sodales.”</p>
    </div>
    <div class="form">
      <input type="text" placeholder="Responder">
    </div>
    <div class="apoio">
      <button>
        <i class="fa fa-heart" aria-hidden="true"></i>
        Apoiar
      </button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

  .depoimento {
    display: flex;
    flex-direction: column;
    background: gray;
    margin-bottom: 30px;
    padding: 30px 30px;

    .texto {
      p {
        font-style: italic;
      }
    }

    .form {
      input {
        width: 100%;
        padding: 10px;
        border: none;
      }
    }

    .apoio {
      margin-top: 20px;
      button {
        background: transparent;
        border: none;

        &:hover,
        &:focus {
          cursor: pointer;
          background: red;
        }
      }
    }
  }
</style>
