<template lang="html">
  <div class="assuntos-lista">
    <div class="assunto" v-for="i in 4" :key="i">
      <div class="imagem">
      </div>
      <div class="descricao">
        <p>Lorem ipsum dolor sit amet, consectetur. Lorem ipsum, amet, lore.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.assuntos-lista {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .assunto {
    display: flex;
    flex-direction: column;
    width: 200px;

    .imagem {
      height: 120px;
      width: 100%;
      background: lightgray;
      margin-bottom: 20px;
    }

    .descricao {
      p {
        margin: 0;
      }
    }
  }
}

@media (max-width: 991px) {
  .assuntos-lista {
    flex-direction: column;

    .assunto {
      width: 100%;
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
