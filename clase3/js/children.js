// ubicamos elementos dentro del DOM
const botones = document.querySelector('#botones')
console.log(botones)
const cajaTexto = document.querySelector('#cajaTexto')

// botones
const btn1 = botones.children[0]
const btn2 = botones.children[1]
const btn3 = botones.children[2]

cajaTexto.textContent = 'ningún botón pulsado'

btn1.onclick = function()
                {
                    cajaTexto.textContent = 'botón 1 pulsado'
                }
btn2.onclick = function()
                {
                    cajaTexto.textContent = 'botón 2 pulsado'
                }
btn3.onclick = function()
                {
                    cajaTexto.textContent = 'botón 3 pulsado'
                }
