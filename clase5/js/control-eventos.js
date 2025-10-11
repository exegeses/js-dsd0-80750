// controladores de eventos
/*######################*/
// como atributo de un objeto

const cajaTexto = document.querySelector('#cajaTexto')

cajaTexto.onmouseover = function()
                        {
                            cajaTexto.textContent = 'mouse sobre'
                        }
cajaTexto.onmouseout = function()
                        {
                            cajaTexto.textContent = 'reposo'
                        }

/*######################*/
// como método addEventListener
// objeto.addEventListener( 'evento', acción )
const cajaTexto2 = document.querySelector('#cajaTexto2')

cajaTexto2.addEventListener
            (
                'mouseover', 
                function()
                    {
                        cajaTexto2.textContent = 'mouse sobre'
                    }
            )
cajaTexto2.addEventListener
            (
                'mouseout', 
                function()
                    {
                        cajaTexto2.textContent = 'reposo'
                    }
            )

/* ##########################3 */            
// sobreescritura
cajaTexto.onmouseout = function()
                        {
                            alert('caja en reposo')
                        }
cajaTexto2.addEventListener
                        (
                            'mouseout', 
                            function()
                                {
                                    alert('caja en reposo')
                                }
                        )
                        