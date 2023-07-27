
function agregarElemento(elemento, lista) {
    lista.push(elemento);
}

let numerosEj1 = [];
function mostrarNumeroMayor(numerosEj1) {
    let mayor = numerosEj1[0];
    for (let i = 1; i < numerosEj1.length; i++) {
        if (numerosEj1[i] > mayor) {
            mayor = numerosEj1[i];
        }
    }
    return mayor;
}

let numerosE4 = [];
function promedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    let promedio = suma / numerosE4.length;
    return promedio;
}
let numerosE5 = [];
function mayoresA20(numerosE5) {
    let mayor20 = [];
    for (let i = 0; i < numerosE5.length; i++) {
        if (numerosE5[i] > 20) {
            mayor20.push(numerosE5[i])
        }
    }
    return mayor20
}
function existen(texto, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === texto) {
            return true;
        }
    }
    return false;
}
function eliminarRepetidos(arrayOriginal) {
    let arraySinRepetidos = []
    for(let i = 0; i < arrayOriginal.length; i++) {
        let existe = false;
        for(let j = 0; j < arraySinRepetidos.length; j++) {
            if(arrayOriginal[i] === arraySinRepetidos[j]) {
                existe = true;
                break;
            }
        }
        if(!existe) {
            arraySinRepetidos.push(arrayOriginal[i]);
        }
    }
    return arraySinRepetidos;
}

/**/

