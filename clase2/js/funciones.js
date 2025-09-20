// Ubicar elementos dentro del DOM
const caja = document.querySelector('#caja')

function pintarRosa()
{
    caja.textContent = 'Rosa'
    caja.style.backgroundColor = '#ffaaaa'
    caja.style.rotate = '90deg'
}
function pintarAzul()
{
    caja.textContent = 'Azul'
    caja.style.backgroundColor = '#2244aa'
    caja.style.rotate = '-45deg'
}
function pintarRojo()
{
    caja.textContent = 'Rojo'
    caja.style.backgroundColor = '#aa0000'
    caja.style.rotate = '-0deg'
}
