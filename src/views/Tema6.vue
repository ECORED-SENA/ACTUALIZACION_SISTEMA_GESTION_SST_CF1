<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1  Actualización y ajustes a los sistemas de gestión, controles (protocolos, procedimientos) de acuerdo con los peligros priorizados

    figure.mb-5
      img(src='@/assets/curso/tema6/img01.png')

    p.mb-5 Una vez establecidos y priorizados los peligros se definen los controles necesarios para prevenirlos y/o mitigarlos en los entornos laborales, teniendo en cuenta que la pandemia producida por el SARS-CoV-2 se propaga cuando una persona infectada exhala góticas y partículas respiratorias muy pequeñas que contienen el virus, las cuales  pueden ser inhaladas por otras personas o situarse sobre sus ojos, nariz o boca; se hace indispensable gestionar el peligro biológico producido por el COVID -19 desde el Sistema de Gestión de Seguridad y Salud en el Trabajo, mediante la implementación del programa de vigilancia epidemiológica para riesgo biológico, el cual es una herramienta indispensable para la prevención, manejo y control de los peligros que puedan producir enfermedades laborales.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4(style="background-color:#DCEDEF !important")
          p.mb-0 Para realizar este programa, las organizaciones deben apoyarse en las ARL - Administradoras de Riesgos Laborales.

    Separador

    .titulo-segundo
      h2 SARS-CoV2

    p.mb-5 Según la Organización Panamericana de la Salud “los coronavirus son una extensa familia de virus que causan infecciones respiratorias que pueden ir desde el resfriado común hasta enfermedades más graves como el síndrome respiratorio de Oriente Medio (MERS) y el síndrome respiratorio agudo severo (SRAS). El coronavirus que se ha descubierto más recientemente causa la enfermedad por coronavirus. Además, se sabe que hay otros coronavirus circulando entre animales, que todavía no han infectado al ser humano”.

    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-lg-8
        a.anexo.mb-4(href="https://www.paho.org/es/temas/coronavirus" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema6/img02.svg")
          .anexo__texto
            p <b style="color:#E3934E !important">Enlace web.</b> Coronavirus. Conozca  detalladamente lo que dice la OPS sobre el SARS-CoV2.

    Separador

    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-4 <b>Ahora bien, el Artículo 4° de la Ley 1562 de 2012 y el Decreto 1477 del 2014 en la tabla de enfermedades define:</b>
        p “Enfermedad laboral aquella que es contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar. El Gobierno Nacional determinará, en forma periódica, las enfermedades que se consideran como laborales y en los casos en que una enfermedad no figure en la tabla de enfermedades laborales, pero se demuestre la relación de causalidad con los factores de riesgo ocupacionales será reconocida como enfermedad laboral”, conforme a lo establecido en las normas legales vigentes. El Artículo 13 del Decreto 538 del 202 incluyó el COVID 19 como enfermedad laboral directa, respecto a los trabajadores del sector salud.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema6/img03.png')

    p.mb-5 Hay que recordar que para que se produzca una enfermedad laboral se debe dar la combinación de tres factores el agente, el huésped y el medio, lo que es conocido como la <b>tríada ecológica</b>, en consecuencia, en la infección viral producida por <b>SARS-CoV-2</b> se debe tener en cuenta:

    .row.justify-content-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/tema6/img04.svg')
      .col-lg-6
        ul.lista-ul--color.t1.ms-4
          li
            i.fas.fa-check-double
            | El trabajador(a) con sus características biológicas, de edad, físicas, hábitos, creencias, comorbilidades, factores emocionales, enfermedades preexistentes, conocimiento, autocuidado. 
          li
            i.fas.fa-check-double
            | El medio ambiente: intra y extralaboral.
          li
            i.fas.fa-check-double
            | El agente o factor: virus COVID-19, de fácil transmisibilidad.

    p.mb-4 En la vigilancia epidemiológica del COVID-19 es fundamental el registro de las acciones desarrolladas en las áreas de trabajo, con el fin de disminuir la probabilidad de contagio durante la jornada laboral, para lo cual se deben aplicar listas de chequeo para realizar la verificación diaria antes de comenzar las labores, con el fin de constatar el cumplimiento de las condiciones de salud del trabajador, de los elementos de protección personal y del ambiente de trabajo, de modo que se asegure la prevención del contagio por COVID-19 en el entorno laboral.
    p.mb-4  La propuesta de este programa de vigilancia epidemiológica para riesgo biológico se desarrolla a partir del ciclo PHVA que consiste en Planear – Hacer – Verificar – Actuar.
    p.mb-5 A continuación, cada uno:

    TabsA.color-primario.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-primario--borde.t6.p-5(titulo="Planear")
        h4 Planear
        p.mb-4 En esta etapa se debe revisar la siguiente documentación:
        .row.justify-content-center
          .col-lg-9
            ul.lista-ul--color.t3.ms-3        
              li 
                i.lista-ul__vineta
                | Diagnóstico de las condiciones de trabajo.
              li 
                i.lista-ul__vineta
                | Factores de riesgo individuales, para definir los trabajadores expuestos sujetos de vigilancia.
              li 
                i.lista-ul__vineta
                | Informe de las condiciones de salud.
              li 
                i.lista-ul__vineta
                | Autorreporte diario de condiciones de salud.
              li 
                i.lista-ul__vineta
                | Inspecciones de seguridad, listas de chequeo enfocadas en la prevención de riesgos biológicos.
              li 
                i.lista-ul__vineta
                | Registro y seguimiento a los resultados de los indicadores del SG-SST.
              li 
                i.lista-ul__vineta
                | Análisis de la información para definición de caso.  
          .col-lg-3
            figure
              img(src='@/assets/curso/tema6/img05.svg')
                   
          
      .tarjeta.color-primario--borde.t6.p-5(titulo="Hacer")
        h4 Hacer
        p.mb-4 Ejecutar el cronograma de intervención de acuerdo con los controles propuestos definidos en la matriz de peligros, una vez realizado el análisis de la información y de acuerdo con la siguiente jerarquización:
        .row.justify-content-center
          .col-lg-9
            ul.lista-ul--color.t3.ms-3        
              li 
                i.lista-ul__vineta
                | <b>Controles de ingeniería:</b> intervención en el ambiente de trabajo.
              li 
                i.lista-ul__vineta
                | <b>Controles administrativos:</b> señalización, inspección, protocolos de bioseguridad.
              li 
                i.lista-ul__vineta
                | <b>Controles en las personas:</b> exámenes médicos, capacitación, vacunación, encuesta de autorreporte, elementos de protección personal.
              li 
                i.lista-ul__vineta
                | <b>Garantizar el control de cambios:</b> actualizar los documentos.

          .col-lg-3
            figure
              img(src='@/assets/curso/tema6/img06.svg')
      .tarjeta.color-primario--borde.t6.p-5(titulo="Verificar – evaluar")
        h4 Verificar - evaluar        
        .row.justify-content-center
          .col-lg-9
            p.mb-4 Verificar la implementación de los controles a través de la ejecución de listas de chequeo enfocadas al control del riesgo biológico.
            p Evaluar efectividad de controles (ambiente – personas) a partir de indicadores de incidencia y prevalencia de enfermedades ocasionadas por SARS CoV 2.
          .col-lg-3
            figure.px-4
              img(src='@/assets/curso/tema6/img07.svg')
      .tarjeta.color-primario--borde.t6.p-5(titulo="Actuar")
        h4 Actuar        
        .row.justify-content-center
          .col-lg-9
            ul.lista-ul--color.t3.ms-2       
              li 
                i.lista-ul__vineta
                | Revisión por la alta dirección.
              li 
                i.lista-ul__vineta
                | Revisión del plan de trabajo anual y el cronograma de capacitación, según el caso. 
              li 
                i.lista-ul__vineta
                | Definición de acciones de mejoramiento.
          .col-lg-3
            figure
              img(src='@/assets/curso/tema6/img08.svg')
    br
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-acento-contenido.fondo-t6.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/componentes/ej-02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.texto-blanco Enlace Web - COVID-19
                  p.text-small.texto-blanco Para mejorar el conocimiento sobre la implementación de programas de <br>vigilancia epidemiológica del COVID-19 puede consultar este enlace.
                .col-sm-auto
                  a.boton.color-primario(style="background-color: #FAD369 !important" :href="obtenerLink('/downloads/2020_06_25_17_05_33_29196.pdf')" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link


    p.mb-5 El Ministerio de Salud y Protección Social emitió la Resolución 777 del 2 de junio de 2021, con el objetivo de mitigar los efectos de la pandemia ocasionada por el SARS CoV-2, en la que estableció el protocolo de bioseguridad para todos los sectores económicos, con el fin de prevenir su transmisión.

    p.text-center.mb-4 <b>De acuerdo con esta resolución, las siguientes son las medidas generales recomendadas:</b>

    .row.justify-content-center.mb-5
      .col-lg-10
        figure
              img(src='@/assets/curso/tema6/img09.svg')

    .row.justify-content-center
      .col-lg-8
        a.anexo.mb-4(:href="obtenerLink('/downloads/Resolución No. 777 de 2021.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.mb-0 <b>Anexo. Protocolo de bioseguridad.</b>
            p El protocolo de bioseguridad establecido en esta resolución es de obligatorio cumplimiento en todas las organizaciones, para la revisión completa de la norma revise este siguiente enlace.

</template>

<script>
export default {
  name: 'Tema6',
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
