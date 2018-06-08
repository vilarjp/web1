<template lang="html">
  <section class="introducao">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-6">
          <div class="intro">
            <div class="titulo">
              <h1>Lorem ipsum dolor sit amet, consectetur. Lorem ipsum, amet, lore.</h1>
            </div>
            <div class="subtitulo">
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur. Lorem ipsum, amet, lore.</p>
            </div>
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

.introducao {
  background: lightgray;

  .intro {
    padding: 50px 0;

    .titulo {
      h1 {
        margin-bottom: 30px;
      }
    }

    .subtitulo {
      padding-right: 50px;

      p {
        margin: 0;
      }
    }
  }
}
</style>
