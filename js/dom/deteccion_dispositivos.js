const d = document,
    n=navigator,
    ua=n.userAgent;

export default function userDeviceInfo(id) {
    const $id=d.getElementById(id),
            isMobile={// OBJETO
                android:()=>ua.match(/android/ig),//METODOS
                ios: ()=>ua.match(/iphone|ipad|ipod/ig),
                windows: ()=>ua.match(/windows phone/ig),
                any:function () {
                    return this.android()||this.ios()||this.windows();
                },
            },
            isDesktop={
                linux:()=>ua.match(/linux/ig),
                mac: ()=>ua.match(/mac os/ig),
                windows: ()=>ua.match(/windows nt/ig),
                any:function () {// mientras este en un dispositivo  cualquiera.
                    return this.linux()||this.mac()||this.windows();
                },
            },
            isBrowser={
                chrome:()=>ua.match(/chrome/ig), /*BUSCA ESTOS CARACTERES IGNORANDO MAYUSCULAS Y MINUSCULAS */
                safari: ()=>ua.match(/safari/ig),
                firefox: ()=>ua.match(/firefox/ig),
                opera: ()=>ua.match(/opera|opera mini/ig),
                ie: ()=>ua.match(/msie|iemobile/ig), // exploreer
                edge: ()=>ua.match(/edge/ig),
                any:function () {
                    return(
                        this.chrome()||
                        this.safari()||
                        this.firefox()||
                        this.opera()||
                        this.ie()||
                        this.edge()
                    );          
                },
            };
     //console.log(ua);
    // console.log(isMobile.android());
    // console.log(isMobile.ios());
    // console.log(isMobile.any());// mientras este en un dispositivo  cualquiera.

    $id.innerHTML=`
            <ul>
                <li>User Agent: <b>${ua}</b></li>
                <li>User Agent: <b>${
                    isMobile.any()? isMobile.any(): isDesktop.any() // este operador ternario detecta el sistema operativo en el que me ecuentro
                }</b></li>
                <li>User Agent: <b>${isBrowser.any()}</b></li>
            </ul>
    `;
    /*Contenido exclusivo */
    if (isBrowser.chrome()) {
        $id.innerHTML+=`<p><mark>Este Contenido sólo se ve en Chrome</mark></p>`
    }   
    if (isBrowser.firefox()) {
        $id.innerHTML+=`<p><mark>Este Contenido sólo se ve en Firefox</mark></p>`
    }

    if (isDesktop.linux()) {
        $id.innerHTML+=`<p><mark>Descarga nuestro software para Linux</mark></p>`
    }
    if (isDesktop.windows()) {
        $id.innerHTML+=`<p><mark>Descarga nuestro software para Windows</mark></p>`
    }
    if (isDesktop.mac()) {
        $id.innerHTML+=`<p><mark>Descarga nuestro software para Mac Os</mark></p>`
    }

    //Redirecciones

    if (isMobile.android()) {
        window.location.href="https://jonmircha.com"
    }
}