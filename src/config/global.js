export default {
  global: {
    componenteFormativo:
      'El mejoramiento continuo en el Sistema de Gestión de Seguridad y Salud en el Trabajo',
    descripcionCurso:
      'Es muy importante mantener una verificación y actualización constante del conocimiento de los elementos del SG-SST y del cumplimiento de los estándares mínimos, de la planificación, contenidos, productos de la organización y planificación del SG-SST, además de la actualización de la matriz de peligros y construcción del plan de mejora según lineamientos de la Resolución 0312 del 2019. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Revisión de la política del SG-SST',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Revisión de los objetivos generales y específicos del SG-SST',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Revisión de la tabla de valores y clasificación de los estándares mínimos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Revisión de la gestión de condiciones de trabajo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Revisión de la gestión de las condiciones de salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Actualización de perfiles sociodemográficos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo:
              'Gestión de exámenes médicos ocupacionales y ausentismo laboral',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Estilos de vida y entorno saludable',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Manejo de residuos ',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo:
              'Registro, reporte e investigación de las enfermedades laborales, incidentes y accidentes de trabajo',
            hash: 't_5_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.6',
            titulo:
              'Mecanismos de vigilancia de las condiciones de salud de los trabajadores ',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo:
          'Actualización y ajustes a los sistemas de gestión, controles (protocolos, procedimientos) de acuerdo con los peligros priorizados',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Identificación de no conformidades y su análisis',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Definición de acciones preventivas y correctivas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo:
          'Actualización del plan de trabajo anual de SG-SST de acuerdo con los planes de mejora',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'AXA Colpatria. (2020). Guía para la implementación del Programa de Vigilancia Epidemiológica del COVID-19 en las empresas afiliadas a ARL AXA Colpatria. ',
      link:
        'https://asesoriavirtualaxacolpatria.co/axabiblioteca/2020_06_25_17_05_33_29196.pdf/biblioteca/TipoArchivo/',
    },
    {
      referencia:
        'Decreto 1072 del 2015. [Ministerio del Trabajo]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 25 de 2015. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
    {
      referencia: 'ICONTEC. (2012). Guía Técnica Colombiana GTC 45. ICONTEC. ',
      link: 'http://132.255.23.82/sipnvo/normatividad/GTC_45_DE_2012.pdf',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Programa de elementos de protección personal, uso y mantenimiento. MinSalud. ',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (s.f.). La organización del trabajo y los riesgos psicosociales: una mirada de género. OIT. ',
      link:
        'https://www.ilo.org/wcmsp5/groups/public/---americas/---ro-lima/---sro-san_jose/documents/publication/wcms_227402.pdf',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (s.f.). Coronavirus. OPS. ',
      link: 'https://www.paho.org/es/temas/coronavirus',
    },
    {
      referencia:
        'Resolución 0312 de 2019. [Ministerio del Trabajo]. Por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST. Febrero 13 de 2019.  ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
    {
      referencia:
        'Resolución 773 de 2021. [Ministerio del Trabajo]. Por la cual se definen las acciones que deben desarrollar los empleadores para la aplicación del Sistema Globalmente Armonizado (SGA) de Clasificación y Etiquetado de Productos Químicos en los lugares de trabajo y se dictan otras disposiciones en materia de seguridad química. Abril 7 de 2021. ',
      link: 'https://safetya.co/normatividad/resolucion-773-de-2021/',
    },
    {
      referencia:
        'Resolución 777 de 2021. [Ministerio de Salud y Protección Social]. Por medio de la cual se definen los criterios y condiciones para el desarrollo de las actividades económicas, sociales y del Estado y se adopta el protocolo de bioseguridad para la ejecución de estas. Junio 2 de 2021. ',
      link:
        'https://www.mineducacion.gov.co/1759/articles-405413_documento_pdf.pdf',
    },
    {
      referencia: 'SURA. (2005). Matriz de riesgos específica COVID-19. SURA. ',
      link:
        'https://segurossura.com/content/uploads/sites/6/2020/09/Anexo-10-Matriz-de-Riesgos-especifica-COVID-19.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'Acción tomada para eliminar la causa de una no conformidad detectada u otra situación no deseable.',
    },
    {
      termino: 'Acción de mejora',
      significado:
        'Acción de optimización del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), para lograr mejoras en el desempeño de la organización en la seguridad y la salud en el trabajo de forma coherente con su política.',
    },
    {
      termino: 'Alta dirección',
      significado:
        'Persona o grupo de personas que dirigen y controlan una empresa.',
    },
    {
      termino: 'Autorreporte de condiciones de trabajo y salud',
      significado:
        'Proceso mediante el cual el trabajador o contratista reporta por escrito al empleador o contratante las condiciones adversas de seguridad y salud que identifica en su lugar de trabajo.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Es un conjunto de normas, medidas y protocolos que son aplicados en múltiples procedimientos realizados en los trabajos, con el objetivo de contribuir a la prevención de riesgos o infecciones derivadas de la exposición a agentes potencialmente infecciosos o con cargas significativas de riesgo biológico, químico y/o físicos, como por ejemplo, el manejo de residuos especiales, almacenamiento de reactivos y uso de barreras protectoras, entre otros.',
    },
    {
      termino: 'Condiciones de salud',
      significado:
        'El conjunto de variables objetivas y de autorreporte de condiciones fisiológicas, psicológicas y socioculturales que determinan el perfil sociodemográfico y de morbilidad de la población trabajadora.',
    },
    {
      termino: 'Diagnóstico de las condiciones de trabajo',
      significado:
        'Resultado del procedimiento sistemático para identificar, localizar y valorar aquellos elementos, peligrosos o factores que tienen influencia significativa en la generación de riesgos para la seguridad y la salud de los trabajadores.',
    },
    {
      termino: 'Enfermedad laboral',
      significado:
        'La contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar. El Gobierno Nacional determinará en forma periódica las enfermedades que se consideran como laborales y, en los casos en que una enfermedad no figure en la tabla de enfermedades laborales, pero se demuestre la relación de causalidad con los factores de riesgo ocupacionales será reconocida como enfermedad laboral, conforme a lo establecido en las normas legales vigentes (Ley 1562 de 2012, Artículo 4).',
    },
    {
      termino: 'Exposición',
      significado:
        'Situación en la cual las personas se encuentran en contacto con los peligros (GTC 45 V 2012).',
    },
    {
      termino: 'Exposición de riesgo ocupacional biológico',
      significado:
        'Es el contacto de membranas mucosas, piel no intacta o exposición percutánea por herida con objeto corto punzante por parte de un trabajador por causa o con ocasión o a consecuencia de la realización de un trabajo u oficio, con fluidos potencialmente infectantes (sangre, líquido céfalo-raquídeo, líquido sinovial, líquido pleural, líquido peritoneal, líquido pericárdico, líquido amniótico, semen y secreciones vaginales o cualquier secreción visiblemente contaminada con sangre, y que puede suponer un riesgo de infección a través del mismo).',
    },
    {
      termino: 'Evaluación del riesgo',
      significado:
        'Proceso para determinar el nivel de riesgo asociado al nivel de probabilidad de que dicho riesgo se concrete y al nivel de severidad de las consecuencias de esa concreción.',
    },
    {
      termino: 'Peligro',
      significado:
        'Fuente, situación o acto con potencial de causar daño en la salud de los trabajadores, en los equipos o en las instalaciones.',
    },
    {
      termino: 'Perfil sociodemográfico',
      significado:
        'De la población trabajadora, que incluye la descripción de las características sociales y demográficas de un grupo de trabajadores, tales como: grado de escolaridad, ingresos, lugar de residencia, composición familiar, estrato socioeconómico, estado civil, raza, ocupación, área de trabajo, edad, sexo y turno de trabajo.',
    },
    {
      termino: 'Vigilancia epidemiológica de la salud en el trabajo',
      significado:
        'Comprende la recopilación, el análisis, la interpretación y la difusión continuada y sistemática de datos a efectos de la prevención.',
    },
    {
      termino: 'Virus',
      significado:
        'Son partículas de código genético, ADN o ARN, encapsuladas en una vesícula de proteínas. Los virus no se pueden replicar por sí solos, necesitan infectar células y usar los componentes de la célula huésped para hacer copias de sí mismos.',
    },
  ],
  complementario: [
    // {
    //   texto:
    //     'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
    //   tipo: 'Video',
    //   link: 'https://www.google.com/',
    // },
    // {
    //   texto:
    //     'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
    //   tipo: 'Página web',
    //   descarga: '/downloads/prueba.pdf',
    // },
    {
      texto:
        'MinTrabajo. (s.f.). Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Guía técnica de implementación para mipymes. MinTrabajo. ',
      tipo: 'Guía',
      descarga:
        '/downloads/Guia tecnica de implementacion del SG-SST para Mipymes.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social. (2020).  Recomendaciones para el cuidado de la salud mental y la promoción de la convivencia en la flexibilización de la medida de aislamiento preventivo durante la pandemia por COVID-19. Consejo Nacional de Salud Mental.',
      tipo: 'Documento',
      descarga:
        '/downloads/final-cartilla-orientaciones-flexibilizacion-medidas-aislamiento240820.pdf',
    },
    {
      texto:
        'Ley 2088. Por la cual se regula el trabajo en casa y se dictan otras disposiciones. Mayo 12 de 2021. ',
      tipo: 'Ley',
      descarga: '/downloads/Ley_2088_de_2021.pdf',
    },
    {
      texto:
        'Colmena Seguros. Sistema de Vigilancia Epidemiológica. Oportunidad de prevención integral para COVID-19. Colmena Seguros.',
      tipo: 'Documento',
      descarga: '/downloads/s4-Cartilla de Implementacion SVE  COVID-19.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Consuelo Sánchez Pérez',
        cargo: 'Instructora',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Amparo Lopez Escudero',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Eulises Orduz Amezquita',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres      ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: [
          'Álvaro Andrés Angarita Ramirez',
          'Daniel Felipe Varón Molina',
          'Milady Tatiana Villamil Castellanos',
        ],
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
