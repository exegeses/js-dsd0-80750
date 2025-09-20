// ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja')

// declaramos funciones de control
function ocultar()
{
    caja.style.opacity = 0
}
function mostrar()
{
    caja.style.opacity = 1
}

function mostrarOcultar()
{
    // si la caja se ve
    if( caja.style.opacity == 1 ){
        // que no se vea
        //caja.style.opacity = 0
        ocultar()
    }
    else{
        // que se vea
        //caja.style.opacity = 1
        mostrar()
    }
}