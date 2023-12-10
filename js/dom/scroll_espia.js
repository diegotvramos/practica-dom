
const d=document;


export default function scrollSpy() {
    //a quien me interesa estar vigilando
    //contiene toda las secciones que tienen el atributo (data-scroll-spy)
    const $sections = d.querySelectorAll("section[data-scroll-spy]")
    const cb =(entries)=>{
        //hay 15 elementos que tienen asignado un observador
        //console.log("Entries",entries);
        
        entries.forEach((entry)=>{
            //console.log("entry ", entry);

            //entry tiene un atributo Target(es el objeto que esta vigilando el observador. )
            // como es un Target podemos acceder a toda sus propiedades por que es un elemento del doma
            // voy acceder a su atributo id
            const id=entry.target.getAttribute("id");
            //devuelve el valor que tiene el atributo ide que tiene cada una de las secciones
            console.log(id);
            if (entry.isIntersecting) {
                //el primer selector valido de CSS que corresponda con este selector
                // que sea un enlace(a) que tenga un [nombre del data atribute]
                // y que aparte que valide que en su atributo href
                // a este elemento en su lista de clases agregale la clase "ACTIVE"
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
            }
        });
    }
        const observer= new IntersectionObserver(cb,{
            //no le especificamos otro selector el root es el documento
            //root
            // con esto disminuyo la distancia de los margenes de interaccion 
            //rootMargin:"-300px"

            //limite (0.5) 50% de su contenido ya visible en el viewPort
            // quiero que actives el observador cuando el elemento en cuestion, el elemento que está siendo observado esté 
            //en el 50% de su contenidoy el 75 por ciento
            threshold:[0.5, 0.60],

        });
        //console.log("Observer ",observer);

        //asignamos el observador.
        $sections.forEach((el)=>observer.observe(el));
}