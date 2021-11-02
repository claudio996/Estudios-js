/* **********     Curso JavaScript: 59. JSON - #jonmircha     ********** */
/* https://www.json.org/json-es.html */
/* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON */
const json = {
    cadena: "Jon",
    numero: 35,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
        twitter: "@jonmircha",
        email: "jonmircha@gmail.com"
    },
    nulo: null
}
/*
      El objeto JSON, que está disponible en todos los navegadores modernos,
     tiene dos útiles métodos para manejar el contenido con formato JSON: parse y stringify. 
     JSON.parse() toma una cadena JSON y la transforma en un objeto de JavaScript
      JSON.stringify() toma un objeto de JavaScript y lo transforma en una cadena JSON.
    console.log(json);
*/

console.log(JSON);

console.log("*** JSON.parse ***"); //Transformacion a objeto javascript
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
console.log(JSON.parse('"Hola Mundo"'));
console.log(JSON.parse("null"));
//console.log(JSON.parse("undefined"));
console.log(JSON.parse('{ "x": 2, "y": 3 }'));

console.log("*** JSON.stringify ***"); //Transformacion a objeto json
console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(19));
console.log(JSON.stringify("Hola Mundo"));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({ x: 2, y: 3 }));

console.log("*** Ejemplo JSON ***");
console.log(JSON.stringify(json));
console.log(JSON.parse('{"cadena": "Jon","numero": 35, "booleano": true,"arreglo": ["correr","programar","cocinar"],"objeto": {"twitter": "@jonmircha","email": "jonmircha@gmail.com"},"nulo": null}'));

