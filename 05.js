// 5. Ingrediente en mal estado
// Un ingrediente de cierta comida está en mal estado y hay que sacarlo de la receta justo con los que están a su lado. Tu tarea es escribir una función que va a recibir un menú, una comida y el ingrediente en cuestión y si el ingrediente está en la comida debes retornar un arreglo con el ingrediente y los dos elementos mas cercanos a el (con un índice de diferencia ya sea para atras o para adelante)
// Si no se encuentra el ingrediente debe retornar ‘El menu esta perfecto’
// Ejemplo:
// let menuDelDia={
// raviolesConSalsa[“harina”, “sal”, “huevos”, “aceite”, “peceto”, “ricota”],
// bagnaCauda[“ajo”, “anchoas”, “aceite”, “crema”, “papas”, “zanahorias”],
// tallarines[“harina”, “pollo”, “aceite”, “huevos”, “tomates”, “cebolla”],
// };

// Completa la función ingredienteEnMalEstado a continuación
// La función debe retornar un ARRAY DE STRING o un STRING
// La funcion recibe los siguientes parámetros
// OBJETO ‘menu’,
// STRING ‘comida’,
// STRING ‘ingrediente’
// No modifiques nada por fuera del cuerpo de la función

function ingredienteEnMalEstado(menu, comida, ingrediente){
	// Tu codigo aqui:
	if (menu.hasOwnProperty(comida)) {
		const ingredientes = menu[comida];
		const indiceIngrediente = ingredientes.indexOf(ingrediente);
	
		if (indiceIngrediente !== -1) {
			const resultado = [];
			// Agregar el ingrediente en mal estado
			resultado.push(ingrediente);

			// Agregar los dos elementos más cercanos
			if (indiceIngrediente > 0) {
			resultado.push(ingredientes[indiceIngrediente - 1]);
			}
			if (indiceIngrediente < ingredientes.length - 1) {
			resultado.push(ingredientes[indiceIngrediente + 1]);
			}

			return resultado;
		} else {
			return 'El menu está perfecto';
		}
	} else {
		return 'La comida no está en el menú';
	}
}

// HenryChallenge - HackerRank - 27 may 2023
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine



