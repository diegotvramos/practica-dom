// este elemento solamente necesita saber ¿Cual es el selector que va desencadenar la programacion ?

const d= document,
    w = window;

export default function scrollTopButton(btn) {
    
    const $scrollBtn= d.querySelector(btn);
    // detectamos distancia del scroll
    
    w.addEventListener("scroll", e=>{ // tambien le delegamos el click del boton  asgnandole al document el evento click.
        
        let scrollTop= w.pageYOffset|| d.documentElement.scroll;
        if (scrollTop>600) {
            $scrollBtn.classList.remove("hidden");// si estas a mas de 600px entonces al boton en su lista de clases le vas a quitar la clase "hidden"
            
        }else{
            $scrollBtn.classList.add("hidden"); // aparece y desaparece con un feiding y feidown
        }
        //console.log(w.pageYOffset, d.documentElement.scrollTop);
    });
    d.addEventListener("click", e=>{
        /*oye, si el objeto que origino el evento  su selector concide  con lo que viene en la variable botonn */
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior:"smooth",
                top:0
                //left:0
            });
        }
    })
}