/* seleccionar elementos dentro del DOM */

// seleccionar un elemento por su id
const articulo = document.getElementById('articulo')
articulo.textContent = 'texto generado' 

// seleccionar un elemento por su nombre de clase
const items = document.getElementsByClassName('item')
console.log(items)
items[0].textContent = 'texto generado 1'
items[1].textContent = 'texto generado 2'
items[2].textContent = 'texto generado 3'
/*
Debemos especificar cada elemento de la classe
*/

// seleccionar un elemento por su nombre (TagName)
const b = document.getElementsByTagName('b')
console.log(b)
b[0].textContent = 'texto generado'
b[1].textContent = 'texto generado 2'

// Seleccionar un elemento por su atributo "name"
const nombre = document.getElementsByName('nombre')
nombre[0].value = 'texto generado'

/* luego del cambio */ 
const cajaTexto = document.querySelector('#cajaTexto')
cajaTexto.textContent = 'texto generado'

const parrafos = document.querySelectorAll('p')
console.log(parrafos)

parrafos[0].textContent = 'texto generado'
parrafos[1].textContent = 'otro texto generado'
