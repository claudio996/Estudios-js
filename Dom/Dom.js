/*El DOM da una representación del documento como un grupo de nodos y objetos estructurados 
que tienen propiedades y métodos. Esencialmente, conecta las páginas web a scripts o lenguajes de programación.
*/

/*Accediendo al docuento 
console.log("---------Elementos del documento--------");
console.log(document);
console.log(document.head);
console.log(document.body);

console.log(document.documentElement);

console.log(document.doctype);
console.log(document.title);
console.log(document.links);
console.log(document.images);

console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);
/*-------------------*/

/*
Nodo->Node es una interfaz  //accediendo a nodos. selectores.
en la cuál un número de objetos de tipo DOM API heredan. 
Esta interfaz permite que esos objetos sean tratados similarmente. tipos elemento-texto

console.log(document.getElementById("menu"));//id.
console.log(document.querySelector("#menu")); //id
console.log(document.querySelector(".menu")); //clase.

console.log(document.querySelector("a")); //traera el primero elemento que encuentre en el html.
console.log(document.querySelectorAll("a")); //traera todos los elemntos, este traera un nodo de elementos.

document.querySelectorAll("a").forEach((el) => 
console.log(el)); //Recorriendo el nodo
console.log('fin del recorrido  de nodos  a');

console.log(document.querySelector(".card"), 'fin' ); //clase
console.log(document.querySelectorAll(".card")); //todos los elementos - todos los nodos pertenecientes a esta clase card.
console.log(document.querySelectorAll(".card")[2]); //Dentro de todos los nodos accede a  este indice [indice].

console.log(document.querySelector("#menu li")); // accediendo al hijo de cierto elemento.
console.log(document.querySelectorAll("#menu li")); //accediendo a todos los hijos de cierto elemento.
/* ----------------- */

/*accediendo a elementos.
Obtener y establecer parametreos de cierta clase.. 

console.log(document.querySelector(".link-dom").getAttribute("href"));//Obteniendo atributtos.
console.log(document.querySelector(".links").getAttribute("href"));
console.log(document.documentElement.getAttribute("lang"));
console.log(document.documentElement.lang = "en");
console.log(document.documentElement.setAttribute("lang", "es"));
console.log(document.documentElement.lang);
const $linkDOM = document.querySelector(".link-dom") //referencias a elementos del dom.
//$linkDOM.getAttribute('href')
$linkDOM.setAttribute("rel","noopener"); //estableciendo un nuevo atributo.
$linkDOM.setAttribute("target","blank");//estableciendo nuevos parametros.
$linkDOM.setAttribute("href","https://youtube.cl");
//$linkDOM.removeAttribute("href");
console.log($linkDOM.hasAttribute("rel"));
console.log($linkDOM.removeAttribute("rel"));

//data-atributes atributos creados por el desarrollador.
const  $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); //Accediendo a los atributos datas para establecer nuevos valores.
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de objeto del Documento")//estableciendo nuevo texto al data-description.
console.log($linkDOM.dataset.description  = "Cambiando el texto del dataset")
console.log( $linkDOM.dataset.description);
$linkDOM.hasAttribute("data-id");
$linkDOM.removeAttribute("data-id");
/* ------------------------------*/
/* Variables CSS - Custom Properties CSS permite establecer nuevos valores a nuestro css desde javascript 

const $html = document.documentElement, //accediendo al elemento del dom.
    $body = document.body;

let DarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), 
    YellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(DarkColor);
console.log(YellowColor);

const $html = document.documentElement,
$body = document.body

let darkColor = getComputedStyle($html).getPropertyValue("--dark-color"), //accediendo a los estilos en nuestra hoja css
YellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(darkColor,YellowColor);

$body.style.backgroundColor = darkColor; //estableciendo un nuevo fondo de color atravez de nuestras custom css.
$body.style.color = YellowColor;
/*--------------------------------*/

/* Acediendo a las clases de nuestros nodos  
const $card = document.querySelector(".card")
console.log($card);
console.log($card.className);
console.log($card.classList);

$card.classList.add("rotate-45") //accediendo a la clase rotate-45 de nuestro css
console.log($card.classList);
console.log($card.className);
$card.classList.contains("rotate-45"); // accedemos a nuestras clases css

$card.classList.replace("rotate-45", "rotate-135"); //remplazando clases. 
$card.classList.add("sepia");

$card.classList.toggle("sepia");
$card.classList.toggle("rotate-135");
$card.classList.add("rotate-45"); //agregando clases. 
$card.classList.add("opacity-80");
$card.classList.replace("opacity-80","opacity-5"); //cambiando clases.
/------------------------------------------------*/
/* Texto HTML Agregando texto a nuestros elementos. */
/*
const $texto = document.getElementById("que-es");
let texto = "<p><mark>Lorem ipsum dolor smddnd dhdhdhd  dgdgdgd gddgdggd gdgdgdgd gdgdgdgd <p/> <p>Lorem ipsum dolor smddnd dhdhdhd  dgdgdgd gddgdggd gdgdgdgd gdgdgdgd <p/> <p>Lorem ipsum dolor smddnd dhdhdhd  dgdgdgd gddgdggd gdgdgdgd gdgdgdgd </mark><p/>"
$texto.textContent = texto; //solo texto.
$texto.innerHTML = texto; //solo codigo html
$texto.outerHTML  = texto;
*/

/*Dom traversing -> recorrer elemetos del Dom

$card = document.querySelector(".cards")
console.log($card);
console.log($card.children); //hijo del nodo card.
console.log($card.children[2]);//accediendo al hijo 2 del nodo card.
console.log($card.parentElement); //Accediendo al elemento padre de nuestro nodo card (nodo del quien dependemos)
console.log($card.firstElementChild); //accediendo al primer elemento del hijo card.
console.log($card.lastElementChild);  //accediendo al ultimo elemento del hijo card.
console.log($card.previousElementSibling); //elemento-anterior a nuestro nodo
console.log($card.nextElementSibling); //elemento-siguiente
console.log($card.closest("div")); //devuelve el ascendiente más cercano al elemento actual (o el propio elemento actual) que coincida con el selector
console.log($card.closest("body"));
console.log($card.children[3].closest("section"));
//------------------------------*/
/*Creando del dom elemetos y fragmentos  cerando elementos de forma dinamica.*/
/*
const $figure = document.createElement("figure"); //Con create element creamos un nodo cualquiera.
$img = document.createElement("img");
$figcaption = document.createElement("figcaption");
$figcaptiontext = document.createTextNode("animals"); //creamos el texto para el nodo figCaption.
$cards = document.querySelector(".cards"); //Accedemos al elemento cards atravez del .

$figure.classList.add("card"); //al nodo  figure le agregamos la clase card.

$img.setAttribute("src","https://placeimg.com/200/200/animals"); //Establecemos los atributos al nodo.
$img.setAttribute("alt","animals"); //Establecemos los atributos al nodo img.

//ARMAMOS LA CARDS.
$figcaption.appendChild($figcaptiontext); //pasamos el nodo hijo->(figcaptionText)  al nodo padre (figCaption).
$figure.appendChild($img); //pasamos el nodo hijo($img) a el nodo padre (figure).
$figure.appendChild($figcaption) //pasamos el nodo hijo($img) a el nodo padre (figure).
$cards.appendChild($figure); //pasamos al nodo hijo(figure) al nodo padre(cards)

const meses  = ['enero', 'febrero', 'marzo', 'abril']
$ul = document.createElement("ul"); //creando una lista. (ul)
$fragment  = document.createDocumentFragment(); //creacion del fragment ->  Se utiliza como una versión ligera de Document que almacena un segmento de una estructura de documento compuesta de nodos como un documento estándar.

meses.forEach(element => { //recorremos los meses
  const $li = document.createElement("li"); //creamos elementos de la lista.
  $li.textContent = element; //asignamos los meses a la lista.
  $fragment.appendChild($li); // guardamos en el fragment la lista.
});

$texto = document.createTextNode("Meses del año");

$ul.appendChild($fragment); //añadimos el fragment a la lista.
document.body.appendChild($ul); //agregamos la lista al documentBody.
*/
/* ----------------------------------------------*/
/*Trabajos con templates este es un mecanismo para mantener codigo HTML para ser instamceado en su tiempo de ejecucion.
$cards = document.querySelector(".cards"); // utilizamos nuestro selector.
$template = document.getElementById("template-card").content;
$fragment = document.createDocumentFragment(); //creamos el fragment.

cardContent = [ //simulando apis
  {
    title: "Animales",
    img :"https://placeimg.com/200/200/animals"
  },

  {
    title: "Tecnologia",
    img :"https://placeimg.com/200/200/tech"
  },
  {
    title: "Arquitectura",
    img :"https://placeimg.com/200/200/arch"
  },

  {
    title: "Personas",
    img :"https://placeimg.com/200/200/people"
  },

  {
    title: "Naturaleza",
    img :"https://placeimg.com/200/200/nature"
  }
]

cardContent.forEach(element => { //recorremos y asignamos atributos  especificos de cada uno. 
  //Atravez de nuestro template establecemos los elementos con lo de nuestro arreglo.
  $template.querySelector("img").setAttribute("src", element.img); //establecemos las imagenes y su ser al nodo img
  $template.querySelector("img").setAttribute("alt", element.title);  //establecemos el titulo las imagenes al nodo img
  $template.querySelector("figCaption").textContent = element.title; //establecemos el titulo a nuestro nodo figcaption.

  let $clone = document.importNode($template, true); //clonamos nuestro template.
  $fragment.appendChild($clone)//creamos el fragmento temporal con su respectivo clon.
});

$cards.appendChild($fragment);//agregamos el fragmento a nuestro nodo padre.
----------------------------------------*/

/*  InsertAdjacent

insertAdjacent  método insertAdjacentHTML() de la interfaz Element analiza la cadena de texto 
introducida como cadena HTML o XML e inserta al árbol DOM ...

.insertAdjacentElement(position, el)
.insertAdjacentHTML(position, HTML)
.insertAdjacenttEXT(position, TEXT )

posiciones

'beforebegin': Antes que el propio elemento.
'afterbegin': Justo dentro del elemento, antes de su primer elemento hijo.
'beforeend': Justo dentro del elemento, después de su último elemento hijo.
'afterend': Después del propio elemento.

se recorre el elemento y se inserta en orden de las caracteristicas del nodo.

const $card = document.querySelector(".cards");
$newCard = document.createElement("figure");

let $contentCard = '<img src ="https://placeimg.com/200/200/any" alt = "Any"><figcaption></figcaption>';
$newCard.classList.add("card"); //añadiendo clase card al nodo figure.

$newCard.insertAdjacentHTML("beforeend", $contentCard); //insertar Justo dentro del elemento, después de su último elemento hijo.
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any") // Justo dentro del elemento, antes de su primer elemento hijo.
$card.insertAdjacentElement("afterbegin", $newCard); //Justo dentro del elemento, antes de su primer elemento hijo.
$card.insertAdjacentElement("beforebegin", $newCard); //elemento html
$card.insertAdjacentElement("beforeend", $newCard);
-------------------------*/

/*Tipos de eventos semantico-multiple-addEventlistener.
const holaMundo = () => alert('Hola mundo');
const $eventoSemantico = document.getElementById('event-sinaptico');
//eventoSemantico.onclick = holaMundo; // pasamos la funcion como parametro.
/ Para ebentos multiples. 
const $eventoMultiple = document.getElementById('event-multiple'); //accedemos al id de nuestro boton.

$eventoSemantico.onclick = (e)=> {  // e => representa el evento.
  alert('Manejador de eventos semantico')
  console.log(e);
  console.log(event);
} 
//AddEventListener 
// Registra un evento a un objeto en específico. El Objeto especifico puede ser un simple elemento en un archivo, el mismo ...
//evento multiple. 
$eventoMultiple.addEventListener("click", holaMundo); //Detectamos el evento y luego la funcion ya preescrita.

$eventoMultiple.addEventListener("click", e => {
  alert("Hola mundo Manejador de eventos Multiple");
  holaMundo()
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

--------------------------------- */
/*funcion que se ejecuta en un evento solo recibe el evento en si. solo un parametro

const $eventoRemover = document.getElementById('event-remove');
const saludar = (nombre = "hola desconocido") => alert(`hola ${nombre}`)


$eventoMultiple.addEventListener('click', () => {
  saludar('claudio')
});

$eventoRemover.addEventListener('dblclick', (e) => {
})
const $removerDobl = (e) => {
  alert(`removiendo el evento ${e.type}`);
  console.log(e);

  $eventoRemover.removeEventListener('dblclick', $removerDobl)
  $eventoRemover.disabled = true
}
$eventoRemover.addEventListener('dblclick', $removerDobl)

-------------------------------------------*/

//Eventos flujo de eventos fase -> burbuja-captura -- event delegation
/*flujo del evento --> propagacion fase burbuja micro-macro

const $divsEvents = document.querySelectorAll(".eventos-flujo div");
console.log($divsEvents);

//nodelist
const flujoevents = (e) => {
   alert(`hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
   //e.stopPropagation();
}

$divsEvents.forEach((elemento) => { //recorriendo el flujo del selector elementos flujo.
   //div.addEventListener('click', flujoevents,false); //Podemos activar o desactivar el evento de captura.
   //fase de captura
   //div.addEventListener('click',flujoevents,true)
   //fase por defecto burbuja expandiendo, capture -> solo una vez.
   elemento.addEventListener('click', flujoevents, { // detectando-
      capture: false,
      once: true
   })
})

const $link_event = document.querySelector(".eventos-flujo a"); //accediendo a los enlaces del selector eventos-flujo.
Delegacion de eventos (solicitud de datos ej api..) asignamos solo al nodo principal
 el document asi solo tenemos una asignacion al evento  luego la programacion. utilizacion en ajax-fetch.

document.addEventListener('click', (e) => {
  console.log('click en', e.target);

  if (e.target.matches(".eventos-flujo div")) { //detectar los elementos 
     flujoevents(e)
  }
  if (e.target.matches(".eventos-flujo a")) {
     console.log(`hola te saludo yo mismo`);
     e.preventDefault();// liminar el comportamiento pedeterminado. en este caso el comportamiento por defecti
  }
  
});

$divEvents.forEach((div) => {
   //div.addEventListener("click", flujoEventos) 
   div.addEventListener("click", flujoEventos)
   /*
   div.addEventListener("click", flujoEventos, {
   
      capture:false,
      once:true
   })
   
});

--------------------------*/
//Bom 
//El Browser Object Model (BOM) es una convención específica que se refiere a 
//todos los objetos expuestos por el navegador web. A diferencia del Document Object Model (DOM), no hay ningún estándar para la implementación y ninguna definición estricta, por los que los proveedores de navegadores son libres de implementar el BOM de cualquier manera que deseen.
window.addEventListener("resize",(e) => {
   console.log('--------------evento resize');
   console.log(window.innerWidth);
   console.log(window.innerHeight);
   console.log(window.innerWidth);
   console.log(window.innerHeight);
   console.log(e);

})

window.addEventListener("scroll", (e) => {

   window.console.log(window.scrollX);
   window.console.log(window.scrollY);
})

window.addEventListener("load", e => {

   window.console.log(window.screenX);
   window.console.log(window.screenY);
})

//$(window).load()

document.addEventListener('DOMContentLoaded', e => {

   console.log("-------DomContentLoades---------");
   window.console.log(window.screenX);
   window.console.log(window.screenY);
})

const btnAbrir = document.getElementById("abrir-ventana")
const btnCerrar = document.getElementById("cerrar-ventana")
const btnImprimir = document.getElementById("impimir-ventana")

let ventana;

btnAbrir.addEventListener('click', (e)=> {
  ventana = window.open("https://youtube.com/")
})

btnCerrar.addEventListener('click', (e)=> {
 ventana.close();
})

btnImprimir.addEventListener('click', (e)=> {
   ventana.print();
})

