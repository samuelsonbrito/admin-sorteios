<template>
    <div>
        <h1 class="centralizado">Cadastro</h1>
        <h2 class="centralizado">{{drows.nome}}</h2>

         <h2 v-if="drows.id" class="centralizado">Alterando</h2>
         <h2 v-else class="centralizado">Sorteio</h2>

        <p class="centralizado" v-show="mensagem">{{mensagem}}</p>

        <form @submit.prevent="grava()">
            <div class="controle">
                <label for="titulo">NOME</label>
                <input class="form-control" data-vv-as="name" name="name" v-validate="{ required: true, min: 3, max: 30 }" id="name" autocomplete="off" v-model="drows.name">
                <span v-show="this.errors.has('name')">{{ errors.first('name') }}</span>
            </div>

            <div class="controle">
                <label for="email">E-MAIL</label>
                <input class="form-control" id="email" autocomplete="off" @input="drows.email = $event.target.value" :value="drows.email">
            </div>

            <div class="controle">
                <label for="testimony">COMO CONHECEU O CANAL?</label>
                <textarea class="form-control" id="testimony" autocomplete="off" @input="drows.testimony = $event.target.value" :value="drows.testimony"></textarea>
            </div>

            <div class="centralizado">
                <router-link :to="{name: 'home'}"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
                <meu-botao rotulo="GRAVAR" tipo="submit" estilo="sucesso"/>
                
            </div>

        </form>
    </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../domain/foto/Foto';
import Drows from '../../domain/drow/Drows';
import DrowsService from '../../domain/drow/DrowsService';
import FotoService from '../../domain/foto/FotoService';

export default {

  components: {
    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  data(){
    return {
      drows: new Drows(),
      mensagem: '',
      resource: {},
      id: this.$route.params.id

    }
  },

  methods: {

    grava(){

      this.$validator.validateAll().then(success => {

        if(success){

          this.service.cadastra(this.drows)
          .then(() => {
            if(this.id) this.$router.push({name: "home"});
            this.drows = new Drows();
            this.mensagem = 'Salvo com sucesso!';
            }, err => {
              this.mensagem = 'Erro ao salvar!'
              console.log(err);
          }); 
        
        }

      });

    }

  },
  created(){

    this.service = new DrowsService(this.$resource);

    console.log(this.id);

    if(this.id){
      this.service.busca(this.id).then(drows =>{
         this.drows = drows;
         console.log(this.drows);
      });
    }

  }
}

</script>

<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>