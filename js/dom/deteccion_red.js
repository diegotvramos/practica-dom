const d= document,
        w=window,
        n=navigator; // estos son los objetos mas importantes 

export default function networkStatus() {
    // cuales son los eventos que van a ejecutar? JS ya nos tiene preparado 2 eventos de la ventana.  
    //console.log(n.onLine)
    const isOnLine=()=>{
        const $div=d.createElement("div")
        if (n.onLine) {
            $div.textContent="Conexion Reestablecida";
            $div.classList.add("online"); // añadimos la clase de la hoja de estilo
            $div.classList.remove("offline"); 
            console.log("online",n.onLine)
        }else{
            $div.textContent="Conexion Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
            console.log("ofline",n.onLine)
        }
        d.body.insertAdjacentElement("afterbegin", $div);//posicion,  elemento a agregar
        setTimeout(() => {
            d.body.removeChild($div)
        }, 2000);
    };
    // w.addEventListener("online", (e) => console.log("onli",n.onLine));
    // w.addEventListener("offline", (e) => console.log("oFFF ",n.onLine));
    w.addEventListener("online", (e)=>isOnLine());
    w.addEventListener("offline", (e)=>isOnLine());
}

