const d =document;

export default function countdown(id, limitDate, finalMessage){
 const $countdown= d.getElementById(id),
        countdownDate=new Date(limitDate).getTime();
    //cada segundo esa cuenta regresiva debe actualizarse
    let countdownTempo=setInterval(() => {
        let now = new Date().getTime(),// tiempo de ahora
            limitTime= countdownDate-now,
            days=Math.floor(limitTime/(1000*60*60*24)), // math.floor  quiero que vaya hacia el numero inmediato hacia abajo (muestra reciduos9)
            /*js detecta, me estas pasando un numero y se lo estas uniendo a una cadena de texto, entonces combierto todo a cadena de texto  */
            hours=("0"+ Math.floor(limitTime%(1000*60*60*24)/(1000*60*60))).slice(-2),// yo al dividir por minutos ya me sale 
            minutes=("0"+ Math.floor(limitTime%(1000*60*60)/(1000*60))).slice(-2), // minutos/ factores de conversion
            seconds=("0"+ Math.floor(limitTime%(1000*60)/(1000))).slice(-2);
        $countdown.innerHTML=`<h3> faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos </h3>`;

        //console.log(countdownDate, now, limitTime);

        // oye, si el limite de tiempo expresado en mls es menor a 0
        if (limitTime<0) {
            //limpiamos el setInterval
            clearInterval(countdownTempo);
            //modificamos el inner html
            $countdown.innerHTML=`<h3>${finalMessage}</h3>`;
        }
    }, 1000);// el intervalo de actualizacion va ser cada mil milisegundos 
}