import $ from "jquery";

function mostrarLogEjercicio() {
  var texto = "";
  for (let i = 0; i < arguments.length; i++) {
    if (i === 0) {
      texto = "Ej " + arguments[i] + ". ";
    } else {
      texto += typeof arguments[i] + " " + arguments[i] + ", ";
    }
  }
  console.log(texto);
}
// Funciona utilitaria para mostrar el numero de ejercicio, el tipo de
// datos y lo que se desea concatenar

mostrarLogEjercicio(0, "abc", 123);

//Ejecutar todas las funciones despues de que cargue el documento
$(function () {
  /*
  SELECTORES BASICOS
  */
  /* 1. Con JavaScript tradicional y JQUERY
   *  Encontrar y mostrar en consola el elemento por ID irAlContenido
   */
  var elementoPorIdTradicional = document.getElementById("irAlContenido");
  var $elementoPorIdJQuery = $("#irAlContenido");
  mostrarLogEjercicio(
    1,
    elementoPorIdTradicional.innerHTML,
    $elementoPorIdJQuery.html()
  );

  //console.log(i)$
  /* 2. Con JavaScript tradicional y JQUery
  Encontrar y mostrar en consola los elementos con clase screen-reader-text
  */
  var elementosConClaseTradicional = document.getElementsByClassName(
    "screen-reader-text"
  );
  mostrarLogEjercicio(
    2.1,
    "Tradicional Cuenta " + elementosConClaseTradicional.length
  );
  var $elementoConClaseJQuery = $(".screen-reader-text");
  mostrarLogEjercicio(2.2, "JQuery Cuenta ", $elementoConClaseJQuery.length);
  /* 3. Con JQuery mostrar en consola la cantidad 
     de divs del documento
  */
  var $divs = $("div");
  mostrarLogEjercicio(3, "Cuenta Divs " + $divs.length);
  /*
  SELECTOR DE ATRIBUTOS
  */
  /* 4. Con JQuery mostrar en consola la cantidad de elementos que 
    tienen definido el atributo class y los que no lo tienen definido ademas 
    de la cantidad total de elementos
   */
  /*
  FILTROS DE POSICION
  */
  /* 5. Cambiar el color de fondo a azul (blue) del segundo hijo div encontrado 
  dentro de body
  */
  /* 6. Cambiar el color de fondo a amarillo (yellow) de todos los
  elementos en posición impar con clase elementor-image
  */
  /*
  FILTROS DE FORMULARIO
  */
  /* 7. Cambiar el elemento seleccionado por defecto del elemento select 
  con name = formSeleccion a la 1er elemento de las opciones
  */
  /*
 EVENTOS DEL MOUSE Y TECLADO
 */
  /**
   * 8. Capturar el click del mouse sobre el anchor con referencia a
   * http://dot.tarija.bo y prevenir la carga de esa pagina e indicar
   * un alert que diga "Este vinculo está deshabilitado"
   */
  /*
  MANIPULACION DE CONTENIDO
  */
  /**
   * 9. Crear un boton que invierta el orden de todos los divs con
   * clase elementor-widget de  la pagina de tal forma que  el 1ro
   * esté en el último lugar, el segundo en el penultimo y asi
   * sucesivamente
   *
   */
  /*
    EFECTOS Y ANIMACIONES
 */
  /**
   * 10. Crear el efecto que cuando se pase el mouse sobre el
   * logo principal, el fondo del contenedor cambie de color
   * entre amarillo rojo cafe y blanco con desvanecimiento lento
   */
  /*
    AJAX Y JSON
 */
  /** 11. Crear un boton "Predecir Edad" dentro del formulario
   * cod id=formulario que utilice la API https://agify.io/ para
   * obtener la predicción de la edad según el nombre
   * introducido en el input[name="formNombre"] del formulario y
   * que compare la respuesta de la api está dentro del rango de
   * edades seleccionado en el elemento select[name="formSeleccion"] e
   * indique si la predicción acertó o no con un texto sobre el boton.
   *
   */
});
