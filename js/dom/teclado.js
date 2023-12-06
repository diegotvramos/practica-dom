const d= document;
let x=0, 
    y=0;

export function moveBall(e,ball,stage) {/*e= evento, ball=selector de la pelota, stage= selector del esenario */
// el selector esta guardado en el Ball
   const $ball = d.querySelector(ball), 
   $stage = d.querySelector(stage), 
   limitsBall = $ball.getBoundingClientRect(), // con esto detectamos la colicion
   limitsStage = $stage.getBoundingClientRect();

        //console.log(e.keyCode);
        //console.log(e.key);
        //console.log(limitsBall,limitsStage);


    //     // la pelotita lo podria mover con: possicion, left top y right  
        switch (e.keyCode) {
            case 37://izqu ("left")                
                
                if (limitsBall.left>limitsStage.left) { // validacion para le deteccion de coliciones
                    e.preventDefault(); // apagamos todo los comportamientos por defecto que tenga el teclado
                    x--;    
                }
                
                break;
            case 38://arriva("up");
     
                if (limitsBall.top>limitsStage.top) {
                    e.preventDefault(); // la tecla Shift sirve para cambiar de un elemento de formulario a otro
                    y--;
                }
                
                break;
            case 39://derecha ("right")

                // solo nos interesa prevenir la accion cuando las teclas sean 37-38-39-40
                if (limitsBall.right<limitsStage.right) {
                    e.preventDefault();// lo ideal para no cancelar todo los comportamientos por defecto//
                    x++;    
                }
                break;
            case 40://abajo ("down") bottom
                
                if (limitsBall.bottom<limitsStage.bottom) { //antes de hacer la validacion podrian utilizar las clases del objeto matematicas 
                    //para redondear y hacer que siempre sea perfecto esta colicion
                    e.preventDefault();
                    y++;  
                }              
                // en el plano carteciano las y's postivivas son hacia arriba, pero en la WEB es al reves

                break;    
            default:
                break;
            }
            $ball.style.transform=`translate(${x*10}px,${y*10}px)`;
        }
// este ejercicio tiene: RESPONSIVE DISAGN
export function shortcuts(e) {
    // console.log(e.type);//recibe el evento
    // console.log(`nombre tecla: ${e.key}`);
    // console.log(`Codigo de tecla: ${e.keyCode}`);
    // console.log(`Ctrl: ${e.ctrlKey}`);
    // console.log(`Shift: ${e.shiftKey}`);
    // console.log(`Alt: ${e.altKey}`);
    // console.log(e);

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