





por cuestiones de usabilidad y de interaccion con el usuario por darles unamejor experiencia
a sus sitios, cuando hagan menus responsivos pongan el boton en la parte de abajo

para la seccion de alarma y reloj, no olvides descargarte un audio del internet y ponerlo en una carpeta llamada
ASSETS= activos, recursos ¿que es assets en informatica?

cada tecla tiene un codigo 
getBoundingClientRect(), // con esto detectamos la colicion 

siguiente ejercicio:
van a necesitar: programacion asincrona= temporizadores, parametros (selector donde va ir el elemento para que este 
actualizando su contenido {html o texcontent},fecha, Mensaje final ) cuando llega a su limite un feliz año nuevo

fechas validas en JS:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#several_ways_to_create_a_date_object 

para hacer cualquier operacion con fechas o con tiempo en JS es importante comvertirlo a estampa de tiempos osea a milisegundos

para emojis:
https://emojipedia.org/ 

en la consola del navegador  pones new Date(); <--------------- esto es para saber la feha de hoy actual

slice(-2) : 019 =>19  // recorta antes de dos digitos

SIEGUIENTE:
cuando llegue a cierta distancia de alejemiento la barra de scroll vertical respecto del margen top
aparesca un boton  y cuando lo pulcemos nos lleve al inicio del documento

en la barra de desplasamiento horizontal no es bueno poner otro boton, ya que se considera de muy mal gusto que tu sitio no sea responsivo y te generé una barra horizontal imaginate que estas haciendo una precentacion tipo diapositiva, a lo mejor ahi si te interesa

en este capitulo vimos algunas caracteristicas del DOM Y del BOM

SIGUIENTE:
tema oscuro, tema claro // darkmode
generalmente este tipo de interacciones lo que hace es agregar una clase con los estilos oscuros a todo los elementos a los que queramos aplicar el dark mode generalmente puede ser que lo apliques al body o a la etiqueta html y con eso es mas que suficiente
imagina que debes aplicar esa clase dark mode a varios elementos de tu html,  para que tu no tengas que estar especificando que selectores van a cambiar a dark mode lo que vamos a hacer es ayudarnos de un data atribute, entonces cada elemento que tu quieras cambiarle los estilos cuando entre o salga del tema oscuro lo que vamos a hacer es agregar un atributo que se llama "dark"

muchos frameworks como Botstrap y https://get.foundation/index.html  https://get.foundation/templates.html se ayudan de los data-attributs para desencadenar cierta programacion en los componentes y que el usuario final ya no tenga que estar escribiendo codigo JS por su cuenta entonces estamos haciendo algo similar para el tema oscuro, le agregamos a los elementos que queramos eje: <a data-dark>algo</a>  de manera que ya no necesitamos especificar en el js "codigo duro" cuando precionas el boton que activa el modo oscuro agregale la clase dark-mode a la etiqueta html, tambien a mi header, pero tambien a mi enlace etc.
imagina que son varios elementos a los que van a aplicar ese cambio de estilo en lugar de estar indicando estaticamente en la programacion de tu funcion es mas facil que tu agregues tu dataAtribut y detectando que ese data atribut exista en los elemntos del dom  pues la programacion la ejecutas una sola vez. para que el usuario ya no tenga que estar escribiendo js por su cuenta, de manera que el usuario decida que *Elementos* quiere que se le aplique el tema oscuro

cuando tu aplicas el tema oscuro en una aplicacion o sitio la logica de interaccion diria  que a la siguiente vez que tu visites el sitio tendrias que conservar los estilos que tu le has dado

SIGUIENTE:
si el usuario actualiza la pagina el tema ya sea (claro u oscuro) debe mantenerse para este tipo de ejercicio, te recomiendo usar una API de navegador que se llama **STORAGE** #storage particularmente el local Storage nos permite es almacenar una variable en el disco duro de el usuario ()  ![Esta es una imagen de ejemplo](img/storage.JPG) 

si tu quisieras controlar una sesion  que te estes conectando a un backend y guardar una variable de sesion y estar comprobando  y cada que pasas a una nueva session ver si ya caducó esa variable que viene del backend localStorage tiene aplicaciones muy importantes
eje: te preguntan tu pais de origen y el idioma al principio despues ya no te vuelven a preguntar, eso anteriormente lo hacia las cokies las cookies son mas inseguras y ademas el almacenamiento que tu puedes gurardar en cokies es mucho menor al que puedes guardar en localStorage 5Mb  otro es webStorage es como la sesio de php.

la Funcion de darkTheme la estamos desencadenando en el DOMContentLoaded no podemos tener un evento del mismo tipo que se ejecute en un evento del mismo tipo DOMContentLoaded(){DOMContentLoaded}
tenemos dos alternatimas: windowLOAD(espera a que se cargue todo los scripts) Y DOMcontenLoaded(espera tener el arbol cargado mas rapido)

getItem= obtiene los valores
setItem= establece(coloca) valores

SIGUIENTE:
responsive design: si un usuario accede desde su movil le ahoro que se se descargue toda las librerias imagenes y estilos que necista el navegador para poder visualizar el mapa y el video de youtube, y con eso le estariamos ahorando 2 o 3 megas de datos, en un viaje tratas de ahorar lo mas que puedas ¿verdad? responsible responsive design usar: eventos del BOM (eventos de la ventana) windows mach media

https://alistapart.com/article/responsive-web-design/ el primer autor del diseño responsable; al ocultar contenido hacemos mala practica.
https://abookapart.com/products/responsible-responsive-design es un remeke de el primer autor, diseño para moviles de manera responsable

puede ser un video o audio html, embeber una linea de comentarios de fb, o una foto de isntagram, pdf, timeline. esta tecnica de DISEÑO RESEPTIVO RESPONSABLE cualquier cosa que no sea texto trata de evitarlo en tus versiones para dispositivos moviles, lo que te suegieren es en lugar de embeber tu contenido linkealo.

(``)<----------a esto se llama templateString

descargar la pagina version Desktop (tiene embebido el IFRAME) pesa MÁS que descargar la pagina para Mobile(en la seccion solo tiene un enlace), la version Mobile no se compara a todos los recursos de version Desktop por haber embebido en video de youtube y el mapa de google maps. 

eso se le llama DISEÑO RESEPTIVO RESPONSABLE ¿because porque? estas pensado en el usuario que tiene un plan tarifario de datos y que se encuentra en una zona desolada

SIEGUIENTE:
RESPONSIVE TESTER: recordar las clases del BOM la programacion enfoquenla en el evento SUBMIT

¿Donde se va ejecutar este responsive tester? podria ser un lugar muy adecuado a la carga del documento osea en el evento DOMContentLoaded

una de las ventajas de un formulario es que todo los elementos de formulario  que esten dentro de un formulario. podemos acceder mediante la notacion del punto a cualquier input simplemente llamando el valor que tienen el atributo name

SIGUIENTE:
Deteccion de Dispositivos: algunas paginas detectan que estas en un celular y te invitan a que descargues su app en la play store u otro marked place. USA user agente contextor global Window (puede servir para redirecciones y contenido exclusivo en vace a tipos de navegadores y tipos de sistema operativo)

2012-2014 (habia un auge)de diseños de sitios adaptados a dispositivos moviles, a las empresas grandes les hubiera costado mucho adaptar sus sitio a los mobiles entonces aplicaban la tecnica de tener dos sitios una para el pc y otra para el mobil (ADAPTIV DESIGN)

http://www.web.archive.org  es una pagina para ver el historico de como se veia una pagina

en la consola del navegador pones: NAVIGATOR y te proporciona en la parte de USERAGENT muestra informacion del dispositivo del usuario.
sirve para Redirecciones o para Contenido Exclusivos

cuando detecto que el userAgent era de un dispositivo android redirigio el flujo hacia mi pagina personal

SIGUIENTE:
eventos de conexion y desconexion. el mismo objeto NAVIGATOR tiene una propiedad en particular que nos permite evaluar la detecion de la conexion  y el objeto window tiene los objetos de conexion y desconexion.

onLine: true-------------------------> esta propiedad del navegador es la que me va permitir saber si la coneccion a red está activa o no. 
(img/online.JPG)  en la opcion de Services Workes tiene una opcion llamada (desconectar, Offline) simula la Desconeccion a internet y recien funcionan los eventos offline y online


SIEGUIENTE:
Deteccion de Camara web y para eso hay una API  get User Media y un objeto particular llamado Meda Device


SIGIENTE:
geolocalizacion. interactuar con la API de la geolocalizacion.  no necsitas GPS.

ubicacion en tiempo real https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition 
ubicacion actual https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition 
la presicion no es exacta, 😓

SIGUIENTE:
Filtros de Busqueda. 
tips: dada una serie de elementos en el html lo que hago es buscar el contenido textual y estoy usando eventos del teclado


paginas   para generar imágenes de marcadores de posición dinámicamente:

https://placebeard.it/  == el mejor para mi. (g) representa escala de grises
https://loremflickr.com/ 
https://picsum.photos/
https://placeimg.com/  (ya no esta disponible)  https://loremipsum.io/21-of-the-best-placeholder-image-generators/ 

Multiple images on the same page
Your browser might cache the images when you request the same URL multiple times on the same page. You can resolve this by adding a meaningless querystring to the URL. So, for example...

<img src="https://loremflickr.com/320/240?random=1" />
<img src="https://loremflickr.com/320/240?r=2" />
<img src="https://loremflickr.com/320/240?random=3" />

va buscar el texto que yo escriba en el card-filter (input) en el contenido textual te todo los selectores de tipo card

    /* display: none; */
    visibility: hidden;
    opacity: 0;
    order: 1; 
solo oculta pero al aplicar orde.  
cuando trabajamos con display grid, hay una propiedad que le podemos aplicar a los elementos es la misma propiedad para trabajar con el ordenamiento de los elementos hijos de una caja flexbox o de una caja grid es la propiedad: ORDER 1 es decir toda las targetas que se oculten se van al final

lo unico que hago con esto es ocultarlo visualmente, pero el elemento sigue existiendo en el html, DISPLAY: NONE lo saca.

SIGUIENTE:
sorteo digital:  dado un arreglo de elementos generar un ganador aleatoriamente usar:  metodos de la clase matematicas math. 

<ytm-comment-thread-renderer> <==== esta equiqueta creada por Google.
para poder hacer un sorteo digital con los comentarios, hay que poner bien los parametros
<span class="comment-title"> <========= esta es una etiqueta mas su clase digamos css llamada comment-title

ahora si, al pasar parametros a la funcion que se guarda en la memoria del navegador despues de haber pegado y dado el permiso. 
getWinnerComment("ytm-comment-thread-renderer .comment-title") con esto obtenemos el nombre del ganador. estamos obteniendo el contenido de una caja de texto. [para las clases pones el punto(.) para los ids pones:(#) y para el nombre del la etiqueta solo pones el nombre: span ]
'El ganador es: @isaacllanas2828' 

SIGUIENTE:
hacer un Slider Responsivo tambien llamado carrusel.


cuando tapa la cabezera: recuerda que el posicionamiento por DEFAULT es estatico cuando cambias el posicionamiento a (stiky, fix, absolute, relative) cambia de profundidad (z index)  entonces nuestra cabezera (head) no tiene un z index, debemos ponerlo ej: z-index:997;

SIGUIENTE:
Scrollspy: es como tener un espia del scroll  hay ejemplos en botstrap
el break point que yo utilize es 1024 px

cuando pasa el menú se pone a la zona derecha como fija. y conforme voy escrolleando la pagina conforme yo voy Scrolleando la pagina.  el scroll espia va detectando ¿como pueden detectar cuando un elemento entra a foco de visualizacion en el view por del navegador? 
hay una neva API del navegador que se llama intersecction observer con esa API pueden hacer su Scroll Spay 100% hecho en vanilla js

el menú movil lo vamos hacer un menú vertical en desktop
viewPort es la ventana que vemos nosotros. la seccion que vemos aparece seleccionada.
vamos a maquetarlo al body con Grid css.
Voy hacer un sistema de columnas de dos filas por dos columnas donde en la primer fila va estar la cabezera(header) en la segunda fila1,columna1(main)segundaFila segundaColumna(va estar el Asside)

el <H1> solo debe existir uno en los documentos como tambien el <MAIN>(no hay necesidad de ponerle un id o clase)

Ya tengo en el foco del viewPor tengo visible la seccion 3 ¿con que enlace se relaciona?
para eso vamos a utilizar un DataAtribute (atributo personalizado)

detecta la parte visible del viewPort del navegador se encuentra un elemento

isInteresecting: cada una de las entradas tienen una propiedad que se llaman isIntersecting {¿se crusa?}
isVisible: (avisa si el elemento es visible o ya no) 

SIGUIENTE:
video inteligente. 
cuando te pases de pestaña, el video ya no debe reproducirse usa {intersectionObserver y visivility change}
