<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Definición de acciones preventivas y correctivas

    figure.mb-5(data-aos="zoom-in") 
          img(src='@/assets/curso/tema8/img01.png')

    p.mb-5 Atendiendo lo que sobre este tema dice el Decreto 1072 del 2015 en el Artículo 2.2.4.6.33, acciones preventivas y correctivas. El empleador debe garantizar que se definan e implementen las acciones preventivas y correctivas necesarias, con base en los resultados de la supervisión y medición de la eficacia del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), de las auditorías y de la revisión por la alta dirección. 
    p.mb-5 <b>Estas acciones entre otras deben estar orientadas a:</b>

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.div-t8.p-5.mb-5(data-aos="slide-right") 
          .col-lg-10
            p.mb-0 Identificar y analizar las causas fundamentales de las no conformidades con base en lo establecido en el presente capítulo y las demás disposiciones que regulan los aspectos del Sistema General de Riesgos Laborales.
          .col-lg-2
            figure.px-4
              img(src='@/assets/curso/tema8/img02.svg')

        .row.justify-content-center.div-t8.p-5(data-aos="slide-left") 
          .col-lg-10
            p.mb-0 La adopción, planificación, aplicación, comprobación de la eficacia y documentación de las medidas preventivas y correctivas.
          .col-lg-2
            figure.px-4
              img(src='@/assets/curso/tema8/img03.svg')

    p.mb-4 El Decreto 1072 del 2015 define la acción preventiva como la acción tomada para eliminar la causa de una no conformidad u otra situación potencial no deseable y la acción correctiva, como la acción tomada para eliminar la causa de una no conformidad detectada u otra situación no deseable. 
    p.mb-5 La definición e implementación de <b>las acciones preventivas y/o acciones de mejora</b> se derivan de los resultados de la supervisión, inspecciones, medición de los indicadores del Sistema de Gestión de SST entre otros, y de las recomendaciones del COPASST.
    br
    p.text-center.mb-5 <b>Ahora, se revisará lo que sobre este tema se da en los parágrafos del Decreto 1072 del 2015:</b>

    .row.justify-content-center
      .col-lg-5.t8.div1.d-flex(data-aos="slide-left") 
        div          
          figure.mb-4
            img(src='@/assets/curso/tema8/img04.svg') 
          p.px-5 <b>Parágrafo 1.</b>
          p.px-5 Cuando se evidencie que las medidas de prevención y protección relativas a los peligros y riesgos en Seguridad y Salud en el Trabajo son inadecuadas o pueden dejar de ser eficaces, estas deberán someterse a una evaluación y jerarquización prioritaria y sin demora por parte del empleador o contratante, de acuerdo con lo establecido en el presente capítulo. 
      .col-lg-5.t8.div3.d-flex(data-aos="slide-right") 
        div
          figure.mb-4
            img(src='@/assets/curso/tema8/img05.svg')
          p.px-5 <b>Parágrafo 2.</b>
          p.px-5 Todas las acciones preventivas y correctivas deben estar documentadas, ser difundidas a los niveles pertinentes, tener responsables y fechas de cumplimiento; es de gran importancia tener en cuenta la diferencia existente entre realizar una corrección, implementar una acción correctiva o preventiva y emprender una acción de mejora.

</template>

<script>
export default {
  name: 'Tema8',
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
