
const d=document,
    n=navigator;
export default function webCam(id) {
    const $video= d.getElementById(id);
    //console.log(n.mediaDevices.getUserMedia);// muestra un objeto

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({video:true, audio:false}) // esto es una PROMESA.
        .then((stream)=>{
            console.log(stream); // mandamos a consola lo que nos devolvia la promesa del getUsermedia
            $video.srcObject=stream; // la propiedad: SRC está esperando recibir una URL una cadena de texto || mandamos la misma fuente a manera de objeto
            $video.play(); // recuerda que los nevegadores tienen APIS para el permiso de los usuarios a la camara
        })
        .catch((err) =>{
            $video.insertAdjacentHTML("beforebegin",`<p><mark> ¡Sucedio el siguiente error: ${err}</mark></p>`);
            console.log(`¡Sucedio el siguiente error: ${err}!`)});
    }
}