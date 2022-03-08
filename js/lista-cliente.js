import { clientServices } from "./cliente-service.js";

const crearNuevaLinea=(nombre,apellido,telefono,email,id)=>{
    const linea = document.createElement("tr")
    const contenido =   `
            <td class="td" data-apellido>${apellido}</td>
            <td class="td" data-nombre>${nombre}</td>
            <td class="td" data-telefono>${telefono}</td>
            <td class="td" data-email>${email}</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a
                    href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit"
                    >Editar</a
                  >
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button" id="${id}"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>`

    linea.innerHTML= contenido;
   
    const btn = linea.querySelector("button");
    
    btn.addEventListener("click",()=>{
      const nombre = document.querySelector("[data-nombre]").textContent
      const apellido = document.querySelector("[data-apellido]").textContent
      const telefono = document.querySelector("[data-telefono]").textContent
      const email = document.querySelector("[data-email]").textContent
      const estado = false;
      clientServices.eliminarCliente(nombre,apellido,telefono,email,btn.id,estado).then((respuesta) =>{
         console.log(respuesta)
    })

    });
    return linea;


}

const etiquetaApellido = (contactos) =>{
 console.log(contactos)
  var etiquetaUnique = [] ;

  contactos.forEach((perfil)=> {
      
      if(perfil.estado ==true){
      if (!etiquetaUnique.includes(perfil.apellido.charAt(0))){
      
              etiquetaUnique.push(perfil.apellido.charAt(0))

          }       
      }

  })

  etiquetaUnique.sort();
  return etiquetaUnique;

}

const etiquetaApellido1 = (etiqueta) =>{
  
  const etiApe = document.createElement("td")
  
  etiApe.classList.add("etiqueta")
  etiApe.innerHTML = etiqueta;
  
  

  return etiApe


}






const table = document.querySelector("[data-table]");
const buscar = document.querySelector("[data-buscar]")

clientServices.listaClientes()
    .then((data) =>{
      etiquetaApellido(data).forEach((etiqueta)=>{
        table.appendChild(etiquetaApellido1(etiqueta))
       
        data.forEach(({nombre,apellido,telefono,email,id,estado}) => {
        if ((estado ==true) &&(apellido.charAt(0) ==etiqueta) ) {
            table.appendChild(crearNuevaLinea(nombre,apellido,telefono,email,id,estado)); 
          }});
       
    });
  });


buscar.addEventListener("input",()=> {
  var tabla = document.querySelector("tbody")
  var contactos = tabla.querySelectorAll("tr")
  var etiquetas = tabla.querySelectorAll(".etiqueta")
  console.log(contactos)
  console.log(etiquetas)
  
  for (var a = 0; a<etiquetas.length;a++){
    etiquetas[a].classList.add("invisible")
    
  }

  for(var i = 0; i <contactos.length;i++){
    //tomamos el nombre
    var apellido = contactos[i].querySelector("[data-apellido]").textContent;
    var nombre = contactos[i].querySelector("[data-nombre]").textContent;
    var telefono = contactos[i].querySelector("[data-telefono]").textContent;
    var email = contactos[i].querySelector("[data-email]").textContent;
    //la exprecion sirve para que busque tanto mayuscula como minuscula y si esta dentro de la cadena de caracteres
    var expresion = new RegExp(buscar.value,"i");
    //consulto si lo que busco esta en alguna parte del nombre
    if ((!expresion.test(apellido)) && (!expresion.test(nombre))&& (!expresion.test(telefono))&& (!expresion.test(email)) && (!expresion.test(nombre+" "+apellido)) && (!expresion.test(apellido+" "+nombre))){
            contactos[i].classList.add("invisible");
            
        }else{
            contactos[i].classList.remove("invisible");
            
        }
    
        if (buscar.value == ""){
          for (var a = 0; a<etiquetas.length;a++){
            var etiquetas = tabla.querySelectorAll(".etiqueta") 
            etiquetas[a].classList.remove("invisible")
            
          }
        
            contactos[i].classList.remove("invisible");}

    }



})


    
    
    
    
    
    

    