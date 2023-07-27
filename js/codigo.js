window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEjercicio1").addEventListener("click", cantidadCaracteres);//Ej1
    document.querySelector("#btnEjercicio2").addEventListener("click", agregar);//Ej2
    document.querySelector("#btnEjercicioN2").addEventListener("click", mostrarMayor);//Ej2
    document.querySelector("#btnEjercicio3").addEventListener("click", ingresarPalabra);//Ej3
    document.querySelector("#btnEjercicioN3").addEventListener("click", mostrarArray);//Ej3
    document.querySelector("#btnEjercicio4").addEventListener("click", ingresarNumerosE4);//Ej4
    document.querySelector("#btnEjercicioN4").addEventListener("click", calcularPromedio);//Ej4
    document.querySelector("#btnEjercicio5").addEventListener("click", mayores20);//Ej5
    document.querySelector("#btnEjercicio6").addEventListener("click", agregarAlias);//Ej6
    document.querySelector("#btnEjercicio7").addEventListener("click", nombresEj7);//Ej7
    document.querySelector("#btnEjercicioN7").addEventListener("click", mostrarPosicion);//Ej7
    document.querySelector("#btnEjercicioF7").addEventListener("click", buscarYremplazar);//Ej7
    document.querySelector("#btnEjercicio8").addEventListener("click", fibonacci);//Ej8
    document.querySelector("#btnEjercicio9").addEventListener("click", fibonacci2);//Ej9
    document.querySelector("#btnEjercicio10").addEventListener("click", agregaTexto10);//Ej10
    document.querySelector("#btnEjercicioN10").addEventListener("click", eliminarTexto);//Ej10
    document.querySelector("#btnEjercicio11").addEventListener("click", ejercicio11);//Ej11
    document.querySelector("#btnEjercicio12").addEventListener("click", obtenerMascotasPorLetra);//Ej11
    document.querySelector("#btnEjercicio13").addEventListener("click", ejercicio13);//Ej13

}

function cantidadCaracteres() {
    let nombre = document.querySelector("#nombre1").value;
    contarLetras(nombre);
}
let nombres = [];
function contarLetras(nombre) {
    let contarLetras = [];
    nombres.push(nombre);
    console.log(nombres);
    let resultado = "";
    for (let i = 0; i < nombres.length; i++) {
        contarLetras.push(nombres[i].length);
        resultado = contarLetras[i] + "<br>";
    }
    document.querySelector("#pResultado1").innerHTML = `${nombre} tiene ${resultado} caracteres`;
}
function agregar() {
    let numero = Number(document.querySelector("#numero2").value);
    agregarElemento(numero, numerosEj1);
    document.querySelector("#pResultado2").innerHTML = numerosEj1;
}
function mostrarMayor() {
    let mostrar = mostrarNumeroMayor(numerosEj1);
    document.querySelector("#pResultadoN2").innerHTML = "El número mayor  es: " + mostrar;
}
function ingresarPalabra() {
    let palabra = document.querySelector("#palabra3").value;
    agregarElemento(palabra, palabras);
}

function mostrarArray() {
    mostrarArrayIndex(palabras);
}
let palabras = [];
function mostrarArrayIndex(palabras) {
    let resultado = "";
    for (let i = 0; i < palabras.length; i++) {
        resultado += palabras[i] + "<br>";
    }
    document.querySelector("#pResultadoN3").innerHTML = `${resultado}`;
}
function ingresarNumerosE4() {
    let numeros = Number(document.querySelector("#numero4").value);
    agregarElemento(numeros, numerosE4);
}
function calcularPromedio() {
    let ver = promedio(numerosE4);
    document.querySelector("#pResultado4").innerHTML = "El promedio es: " + ver;
}
function mayores20() {
    let numeros = Number(document.querySelector("#numero5").value);
    agregarElemento(numeros, numerosE5);
    let mostrar = mayoresA20(numerosE5);
    document.querySelector("#pResultado5").innerHTML = mostrar;
}
let arrayaliasE6 = [];
function agregarAlias() {
    let alias = document.querySelector("#alias6").value;
    let existe = false;
    for (let i = 0; i < arrayaliasE6.length; i++) {
        if (arrayaliasE6[i] === alias) {
            existe = true
            break
        }
    }
    let parrafo = ""
    if (existe) {
        document.querySelector("#pResultado6").innerHTML = "El alias ya existe. Por favor, ingresa otro alias.";
    } else {
        arrayaliasE6.push(alias)
        for (let i = 0; i < arrayaliasE6.length; i++) {
            parrafo += arrayaliasE6[i] + "<br>";
            document.querySelector("#pResultado6").innerHTML = parrafo + "Alias ingresado correctamente";
        }
    }
    console.log(arrayaliasE6)
}
let arrayNombresEj7 = [];
function nombresEj7() {
    let nombres = document.querySelector("#nombres7").value;
    agregarElemento(nombres, arrayNombresEj7)
    nombres = "";
    for (let i = 0; i < arrayNombresEj7.length; i++) {
        nombres += arrayNombresEj7[i] + "<br>"
    }
    document.querySelector("#pResultado7").innerHTML = nombres + "Este array tiene " + arrayNombresEj7.length + " elementos."
}
function mostrarPosicion() {
    let posicion = Number(document.querySelector("#numeros7").value);
    if (posicion <= arrayNombresEj7.length) {
        document.querySelector("#pResultadoN7").innerHTML = "El valor en la posicion ingresada es: " + arrayNombresEj7[posicion];
        document.querySelector("#pResultadoNE7").innerHTML = "El último elemento del array es: " + arrayNombresEj7[arrayNombresEj7.length - 1];
    }
    else {
        document.querySelector("#pResultadoN7").innerHTML = "No existe la posicion ingresada.";
    }
}
function buscarYremplazar() {
    let buscarNombre = document.querySelector("#nombreB7").value;
    let nuevoNombre = document.querySelector("#nombreNv7").value;
    let existe = false;
    for (let i = 0; i < arrayNombresEj7.length; i++) {
        if (buscarNombre === arrayNombresEj7[i]) {
            arrayNombresEj7[i] = nuevoNombre;
            existe = true;
        }
    }
    if (existe) {
        let resultado = "";
        for (let i = 0; i < arrayNombresEj7.length; i++) {
            resultado += arrayNombresEj7[i] + "<br>";
        }
        document.querySelector("#pResultadoEj7").innerHTML = resultado;
    } else {
        document.querySelector("#pResultadoEj7").innerHTML = "El nombre ingresado no existe";
    }
}
function fibonacci() {
    let arrayFibonacci = [1, 1];

    let fibonacci = arrayFibonacci[0] + ", ";
    fibonacci += arrayFibonacci[1] + ", ";
    for (let i = 2; i < 20; i++) {
        arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
        fibonacci += arrayFibonacci[i] + ", ";
    }
    document.querySelector("#pResultado8").innerHTML = fibonacci;
}
function fibonacci2() {
    let arrayFibonacci = [1, 1];

    let fibonacci = arrayFibonacci[0] + ", ";
    fibonacci += arrayFibonacci[1] + ", ";

    let ultimoNumero = 0;
    for (let i = 2; ultimoNumero <= 1000; i++) {
        arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
        ultimoNumero = arrayFibonacci[i];
        fibonacci += arrayFibonacci[i] + ", ";
    }
    document.querySelector("#pResultado9").innerHTML = fibonacci;
}
let arrayTextos10 = [];
function agregaTexto10() {
    let texto = document.querySelector("#texto10").value;
    arrayTextos10.push(texto);
    mostrarArray10();
    console.log(arrayTextos10)
}

function eliminarTexto() {
    let texto = document.querySelector("#texto10").value;
    let newArray = [];

    let existe = false;
    for (let i = 0; i < arrayTextos10.length; i++) {
        if (arrayTextos10[i] !== texto) {
            newArray.push(arrayTextos10[i]);
        } else {
            existe = true;
        }
    }
    if (existe) {
        arrayTextos10 = newArray;
        mostrarArray10();
    } else {
        document.querySelector("#pResultado10").innerHTML = " El texto no existe en el array"
    }

    console.log(arrayTextos10);
}
function mostrarArray10() {
    let resultado = "";
    for (let i = 0; i < arrayTextos10.length; i++) {
        resultado += arrayTextos10[i] + "<br>";
    }
    document.querySelector("#pResultado10").innerHTML = resultado;
}

let arrayRepetidos = ["a", "b", "c", "b", "d", "a", "e", "c", "c"]

function ejercicio11() {
    let arrayNuevo = eliminarRepetidos(arrayRepetidos);
    document.querySelector("#pResultado11").innerHTML = "";
    for (let i = 0; i < arrayNuevo.length; i++) {
        document.querySelector("#pResultado11").innerHTML += arrayNuevo[i] + ", "
    }

}
function eliminarRepetidos(arrayOriginal) {
    let arraySinRepetidos = []
    for (let i = 0; i < arrayOriginal.length; i++) {
        let existe = false;
        for (let j = 0; j < arraySinRepetidos.length; j++) {
            if (arrayOriginal[i] === arraySinRepetidos[j]) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            arraySinRepetidos.push(arrayOriginal[i]);
        }
    }
    return arraySinRepetidos;
}

function filtrarMascotasPorLetra(array, letra) {
    let mascotasFiltradas = [];

    for (let i = 0; i < array.length; i++) {
        let mascota = array[i];
        if (mascota.charAt(mascota.length - 1) === letra) {
            mascotasFiltradas.push(mascota);
        }
    }

    return mascotasFiltradas;
}

function obtenerMascotasPorLetra() {
    let arrayMascotas = ["Luna", "Max", "Lola", "Simba", "Milo", "Nala", "Rocky", "Eustanfico"];
    console.log(arrayMascotas);
    let letra = document.querySelector("#texto12").value;

    let mascotasFiltradas = filtrarMascotasPorLetra(arrayMascotas, letra);
    let resultado = "Mascotas con nombre que termina en '" + letra + "': ";
    for (let i = 0; i < mascotasFiltradas.length; i++) {
        resultado += mascotasFiltradas[i];
        if (i < mascotasFiltradas.length - 1) {
            resultado += ", ";
        }
    }

    document.querySelector("#pResultado12").innerHTML = resultado;
}
//tacontarMascotasNombreLargo(arrayMascotas);
/*Crear un array indexado con datos de nombres de animales, en cada posición del 
array se deberá precargar un nombre.
a) Crear una función que reciba como parámetro un array de mascotas y una letra. 
Deberá devolver un array cargado con las mascotas cuyo nombre termine con la letra
 recibida por parámetro. Invocar a la función y mostrar las mascotas del array 
 resultante.
b) Crear una función que reciba como parámetro un array de mascotas y muestre en 
pantalla la cantidad de mascotas cuyo nombre tenga más de 7 caracteres y además 
muestre el o los nombres de mascota más cortos.


*/

let array13 = [1, 2, 3, 4, 12, 22, 35, 43, 65, 78, 93, 33, 27, 39, 27]

function ejercicio13() {
    let arrayNuevo = numerosMayores20(array13);
    document.querySelector("#pResultado13").innerHTML = "";
    for (let i = 0; i < arrayNuevo.length; i++) {
        document.querySelector("#pResultado13").innerHTML += arrayNuevo[i] + ", "
    }
}

function numerosMayores20(array) {
    let array13Mayores20 = [];
    for (let i = 0; i < array.length; i++) {
        let unNumero = array[i]
        if (unNumero > 20) {
            array13Mayores20.push(unNumero)
        }
    }
    console.log(array13Mayores20);
    return array13Mayores20
}





