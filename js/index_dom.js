import hanburgerMenu from "./dom/menu_hamburguesa.js";
//completa el .JS
import { digitalClock,alarm } from "./dom/reloj.js";// como no hay ninguna funcion por default uso la desestructuracion de objetos
import { shortcuts } from "./dom/teclado.js";


const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hanburgerMenu(".panel-btn",".panel",".menu a");
    // cualquier enlace que este dentro de menu va activar esa funcionalidad
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj")
    alarm("assets/alarma-para-despertar-5-.mp3","#activar-alarma","#desactivar-alarma")
})
// el teclado tiene 3 eventos ([kiop]=soltamos tecla [kidown] precionamos [quipress] mientras la precionamos)
//keyboard event
/*"keydown" , "keyup", "keypress"  */
d.addEventListener("keydown",(e)=>{
    shortcuts(e)
})


//puristas diran: te falta validar que sean selectores validos esas validaciones que vimos en la partde de LOGICA




