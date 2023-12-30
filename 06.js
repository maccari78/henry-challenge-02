// 6. Divisores
// Deberás escribir una función que reciba un numero y nos retorna un arreglo con los divisores del número recibido, en caso de que el número no tenga divisores (exceptuando el 1 y el mismo número) debería retornar ‘Es primo’
// Ejemplo:
// divisores(15)
// Debería retornar:
// [3, 5]
// Descripción de la función:
// La función divisores debe retornar un arreglo de enteros si encuentra divisores del número recibido
// La función divisores recibe como parámetros 
// number: Número entero

// Completa la función divisores a continuación
// La función debe retornar un ARRAY DE ENTEROS o un STRING
// La funcion recibe un NUMERO ENTERO ‘numero’ como parámetro
// No modifiques nada por fuera del cuerpo de la función

function divisores(numero){
	// Tu codigo aqui:
	if (numero <= 1) {
		return 'Es primo';
	}

	const divisoresEncontrados = [];
	for (let i = 2; i <= Math.sqrt(numero); i++) {
		if (numero % i === 0) {
			divisoresEncontrados.push(i);
			if (i !== numero / i) {
				divisoresEncontrados.push(numero / i);
			}
		}
	}

	return divisoresEncontrados.length > 0 ? divisoresEncontrados : 'Es primo';
	
}

// HenryChallenge - HackerRank
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine

