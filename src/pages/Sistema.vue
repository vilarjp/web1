<template lang="html">
  <div class="sistema">
    <div class="row">
      <div class="col-lg-4 col-xl-2">
        <div class="side-bar">
          <div class="menu">
            <div class="perfil">
              <div class="foto">
                <img src="https://www.shareicon.net/data/2016/08/18/815363_face_512x512.png" alt="">
              </div>
              <div class="menu-drop">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </div>
            </div>
            <div class="submenu">
              <div class="nome">
                <span>Nome Anônimo</span>
              </div>
              <div class="arrow-down">
                <div class="btn-group">
                  <i class="fa fa-angle-down" aria-hidden="true" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Maria Silva</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Configurar privacidade</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="navegacao">
            <ul>
              <li class="claro">
                <a href="#">Feed</a>
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
              </li>
              <li class="medio">
                <a href="#">Meus grupos</a>
                <i class="fa fa-users" aria-hidden="true"></i>
              </li>
              <li class="escuro">
                <a href="#">Fóruns</a>
                <i class="fa fa-list-ul" aria-hidden="true"></i>
              </li>
              <li class="escuro">
                <router-link :to="{ name: 'Index', params: {} }">Sair</router-link>
                <i class="fa fa-power-off" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-xl-10">
        <div class="sistema-lista">
          <div class="listagem">
            <relato/>
            <depoimento/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Relato from '@/components/sistema/Relato'
import Depoimento from '@/components/sistema/Depoimento'
export default {
  components: {
    Relato,
    Depoimento
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.sistema {
  background: #F2F2F2;
  display: flex;
  flex-direction: column;
  flex: 1;
  .side-bar {
    display: flex;
    flex-direction: column;
    height: 100%;

    .menu {
      background: #312552;
      display: flex;
      flex-direction: column;
      padding: 0 30px;
      min-height: 170px;
      color:white;


      .perfil {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;

        .foto {
          width: 80px;
          height: 80px;

          img {
            max-width: 100%;
            max-height: 100%;
            border-radius: 50%;
          }
        }

        .menu-drop {
          i.fa.fa-bars {
            font-size: 28px;
          }
        }
      }

      .submenu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        .nome {
          font-family: 'Open Sans';
          font-weight: bolder;
        }

        .arrow-down {
          i.fa.fa-angle-down {
            font-size: 24px;
          }
        }
      }
    }

    .navegacao {
      background: #fff;
      height: 100%;
      padding: 30px;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans';
        font-weight: bold;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        li {
          margin-bottom: 20px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          a {
            color: #4f4f4f;
          }
          i{
            color:#4f4f4f;
            opacity: 0.5;
          }
          i:hover{
            color:#5F469F;
          }
        }
      }
    }
  }

  .sistema-lista {
    display: flex;
    flex-direction: column;
    padding-right: 30px;

    .search-bar {
      align-self: flex-end;
    }
  }
}

@media (max-width: 991px) {
  .sistema .sistema-lista {
    padding: 0;
  }
}
</style>
