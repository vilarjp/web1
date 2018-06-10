<template lang="html">
  <div class="sistema">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="side-bar">
            <div class="menu">
              <div class="perfil">
                <div class="foto">
                  <img src="https://www.shareicon.net/data/2016/05/26/771193_people_512x512.png" alt="">
                </div>
                <div class="menu-drop">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
              </div>
              <div class="submenu">
                <div class="nome">
                  <span>Anônimo</span>
                </div>
                <div class="arrow-down">
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div class="navegacao">
              <ul>
                <li>
                  <a href="#">Feed</a>
                </li>
                <li>
                  <a href="#">Meus grupos</a>
                </li>
                <li>
                  <a href="#">Fóruns</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="sistema-lista">
            <div class="search-bar">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div class="listagem">
              <relato/>
              <depoimento v-for="i in 4"/>
            </div>
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

.sistema {
  background: lightgray;
  .side-bar {
    display: flex;
    flex-direction: column;
    height: 100%;

    .menu {
      background: gray;
      display: flex;
      flex-direction: column;
      padding: 0 30px;

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

        li {
          margin-bottom: 20px;
          a {
            color: #000;
          }
        }
      }
    }
  }

  .sistema-lista {
    display: flex;
    flex-direction: column;
    padding: 30px;

    .search-bar {
      align-self: flex-end;
    }
  }
}
</style>
