import hanburgerMenu from "./dom/menu_hamburguesa.js";
//completa el .JS

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hanburgerMenu(".panel-btn",".panel",".menu a");
    // cualquier enlace que este dentro de menu va activar esa funcionalidad
})


//puristas diran: te falta validar que sean selectores validos esas validaciones que vimos en la partde de LOGICA



