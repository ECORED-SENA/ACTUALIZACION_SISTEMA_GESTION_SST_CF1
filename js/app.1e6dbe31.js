(function(e){function a(a){for(var n,i,c=a[0],l=a[1],s=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,s||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(t.splice(a--,1),e=l(l.s=o[0]))}return e}var n={},i={app:0},r={app:0},t=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"5e3a5391","chunk-0206bfa0":"0825235a","chunk-04b93936":"53ac160d","chunk-13a6037e":"fcad3398","chunk-16015154":"d570357b","chunk-17977988":"69764697","chunk-2c06842c":"b5e88546","chunk-2d208d90":"eee25b73","chunk-2d21d0e2":"b87b8f06","chunk-2d22c123":"b7576b7a","chunk-2e80bb9a":"4aaa87ef","chunk-3145fe0f":"ab68facd","chunk-328f70dd":"9f8800b4","chunk-3807499c":"285672f6","chunk-3dc647fd":"25b6d86f","chunk-4cdd78c0":"bc5af3fe","chunk-4fde0a08":"3f9b4078","chunk-515a8379":"3b815aca","chunk-53ccb27e":"b276b67d","chunk-59974754":"29c1874d","chunk-766a929b":"f5d7a424","chunk-839300a6":"fd181310","chunk-c796899c":"7dad3620","chunk-dbb9869e":"c6daf5bd",comple:"0c446cc6",creditos:"58215e5e",glosario:"2a0f63cd",intro:"20cbe532",referencias:"0d43128a",tema1:"93fcfb5f",tema2:"83dc0b52",tema3:"5d6db825"}[e]+".js"}function l(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"73d90ca2","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"ac7d7229","chunk-766a929b":"6481af35","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"044c80ec",creditos:"9ee7a680",glosario:"ed3fdae7",intro:"0e433876",referencias:"0fdfb506",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=l.p+n,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var s=t[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],d=s.getAttribute("data-href");if(d===n||d===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=n,delete i[e],m.parentNode.removeChild(m),o(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)a.push(n[2]);else{var t=new Promise((function(a,o){n=r[e]=[a,o]}));a.push(n[2]=t);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e);var u=new Error;s=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}r[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(a)},l.m=e,l.c=n,l.d=function(e,a,o){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)l.d(o,n,function(a){return e[a]}.bind(null,n));return o},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var m=d;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,l=o("2877"),s=Object(l["a"])(c,i,r,!1,null,null,null),d=s.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),p=o("ae58"),f=o("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema3").then(o.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return o.e("tema3").then(o.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return o.e("tema3").then(o.bind(null,"92ea"))}},{path:"tema7",name:"tema7",component:function(){return o.e("tema3").then(o.bind(null,"a2b2"))}},{path:"tema8",name:"tema8",component:function(){return o.e("tema3").then(o.bind(null,"f96f"))}},{path:"tema9",name:"tema9",component:function(){return o.e("tema3").then(o.bind(null,"ecd9"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"El mejoramiento continuo en el Sistema de Gestión de Seguridad y Salud en el Trabajo",descripcionCurso:"Es muy importante mantener una verificación y actualización constante del conocimiento de los elementos del SG-SST y del cumplimiento de los estándares mínimos, de la planificación, contenidos, productos de la organización y planificación del SG-SST, además de la actualización de la matriz de peligros y construcción del plan de mejora según lineamientos de la Resolución 0312 del 2019. ",imagenBannerPrincipal:o("9370"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Revisión de la política del SG-SST",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Revisión de los objetivos generales y específicos del SG-SST",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Revisión de la tabla de valores y clasificación de los estándares mínimos",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Revisión de la gestión de condiciones de trabajo",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Revisión de la gestión de las condiciones de salud",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"Actualización de perfiles sociodemográficos",hash:"t_5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"Gestión de exámenes médicos ocupacionales y ausentismo laboral",hash:"t_5_2"},{icono:"far fa-file-alt",numero:"5.3",titulo:"Estilos de vida y entorno saludable",hash:"t_5_3"},{icono:"far fa-file-alt",numero:"5.4",titulo:"Manejo de residuos ",hash:"t_5_4"},{icono:"far fa-file-alt",numero:"5.5",titulo:"Registro, reporte e investigación de las enfermedades laborales, incidentes y accidentes de trabajo",hash:"t_5_5"},{icono:"far fa-file-alt",numero:"5.6",titulo:"Mecanismos de vigilancia de las condiciones de salud de los trabajadores ",hash:"t_5_6"}]},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Actualización y ajustes a los sistemas de gestión, controles (protocolos, procedimientos) de acuerdo con los peligros priorizados",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema7",icono:"far fa-file-alt",numero:"7",titulo:"Identificación de no conformidades y su análisis",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema8",icono:"far fa-file-alt",numero:"8",titulo:"Definición de acciones preventivas y correctivas",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema9",icono:"far fa-file-alt",numero:"9",titulo:"Actualización del plan de trabajo anual de SG-SST de acuerdo con los planes de mejora",desarrolloContenidos:!0,subMenu:[]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"AXA Colpatria. (2020). Guía para la implementación del Programa de Vigilancia Epidemiológica del COVID-19 en las empresas afiliadas a ARL AXA Colpatria. ",link:"https://asesoriavirtualaxacolpatria.co/axabiblioteca/2020_06_25_17_05_33_29196.pdf/biblioteca/TipoArchivo/"},{referencia:"Decreto 1072 del 2015. [Ministerio del Trabajo]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 25 de 2015. ",link:"https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8"},{referencia:"ICONTEC. (2012). Guía Técnica Colombiana GTC 45. ICONTEC. ",link:"http://132.255.23.82/sipnvo/normatividad/GTC_45_DE_2012.pdf"},{referencia:"Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012. ",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf"},{referencia:"Ministerio de Salud y Protección Social. (2017). Programa de elementos de protección personal, uso y mantenimiento. MinSalud. ",link:"https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf"},{referencia:"Organización Internacional del Trabajo. (s.f.). La organización del trabajo y los riesgos psicosociales: una mirada de género. OIT. ",link:"https://www.ilo.org/wcmsp5/groups/public/---americas/---ro-lima/---sro-san_jose/documents/publication/wcms_227402.pdf"},{referencia:"Organización Panamericana de la Salud. (s.f.). Coronavirus. OPS. ",link:"https://www.paho.org/es/temas/coronavirus"},{referencia:"Resolución 0312 de 2019. [Ministerio del Trabajo]. Por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST. Febrero 13 de 2019.  ",link:"https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf"},{referencia:"Resolución 773 de 2021. [Ministerio del Trabajo]. Por la cual se definen las acciones que deben desarrollar los empleadores para la aplicación del Sistema Globalmente Armonizado (SGA) de Clasificación y Etiquetado de Productos Químicos en los lugares de trabajo y se dictan otras disposiciones en materia de seguridad química. Abril 7 de 2021. ",link:"https://safetya.co/normatividad/resolucion-773-de-2021/"},{referencia:"Resolución 777 de 2021. [Ministerio de Salud y Protección Social]. Por medio de la cual se definen los criterios y condiciones para el desarrollo de las actividades económicas, sociales y del Estado y se adopta el protocolo de bioseguridad para la ejecución de estas. Junio 2 de 2021. ",link:"https://www.mineducacion.gov.co/1759/articles-405413_documento_pdf.pdf"},{referencia:"SURA. (2005). Matriz de riesgos específica COVID-19. SURA. ",link:"https://segurossura.com/content/uploads/sites/6/2020/09/Anexo-10-Matriz-de-Riesgos-especifica-COVID-19.pdf"}],glosario:[{termino:"Acción correctiva",significado:"Acción tomada para eliminar la causa de una no conformidad detectada u otra situación no deseable."},{termino:"Acción de mejora",significado:"Acción de optimización del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), para lograr mejoras en el desempeño de la organización en la seguridad y la salud en el trabajo de forma coherente con su política."},{termino:"Alta dirección",significado:"Persona o grupo de personas que dirigen y controlan una empresa."},{termino:"Autorreporte de condiciones de trabajo y salud",significado:"Proceso mediante el cual el trabajador o contratista reporta por escrito al empleador o contratante las condiciones adversas de seguridad y salud que identifica en su lugar de trabajo."},{termino:"Bioseguridad",significado:"Es un conjunto de normas, medidas y protocolos que son aplicados en múltiples procedimientos realizados en los trabajos, con el objetivo de contribuir a la prevención de riesgos o infecciones derivadas de la exposición a agentes potencialmente infecciosos o con cargas significativas de riesgo biológico, químico y/o físicos, como por ejemplo, el manejo de residuos especiales, almacenamiento de reactivos y uso de barreras protectoras, entre otros."},{termino:"Condiciones de salud",significado:"El conjunto de variables objetivas y de autorreporte de condiciones fisiológicas, psicológicas y socioculturales que determinan el perfil sociodemográfico y de morbilidad de la población trabajadora."},{termino:"Diagnóstico de las condiciones de trabajo",significado:"Resultado del procedimiento sistemático para identificar, localizar y valorar aquellos elementos, peligrosos o factores que tienen influencia significativa en la generación de riesgos para la seguridad y la salud de los trabajadores."},{termino:"Enfermedad laboral",significado:"La contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar. El Gobierno Nacional determinará en forma periódica las enfermedades que se consideran como laborales y, en los casos en que una enfermedad no figure en la tabla de enfermedades laborales, pero se demuestre la relación de causalidad con los factores de riesgo ocupacionales será reconocida como enfermedad laboral, conforme a lo establecido en las normas legales vigentes (Ley 1562 de 2012, Artículo 4)."},{termino:"Exposición",significado:"Situación en la cual las personas se encuentran en contacto con los peligros (GTC 45 V 2012)."},{termino:"Exposición de riesgo ocupacional biológico",significado:"Es el contacto de membranas mucosas, piel no intacta o exposición percutánea por herida con objeto corto punzante por parte de un trabajador por causa o con ocasión o a consecuencia de la realización de un trabajo u oficio, con fluidos potencialmente infectantes (sangre, líquido céfalo-raquídeo, líquido sinovial, líquido pleural, líquido peritoneal, líquido pericárdico, líquido amniótico, semen y secreciones vaginales o cualquier secreción visiblemente contaminada con sangre, y que puede suponer un riesgo de infección a través del mismo)."},{termino:"Evaluación del riesgo",significado:"Proceso para determinar el nivel de riesgo asociado al nivel de probabilidad de que dicho riesgo se concrete y al nivel de severidad de las consecuencias de esa concreción."},{termino:"Peligro",significado:"Fuente, situación o acto con potencial de causar daño en la salud de los trabajadores, en los equipos o en las instalaciones."},{termino:"Perfil sociodemográfico",significado:"De la población trabajadora, que incluye la descripción de las características sociales y demográficas de un grupo de trabajadores, tales como: grado de escolaridad, ingresos, lugar de residencia, composición familiar, estrato socioeconómico, estado civil, raza, ocupación, área de trabajo, edad, sexo y turno de trabajo."},{termino:"Vigilancia epidemiológica de la salud en el trabajo",significado:"Comprende la recopilación, el análisis, la interpretación y la difusión continuada y sistemática de datos a efectos de la prevención."},{termino:"Virus",significado:"Son partículas de código genético, ADN o ARN, encapsuladas en una vesícula de proteínas. Los virus no se pueden replicar por sí solos, necesitan infectar células y usar los componentes de la célula huésped para hacer copias de sí mismos."}],complementario:[{texto:"MinTrabajo. (s.f.). Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST). Guía técnica de implementación para mipymes. MinTrabajo. ",tipo:"Guía",descarga:"/downloads/Guia tecnica de implementacion del SG-SST para Mipymes.pdf"},{texto:"Ministerio de Salud y Protección Social. (2020).  Recomendaciones para el cuidado de la salud mental y la promoción de la convivencia en la flexibilización de la medida de aislamiento preventivo durante la pandemia por COVID-19. Consejo Nacional de Salud Mental.",tipo:"Documento",descarga:"/downloads/final-cartilla-orientaciones-flexibilizacion-medidas-aislamiento240820.pdf"},{texto:"Ley 2088. Por la cual se regula el trabajo en casa y se dictan otras disposiciones. Mayo 12 de 2021. ",tipo:"Ley",descarga:"/downloads/Ley_2088_de_2021.pdf"},{texto:"Colmena Seguros. Sistema de Vigilancia Epidemiológica. Oportunidad de prevención integral para COVID-19. Colmena Seguros.",tipo:"Documento",descarga:"/downloads/s4-Cartilla de Implementacion SVE  COVID-19.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Consuelo Sánchez Pérez",cargo:"Instructora",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Gloria Amparo Lopez Escudero",cargo:"Diseñadora instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Evaluadora instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Julia Isabel Roberto",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Eulises Orduz Amezquita",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Adriana Marcela Suárez Eljure",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Arnulfo Beltrán Mojica",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carlos Eduardo Garavito Parada",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jessica Moreno Realpe",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Víctor Raúl Cárdenas Cáceres      ",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Andrés Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jenny Paola Montillo Gélvez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:["Álvaro Andrés Angarita Ramirez","Daniel Felipe Varón Molina","Milady Tatiana Villamil Castellanos"],cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});n["a"].prototype.$config=v;var y=o("9224");n["a"].prototype.$package=y,new n["a"]({router:g,store:h["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},9370:function(e,a,o){e.exports=o.p+"img/banner-princiapal.ecaf7e58.png"},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.dbb43ea0.png"}});
//# sourceMappingURL=app.1e6dbe31.js.map