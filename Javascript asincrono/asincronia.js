/*
 setTimeout(() => { //recibe un callback
    console.log('Esto se ejecuta una vez');
    saludar()
}, 2000);
*/
/*
let temporizador2 = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000)

console.log(temporizador2);
clearTimeout(temporizador2);
*/
/*
let temporizador = setTimeout(() => {
    console.log(new Date().toLocaleTimeString());   
    console.log('hola');
}, 2000);

clearInterval(temporizador)
console.log('despues del clearTimeout');
*/

//Asincronia.

//manejo de callback 
//callback-llamada d vuelta - funcion que se ejecutara mientras la otra la haga.
/*
const cuadradoCallback = (value, callback) => {
    setTimeout(() => {
        callback(value,value * value)
    }, 0 | Math.random() * 5000);
}

cuadradoCallback(0,(value,resultado) =>{
    console.log(`callback ${value} 'res ${resultado}`);
    
    cuadradoCallback(1,(value,resultado)=> {
        console.log(`callback ${value} 'res ${resultado}`);
      
        cuadradoCallback(2,(value,resultado)=> {
            console.log(`callback ${value} 'res ${resultado}`);
          
            cuadradoCallback(3,(value,resultado)=> {
                console.log(`callback ${value} 'res ${resultado}`);
                
                cuadradoCallback(4,(value,resultado)=> {
                    console.log(`callback ${value} 'res ${resultado}`);
                   
                    cuadradoCallback(5,(value,resultado)=> {
                        console.log(`callback ${value} 'res ${resultado}`);
                       
                    })
                })
            })
        })
    })
})
*/

//promesas -> si algo se cumple - recurso-resource 
/*
const cuadradoPromise = (value) => {
    if (typeof value !== "number")
        return Promise.reject('este valor no es un numero')

    return new Promise((resolve, reject) => { //se acepta como nueva promesa
        setTimeout(() => {
            let resultado = 0;
            resolve(
                resultado = value * value
            )

        }, 5000);
    })
}

cuadradoPromise(6)
    .then((resultado => {
        console.log(`El resultado es: ${resultado}`);
        return cuadradoPromise(8)
    }))

    .then ((resultado => { //entonces si nos devuelve una promessa-
        console.log(`El resultado es: ${resultado}`);
    }))

*/

//asing await

const cuadradoPromisse = (value) => {
    if (typeof value !== "number") return Promise.reject('el valor ingresdo no es un numero');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value,

            });

            console.log('fin de la promesa');
        }, 5000);


    })

}

const Asincrona = async () => { //esta funcion tendra un comportamiento asincrono
    try {
        console.log('inicio fx asincrona');

        let obj = await cuadradoPromisse(3); //espera que se ejecute la funcion cuadradoPromise
        console.log(`resultado de la promesa ${obj.value}, ${obj.result}`);
        console.log('fin');

    } catch (error) {
        console.error(error)
    }
}

Asincrona();



