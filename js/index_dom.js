
import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import hanburgerMenu from "./dom/menu_hamburguesa.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
//completa el .JS
import { digitalClock,alarm } from "./dom/reloj.js";// como no hay ninguna funcion por default uso la desestructuracion de objetos
import { shortcuts,moveBall } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hanburgerMenu(".panel-btn",".panel",".menu a");
    // cualquier enlace que este dentro de menu va activar esa funcionalidad
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarma-para-despertar-5-.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown", "Nov 28,2023 08:07:00", "FEliz cuMPLEAÑOS 🤓") // cuando lo invoco se hace la importacion automatica. para queryselector usamos #countdown/ cualquier formato de fecha valido en JS sirve
    scrollTopButton(".scroll-top-btn"); //es una clase asi que agregamos el punto adelante
    responsiveMedia("youtube",
    "(min-width:1020px)", 
    `<a href ="https://www.youtube.com/watch?v=2SetvwBV-SU" target="_blank" rel="noopener"> VER VIDEO DE JON</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU?si=r-DRvMDjHHjvvjhh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`); // no se escribe with sino width

    responsiveMedia("gmaps",
    "(min-width:1020px)",
    `<a href ="https://maps.app.goo.gl/noXZP18N3mFWSj357" target="_blank" rel="noopener"> VER MAPA</a>`,
      `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.194065167267!2d-68.22385482496097!3d-16.516297484229874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edfa8d350a625%3A0x5851be5b6c74cbde!2sAlcald%C3%ADa%20de%20El%20Alto%20%22Jach&#39;a%20Uta%22!5e0!3m2!1ses-419!2sbo!4v1701634072204!5m2!1ses-419!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    // ES UN IFRAME CON  las coordenadas de geolocalizacion
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
});
// el teclado tiene 3 eventos ([kiop]=soltamos tecla [kidown] precionamos [quipress] mientras la precionamos)
//keyboard event
/*"keydown" , "keyup", "keypress"  */
d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e,".ball", ".stage"); // corresponde a lo que tenemos en el html
});


//puristas diran: te falta validar que sean selectores validos esas validaciones que vimos en la partde de LOGICA

//sacamos la funcion.
darkTheme(".dark-theme-btn", "dark-mode");//¿cual es el nombre del selector del boton? el selector es una clase. y la clase que va activar el tema oscuro se llama
    // No necesitamos el punto simplemente especificar el nombre de la clase "dark-mode" CSS
// ahora se invoca fuera del DOMcontentLoad ya funciona
/*
    donde vamos a ejecutar esta funcion? pues a la carga del documento
*/


// esta funcion de deteccion de red no nesecita ejecutarse a la carga del documento.(se va ejecutar cuando nuestro navegador detecte la perdida de coneccion.)
networkStatus();