
const d = document;

export default function contactFormValidations() {
    const $form=d.querySelector(".contact-form"),
    //traeme todo los elementos que esten dentro del formulario {.contact-form} y que tengan el atributo [require]
    //esta es la forma de capturar los imputs que me interesa validar con JS
    // no olvides poner el espacio. antes del corchete
            $inputs = d.querySelectorAll(".contact-form [required]");
            console.log($inputs);

    // vamos a crear de manera dinamica una etiqueta span
    //vamos asignarle como atributo ID el valor que viene en nuestro input 
    // en su propiedad NAME        
    $inputs.forEach((input)=>{
        const $span = d.createElement("span")
        // el atributo NAME de preferencia deberia ser unicos
        $span.id=input.name;
        // ¿De donde obtengo el mensaje de error?
        $span.textContent=input.title;
        $span.classList.add("contact-form-error","none");
        //es una buena practica que a los elementos del DOM se les anteponga este simbolo($)
        input.insertAdjacentElement("afterend", $span);
    });

    //delegacion de eventos
    d.addEventListener("keyup", (e)=>{
        //if (e.key==="left") e.target.value="";
        //cuando e.target coincida con el siguiente selector
        if (e.target.matches(".contact-form [required]")) {//no olvides el espacio
            let $input=e.target,
            // operadores de corto circuito || DATASET= es un objeto donde está almacenado el dataAtributs
                pattern=$input.pattern ||$input.dataset.pattern;
                console.log($input,pattern);

                // Oye y muestre es mensaje siempre y cuando el valor del imput sea diferente de anda
            if (pattern && $input.value!=="") {
                console.log("El input NO tiene patron");
                let regex=new RegExp(pattern);
                //vamos a usar operador ternario
                return !regex.exec($input.value)
                ?d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active");
            }
            if (!pattern) {
                console.log("El input NO tiene patron");

                return $input.value===""
                ?d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active");
            }
        }
    })
}