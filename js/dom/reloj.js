
// recuerda que solo podemos tener una funcion por default

const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
    let clockTempo;
    d.addEventListener("click", e=>{
        if (e.target.matches(btnPlay)) {//detectamos con el metodo matches que objeto originó el evento
            clockTempo=setInterval(()=>{
                let clockHour=new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML=`<h3>${clockHour}</h3>`
            },1000);
            e.target.disabled =true; // desavilitamos el boton reloj
        }
        
        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML=null;
            d.querySelector(btnPlay).disabled=false;
        }
    })
}



export function alarm(sound,btnPlay, btnStop) {
    let alarmaTempo;
    const $alarm= d.createElement("audio")
    $alarm.src=sound; // a este nuevo elemento, en su atributo (sourse) SRC  colocale lo que venga en la variable sound
    
    d.addEventListener("click",e=>{
        if (e.target.matches(btnPlay)) {
            alarmaTempo=setTimeout(() => {
                $alarm.play()
            }, 2000);
            e.target.disabled =true;
        }
        if (e.target.matches(btnStop)) {
            clearInterval(alarmaTempo);
            $alarm.pause(); // para pausar debemmos a cceder a un metodo que nos da la API de audio de JS 
            $alarm.currentTime=0;
            d.querySelector(btnPlay).disabled=false;
        }
    })
}