const d= document;

export default function searchFilters(input,selector) {
    d.addEventListener("keyup",(e)=>{
        if (e.target.matches(input)) {//oye, si el objeto que origino el evento su selector coincide  con lo que viene en la variable input
            // console.log(e.key);
            // console.log(e.target.value); // cada caracter va sumando eje: a, an, any

            if (e.key==="Escape") e.target.value="";


            d.querySelectorAll(selector).forEach((el)=>{
                el.textContent.toLowerCase().includes(e.target.value)
                ?el.classList.remove("filter")
                :el.classList.add("filter")//  si lo que el usuario escribe en el imput y existe en el contenido textual, todo pasado a minusculas
                // si devuelve verdadero que al elemento en cuestion en su lista de clases le quite la clase Filter(coincide con lo que el usuario escribio y entonces mostramos ese contenido como resultado de la busqueda)
                // en caso contrario que no coincida con lo que el usuario vaya escribiendo en esa caja de busqueda entonces le agregamos la clase
                //filter para que ocuelte el elemento.
                // es un filtro estatico basado en ya haber recibido la informacion por ejemplo de una solicitud a una API estar buscando en el contenido
                // textual del selector que yo especifique
            });
        }
    });
}