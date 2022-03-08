import { clientServices } from "./cliente-service.js";
const url = new URL(window.location);
const id = url.searchParams.get("id");
if(id ===null){
window.location.href= "/screens/error.html"
}


const cargarDatos= async ()=>{
const apellido = document.querySelector("[data-apellido]")
const nombre = document.querySelector("[data-nombre]")
const telefono = document.querySelector("[data-telefono]")
const email = document.querySelector("[data-email]")

    
    const perfil = await clientServices.detalleCliente(id)

    apellido.value = perfil.apellido
    nombre.value = perfil.nombre
    telefono.value = perfil.telefono
    email.value = perfil.email
    console.log(perfil)

};
cargarDatos();


const formulario = document.querySelector("[data-form]");
    formulario.addEventListener("submit",(event)=>{
    event.preventDefault();
    const apellido = document.querySelector("[data-apellido]").value
    const nombre = document.querySelector("[data-nombre]").value
    const telefono = document.querySelector("[data-telefono]").value
    const email = document.querySelector("[data-email]").value
    const estado = true;
    clientServices.actualizarCliente(apellido,nombre,telefono,email,id,estado)
    window.location.href= "/screens/edicion_concluida.html"

})


