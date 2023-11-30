const d= document,
    w = window;

export default function darkTheme(btn,classDark){// en el 2do parametro vamos a recolectar el selector que hace referencia a los elementos que tengan la clase dark
    const $themeBtn= d.querySelector(btn), // guardamos el selector del boton
    //¿como puedo crear en JS un selector a los elementos que tengan el atributo "data-dark"(data-attribute)?
    // necesito un dom list, una lista de elementos del DOM  que tengan ese atributo de "data dark"
    $selectors=d.querySelectorAll("[data-dark]"); // cuando quieran aplicar estilos por un tipo de atributo especifican corcheter []
    // nos devuelve un arreglo del dom
    console.log($selectors);
    let moon="🌙",// deben cambiar el text contend por la luna o el sol
        sun="☀️"; // pueden programar los emojis por que al final son texto
    d.addEventListener("click",(e)=>{// recuerda que hemos estado trabajando con la delegacion de eventos entonces el evento se lo asigno al 
        //document y no al boton
        if (e.target.matches(btn)) { // si el objeto que origina el evento es igual al selector que viene en la variable btn
            //¿como comprarar para activar o desactivar el modo dark?
            console.log($themeBtn.textContent);
            
            if ($themeBtn.textContent===moon) {
                $selectors.forEach((el)=>el.classList.add(classDark)) // por cada selector que tenga ese atributo
                $themeBtn.textContent= sun;
            }else{
                $selectors.forEach((el)=>el.classList.remove(classDark))
                $themeBtn.textContent= moon;
            }
        }
    })
    }