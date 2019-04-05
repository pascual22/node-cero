let empleados = [{
    id: 1,
    nombre: 'Oscar'
}, {
    id: 2,
    nombre: 'Daniel'
}, {
    id: 3,
    nombre: 'Jhennyfer'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}, {
    id: 3,
    salario: 1500
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`no existe un empleado con el id ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`no se encontro un salario para el usuario ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            })
        }
    });

}

// getEmpleado(1).then(empleado => {

//     getSalario(empleado).then(salario => {
//         console.log(`el salario de ${salario.nombre} es de ${salario.salario}`)
//     }, err => {
//         console.log(err);
//     })
// }, err => {
//     console.log(err)
// })

getEmpleado(5).then(empleado => {
    return getSalario(empleado);
}).then(salario => {
    console.log(`el salario de ${salario.nombre} es de ${salario.salario}`)
}).catch(err => {
    console.log(err);
})