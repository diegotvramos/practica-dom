
const d = document;

export default function slider() {
    // capturamos en variables los elementos del dom que vamos a capturar.
    const $nexBtn=d.querySelector(".slider-btns .next"),
          $prevBtn=d.querySelector(".slider-btns .prev"),
          $slides=d.querySelectorAll(".slider-slide");

    // este es un slider que va funcionar al click de atras y siguiente.
    // si quieres generar un comportamiento de autoplay eso te lo dejo a tí.
    // como estoy respetando el marcado html lo estoy guardando en variables. no uso .Matches
    let i = 0;
    d.addEventListener("click", (e)=>{
        if (e.target === $prevBtn) {
            //prevenimos el comportamiento del boton por que se nos va hasta arriba.
            e.preventDefault();
            //slides es una nodelist trae mas elementos
            $slides[i].classList.remove("active");
            i--
            if (i<0) {
                i=$slides.length -1;
            }
            $slides[i].classList.add("active");
        }
        if (e.target === $nexBtn) {
            //prevenimos el comportamiento del boton por que se nos va hasta arriba.
            e.preventDefault();
            //slides es una nodelist trae mas elementos
            $slides[i].classList.remove("active");
            i++
            if (i>=$slides.length) {
                i=0;
            }
            $slides[i].classList.add("active");
        }
    })
}



