/*El DOM da una representación del documento como un grupo de nodos y objetos estructurados 
que tienen propiedades y métodos. Esencialmente, conecta las páginas web a scripts o lenguajes de programación.
*/

//Selectores
/*
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

*/
//Nodo->Node es una interfaz 
//en la cuál un número de objetos de tipo DOM API heredan. 
//Esta interfaz permite que esos objetos sean tratados similarmente. tipos elemento-texto
/*
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
*/

/* ----------------- */


//accediendo a elementos.

//Obtener y establecer parametreos de cierta clase.. 
/*
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
*/