

//abrir http (metodo,url)
//CRUD - Metodos
//Create, Post
//Read, Get
//Update, Put/Patch
//Delete, Delete

const listaClientes =()=> fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente =(apellido,nombre,telefono,email)=>{
    return fetch("http://localhost:3000/perfil",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({apellido,nombre,telefono,email,id:uuid.v4(),estado:true})
    })

};

//por seguridad no elimino, solo cambio el estado
const eliminarCliente =(apellido,nombre,telefono,email,id,estado) =>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({apellido,nombre,telefono,email,id,estado})
        })
    
    /* Para eliminar el registro definitivamente
    return fetch("http://localhost:3000/perfil",{
    method:"DELETE",}; */

}

const detalleCliente =(id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());



}

const actualizarCliente = (apellido,nombre,telefono,email,id,estado)=> {
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({apellido,nombre,telefono,email,id,estado})
        })



}

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
}
