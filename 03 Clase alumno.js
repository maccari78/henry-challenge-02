// 3. Clase alumno
// Para este ejercicio deberás definir una clase alumno con sus parametros y metodos
// Las propiedades de la clase alumno son:
// nombre
// apellido
// cohorte
// grupoDeAmigos
// notasDeCheckpoints

// El constructor de la clase recibe estos 5 datos por parámetro.
// Los métodos propios de la clase alumno son:
// countAmigos: Retorna la cantidad de amigos del alumno
// addAmigo: Permite agregar un nuevo elemento al arreglo de amigos
// getNotas: Retorna el arreglo de notas de checkpoints del alumno
// addNota: Agrega un nuevo elemento al arreglo de notas de checkpoints

// Completa la clase alumno a continuación
// No modifiques nada por fuera del cuerpo de esta función

class alumno{
    // Tu codigo aqui:
    constructor(nombre, apellido, cohorte, grupoDeAmigos, notasDeCheckpoints) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cohorte = cohorte;
        this.grupoDeAmigos = grupoDeAmigos || []; // Inicializa como un arreglo vacío si no se proporciona
        this.notasDeCheckpoints = notasDeCheckpoints || []; // Inicializa como un arreglo vacío si no se proporciona
    }

    countAmigos() {
        return this.grupoDeAmigos.length;
    }

    addAmigo(amigo) {
        this.grupoDeAmigos.push(amigo);
    }

    getNotas() {
        return this.notasDeCheckpoints;
    }

    addNota(nuevaNota) {
        this.notasDeCheckpoints.push(nuevaNota);
    }
}

// HenryChallenge - HackerRank - 16 abr 2023
// https://www.youtube.com/watch?v=vYPLwOuz9DM&ab_channel=ederEngine
