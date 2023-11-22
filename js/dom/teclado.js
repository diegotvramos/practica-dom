const d= document;

export function shortcuts(e) {
    console.log(e.type);//recibe el evento
    console.log(`nombre tecla: ${e.key}`);
    console.log(`Codigo de tecla: ${e.keyCode}`);
    console.log(`Ctrl: ${e.ctrlKey}`);
    console.log(`Shift: ${e.shiftKey}`);
    console.log(`Alt: ${e.altKey}`);
    console.log(e);

    if (e.key==="a" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado");
    }
    if (e.key==="c" && e.altKey) {
        confirm("Haz lanzado una confirmacion con el teclado");
    }
    if (e.key==="g" && e.altKey) {
        prompt("Haz lanzado un aviso con el teclado");
    }
}

//La arrow function lo que que hace es entre su parentesis enviar el valor y lo retorna ahi mismo, 
// la teclas que precionemos lo captura la letra E.

// la conbinacion de estas teclas mas otras, yo podria generar mis propios shorkuts
// de teclado si estas haciendo una plicacion interactivas.