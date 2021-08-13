<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Identificación de no conformidades y su análisis

    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-4 Una no conformidad detectada en el SG SST está definida como el no cumplimiento de un requisito. Puede ser una desviación de estándares, prácticas, procedimientos de trabajo, requisitos normativos aplicables, entre otros. 
        p.mb-4 También incluye cualquier otro no cumplimiento a un requisito del SG- SST o que suponga un posible impacto en la seguridad y la salud de los trabajadores.
        p.mb-4 En el caso de que durante la visita de los funcionarios de las direcciones territoriales del Ministerio del Trabajo para realizar la verificación en la empresa u organización del cumplimiento de los estándares mínimos de la Resolución 0312 encuentren no conformidades por el no cumplimiento de las obligaciones, normas y requisitos legales establecidos en los estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo, este organismo podrá imponer acciones correctivas o planes de mejoramiento según lo recomendado por las autoridades administrativas o por las administradoras de riesgos, de acuerdo con la siguiente tabla:
      .col-lg-4
        figure
          img(src='@/assets/curso/tema7/img01.png')

    div.BorTit.mb-3
      p.mb-0 <b>Tabla 3</b>
      p.mb-0 Recomendaciones

    .tabla-a.color-secundario.mb-5 
          table            
            thead
              tr
                th Criterio
                th Valoración
                th Acción                   
            tbody
              tr
                td.text-center <b>Puntaje obtenido menor a 60 </b>
                td Crítico
                td 
                  ul.lista-ul--color.t3.ms-3        
                    li 
                      i.lista-ul__vineta
                      | Realizar y tener a disposición un plan de mejoramiento inmediato.
                    li 
                      i.lista-ul__vineta
                      | Enviar a la respectiva ARL, un reporte de avances, máximo tres meses después de realizada la autoevaluación de estándares mínimos. 
                    li 
                      i.lista-ul__vineta
                      | Seguimiento anual y plan de visita a la empresa con valoración crítica por parte del Ministerio del Trabajo. 
              tr
                td.text-center <b>Puntaje obtenido entre 60 y 85</b>
                td Moderadamente aceptable
                td 
                  ul.lista-ul--color.t3.ms-3        
                    li 
                      i.lista-ul__vineta
                      | Realizar y tener a disposición del Ministerio del Trabajo un plan de mejoramiento. 
                    li 
                      i.lista-ul__vineta
                      | Enviar a la respectiva ARL un reporte de avances, en máximo seis (meses después de realizada la autoevaluación de los estándares mínimos. 
                    li 
                      i.lista-ul__vineta
                      | Plan de visita por parte del Ministerio del Trabajo.

              tr
                td.text-center <b>Puntaje obtenido mayor a 85</b>
                td Aceptable
                td 
                   b Mantener la calificación y evidencias a disposición del Ministerio del Trabajo e incluir en el plan anual de trabajo las mejoras que se establezcan de acuerdo con la evaluación. 
    
    p.mb-4 De acuerdo con el Artículo 29 de la Resolución 0312 “el plan debe contener como mínimo las actividades concretas a desarrollar, la persona responsable de cada una de ellas, el plazo determinado para su cumplimiento y la ejecución del plan, y los diferentes recursos administrativos y financieros destinados para su cumplimiento”.
    p.mb-5 El empleador o contratante debe rendir informe sobre el avance del plan de mejoramiento en el mes de julio de cada año, teniendo en cuenta las recomendaciones de la administradora de riesgos laborales, el cual debe contener:

    .row.justify-content-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/tema7/img02.svg')
      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador
          li 
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Las actividades concretas a desarrollar.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Las personas responsables de cada una de las actividades de mejora.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | El plazo determinado para su cumplimiento.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Los diferentes recursos administrativos y financieros destinados para la realización de las acciones de mejora.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Fundamentos y soportes de la efectividad de las acciones, actividades a subsanar y prevenir que se presenten en el futuro hechos o situaciones que afecten el bienestar y la salud de los trabajadores o personas que prestan servicios en las empresas.
          li

    p.mb-4 El seguimiento de los planes de mejoramiento está a cargo del Ministerio del Trabajo y de las administradoras de riesgos laborales.
    p.mb-4 En la Resolución 0312, Artículo 28, Parágrafo 1 se hace referencia a las autoevaluaciones de los años 2017, 2018 y del primer semestre de 2019, las cuales no deben ser registradas en las administradoras de riesgos laborales, estas deben ser conservadas por las empresas a disposición de los funcionarios del Ministerio del Trabajo.
    p.mb-5 Adicionalmente, las empresas deben remitir copia de la autoevaluación de estándares mínimos y del plan de mejoramiento a las administradoras de riesgos laborales para su estudio, análisis, comentarios y recomendaciones desde diciembre de 2019.

    .row.justify-content-center
      .col-lg-10
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema6/img02.svg")
          .anexo__texto
            p <b style="color:#E3934E !important">Enlace web.</b> Reporte autoevaluaciones SG SST. De acuerdo con la Circular 0071 del 2020 se podrán reportar las autoevaluaciones del Sistema de Gestión de Seguridad y Salud en el Trabajo de los años 2019 y 2020 en este enlace.









</template>

<script>
export default {
  name: 'Tema7',
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
