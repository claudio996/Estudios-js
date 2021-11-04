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

/* Acediendo a las clases de nuestros nodos  */
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
