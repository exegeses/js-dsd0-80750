/* Mostrar reloj digital
    formato  hh:mm:ss
*/
// Ubicamos elementos dentro del DOM
const cajaTexto = document.querySelector('#cajaTexto')

// declaramos funciones de control
function reloj()
{
    // Creamos un objeto de fecha
    const fecha = new Date()

    // Obtenemos el número correspondiente a las horas
    let horas = fecha.getHours();
    if(horas < 10) { 
        horas = "0"+horas
    }

    console.log('horas:', horas)

    // Obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes()
    if(minutos < 10) { 
        minutos = "0"+minutos
    }
    console.log('minutos:', minutos)

    // Obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds()
    if(segundos < 10) { 
        segundos = "0"+segundos
    }
    console.log('segundos:', segundos)

    cajaTexto.textContent = horas +':'+ minutos +':'+ segundos
}

// Invocamos la función
reloj()

// Actualizamos el llamado a la función
setInterval( reloj, 1000 )