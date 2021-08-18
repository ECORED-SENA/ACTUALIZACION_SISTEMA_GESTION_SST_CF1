<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 9
      h1 Actualización del plan de trabajo anual de SG-SST de acuerdo con los planes de mejora

    figure(data-aos="zoom-in") 
      .video           
        iframe(iframe width="1255" height="706" src="https://www.youtube.com/embed/esZNJmokj_o?list=PLkc5n6npRWkhCFlQiyaDFZ0tLzyMm6BpC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
