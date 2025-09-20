const cajaTexto = document.querySelector('#cajaTexto')

// Creamos un objeto de fecha
const fecha = new Date()
console.log(fecha)

// Obtenemos el número de día de la semana
let numeroSemana = fecha.getDay()
console.log('numero:', numeroSemana)
let nombreDia = ''

if (numeroSemana == 0) {
    nombreDia = 'Domingo';
} 
else if (numeroSemana == 1) {
    nombreDia = 'Lunes';
} 
else if (numeroSemana == 2) {
    nombreDia = 'Martes';
} 
else if (numeroSemana == 3) {
    nombreDia = 'Miércoles';
} 
else if (numeroSemana == 4) {
    nombreDia = 'Jueves';
} 
else if (numeroSemana == 5) {
    nombreDia = 'Viernes';
} 
else if (numeroSemana == 6) {
    nombreDia = 'Sábado';
} 


cajaTexto.textContent = nombreDia