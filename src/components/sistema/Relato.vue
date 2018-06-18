<template lang="html">
  <div class="relato">
    <div class="titulo">
      <h1>Escreva aqui o seu relato</h1>
    </div>
    <div class="formulario">
      <form v-on:submit.prevent="enviarRelato">
        <textarea v-model="relato.conteudo"></textarea>
        <div class="botoes">
          <button type="reset" class="btn-custom1">Limpar</button>
          <button type="submit" class="btn-custom2">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { EventBus } from '@/main.js'

export default {
  data() {
    return {
      relato: {
        apoiado: false,
        conteudo: '',
        curtidas: 0
      }
    }
  },
  methods: {
    enviarRelato() {
      if(this.relato.conteudo) {
        axios.post('https://web1-3c5f8.firebaseio.com/depoimentos.json', this.relato)
          .then(response => {
            this.enviaRelato()
          })
      }
    },
    enviaRelato(){
      this.relato.conteudo = ''
      EventBus.$emit('enviado', event)
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

  .relato {
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    margin: 30px 0;
    padding: 30px 30px;
    background: #fff;

    .titulo {
      h1 {
        font-family: 'Open Sans';
        font-size: 16px;
        margin-bottom: 20px;
        color: #312552;
      }
    }

    .formulario {
      form {
        textarea {
          width: 100%;
          height: 100px;
          border: 1px solid gray;
        }

        .botoes {
          display: flex;
          justify-content: flex-end;

          .btn-custom1 {
            color: #312552;
            font-weight: bold;
            font-size: 14px;
            font-family: 'Open Sans', sans-serif;
            margin: 26px 0 0 0;
            bottom: 20px;
            background: transparent;
            border: none;

            &:hover {
              cursor: pointer;
              color: #5F469F;
            }
          }

          .btn-custom2 {
            color: #fff;
            font-weight: bold;
            font-size: 14px;
            font-family: 'Open Sans', sans-serif;
            background-color: #312552;
            width: 100px;
            height: 40px;
            margin: 20px 0 0 auto;
            bottom: 20px;
            border: none;
            &:hover {
              cursor: pointer;
              background-color: #5F469F;
              border: none;
            }
          }
        }
      }
    }
  }
</style>
