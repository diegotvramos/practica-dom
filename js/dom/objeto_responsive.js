const d=document,
        w=window;

export default function responsiveMedia(id,mq, mobileContent, desktopContent ) {// elemento id que va estar revisando, mediaQery valida en CSS, contenido html,  el contenido que se cargue dinamicamente en el desktop
    let breakpoint= w.matchMedia(mq); // contiene la mediaQuery de CSS.
    //console.log(breakpoint);
    const responsive = (e) =>{
        if (e.matches) { // cuando la MQ no cumpla devuelve un False
            d.getElementById(id).innerHTML= desktopContent; // por verdad // el minimo tamaño está definido en index_dom.js
        }else{
            d.getElementById(id).innerHTML= mobileContent; // por falso
        }
        //console.log("MQ ", breakpoint, e.matches);
    };
    // se puede resolver con el WindowLow, o el Window recise 
    //(cada que redimencionamos la ventana del navegador se ejecuta el metodo resice)
    breakpoint.addListener(responsive); //forma mas adecuanda, usar un listener de un objeto mathMedia
    // el listner no se ejecuta a la carga del documento se ejecuta cuando detecta cambio en la media Query
    // y este como si lo hubieramos resolvido con el evento {recise}

    responsive(breakpoint); // es como si lo hubieramos resolvido con el metododo {DOMcontentlad o windowloaded}
}