const d=document,
        w= window;

        export default function speechReader() {
            //capturamos en variables los elementos con los cuales vamos a trabajar
            const $speechSelect= d.getElementById("speech-select"),
                    $speechTextarea =d.getElementById("speech-text"),
                    $speechBtn=d.getElementById("speech-btn"),

                    //nos permite interactuar con las voses de nuestro sistema operativo.
                    //no lleva $ por que no es un elemento del Dom

                    speechMessage = new SpeechSynthesisUtterance(); // speechMessage: es mi variable de la instacia de esta api  que estamos utilizando
            // es un objeto que tiene ciertos objetos y algunas propiedades
            // las voces las vamos a invocar a la hora que carguemos el documento.
            //console.log(speechMessage);
            // solicitamos toda las voces que detecta el navegador
            let voices=[];

            //vamos a necesitar 3 eventos que le vamos a delegar al document.
            d.addEventListener("DOMContentLoaded", (e)=>{
                //console.log(w.speechSynthesis);
                //console.log(w.speechSynthesis.getVoices());
                //AGREGAMOS EL EVENTO
                //no puedo ejecutar el metodo "getVoices", por que debe ser ejecutado dentro de "speechSynthesis"
                // se le quita el ========== ON- onvoiceschanged
                //voiceschanged = es un evento
                w.speechSynthesis.addEventListener("voiceschanged", (e)=>{
                    //console.log(e);
                    voices=w.speechSynthesis.getVoices();
                    //console.log(voices);

                    // por cada una de las voces creamos dinamicamente un opcion en el select
                    //por cada vos que yo tenga en este areglo vas a crear dinamicamente una etiqueta
                    voices.forEach((voice)=>{
                        const $option=d.createElement("option");

                        $option.value=voice.name;
                        $option.textContent=`${voice.name}***${voice.lang}`;

                        $speechSelect.appendChild($option);
                    });
                });
            });

            d.addEventListener("change",(e)=>{
                if (e.target === $speechSelect) {
                    speechMessage.voice = voices.find((voice)=>voice.name === e.target.value); // lo resolvi copiando y pegando la funcion a chatGPT y estaba demas las llaves.
                }
                //console.log(speechMessage.voice);
                //console.log(speechMessage);
            });
            d.addEventListener("click",(e)=>{
                //si el target que origina el click es igual a speechbt
                if (e.target === $speechBtn) {
                    speechMessage.text=$speechTextarea.value;
                    // ES OTRA API que estamos utilizando
                    w.speechSynthesis.speak(speechMessage);
                }
            });
        }