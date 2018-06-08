<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Inicial <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sobre nós
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Citações</a>
            </li>
            <li class="nav-item login">
              <a class="nav-link" href="#">Entrar</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" aria-label="Search">
            <button class="botao-busca" type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">

.navbar {

  a.navbar-brand,
  a.nav-link {
    color: gray !important;
  }

  .navbar-collapse {
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: space-between;

    ul.navbar-nav.mr-auto {
      margin: 20px 0 10px 0 !important;

      .login {
        background: gray;
        border-radius: 5px;
      }

      li.nav-item.login a.nav-link {
        color: #fff !important;
      }
    }

    form.form-inline.my-2.my-lg-0 {
      position: relative;
      display: flex;
      justify-content: flex-end;

      input {
        margin-right: 0 !important;
      }

      button.botao-busca {
        position: absolute;
        background: transparent;
        border: none;
        right: 5px;
        color: gray;
      }
    }
  }
}

@media (max-width: 991px) {

  .navbar {
    .login {
      width: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .form-inline .form-control {
      width: 100%;
    }
  }
}
</style>
