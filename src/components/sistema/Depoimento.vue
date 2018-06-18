<template lang="html">
  <div class="depoimentos">
    <div class="depoimento" v-for="depoimento in depoimentos">
      <div class="texto">
        <p v-html="depoimento.conteudo"></p>
      </div>
      <div class="form">
        <input type="text" placeholder="Responder">
      </div>
      <div class="apoio">
        <button v-if="!depoimento.apoiado" @click="toggleApoio(depoimento.id, true, depoimento.curtidas)">
          <i class="fa fa-heart" aria-hidden="true"></i>
          Apoiar
        </button>
        <button class="apoiado" v-else @click="toggleApoio(depoimento.id, false, depoimento.curtidas)">
          <i class="fa fa-heart" aria-hidden="true"></i>
          Apoiado
        </button>
        <p v-html="'Likes: ' + depoimento.curtidas"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { EventBus } from '@/main.js'

export default {
  data() {
    return {
      depoimentos: [],
      apoiado: ''
    }
  },
  methods: {
    postarDepoimento() {
      axios.post('https://web1-3c5f8.firebaseio.com/depoimentos.json', this.depoimento)
    },
    toggleApoio(id, status, curtidas) {
      let url = 'https://web1-3c5f8.firebaseio.com/depoimentos/' + id + '/apoiado.json'
      axios.put(url, status)
        .then(response => {
          let urll = 'https://web1-3c5f8.firebaseio.com/depoimentos/' + id + '/curtidas.json'
          if(status == true) {
            curtidas++
          } else {
            curtidas--
          }
          axios.put(urll, curtidas)
            .then(response => {
              this.getDepoimentos()
            })
        })
    },
    getDepoimentos() {
      axios.get('https://web1-3c5f8.firebaseio.com/depoimentos.json')
        .then(response => {
          const data = response.data
          let depoimentoTratado
          let depoimentosTratados = []
          for(let depoimento in data) {
            depoimentoTratado = {
              conteudo: data[depoimento].conteudo,
              id: depoimento,
              apoiado: data[depoimento].apoiado,
              curtidas: data[depoimento].curtidas,
            }
            this.apoiado = data[depoimento].apoiado
            depoimentosTratados.push(depoimentoTratado)
          }
          this.depoimentos = depoimentosTratados.reverse()
        })
    }
  },
  mounted() {
    this.getDepoimentos()
  },
  created() {
    EventBus.$on('enviado', event => {
      this.getDepoimentos()
    })
  }
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        background: transparent;
        border: none;
        color:#4f4f4f;

        &:hover,
        &:focus {
          cursor: pointer;
          color: #5F469F;
        }

        &.apoiado {
          background: pink;
          padding: 5px 10px;
        }
      }

      p {
        margin: 0;
      }
    }
  }
</style>
