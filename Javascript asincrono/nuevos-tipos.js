/*simbol referencias unicas
let id = Symbol("id")
let id2 = Symbol("")

console.log(id === id2);
console.log ( typeof(id,id2));


const NOMBRE = Symbol("nombre")
const SALUDAR = Symbol("saludar")
const persona = { //propiedades privadas de objetos

    [NOMBRE]: 'jon',
    edad:34
}


console.log(persona);
persona.NOMBRE = 'Jonathan-mirca'
console.log(persona[NOMBRE]);
persona[SALUDAR] = () => console.log('hola');
console.log(persona);
persona[SALUDAR]();

for(let p in persona){
    console.log(p);
    console.log(persona[p]);
}

console.log( Object.getOwnPropertySymbols(persona));
*/

/*set ->coleccion de  valores unicos.
const set = new Set([1, 2, 3, 3, true, false, {
    edad: 7
}, 'hola'])
console.log(set.size);

const set2 = new Set(); //agregando valores al nuevo set

set2.add(1)
set2.add(2)
set2.add(3)
set2.add(4)
set2.add(5)
set2.add(6);

set2.add(true)
set2.add(false)
set2.add({})

console.log(set2);
console.log(set2.size);

for (const iterator of set2) {
    console.log(iterator);

}

set2.forEach( item => console.log(item)
)
let arr = Array.from(set2) //transformar a arreglo.
console.log(arr);
console.log(arr[0]);

set2.delete(1); //eliminando objeto por su nombre
console.log(set2);
console.log(set2.has(1));

*/

// map similar a objetos tambien unicos.
/*
let map = new Map();
map.set("nombre", "jhon")
map.set("apellido", "Mircha")
map.set("edad", 5)

console.log(map);
console.log(map.size);
console.log(map.has("correo")); // existe ?
console.log(map.get("nombre")); //obtener
map.set("nombre","Claudio") // establecer una nueva propiedad.
console.log(map.get("nombre")); 
map.delete("apellido") //eliminar

map.set(19, "diescinueve")
map.set(false,"false")

for (let [key,value] of map) { //rrecorrer propiedad objetos llave-valor.
    console.log(`${key} : ${value}`);
}

*/
/*
const mapa2 = new Map([ 
    ["nombre", "Kenai"],
    ["edad", 7],
    ["animal", "perro"],
    [null, "nulo"],

])

console.log(mapa2);

const llaveMapa2 = [...mapa2.keys()]


const valoresMapa2 = [...mapa2.values()]

console.log(llaveMapa2);
console.log(valoresMapa2);
*/
// WeakSets & WeakMaps
/*
const ws  = new WeakSet();
let valor1 = {"valor1": 1}
let valor2 = {"valor2": 2}


ws.add(valor1)
ws.add(valor2)
console.log(ws);
console.log(ws.has(valor1));



setInterval(() => console.log(ws), 1000);


const reloj = setTimeout(() => {
    valor1 = null,
    valor2 = null
}, 5000);



/*

*/

/*
const wmm  = new WeakMap();
let llave2 = {}
wmm.set(llave2,1);
/*
let llave1 = {}




wmm.set(llave2,2);

console.log(wmm);
*/
/*
wmm.delete(llave2)
console.log(wmm);
/*

*/

/*
wmm.set(llave2,2)
console.log(wmm);

*/
/*
setInterval(() => {
    console.log(wmm);
}, 1000);

setInterval(() => {
    console.log(wmm);
}, 5000);


/* iterable => el objeto a recorrer iterador => mecanismo para rrecorrer elementos

*/

/*
*/
/*
const iterable = new Set([1,1,2,3,4,5,6])
//iterador - iterable

const iterador = iterable[Symbol.iterator]();

console.log(iterable);

*/
/*
const iterable = new Set([1,1,2,3,4,5,6])
const iterador = iterable[Symbol.iterator]();
let next = iterador.next();

while(!next.done){
    console.log(next.value);
    next = iterador.next()
}

*/

/*generadores
*/
/*
function* iterable() {
    yield "hola"; // return y deteccion

    console.log("hola consola");
    yield "hola 2";
    console.log('seguimos con mas instruccioes');

    yield "hola 3";

    yield 'hola4';

}


let iterador = iterable()
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());




let y = iterable()

for (let y of iterador) {
    console.log(y);
}



const arr = [...iterable()]
console.log(arr);



*/
/*
const cuadrado = (valor) => {

    console.log({ valor, resultado: valor * valor });
  

}


function* generador() {
    console.log('inicio generador');
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log('termina generador');
}

let gen = generador();

for (const y of gen) {
    console.log(y);
}

*/

/* **********     Curso JavaScript: 55. Proxies - #jonmircha   

¿Qué es un proxy? un proxy no es ni más ni menos que
 un intermediario entre un programa y el objeto al cual
  queremos invocar un método o cambiar una propiedad.
********** */

/*
     const persona = {
      nombre: "",
      apellido: "",
      edad: 0
    }

    const manejador = {
      set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1) { //si dentro del objeto se encuentra la propiedad este devuelve un entero.
          return console.error(`La propiedad "${prop}" no existe en el objeto persona.`);
        }

        if (
          (prop === "nombre" || prop === "apellido") && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
        ) {
          return console.error(`La propiedad "${prop}"" sólo acepta letras y espacios en blanco`);
        }
        obj[prop] = valor; 
      }
    }

    const jon = new Proxy(persona, manejador); //se usa para definir un comportamiento personalizado para operaciones fundamentales
    // (por ejemplo, para observar propiedades, cuando se asignan, enumeración, invocación de funciones, etc).
    jon.nombre = "Jon";
    jon.apellido = "MirCha";
    jon.edad = 35;
    
    console.log(jon.edad);
    jon.twitter = "@jonmircha";
    console.log(jon);


    console.log(persona); 



*/




/* **********     Curso JavaScript: 56. Propiedades Dinámicas - #jonmircha     ********** */
/*
*/

/*

let aleatorio = Math.round(Math.random() * 100 + 5);
const objUsuarios = { propiedad: "Valor", [`id_${aleatorio}`]: "Valor Aleatorio" }; //pasamos valor aleatorio al objeto.
console.log(objUsuarios);

const usuarios = ["Jon", "Irma", "Miguel", "Kala", "kEnAi"];
usuarios.forEach((usuario, index) =>
    objUsuarios[`id_${index}`] = usuario); //asignamos de forma dinamica un index al arreglo usuario.

console.log(objUsuarios);

*/


//_---------------------------------------------------------------------



 /* **********     Curso JavaScript: 49. Symbols - #jonmircha     ********** */
    /* let id = Symbol("id");
    let id2 = Symbol("id2");

    console.log(id === id2)
    console.log(id, id2);
    console.log(typeof id, typeof id2);

    const NOMBRE = Symbol("nombre");
    const SALUDAR = Symbol("saludar");

    const persona = {
      [NOMBRE]: "Jon",
      edad: 35
    };
    console.log(persona);

    persona.NOMBRE = "Jonathan MirCha"
    console.log(persona);
    console.log(persona.NOMBRE);
    console.log(persona[NOMBRE]);

    persona[SALUDAR] = function () {
      console.log(`Hola`);
    }
    console.log(persona);
    persona[SALUDAR]();


    for (let propiedad in persona) {
      console.log(propiedad);
      console.log(persona[propiedad]);
    }

    console.log(Object.getOwnPropertySymbols(persona)); */





    /* **********     Curso JavaScript: 50. Sets - #jonmircha     ********** */
    /* const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]);
    console.log(set);
    console.log(set.size);

    const set2 = new Set();
    set2.add(1);
    set2.add(2);
    set2.add(2);
    set2.add(3);
    set2.add(true);
    set2.add(false);
    set2.add(true);
    set2.add({});

    console.log(set2);
    console.log(set2.size);

    console.log("Recorriendo set");
    for (item of set) {
      console.log(item);
    }
    console.log("Recorriendo set2");
    set2.forEach(item => console.log((item)));

    let arr = Array.from(set);
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[9]);

    set.delete("HOla");
    console.log(set);

    console.log(set.has("hola"));
    console.log(set.has(19));

    set2.clear();
    console.log(set2); */





    /* **********     Curso JavaScript: 51. Maps - #jonmircha     ********** */
    /* const mapa = new Map();
    mapa.set("nombre", "Jon");
    mapa.set("apellido", "MirCha");
    mapa.set("edad", 35);

    console.log(mapa);
    console.log(mapa.size);
    console.log(mapa.has("correo"));
    console.log(mapa.has("nombre"));
    console.log(mapa.get("nombre"));
    mapa.set("nombre", "Jonathan MirCha");
    console.log(mapa.get("nombre"));
    mapa.delete("apellido");

    mapa.set(19, "diecinueve");
    mapa.set(false, "falso");
    mapa.set({}, {});
    console.log(mapa);

    for (let [key, value] of mapa) {
      console.log(`Llave: ${key}, Valor:${value}`);
    }

    const mapa2 = new Map([
      ["nombre", "kEnAi"],
      ["edad", 7],
      ["animal", "perro"],
      [null, "nulo"]
    ]);

    console.log(mapa2);

    const llavesMapa2 = [...mapa2.keys()];
    const valoresMapa2 = [...mapa2.values()];

    console.log(llavesMapa2);
    console.log(valoresMapa2); */





    /* **********     Curso JavaScript: 52. WeakSets & WeakMaps - #jonmircha     ********** */
    /* //const ws = new WeakSet([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]);
    const ws = new WeakSet();

    let valor1 = { "valor1": 1 };
    let valor2 = { "valor2": 2 };
    let valor3 = { "valor3": 3 };

    ws.add(valor1);
    ws.add(valor2);

    console.log(ws);

    console.log(ws.has(valor1));
    console.log(ws.has(valor3));

    ws.delete(valor2);
    console.log(ws);

    ws.add(valor2);
    ws.add(valor3);
    console.log(ws);

    setInterval(() => console.log(ws), 1000);

    setTimeout(() => {
      valor1 = null;
      valor2 = null;
      valor3 = null;
    }, 5000); */

    /* const wm = new WeakMap([
      ["nombre", "kEnAi"],
      ["edad", 7],
      ["animal", "perro"],
      [null, "nulo"]
    ]); */

    /* const wm = new WeakMap();
    let llave1 = {};
    let llave2 = {};
    let llave3 = {};

    wm.set(llave1, 1);
    wm.set(llave2, 2);
    console.log(wm);

    console.log(wm.has(llave1));
    console.log(wm.has(llave3));

    console.log(wm.get(llave1));
    console.log(wm.get(llave2));
    console.log(wm.get(llave3));

    wm.delete(llave2);
    console.log(wm);

    wm.set(llave2, 2)
    wm.set(llave3, 3)
    console.log(wm);

    setInterval(() => console.log(wm), 1000);

    setTimeout(() => {
      llave1 = null;
      llave2 = null;
      llave3 = null;
    }, 5000); */





    /* **********     Curso JavaScript: 53. Iterables & Iterators - #jonmircha     ********** */
    /* const iterable = [1, 2, 3, 4, 5];
    //const iterable = "Hola Mundo";
    //const iterable = new Set([1, 2, 3, 3, 4, 5]);
    //const iterable = new Map([["nombre", "jon"], ["edad", 35]]);

    //Accedemos al iterador del iterable
    const iterador = iterable[Symbol.iterator]();

    console.log(iterable);
    console.log(iterador);
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());

    let next = iterador.next();

    while (!next.done) {
      console.log(next.value);
      next = iterador.next();
    } */





    /* **********     Curso JavaScript: 54. Generators - #jonmircha     ********** */
    /* function* iterable() {
      yield "hola";
      console.log("Hola consola");
      yield "hola 2";
      console.log("Seguimos con más instrucciones de nuestro código");
      yield "hola 3";
      yield "hola 4";
    }

    let iterador = iterable();
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());

    for (let y of iterador) {
      console.log(y);
    }

    const arr = [...iterable()];
    console.log(arr);

    function cuadrado(valor) {
      setTimeout(() => {
        return console.log({ valor, resultado: valor * valor })
      }, Math.random() * 1000);
    }

    function* generador() {
      console.log("Inicia Generator");
      yield cuadrado(0);
      yield cuadrado(1);
      yield cuadrado(2);
      yield cuadrado(3);
      yield cuadrado(4);
      yield cuadrado(5);
      console.log("Termina Generator");
    }

    let gen = generador();

    for (let y of gen) {
      console.log(y);
    } */





    /* **********     Curso JavaScript: 55. Proxies - #jonmircha     ********** */
    /* const persona = {
      nombre: "",
      apellido: "",
      edad: 0
    }

    const manejador = {
      set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1) {
          return console.error(`La propiedad "${prop}" no existe en el objeto persona.`);
        }

        if (
          (prop === "nombre" || prop === "apellido") &&
          !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
        ) {
          return console.error(`La propiedad "${prop}"" sólo acepta letras y espacios en blanco`);
        }
        obj[prop] = valor;
      }
    }

    const jon = new Proxy(persona, manejador);
    jon.nombre = "Jon";
    jon.apellido = "MirCha";
    jon.edad = 35;
    jon.twitter = "@jonmircha";
    console.log(jon);

    console.log(persona); */





    /* **********     Curso JavaScript: 56. Propiedades Dinámicas - #jonmircha     ********** */
    /*     let aleatorio = Math.round(Math.random() * 100 + 5);
        const objUsuarios = {
          propiedad: "Valor",
          [`id_${aleatorio}`]: "Valor Aleatorio"
        };
        console.log(objUsuarios);

        const usuarios = ["Jon", "Irma", "Miguel", "Kala", "kEnAi"];
        usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);

        console.log(objUsuarios); */