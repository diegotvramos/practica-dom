
import countdown from "./dom/cuenta_regresiva.js";
import hanburgerMenu from "./dom/menu_hamburguesa.js";
//completa el .JS
import { digitalClock,alarm } from "./dom/reloj.js";// como no hay ninguna funcion por default uso la desestructuracion de objetos
import { shortcuts,moveBall } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hanburgerMenu(".panel-btn",".panel",".menu a");
    // cualquier enlace que este dentro de menu va activar esa funcionalidad
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma-para-despertar-5-.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown", "Nov 28,2023 08:07:00", "FEliz cuMPLEAÑOS 🤓") // cuando lo invoco se hace la importacion automatica. para queryselector usamos #countdown/ cualquier formato de fecha valido en JS sirve
})
// el teclado tiene 3 eventos ([kiop]=soltamos tecla [kidown] precionamos [quipress] mientras la precionamos)
//keyboard event
/*"keydown" , "keyup", "keypress"  */
d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e,".ball", ".stage"); // corresponde a lo que tenemos en el html
})


//puristas diran: te falta validar que sean selectores validos esas validaciones que vimos en la partde de LOGICA




