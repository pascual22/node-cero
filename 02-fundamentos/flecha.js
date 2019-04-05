// function sumar(a, b) {
//     return a + b;
// }


// let sumar = (a, b) => a + b;

// function saludar() {
//     return 'hola mundo';
// }

// function saludar(nombre) {
//     return `hola ${nombre}`;
// }

// let saludar = (nombre) => `hola ${nombre}`;;

// // let saludar = () => 'hola mundo';

// console.log(saludar('oscar'));
// console.log(sumar(10, 20));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    }
}

console.log(deadpool.getNombre());