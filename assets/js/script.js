//1.Implementar el Patrón Módulo mediante IIFE
// Se crea función privada que reciba la url del video y el id de la etiqueta
// iframe, para así poder mostrar los videos en el documento HTML.

const modulo = (() => {
    let contenedor;

    function funcionPrivada(urlPrivada, idprivada) {
        if (idprivada === 'musica') {
            contenedor = document.querySelector('#musica > iframe')
            contenedor.setAttribute('src', urlPrivada);
        } else if (idprivada === 'peliculas') {
            contenedor = document.querySelector('#peliculas > iframe')
            contenedor.setAttribute('src', urlPrivada);
        } else if (idprivada === 'series') {
            contenedor = document.querySelector('#series > iframe')
            contenedor.setAttribute('src', urlPrivada);
        }
    }
    //Se retorne una función pública que reciba los parámetros (url, id), y realice el
    //llamado a la función interna (privada) para insertar los elementos recibidos
    return {
        publico: function (urlPublica, idPublica) {
            funcionPrivada(urlPublica, idPublica);
        }
    }

})

//2. Establecer una clase padre denominada Multimedia
class Multimedia {

    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (nueva_url) => _url = nueva_url;
    }
    get url() {
        return this.getUrlñ
    }
    set url(nueva_url) {
        this.setUrl(nueva_url);
    }
    //Agregar un método denominado “setInicio”
    setInicio() {
        return 'Este método es para realizar un cambio en la URL del video'
    }
}
//3. Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    get id() {
        return this._id;
    }
    //Crear un método denominado “playMultimedia”, que permita hacer el llamado
    //a la función pública de la IIFE, enviando los atributos url y id.
    playMultimedia() {
        modulo.publico(this._url, this._id);
    }
    setInicio(tiempoInicio) {
        this._url = `${this._url}?start=${tiempoInicio}`;
    }
}

//Instanciar la clase hija pasando como argumento la URL y el id para cada etiqueta iframe
const musicaUno = new Reproductor('https://www.youtube.com/embed/i2u4-cgyoV0', 'musica');
const peliculaUno = new Reproductor('', 'peliculas');
const seriesUno = new Reproductor('', 'series')
