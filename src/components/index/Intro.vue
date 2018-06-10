<template lang="html">
  <section class="introducao">
  <div class="sobreposicao">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-6">
          <div class="intro">
            <div class="titulo">
              <h1>Sororidade</h1>
              <h1>na palma da mão!</h1>
              <h1></h1>
              <h2>;)</h2>
            </div>
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Roboto');

.introducao {
  background: url('../../assets/foto_index.jpg') no-repeat 10%;
  position: relative;
  z-index: 1;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .sobreposicao{
    background: linear-gradient(to bottom right, #B1A2D9, #312552);
    position: relative;
    color: #ffffff;
    opacity: 0.8;
    z-index: 2;
  }

  .intro {
    padding: 50px 0;

    .titulo {
      h1 {
        margin-bottom: 30px;
        font-family: 'Roboto', sans-serif;
        font-weight: bolder;
      }

      h2{
        color:#B1A2D9;
          font-family: 'Roboto', sans-serif;
        font-size: 45px;
        font-weight: bolder;
      }
    }
  }
}
</style>
