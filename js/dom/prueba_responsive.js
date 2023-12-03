const d= document,
    w= window;

export default function responsiveTester(form) {
    const $form= d.getElementById(form); // no necesittas poner el numeral o gatito
    let tester;

    // vamos a seguir trabajando con la delegacion de eventos 
    // lo que estoy recibiendo como parametro FORM solo es un ID sin el gatito(#)
    d.addEventListener("submit", (e)=>{
        if (e.target===$form) {
            e.preventDefault();
            //alert("Formulario Enviado");
            tester=w.open($form.direccion.value,
                        "tester",
                        `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
                );
        }
    });
    d.addEventListener("click", (e)=>{// e.targent.matches 
        if (e.target===$form.cerrar)tester.close();
        
    });
}    