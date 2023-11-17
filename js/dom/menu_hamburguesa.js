

export default function hanburgerMenu(panelBtn,panel,menuLink) {
    const d = document;
    d.addEventListener("click", e=>{
    // la delegacion de eventos se la asigne boton
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        //Oye, si el objeto que origino el evento su selector coincide con lo que venga en la variable Menulink
        //entonces
        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}

//Creo que es un codigo muy limpio usable y reutilizable
//aparte no estamos asignando los eventos directamente a los elementos 
// estamos utilizando la DELEGACION DE EVENTOS que evita la propagacion de eventos
// este bloque de codigo lo pueden usar en cualquier parte,ese es la ventaja de la modularizacion