<template>
    <img class="imagem-resposiva" :src="url" :alt="titulo">
</template>

<script>

export default{
    props: ['url','titulo']
}

</script>

<style scoped>

  .imagem-resposiva{
    width: 100%;
  }

</style>