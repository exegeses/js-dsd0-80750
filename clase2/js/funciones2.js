// Ubicamos elementos dentro del DOM
const caja = document.querySelector('#caja')

function pintar(texto, codigo, rotacion)
{
    caja.textContent = texto
    caja.style.backgroundColor = codigo
    caja.style.rotate = rotacion
}

/*  propuesta Julio
function pintar(color){
    caja.textContent = color
    switch (color){
        case "Rosa":
            caja.style.backgroundColor = '#ffaaaa'
            caja.style.rotate ='90deg'
            break
        case "Azul":
            caja.style.backgroundColor = '#2244aa'
            caja.style.rotate ='-45deg'
            break
        case "Rojo":
            caja.style.backgroundColor = '#aa0000'
            caja.style.rotate ='-0deg'
            break
    }
}
*/