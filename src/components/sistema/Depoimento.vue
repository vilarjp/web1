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
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

  .depoimento {
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    margin: 30px 0;
    padding: 30px 30px;
    background: #fff;

    .texto {
      p {
        font-style: italic;
        font-family: 'Open Sans';
        font-weight: bold;
        color:#4f4f4f;
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
        color:#4f4f4f;

        &:hover,
        &:focus {
          cursor: pointer;
          color: #5F469F;
        }
      }
    }
  }
</style>
