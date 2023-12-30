// 2. Sumar primos
// Escribe una función que reciba un arreglo de enteros, sume todos los numeros primos que allí se encuentren y retorne el resultado de la suma
// Ejemplo:
// sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11])
// debe retornar:
// 21 // Suma de 5, 2, 3, y 11

// Descripción de la función
// La función sumaTodosPrimos debe retornar un entero
// La función sumaTodosPrimos recibe como parámetro
// numeros: Arreglo de enteros

// Completa la función sumaTodosPrimos a continuación
// La función debe retornar un entero
// La función recibe un arreglo de enteros como parámetro
// No modifiques nada por fuera del cuerpo de esta función

function sumaTodosPrimos(numeros){
	// Tu codigo aqui:
	// Función para verificar si un número es primo
	function esPrimo(numero) {
		if (numero <= 1) return false;
		for (let i = 2; i <= Math.sqrt(numero); i++) {
		  if (numero % i === 0) return false;
		}
		return true;
	}

	// Sumar números primos en el arreglo
	let sumaPrimos = 0;
		for (let i = 0; i < numeros.length; i++) {
			if (esPrimo(numeros[i])) {
				sumaPrimos += numeros[i];
			}
		}

	return sumaPrimos;
}

// HenryChallenge - HackerRank - 27 may 2023
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine


