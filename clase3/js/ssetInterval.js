const cajaTexto = document.querySelector('#cajaTexto')

let numero = 0
function incrementar()
{
    numero = numero + 1
    cajaTexto.textContent = numero
}
incrementar()

setInterval( incrementar, 1000 )