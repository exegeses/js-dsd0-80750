const h1 = document.querySelector('h1')
const cajaTexto = document.querySelector('#cajaTexto')
const btn = document.querySelector('#btn')

// sin interactividad
cajaTexto.textContent = 'reposo'

// control de eventos
btn.onmouseover = function() 
                    {
                        cajaTexto.textContent = 'mouse sobre'
                    }
btn.onclick = function()
                    {
                        cajaTexto.textContent = 'hiciste click'
                    }     
btn.onmouseout = function()
                    {
                        cajaTexto.textContent = 'reposo'
                    }                                   

cajaTexto.onmouseover = function()
                    {
                        cajaTexto.textContent = 'texto generado onmouseover'
                        cajaTexto.style.backgroundColor = 'hsl(30, 60%, 40% )'
                    }

h1.onclick = function()
                    {
                        cajaTexto.textContent = 'hiciste click en el h1'
                    }                    