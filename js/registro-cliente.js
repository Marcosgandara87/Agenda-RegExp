import { clientServices } from "./cliente-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    console.log("Click")

    const apellido = document.querySelector("[data-apellido]").value
    const nombre = document.querySelector("[data-nombre]").value
    const telefono = document.querySelector("[data-telefono]").value
    const email = document.querySelector("[data-email]").value
    console.log(apellido,nombre,telefono,email)
    clientServices.crearCliente(apellido,nombre,telefono,email).then(() =>{
        window.location.href= "/screens/registro_completado.html"
    });

});