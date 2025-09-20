/*
    -  Pedimos al usuario que ingrese su nombre
    - Una vez que el usuario ingresa su nombre, 
        almacenamos y se dato en memoria
    - Escribimos el nombre en el span
*/
// prompt() Sirve para que se pueda ingresar un dato
let nombre = prompt('ingrese su nombre')
//document.write(nombre)
const cajaTexto = document.getElementById('cajaTexto')
cajaTexto.textContent = nombre