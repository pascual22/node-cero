/*
Async Await

async en el metodo, la respuesta se convierte en una promesa -- puede usarse solo
await espera que el metodo async se ejecute, por lo tanto el await no se usa solo
*/

// let getNombre = async() => {
//     return 'Oscar'
// };

let getNombre = () => {
    return new Promise((resolver, reject) => {

        setTimeout(() => {
            resolver('Oscar');
        }, 3000);
    });
}

let saludo = async() => {

    let nombre = await getNombre();
    return `hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log(err);
})