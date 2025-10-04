// Ubicamos elementos dentro del DOM
const botones = document.querySelector('#botones')
console.log(botones)
const btnRosa = botones.children[0]
const btnAzul = botones.children[1]
const btnRojo = botones.children[2]
const caja = document.querySelector('#caja')

// declaramos funciones de control
function colorear( codigo, nombre, grados )
{
    caja.style.backgroundColor = codigo
    caja.textContent = nombre 
    caja.style.rotate = grados
}

btnRosa.onclick = function()
            {
                colorear('hsl(0, 100%, 80%)', 'Rosa', '40deg' )
            }
btnAzul.onclick = function()
            {
                colorear('hsl(210, 90%, 40%)', 'Azul', '0deg' )
            }
btnRojo.onclick = function()
            {
                colorear('hsl(0, 90%, 50%)', 'Rojo', '-30deg' )
            }
