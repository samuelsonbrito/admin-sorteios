<template>
  <div class="container">
    <h1 class="centralizado">{{titulo}}</h1>

    <div class="centralizado">
      <h2>10.000</h2>
    </div>

<br><br>
    <div class="centralizado">
      <h2>Quantidade de participantes: 10</h2>
    </div>



    
    
  </div>
</template>

<script>

import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
import Transform from '../../directives/Transform';
import FotoService from '../../domain/foto/FotoService';

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  directives:{
    'meu-transform': Transform
  },

  data(){
    return {
      titulo: 'Sorteio'
    }
  },

  computed: {

  },

  methods:{


  },

  created(){

  }
  
}

</script>

<style>

  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro{
    display: block;
    width: 100%;
  }

</style>