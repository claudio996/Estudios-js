//Ejercicios.
/*
const contarCaracteres = (cadena = "") => 
 (!cadena)
     ?console.log('No hay cadena') 
     :console.log(cadena.length)
contarCaracteres('Hola')
*/

/*

const textoRecortado = (cadena, longitud = undefined) =>
    (!cadena)
        ? console.log('No ha ingresado cadena')
        : (longitud === undefined)
            ? console.log('No haz ingresado la longitud')
            : console.log(cadena.slice(0, longitud))

textoRecortado()
textoRecortado('Hola mundo', 4)
textoRecortado('Hola mundo', 5)
textoRecortado('Hola mundo', )
*/
/*
const CadenaAAreglo = (cadena = "", separador = undefined) =>
    (!cadena)
        ? console.log('No ha ingresado cadena')
        : (separador === undefined)
        ? console.log('No ha ingresado el caracter separador')
        : console.log(cadena.split(separador));
   
CadenaAAreglo('hola que tal', ' ')
CadenaAAreglo('hola que tal')
CadenaAAreglo('hola que tal', '')
*/
/*
const repetirTexto = (texto = "", nvces= undefined) => {
    if(!texto) 
    return console.warn('No ingreso el texto');
    if(nvces ===  undefined)
    return console.log('No ingresaste el numero de veces');
    
    if(nvces === 0)
    return console.log('El numero de veces no puede ser 0');
    
    if(Math.sign(nvces) === -1)
    return console.log('El numero de veces no puede ser negativo');

    for (let index = 1; index < nvces; index++) console.log(`${texto},${index}`);
    //const numvces = texto.repeat(nvces)
   // console.log(nvces);
}
repetirTexto('hola mundo', 3)
repetirTexto('hola mundo', )
repetirTexto('', 3)
*/
/*
const invertirCadena = (cadena = "") =>  
(!cadena) 
? console.log('no ingresaste cadena')
: console.log(cadena.split('').reverse().join(''));
invertirCadena('hola mundo')
*/
/*
const contarVeces = (cadena = "", palabra = "") => {
    if (!cadena)
        return console.log('no ingresaste cadena')
    if (!palabra) 
     return console.log('no ingresaste palabra');
    else 
    let i = 0;
    contador = 0;
    while(i !== -1){ //-1 Sin coincidencias
       i = cadena.indexOf(palabra,i) // indice = 0 buscara en indice 0 
       if(i !== -1){ //Aumenta contador mientras i no se igual a -1
           i++;
           contador++;
       }
       return console.log('La palabra mundo se repetie' `${contador} veces`); 
    }
    console.log(cadena.includes(palabra))//mi-solucion.

}
contarVeces("hola mundo adios mundo", "mundo")
*/
/*
const palindromo = (cadena = "" ) => {
    if (!cadena)
        return console.log('no ingresaste cadena')

    cadena = cadena.toLocaleUpperCase();
    let revez =cadena.split("").reverse().join("")

    return (cadena === revez)
    ? console.log('si es palindromo')
    : console.log('no es palindromo');
}

palindromo()
palindromo('Hola mundo')
palindromo('ojo')
*/

/*
const eliminarCarcateres = (texto ="", patron ="") => 
(!texto)
? console.log('no ingresaste cadena')
:(!patron)
?console.log('no ingresaste el patron')
: console.log(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCarcateres()
eliminarCarcateres('xyz','xyz1','xyz2','xyz3','xyz4','xyz5','xyz')
*/

/*--------------------------------------------------------------
const aleatorio = () => console.log(Math.round((Math.random() * 100) + 500));
aleatorio()
-------------------------------------------------------*/
/*
const capicua = (numero = 0) => {
    if (!numero) return console.log('No ingresaste numero');
    if (typeof numero !== "number")
     return console.log('Lo ingresado no es un numero');
    numero = numero.toString(); //converting a string
    let revez = numero.split("").reverse().join("")
    return (revez ===  numero)
    ? console.log(`si es capicua' ${numero}, ${revez}`)
    : console.log(`no es capicua' ${numero}, ${revez}`);

}
capicua()
capicua(2009)
capicua('2009')
capicua(2002)
*/
/*

const factorial = (numero = undefined ) => {

    if(numero === undefined) 
    console.log('debe ingresar un numero');
    if(typeof numero !== "number")
    console.log('No esta en formato texto');

    if(Math.sign(numero) === -1) return //negativo-positivo
    console.log('El numero no puede ser igual a 0');

    let  factorial = 1;

    for (let index = numero;  index > 1; index--) {
        factorial = factorial *  index // 5 * 4 * 3 * 2 *1
    }

    console.log(`factorial de : ${numero} es ${factorial}`);
}

factorial(0)
factorial(-3)
factorial(5)
*/
/*--------------------------------------------------------------
const numeroPrimo = (numero = undefined) => {
    if (numero === undefined)
        console.log('Debe ingresar un numero');

    if (typeof numero !== "number")
        console.log('Debe ser un numero');

    if (numero === 0)
        console.log('El numero ingresado no puede ser  0');



    if (Math.sign(numero) === -1) return
    console.log('El numero no puede ser negativo');

    let divisible = false;

    for (let index = 2; index < numero; index++) {
        if ((numero % index) === 0) {
            divisible = true
            break
        }

    }
    return (divisible)
        ? console.log(`El numero ${numero}, no es primo`)
        : console.log(`El numero ${numero}, no es primo`)
}
numeroPrimo('7')
numeroPrimo(7)
---------------------------------------------------*/
/*-----------------------------------------
const par_impar = (numero = undefined) => {

    if (numero === undefined)
        return console.log('Debe ingresar un numero');

    if (typeof numero !== "number") {
        return console.log('Debe ingresar un numero');

    }

    return ((numero % 2) === 0)
        ? console.log(`El numero ${numero} es Par`)
        : console.log(`El numero ${numero} es Impar`)
}
par_impar()
par_impar('23')
par_impar(29)
-----------------------------------------------------*/
/*-----------------------------------------------
const convertidorGrados = (grados = undefined, unidad = undefined) => {

    if (grados === undefined)
        return console.log('Debe ingresar los grados');

    if (typeof numero !== "number")
        return console.log('Debe ingresar un numero para los grados');

    if (unidad === undefined)
        return console.log('Debe ingresar unidad');

    if (typeof unidad !== "string")
        return console.log(`El valor ${unidad} no es un caracter`);

    if (unidad !== 1 || !/C|F/.test(unidad))
        return console.log(`El valor ${unidad} es invalido`)

    if (unidad === "C")
        return console.log(`${grados} C° = ${Math.round(grados * (9 / 5) + 32)} F°`);


    else if (unidad == "F") {
        return console.log(`${grados} F° = ${Math.round(((grados - 32))) * (((5 / 9)))} F°`);

    }else{
        console.log('el tipo de grados a convertir es irregular');
    }
}

convertidor(25, 'C')
convertidor('25', 'C')

convertidor()
convertidor(25, 'E')
convertidor('')
----------------------------------------------------------------*/
/*--------------------------------------------------
const conversorBinario = (numero = undefined, base = undefined) => {
    if (numero === undefined)
        return console.log('Debe ingresar numeros');

    if (typeof numero !== "number")
        return console.log('Debe ingresar un numero');

    if (base === undefined)
        return console.log('Debe ingresar una base');

    if (typeof base !== "number")
        return console.log('El valor ingresado no es un numero');

    if (base === 2) {
        return console.log(`${numero} base ${base}  = ${parseInt(numero,base)} base 10`);
    }else if (base === 10){
        return console.log(`${numero} base ${base}  = ${numero.toString(base)} base 2`);
    }else{
        console.log('el tipo a convertir no es binario');
    }
}

conversorBinario();
conversorBinario(2)
conversorBinario(100,"2")
conversorBinario(101,2)
conversorBinario('1100011',2)
-----------------------------------------------------------*/
/*-----------------------------------------------------------
const descuento = (monto = undefined, descuento = 0) => {
    if (monto === undefined)
        return console.log('Debe ingresar numeros');

    if (typeof numero !== "number")
        return console.log('Debe ingresar un numer');

    if (monto === undefined)
        return console.log('Debe ingresar una base');

    if (descuento === undefined)
        return console.log('Debe ingresar el decuento');

    if (typeof monto !== "number" && typeof descuento !== "number")
        return console.log('El valor ingresado no es un numero');
        
    if (monto === 0)
        return console.log('El valor ingresado no puede ser 0');

    if (monto === -1)
        return console.log('El valor ingresado no puede ser -1');

    return console.log(`${monto} - ${descuento}% = ${monto  - ((monto * descuento)/100)} `);
}

const descuento = (cantidad, descuento) => {

    const descontar = ((cantidad * descuento) / 100)
    const resultado = cantidad - descontar
    console.log(resultado);
}

descuento(1000, 30)
----------------------------------------------------*/
/*--------------------------------------------------
const validaFecha = (fecha = undefined) => {
    if (fecha === undefined)
        return console.log("No ingresaste la fecha");

    if (!fecha instanceof Date)
        return console.log("Debe ingresar una fecha valida...");

    let hoy = new Date().getTime() - fecha.getTime()
    aniosEnMS = 1000 * 60 * 60 * 24 * 365

    aniosHumanos = Math.floor(hoy / aniosEnMS);

    return  (Math.sign(aniosHumanos) === -1)
    ? console.log(`Faltan ${Math.abs(aniosHumanos)} anios para el ${fecha.getFullTear()}`)


}
--------------------------------""--------------------------*/
/*-----------------------------------------------------
const  contarLetras = (cadena = "") => {
    if(typeof cadena !== "string")
    return console.log("No ingresaste una cadena de texto");

    if(!cadena) 
    return console.log('No ha ingresado la cadena');

    cadena = cadena.toLowerCase();
    let vocales = 0
    let consonantes = 0

    for (let letra  of cadena) { //reccorre datos iterables
        if(  /aeoiuAEIOUÁÉÍÓÚ/.test(letra)){
            vocales ++
        }
        if( /bcdfghjklmnñpqrstvwxyz/.test(letra)){
            consonantes ++
        }
    }

    return console.log(`vocales: ${vocales} consonates: ${consonantes}`);
}

contarLetras('')
contarLetras('hola')
contarLetras(1234)
contarLetras('ñoño')
--------------------------------------------------------*/
/*-------------------------------------------------------
const validarNombre = (nombre = "") => {
    let expReg = /^[A-Za-zÑñáéíóúÁÉÍÓÚ\s]+$/g.test(nombre)
    return (expReg)
    ? console.log(`El nombre ${nombre} es un nombre valido`)
    : console.log(`El nombre ${nombre} No es  nombre valido`);
}

validarNombre();
validarNombre(3)
validarNombre('Claudio Retamal')
validarNombre('Claudio.Retamal')
-----------------------------------------------*/
/*------------------------------------
const validarEmail = (email = "") => {


    if(typeof email !== "string")
    return console.log("No ingresaste una cadena de texto");

    if(!email) 
    return console.log('No ha ingresado la cadena');

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)
    return (expReg)
    ? console.log(`El email ${email} es un email valido`)
    : console.log(`El email ${email} No es  email valido`);
}

validarNombre();
validarNombre(3)
validarNombre('ClaudioR@gmail.com')
validarNombre('ClaudioR@gmail.com')
------------------------------------*/
/*-----------------------------------
const validarPatron = (cadena ="" ,patron = undefined) => {


    if(typeof cadena !== "string")
    return console.log("No ingresaste una cadena de texto");

    if(!cadena) 
    return console.log('No ha ingresado la cadena');

    if( (!patron instanceof RegExp))
    return console.log("No es una expresion regular");

    if(!patron) 
    return console.log('No ha ingresado la patron');


    let expReg = patron.test(cadena)
    return (expReg)
    ? console.log(`La cedena ${cadena} es un email valido`)
    : console.log(`El email ${cadena} No es  email valido`);
}

validarPatron();
validarNombre(3)
validarNombre('Claudio',)
validarNombre('ClaudioR@gmail.com', new RegExp(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i))
--------------------------------------------------*/
//arreglos
/*----------------------------------------
const devolverCuadrado = (arr = undefined) => {
    if (arr === undefined)
        console.log('El valor ingresado no es un arreglo');

    if (!(arr instanceof Array))
        console.log('El valor ingresado no es un arreglo');

    if (arr.lenvgyt6gth === 0)
        console.log('El arreglo esta vacio');

    for (const numero of arr) {
        if (typeof numero != "number")
            return console.log('el valor no es un numero');
    }
    const newArray = arr.map(ele => el * el)
    console.log(`Arreglo original ${arr} arreglo elevado al cuadrado ${newArray}`);

}

devolverCuadrado()
devolverCuadrado('q')
devolverCuadrado([])
devolverCuadrado(['1',2,3,4])
devolverCuadrado([1,2,[]])
---------------------------------------------------------*/
/*--------------------------------------------------------
const devolverMinMAX = (arr = undefined) => {
    if (arr === undefined)
        console.log('El valor ingresado no es un arreglo');

    if (!(arr instanceof Array))
        console.log('El valor ingresado no es un arreglo');

    if (arr.legth === 0)
        console.log('El arreglo esta vacio');

    for (const numero of arr) {
        if (typeof numero != "number")
            return console.log('el valor no es un numero');
    }
      return log(`arreglo original ${arr} valor mayor: ${Math.max(...arr)}  ${Math.min(...arr)} `) 
}

devolverMinMAX([false])
devolverMinMAX([1,2,3])
-----------------------------------------------------------*/
/*-------------------------------------------------
const ParesImpares = (arr = undefined) => {
    if (arr === undefined)
        console.log('El valor ingresado no es un arreglo');

    if (!(arr instanceof Array))
        console.log('El valor ingresado no es un arreglo');

    if (arr.legth === 0)
        console.log('El arreglo esta vacio');

    for (const numero of arr) {
        if (typeof numero != "number")
            return console.log('el valor no es un numero');
    }

    return console.log({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1)
    }

    );

}
ParesImpares([])
ParesImpares([2,3,4,5,5])
ParesImpares(['','',''])
ParesImpares([1,2,3,4,5,6,7,8,9])
----------------------------------------------------*/
/*------------------------------------------------
const ordenarArreglo = (arr = undefined) => {
    if (arr === undefined)
        console.log('El valor ingresado no es un arreglo');

    if (!(arr instanceof Array))
        console.log('El valor ingresado no es un arreglo');

    if (arr.length === 0)
        console.log('El arreglo esta vacio');

    for (const numero of arr) {
        if (typeof numero != "number")
            return console.log('el valor no es un numero');
    }
    return console.log({
        arr,
        asc: arr.map(el => el ).sort(),
        desc: arr.map(el => el ).sort().reverse(),
    });

}

ordenarArreglo();
ordenarArreglo([]);
ordenarArreglo(['',''])
ordenarArreglo([2,5,6,7])
----------------------------------------*/
/*-----------------------------------------
const eliminarDuplicados = (arr = undefined) => {
    if (arr === undefined)
        console.log('El valor ingresado no es un arreglo');

    if (!(arr instanceof Array))
        console.log('El valor ingresado no es un arreglo');

    if (arr.length === 0)
        console.log('El arreglo esta vacio');

    if (arr.length === 1)
        console.log('El arreglo debe tener al menos dos caracteres');

    for (const numero of arr) {
        if (typeof numero != "number")
            return console.log('el valor no es un numero');
    }

    console.log(
    {
        original: arr,
        sinDuplicados: arr.filter((value , index ,self ) => self.indexOf(value)=== index)

        original: arr,
        sinDuplicados:  [...new Set(arr)]
    }

    );

}

eliminarDuplicados([])
eliminarDuplicados([1])
eliminarDuplicados([1,2,3,4,4,4])
---------------------------------*/
/*-------------------------------------------
const arrayPromedio = (arr = undefined) => {
    if (arr === undefined)
        console.log('El valor ingresado no es un arreglo');

    if (!(arr instanceof Array))
        console.log('El valor ingresado no es un arreglo');

    if (arr.length === 0)
        console.log('El arreglo esta vacio');

    if (arr.length === 1)
        console.log('El arreglo debe tener al menos dos caracteres');

    for (let numero of arr) {
        if (typeof numero != "number")
            return console.log('el valor no es un numero');
    }

    return console.log(
        arr.reduce((total,  num, index, arr) => {
                total += num;
                if(index  === arr.length-1){

                return `El promedio de ${arr.join("+")} es ${total /arr.length}`;
        }else{
            return total
        }
        
        })
    )
}

arrayPromedio()
arrayPromedio([''])
arrayPromedio([1,2,3,''])
-----------------------------------------------------------*/
/*
27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
          - Todos los datos del objeto son obligatorios.
          - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
          - Valida que el título no rebase los 100 caracteres.
          - Valida que el director no rebase los 50 caracteres.
          - Valida que el año de estreno sea un número entero de 4 dígitos.
          - Valida que el país o paises sea introducidos en forma de arreglo.
          - Valida que los géneros sean introducidos en forma de arreglo.
          - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
          - Crea un método estático que devuelva los géneros aceptados*.
          - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
          - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
/*
class Pelicula {

    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
        this.id = id,
            this.titulo = titulo,
            this.director = director,
            this.estreno = estreno,
            this.pais = pais,
            this.generos = generos,
            this.calificacion = calificacion
        this.validarIMDB(id)
        this.validarTitulo(titulo)
        this.validarDirector(director)
        this.validarEstreno(estreno)
        this.validarPais(pais);
        this.validarGenero(generos)
        this.validarCalificacion(calificacion) //metodos de validacion
    }


    static get listaGeneros() {
        return ['Action', 'Adult',
            'Adventure', 'Animation',
            'Biography', 'Comedy', 'Crime',
            'Documentary', 'Drama', 'Family',
            'Fantasy', 'Film Noir', 'Game-Show',
            'History', 'Horror', 'Musical', 'Music',
            'Mystery', 'News', 'Reality-TV', 'Romance',
            'Sci-Fi', 'Short', 'Sport', 'Talk-Show',
            'Thriller', 'War', ' Western']
    }
    static generosAceptados() {
        return console.log(` generos aceptados : ${Pelicula.listaGeneros.join(",")}`);
    }



    validarArreglo(propiedad, valor) {
        if (!valor)
            return console.log(`La  ${propiedad} ${valor} esta vacio `);

        if (!(valor instanceof Array))
            return console.log(`La  ${propiedad} ${valor} no es un arreglo `);

        if (valor.length === 0) return console.log(`La  ${propiedad} ${valor} no tiene datos `);

        for (let cadena of valor) {
            if (typeof cadena !== 'string')
                return console.log(`El ${valor} ingresado no es una cadena de texto `);
        }

        return true
    }

    validarNumero(propiedad, valor) {
        if (!valor)
            return console.log(`La  ${propiedad} ${valor} esta vacio `);

        if (typeof valor !== "number")
            return console.log(`La  ${propiedad} ${valor} no es un numero `);
        return true

    }


    validarCadena(propiedad, valor) { //titulo = 'terminator'
        if (!valor) return console.log(`${propiedad} ${valor} esta vacio`);
        if (typeof valor !== 'string') return console.log(`${propiedad} ${valor} El valor ingresado no es una cadena`);
        return true
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.error(`${propiedad} ${valor} excede el numero de caracteres`);
    }


    validarIMDB(id) {
        if (this.validarCadena("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id)))
                return console.log(`IMDB id "${id}" no es valido, debe tener 2 primeros caracteres deben ser letras minusculas , los 7 restantes numeros `);
        }
    }
    validarTitulo(titulo) {
        if (this.validarCadena('Titulo', titulo))
            this.validarLongitudCadena("Titulo", titulo, 100);

    }

    validarDirector(director) {
        if (this.validarCadena('Director', director))
            this.validarLongitudCadena("Director", director, 50);
    }

    validarEstreno(estreno) {
        if (this.validarNumero("Año de esteno", estreno)) {
            if (!(/^([0-9]){4}$/.test(estreno)))
                return console.log(`El año no es valido, debe tener 4 digitos  `);
        }
    }
    validarPais(pais) {
        this.validarArreglo('pais', pais);
    }

    validarGenero(generos) {
        if (this.validarArreglo('genero', generos)) {
            for (let genero of generos) {
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.log(`Generos ${generos.join(",")}`);
                    Pelicula.generosAceptados();
                }
            }
        }

    }

    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificacion", calificacion)) {
            return (calificacion < 0 || calificacion > 10)
                ? console.log('La calificacion debe ser un numero entre 0 -10')
                : this.calificacion = calificacion.toFixed(1)
        }
    }

    fichaTecnica() {
        console.log(
            `FichaTecnica \n Titulo  ${this.titulo}, \n Director: ${this.director}, \n Año: ${this.estreno}, \n Pais ${this.pais.join("-")}, \n Generos ${this.generos.join(",")}, \n calificacion ${this.calificacion} IMDB ${this.id},  `

        );
    }

}


const peli = new Pelicula({//instanciar
    id: 'tt1234567',
    titulo: 'orange mecanic',
    director: 'stanley kubrick',
    estreno: 2404,
    pais: ['Chile'],
    generos: ['Comedy', 'Dark'],
    calificacion: 9.2

});
peli.fichaTecnica();

const misPelis = [

    {
        id: 'tt1234566',
        titulo: 'red',
        director: 'copola',
        estreno: 2124,
        pais: ['Peru'],
        generos: ['sport', 'Dark'],
        calificacion: 1.1
    },
    {
        id: 'tt1234555',
        titulo: 'batman',
        director: 'c-nolan',
        estreno: 2003,
        pais: ['ee-uu'],
        generos: ['Dark'],
        calificacion: 9.5
    },
    {
        id: 'tt1234566',
        titulo: 'spiderman',
        director: 'stanley',
        estreno: 2000,
        pais: ['USA'],
        generos: ['Comedy', 'superhero'],
        calificacion: 9.2
    }
]

misPelis.forEach(el => new Pelicula(el).fichaTecnica())

*/