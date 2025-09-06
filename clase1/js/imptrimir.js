// write() Sirve para escribir dentro del documento
document.write('escribiendo dentro del documento')
/*
    Se desaconseja utilizar el método write()
    Por qué sólo escribe al final del documento.
    Esto quiere decir que no me deja escribir en algún elemento específico
*/
//### Ubicar un elemento dentro del DOM
// document.getElementById('cajaTexto').textContent = 'manzana'
document.querySelector('#cajaTexto').textContent = 'hola mundo!'

