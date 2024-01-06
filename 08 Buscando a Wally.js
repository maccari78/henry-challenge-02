// 8. Buscando a Wally
// Como en los clásicos y coloridos libros de nuestra infancia hoy necesitamos encontrar a Wally entre muchos otros personajes.
// Deberás escribir una función que encuentre el string ‘Wally’ dentro de un arreglo y retorna el string ‘He encontrado a Wally en la posición X’ donde X sea el índice del arreglo que ocupa Wally
// Por ejemplo:
// buscandoAWally([‘Dobby’, ‘Harry’, ‘Dementor’, ‘Wally’, ‘Sirtus’])
// debería retornar:
// “He encontrado a Wally en la posicion 3”

// Descripción de la función:
// La función buscandoAWally debe retornar un string
// La función buscandoAWally recibe como parámetros
// personajes: Un arreglo de strings

// Completa la función ‘buscandoAWally’ a continuación
// La función debe retornar un string
// la función acepta un arreglo de strings como parámetro
// No modifiques nada por fuera del cuerpo de la función

function buscandoAWally(personajes){
	// Tu codigo aqui:
	const indiceWally = personajes.indexOf('Wally');

	if (indiceWally !== -1) {
		return `He encontrado a Wally en la posición ${indiceWally}`;
	} else {
		return 'Wally no está en la lista';
	}
}

// HenryChallenge - HackerRank - 16 abr 2023
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine

