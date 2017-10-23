<template>
    <div>
        <h1 class="centralizado">Cadastro</h1>
        <h2 class="centralizado">{{foto.titulo}}</h2>

         <h2 v-if="foto.id" class="centralizado">Alterando</h2>
         <h2 v-else class="centralizado">Incluindo</h2>

        <p class="centralizado" v-show="mensagem">{{mensagem}}</p>

        <form @submit.prevent="grava()">
            <div class="controle">
                <label for="titulo">TÍTULO</label>
                <input data-vv-as="título" name="titulo" v-validate="{ required: true, min: 3, max: 30 }" id="titulo" autocomplete="off" v-model="foto.titulo">
                <span v-show="this.errors.has('titulo')">{{ errors.first('titulo') }}</span>
            </div>

            <div class="controle">
                <label for="url">URL</label>
                <input id="url" autocomplete="off" @input="foto.url = $event.target.value" :value="foto.url">
                <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
            </div>

            <div class="controle">
                <label for="descricao">DESCRIÇÃO</label>
                <textarea id="descricao" autocomplete="off" @input="foto.descricao = $event.target.value" :value="foto.descricao"></textarea>
            </div>

            <div class="centralizado">
                <meu-botao rotulo="GRAVAR" tipo="submit"/>
                <router-link :to="{name: 'home'}"><meu-botao rotulo="VOLTAR" tipo="button"/></router-link>
            </div>

        </form>
    </div>
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../domain/foto/Foto';
import FotoService from '../../domain/foto/FotoService';

export default {

  components: {
    'imagem-responsiva': ImagemResponsiva, 
    'meu-botao': Botao
  },

  data(){
    return {
      foto: new Foto(),
      mensagem: '',
      resource: {},
      id: this.$route.params.id

    }
  },

  methods: {

    grava(){

      this.$validator.validateAll().then(success => {

        if(success){

          this.service.cadastra(this.foto)
          .then(() => {
            if(this.id) this.$router.push({name: "home"});
            this.foto = new Foto();
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
    this.service = new FotoService(this.$resource);

    console.log(this.id);

    if(this.id){
      this.service.busca(this.id).then(foto =>{
         this.foto = foto;
         console.log(this.foto);
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