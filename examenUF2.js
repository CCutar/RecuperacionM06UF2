// 1. Crea un programa que faci servir un array amb almenys 5 noms. Després utilitza una funció
// per afegir un nom al final de l’array i una altra funció per eliminar el primer nom. Mostra
// l’array resultat després de cada operació.

// 2. Defineix un objecte de nom “Student” amb les propietats “name”, “age” i “course”. Crea un
// mètode dins de l’objecte que imprimeix per consola una descripció de l’estudiant. Després
// crea al menys dos instàncies de l’objecte i crida el mètode per mostrar la informació de
// l’estudiant.

// 3. Imagina que estas desenvolupant un joc. Crea un objecte que representi a un jugador amb
// les propietats “name”, “level” i “point”. Després implementa un mètode que augmenten els
// punts del jugador per 10 cada vegada que es cridi. Mostra com s'utilitza aquest objecte en
// un escenari de joc simulat.

// 4. Crea una funció que rep un array d'enters i retorna un array nou amb el nombres parells
// ordenats de major a menor. Pots utilitzar les funcions d’ordenar com filter o sort.

// 5. Imagina que estas desenvolupant una aplicació de gestió de llibres. Crea un objecte llibre
// amb les propietats títol, autor i any de publicació. Implementa un mètode que calculi
// l'antiguitat de llibre. Després crea varis instàncies de l’objecte i mostra la informació de
// cada llibre juntament amb la seva antiguitat.


// Punto 1
let nombres = ["Juan", "María", "Pedro", "Ana", "Luis"];

function añadirNombre(nombre) {
  nombres.push(nombre);
  console.log("Nombre añadido:", nombre);
  console.log("Array actualizado:", nombres);
}

function eliminarPrimerNombre() {
  let primerNombre = nombres.shift();
  console.log("Primer nombre eliminado:", primerNombre);
  console.log("Array actualizado:", nombres);
}

// Ejemplos de uso
añadirNombre("Sofía");
eliminarPrimerNombre();

// Punto 2
let Student = {
  name: "John",
  age: 20,
  course: "Computer Science",
  describe: function() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  }
};

let student1 = Object.create(Student);
student1.name = "Alice";
student1.age = 22;

let student2 = Object.create(Student);
student2.name = "Bob";
student2.age = 25;

student1.describe();
student2.describe();

// Punto 3
let Player = {
  name: "Player 1",
  level: 1,
  point: 0,
  increasePoints: function() {
    this.point += 10;
    console.log(`Points increased to ${this.point}`);
  }
};

// Escenario de juego simulado
Player.increasePoints();
Player.increasePoints();

// Punto 4
function ordenarNumerosPares(array) {
  let numerosPares = array.filter(num => num % 2 === 0);
  return numerosPares.sort((a, b) => b - a);
}

let numeros = [3, 7, 2, 8, 5, 10];
let numerosParesOrdenados = ordenarNumerosPares(numeros);
console.log("Números pares ordenados:", numerosParesOrdenados);

// Punto 5
function Libro(titulo, autor, añoPublicacion) {
  this.titulo = titulo;
  this.autor = autor;
  this.añoPublicacion = añoPublicacion;
  this.calcularAntiguedad = function() {
    let añoActual = new Date().getFullYear();
    return añoActual - this.añoPublicacion;
  };
}

let libro1 = new Libro("El Señor de los Anillos", "J.R.R. Tolkien", 1954);
let libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);

console.log(`${libro1.titulo} - Antigüedad: ${libro1.calcularAntiguedad()} años`);
console.log(`${libro2.titulo} - Antigüedad: ${libro2.calcularAntiguedad()} años`);
