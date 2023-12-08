const d= document,
    n=navigator;


export default function draw(btn, selector) {
    const getWinner=(selector)=>{
        const $players=d.querySelectorAll(selector),
            random=Math.floor(Math.random()*$players.length), // multiplico por el numero de jugadores, y lo redondeamos con Floor.
            winner=$players[random];

            //console.log($players, random, winner,$players[random]);
            //console.log(winner.textContent);
            return `El ganador es: ${winner.textContent}`;
        };
    d.addEventListener("click",(e)=>{ // delegacion de evensos
        if (e.target.matches(btn)) {
            let result= getWinner(selector);
            alert(result);
            console.log(result);
        }
    });
}
/* ESTE CODIGO COPIALO Y PEGALO A LA CONSOLA DEL NAVEGADOR, ESTO HARÁ QUE PUEDAS HACER SORTEO DIGITAL COLOCANDO LOS SELECTORES 
    ADECUADOS PUEDES USAR YOUTUBE, FB Y DEMAS.
*/
const getWinnerComment=(selector)=>{
    const $players=document.querySelectorAll(selector),
        random=Math.floor(Math.random()*$players.length), // multiplico por el numero de jugadores, y lo redondeamos con Floor.
        winner=$players[random];
        return `El ganador es: ${winner.textContent}`;
    };

//getWinnerComment("ytd-comment-thread-renderer #auto span")
//getWinnerComment("ytm-comment-thread-renderer comment-header")
