<template>

    <button @click="disparaAcao()" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>

</template>

<script>
['tipo', 'rotulo','confirmacao','estilo']
export default{

    props: {

        tipo: {
            required: true,
            type: String
        },
        rotulo:{
            required: true,
            type: String
        },

        confirmacao: Boolean,
        estilo: String

    },

    methods: {
        disparaAcao(){

            if(this.confirmacao){
                if(confirm('Confirma operação?')){           
                    this.$emit('botaoAtivado');
                }
                return;
            }
             this.$emit('botaoAtivado');
        }
    },

    computed: {
        estiloDoBotao(){
            if(this.estilo == 'padrao' || !this.estilo) return 'btn btn-default';

            if(this.estilo == 'perigo') return 'btn btn-danger';

            if(this.estilo == 'sucesso') return 'btn btn-success';


        }
    }

}

</script>

<style scoped>
    .botao {
        display: <inline-block></inline-block>;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }

</style>