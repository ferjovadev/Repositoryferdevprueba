/* function busquedaLineal(arr, elemt) {
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === elemt) {
            return i;
        }
    }
    return -1;
}

const arreglo = [10, 2, 3, 8, 4, 9, 7];
const elementobuscado = 7;
const indice = busquedaLineal(arreglo, elementobuscado);
console.log(`El elemento ${elementobuscado} se encuentra en el índice ${indice}`);
 */


//1) Sumar elementos de un array

/* function sumarArray(array){
    let suma = 0;
    array.forEach(element => {
        suma += element;
    });
    return suma;
}

const arreglo = [1, 2, 3, 4, 5]

var outputarr = sumarArray(arreglo);
console.log(outputarr); */

// 2) Numero mayor o menor 

/* function maxMinarray(array){
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    array.forEach(element => {
        if(element > max){
            max = element;
        }
        if(element < min){
            min = element;
        }
    });
    return "valor maximo: " + max + " valor minimo: " + min;
}

const arreglo = [1, 2, 3, 4, 5]

var outputarr = maxMinarray(arreglo);

console.log(outputarr); */


//3) Contar elementos pares

/* function countElementPar(arr){
    let arrSave = [];
    arr.forEach(element => {
        if(element % 2 == 0){
            arrSave.push(element);
        }
    });
    return arrSave;
}

const arreglo = [1, 2, 3, 4, 5]

var outputarr = countElementPar(arreglo);

console.log(`Hay ${outputarr.length} numeros pares y son: ${outputarr}`); */


//4) Ordenar un array

/* function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];

    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

const arreglo = [10, 2, 33, 4, 25, 8, 7];
const arregloOrdenado = quicksort(arreglo);
console.log(arregloOrdenado); */



//5) Buscar un elemento

/* const arreglo = ["Alcides", "Julio", "Gino", "Fernando", "Yuri"];
const valorABuscar = "Gino";

const indice = arreglo.indexOf(valorABuscar);

if (indice !== -1) {
    console.log(`El índice del elemento es: ${indice}`);
} else {
    console.log('El elemento no se encuentra en el arreglo.');
} */


//6) Revertir un array

/* function revertirArray(arr) {
    let arrInvertido = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        arrInvertido.push(arr[i]);
    }
    
    return arrInvertido;
}

const arreglo = [20, 30, 31, 55, 22];
const arregloInvertido = revertirArray(arreglo);

console.log(arregloInvertido); */


//7) Convertir nombres a mayusculas

/* function convertirAMayusculas(arr) {
    return arr.map(nombre => nombre.toUpperCase());
}

const nombres = ["Alcides", "Julio", "Gino", "Fernando", "Yuri"];
const nombresMayusculas = convertirAMayusculas(nombres);

console.log(nombresMayusculas); */


// 8) Sumar solo los numeros positivos
/* function sumarPositivos(arr) {
    const positivos = arr.filter(num => num > 0);
    const suma = positivos.reduce((acc, num) => acc + num, 0);
    return suma;
}

const arreglo = [7, -4, -1, -4, 6];
const resultado = sumarPositivos(arreglo);

console.log(resultado); */

//9) Obtener el primer multiplo de 5

/* function primerMultiploDeCinco(arr) {
    return arr.find(num => num % 5 === 0);
}

const arreglo = [1, 2, 3, 7, 9, 10, 15];
const resultado = primerMultiploDeCinco(arreglo);

console.log(resultado); */

//10 Tabla de multiplicar
/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número para ver su tabla de multiplicar: ', (numero) => {
    numero = parseInt(numero);

    if (isNaN(numero)) {
        console.log('Por favor, ingresa un número válido.');
    } else {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }

    rl.close();
}); */

//11) Generar una secuencia de Fibonacci
/* function generarFibonacci(n) {
    let fibonacci = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci;
}

const primeros10Fibonacci = generarFibonacci(10);

console.log(primeros10Fibonacci); */


//12) Adivina un numero

/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function adivinarNumero() {
    rl.question('Adivina el número entre 1 y 10: ', (respuesta) => {
        const intento = parseInt(respuesta);

        
        if (intento === numeroSecreto) {
            console.log('¡Felicidades, adivinaste el número!');
            rl.close();
        } else {
            console.log('Intenta de nuevo. El número secreto es diferente.');
            adivinarNumero();
        }
    });
}

adivinarNumero(); */

//13) Contar regresivamente desde un número:
/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número para comenzar la cuenta regresiva: ', (numero) => {
    let count = parseInt(numero); 

    if (isNaN(count) || count < 0) {
        console.log('Por favor, ingresa un número válido mayor o igual a 0.');
        rl.close();
    } else {
        while (count >= 0) {
            console.log(count);
            count--;
        }

        rl.close();
    }
});
 */

//14)	Validar entrada de usuario
/* const readline = require('readline');

// Crear una instancia de readline una sola vez
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNumero() {
  rl.question('Ingresa un número mayor que 0: ', (respuesta) => {
    let numero = parseInt(respuesta);

    if (isNaN(numero) || numero < 0) {
      console.log('¡Entrada inválida! Por favor, ingresa un número mayor que 0.');
      pedirNumero();  // Volver a llamar a la función si la entrada es inválida
    } else {
      console.log(`¡Gracias! Has ingresado el número: ${numero}`);
      rl.close();
    }
  });
}

pedirNumero();


function mostrarMenu() {
    console.log("===== Menú =====");
    console.log("1. Opción 1");
    console.log("2. Opción 2");
    console.log("3. Opción 3");
    console.log("0. Salir");
}

function procesarOpcion(opcion) {
    switch (opcion) {
        case '1':
            console.log("Elegiste la opción 1.");
            break;
        case '2':
            console.log("Elegiste la opción 2.");
            break;
        case '3':
            console.log("Elegiste la opción 3.");
            break;
        case '0':
            console.log("Saliendo del menú...");
            rl.close(); // Cierra el readline para salir del programa
            return; // Termina la función
        default:
            console.log("Opción inválida. Intenta nuevamente.");
    }

    console.log(); // Línea en blanco para claridad
    mostrarMenu(); // Mostrar el menú nuevamente
    rl.question("Elige una opción: ", procesarOpcion);
}

// Iniciar el programa
function main() {
    mostrarMenu();
    rl.question("Elige una opción: ", procesarOpcion);
}

main(); */


//16) Sumar solo los números impares entre 1 y 50
/* let suma = 0; // Inicializamos la suma

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) { // Usamos if para verificar si el número es impar
        suma += i; // Sumamos el número impar
    }

    // Usamos while para verificar si la suma supera 500
    if (suma > 500) {
        console.log("La suma ha superado 500. Se detiene el proceso.");
        break; // Detenemos el bucle
    }
}

console.log("Suma final:", suma);
 */

//17) Contador de intentos
/* // Crear una interfaz para la entrada del usuario

// Definir las credenciales correctas
const usuarioCorrecto = "admin";
const contrasenaCorrecta = "1234";

let intentos = 0; // Inicializar contador de intentos

function login() {
    rl.question("Usuario: ", (usuario) => {
        rl.question("Contraseña: ", (contrasena) => {
            if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
                console.log("¡Login exitoso!");
                rl.close(); // Finaliza el programa
            } else {
                intentos++;
                console.log("Credenciales incorrectas. Intento " + intentos + " de 3.");
                
                if (intentos < 3) {
                    login(); // Vuelve a intentar
                } else {
                    console.log("Has excedido el número de intentos permitidos.");
                    rl.close(); // Finaliza el programa
                }
            }
        });
    });
}

console.log("Simulación de login (máximo 3 intentos):");
login();


//18) Sumar hasta que el usuario ingrese 0
const readline = require('readline'); // Declaramos readline solo una vez

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let suma = 0; // Inicializamos la suma
            console.log("La suma total es:", suma);
            rl.close(); // Cerramos el programa al ingresar 0
        } else {
            suma += numero; // Sumamos el número ingresado
            pedirNumero(); // Volvemos a pedir otro número
        }
    });
}

// Iniciar el programa
pedirNumero(); */


//19)
/* let a = 0; // Primer número de Fibonacci
let b = 1; // Segundo número de Fibonacci

console.log("Serie de Fibonacci:");
console.log(a); // Imprimir el primer número
console.log(b); // Imprimir el segundo número

while (b <= 100) {
    let siguiente = a + b; // Calculamos el siguiente número de la serie
    console.log(siguiente); // Imprimir el siguiente número

    // Actualizamos los valores para el siguiente ciclo
    a = b;
    b = siguiente;
} */

//20)

let numero = 3; // Iniciamos con el primer múltiplo de 3

console.log("Múltiplos de 3 menores a 50:");

while (numero < 50) {
    console.log(numero); // Imprimir el número actual
    numero += 3; // Incrementar al siguiente múltiplo de 3
}
    
