// 7. Doble
// Para este ejercicio deberás escribir una función que te permita calcular el doble de muchos números a la vez
// La función recibirá un arreglo de enteros y retorna un nuevo arreglo de enteros donde cada elemento es el doble de uno de los elementos del arreglo original
// Ejemplo:
// doble([1, 2, 3])
// debería devolver
// [2, 4, 6]

// Descripción de la función:
// La función doble debe retornar un arreglo de enteros
// La funcion doble recibe por parámetro un arreglo de enteros
// Aclaraciones:
// El orden de los elementos del arreglo retornado debe coincidir con el del arreglo recibido

// Completa la función ‘doble’ a continuación
// La función debe retornar un arreglo de enteros
// La función acepta un arreglo de enteros como parámetro
// No modifiques nada por fuera del cuerpo de la función

function doble(array){
	// Tu codigo aqui:
	const resultado = [];

	for (let i = 0; i < array.length; i++) {
		resultado.push(array[i] * 2);
	}

	return resultado;
}

// HenryChallenge - HackerRank
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine


