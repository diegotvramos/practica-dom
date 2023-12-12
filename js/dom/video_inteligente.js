
const d=document,
        w=window;

export default function smartVideo() {
    //que capture todo los elementos que contenga en siguiente selector y que tengan el atributo
    const $videos=d.querySelectorAll("video[data-smart-video]");

    //cuando una funcion o un objeto recibe unca CALLBACK significa que como parametro está esperando recibir una funcion.
    // pero no necesariamente tiene que ver con los metodos de asincronia {la funcion que recibe un evento}
    //la funcion para trabajar los eventos es {addlistener}
    // y el primer parametro es una cadena de texto, el segundo es una funcion o una callback
    //entries es como el event que recibe el addlistener
    const cb=(entries)=>{ 
        entries.forEach(entry=>{
            if (entry.isIntersecting) {
                entry.target.pause();//play
            }else{
                entry.target.pause();
            }
            //document.visibilityState.ç
            //asignar un evento y evaluar la propiedad del document
            //es un operador ternario
            w.addEventListener("visibilitychange",(e)=>
            d.visibilityState=== "visible"
            ?entry.target.pause()//play lo puse play para que no se andara reproduciendo
            :entry.target.pause()
        )
        });
    }
    const observer = new IntersectionObserver(cb,{threshold:0.5});

    //asignamos observador
    $videos.forEach(el=>observer.observe(el))
}