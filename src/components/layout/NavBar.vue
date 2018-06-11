<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light" v-if="rota != 'Sistema'">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown" @click="scrollDown('sobre')">
              <router-link :to="{ name: 'Index', params: {} }" class="nav-link">SOBRE</router-link>
            </li>
            <li class="nav-item dropdown" @click="scrollDown('news')">
              <router-link :to="{ name: 'Index', params: {} }" class="nav-link">NEWS</router-link>
            </li>
            <li class="nav-item dropdown" @click="scrollDown('comentarios')">
              <router-link :to="{ name: 'Index', params: {} }" class="nav-link">COMENTÁRIOS</router-link>
            </li>
            <li class="nav-item dropdown" @click="scrollDown('apoio')">
              <router-link :to="{ name: 'Index', params: {} }" class="nav-link">APOIO</router-link>
            </li>
            <li class="nav-item dropdown" @click="scrollDown('contato')">
              <router-link :to="{ name: 'Index', params: {} }" class="nav-link">CONTATO</router-link>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse login">
          <ul>
            <li class="nav-item login">
              <router-link class="nav-link" :to="{ name: 'Login', params: {} }">ENTRAR</router-link>
            </li>
            <li class="nav-item login">
              <router-link class="nav-link" :to="{ name: 'Cadastro', params: {} }" style="padding-right: 0px;">JUNTE-SE A NÓS</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
  methods: {
    scrollDown(position) {
      let pageWidth = window.innerWidth

      if(position == 'sobre') {
        if(pageWidth >= 992 ) {
          window.scroll({ top: 565, left: 0, behavior: 'smooth' });
        } else {
          window.scroll({ top: 800, left: 0, behavior: 'smooth' });
        }
      }

      else if(position == 'news') {
        if(pageWidth >= 1200 ) {
          window.scroll({ top: 1115, left: 0, behavior: 'smooth' });
        } else if(pageWidth < 1200 && pageWidth >= 992 ) {
          window.scroll({ top: 1200, left: 0, behavior: 'smooth' });
        } else if(pageWidth < 992 && pageWidth >= 768) {
          window.scroll({ top: 1530, left: 0, behavior: 'smooth' });
        } else if(pageWidth < 768 && pageWidth >= 425) {
          window.scroll({ top: 1910, left: 0, behavior: 'smooth' });
        } else if(pageWidth < 425 && pageWidth >= 375) {
          window.scroll({ top: 2000, left: 0, behavior: 'smooth' });
        } else {
          window.scroll({ top: 2150, left: 0, behavior: 'smooth' });
        }
      }

      else if(position == 'comentarios') {
        if(pageWidth >= 1200 ) {
          window.scroll({ top: 1300, left: 0, behavior: 'smooth' });
        }
        else if(pageWidth < 1200 && pageWidth >= 992) {
          window.scroll({ top: 1400, left: 0, behavior: 'smooth' });
        }
        else if(pageWidth < 992 && pageWidth >= 768) {
          window.scroll({ top: 1530, left: 0, behavior: 'smooth' });
        }
        else if(pageWidth < 768 && pageWidth >= 425) {
          window.scroll({ top: 2200, left: 0, behavior: 'smooth' });
        }
        else if(pageWidth < 425 && pageWidth >= 375) {
          window.scroll({ top: 2270, left: 0, behavior: 'smooth' });
        } else {
          window.scroll({ top: 2550, left: 0, behavior: 'smooth' });
        }
      }

      else if(position == 'apoio') {
        if(pageWidth >= 1200 ) {
          window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
        }
        else if (pageWidth < 1200 && pageWidth >= 767) {
            window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
        }
        else if (pageWidth < 767 && pageWidth >= 425) {
            window.scroll({ top: 1500, left: 0, behavior: 'smooth' });
        }
      }

      else {
        window.scroll({ top: 9999, left: 0, behavior: 'smooth' });
      }

    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.navbar {
  a.navbar-brand,
  a.nav-link {
    color: #4f4f4f;
    font-family: 'Open Sans';
    font-size: 16px;
    font-weight: lighter;
  }

  .navbar-collapse.login{
    align-items: flex-end;
    justify-content: space-between;
    padding-right: 0px;

    ul{
      list-style-type::none;
      margin: 20px 0 10px 0 !important;
      display: flex;

      a.nav-link{
        color:#8a7f80;
        font-size: 14px;
      }
      a.nav-link:hover{
        color:#7D5DD2;
      }
    }
  }

  #navbarSupportedContent .nav-item .nav-link::before {
   content: "";
   position: absolute;
   z-index: 2;
   left: 0;
   right: 0;
  }

  #navbarSupportedContent .nav-item .nav-link::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: 0;
    right: 100%;
    bottom: 50%;
    background: #7D5DD2; /*** COLOR OF THE LINE ***/
    height: 3px; /*** THICKNESS OF THE LINE ***/
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
    #navbarSupportedContent .nav-item .nav-link:hover {
      opacity: 1 !important;
    }
    #navbarSupportedContent .nav-item .nav-link:hover:before {
     right: 0;
    }
    #navbarSupportedContent .nav-item .nav-link:before {
     bottom: 10%;
    }

  .navbar-collapse {
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: space-between;

    ul.navbar-nav.mr-auto {
      margin: 20px 0 10px 0 !important;

      li {
        margin-right: 50px;

        a {
          padding: 8px 0;
        }
      }
    }

    form.form-inline.my-2.my-lg-0 {
      position: relative;
      display: flex;
      justify-content: flex-end;

    input {
        margin-right: 0 !important;
      }
    }
  }
}

@media (max-width: 767px) {

  header {
    .left {
      width: 140px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (max-width: 991px) {

  header {
    a {
      margin: 0 !important;
      width: 100%;
      height: 100%;
    }

    .navbar-brand {
      margin: 0;
      padding: 0;
    }
  }

  .navbar {
    margin-bottom: 20px;
    .form-inline .form-control {
      width: 100%;
    }
  }

  .navbar-expand-lg>.container, .navbar-expand-lg>.container-fluid {
    padding: 0 15px;
    margin-top: 20px;
  }
}
</style>
