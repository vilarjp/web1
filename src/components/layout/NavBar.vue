<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <router-link :to="{ name: 'Index', params: {} }" class="nav-link">SOBRE</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#">NEWS</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#" >COMENTÁRIOS</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#">GRUPOS</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#">CONTATO</a>
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

@media (max-width: 991px) {

  .navbar {
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
