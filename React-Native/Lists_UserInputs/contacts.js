/*
* Vamos a levantar un listado dinamico de contactos. Este listado sera una Array de objetos con el siguiente formato:
* { nombre: "", telefono: "", etc}
*/

const CANTIDAD_CONTACTOS = 10;

const nombres = ["Lucia", "Rodrigo", "Tomas", "Florencia", "Fernando", "Kevin"];
const apellidos = ["Pessino", "Bellanti", "Lopez", "Do Nascimiento", "Olivero", "Vuylsteke"];

const random = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

// devolvera algo como `Tomas Do Nascimiento`
const generarNombre = () => `${nombres[random(nombres.length -1 )]} ${apellidos[random(apellidos.length -1 )]}`

// devolvera algo como `555-444-234`
const generarTelefono = () => `${random(999,100)}-${random(999,100)}-${random(999,100)}`

const crearContacto = () => {
    return {
        nombre: generarNombre(),
        telefono: generarTelefono()
    }
}

const addKey = (obj, key) => ({key, ...obj})

export default Array.from({
    length: CANTIDAD_CONTACTOS
}, crearContacto).map(addKey);