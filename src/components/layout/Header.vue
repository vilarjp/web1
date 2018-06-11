<template lang="html">
  <header v-if="rota != 'Sistema'">
      <div class="container">
        <div class="header">
          <div class="left">
            <router-link :to="{ name: 'Index', params: {} }" class="navbar-brand"><img src="@/assets/logoRuim.png" alt=""></router-link>
          </div>
          <div class="right">
            <ul>
              <li>
                <a href="#"> <!-- add algum efeito java script -->
                  <i class="fa fa-search" aria-hidden="true"></i>
                </a>
              </li>
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
      </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      rota: ''
    }
  },
  watch: {
    '$route' (to, from) {
      this.rota = to.name
    }
  },
  mounted() {
    if(this.$route.name == 'Sistema') {
      this.rota = 'Sistema'
    }
  }
}
</script>

<style lang="scss">

  header {
    background: #fff;

    img{
      width: 25%;
      padding: 5px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .right {
        ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            margin-left: 10px;
          }
        }
      }

      .right li a,
      .left a {
        color: #7D5DD2;
        font-size: 22px;
        margin-left: 10px;
      }

      .right li a:hover,
      .right li a:focus,
      .left a:hover,
      .left a:focus {
        color: #433D52;
        text-decoration: none !important;
      }
    }
  }
</style>
