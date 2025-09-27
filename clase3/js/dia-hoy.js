// Ubicamos elemanto dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')

// creamoss un objeto de fecha
const fecha = new Date()
const numeroDia = fecha.getDay();

let nombreDia = ''

switch(numeroDia){
    case 0:
        nombreDia = 'Domingo'
        break
    case 1:
        nombreDia = 'Lunes'
        break
    case 2:
        nombreDia = 'Martes'
        break
    case 3:   
        nombreDia = 'Miércoles'
        break
    case 4:
        nombreDia = 'Jueves'
        break
    case 5:
        nombreDia = 'Viernes'
        break
    case 6:
        nombreDia = 'Sábado'
        break
}

cajaTexto.textContent = nombreDia