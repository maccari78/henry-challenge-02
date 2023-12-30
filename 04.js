// 4. Agregar propiedad
// En este ejercicio trabajarás con objetos
// Tu tarea será escribir una función que al recibir un arreglo de objetos chequee si todos los objetos tienen cierta propiedad recibida también por parámetro y se la agregue a todos los que no la tengan (tengan valor null)
// Ejemplo:
// agregaPropiedad([{nombre: ‘Toni’}, {nombre: Emi, edad: 25}], ‘edad’)
// debería retornar:
// [{nombre: ‘Toni’, edad: null}, {nombre: ‘Emi’, edad: 25}]

// Descripción de la función:
// La función agregarPropiedad debe retornar un arreglo de objetos
// La función agregaPropiedad recibe como parámetros:
// amigos
// propiedad

// Completa la función ‘agregapropiedad’ a continuación
// La función debe retornar un arreglo de objetos
// La función recibe un arreglo de objetos ‘amigos’ y un string ‘propiedad’ como parámetros
// No modifiques nada por fuera del cuerpo de la función

function agregaPropiedad(amigos, propiedad){
	// Tu codigo aqui:
	for (let i = 0; i < amigos.length; i++) {
		if (!amigos[i].hasOwnProperty(propiedad)) {
			amigos[i][propiedad] = null;
		}
	}
	return amigos;
}

// HenryChallenge - HackerRank - 27 may 2023
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine

