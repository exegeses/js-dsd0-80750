const cajaTexto = document.querySelector('#cajaTexto')
function generarNumero()
{
    // Math: Es un objeto con atributos y métodos de funciones aritméticas
        // random() Devuelve un número semialeatorio
        //        entre 0 (incluído) y 1 (excluído) [ con decimales ]
    let random = Math.random()
    let numeroX10 = (random * 10) + 1
    let numero = Math.floor( numeroX10 )

    // return Math.floor( (Math.random()*10) +1 )
    return numero
}

/* cajaTexto.onclick = function()
                {
                    cajaTexto.textContent = generarNumero()
                } */
cajaTexto.onclick = () => {
                            cajaTexto.textContent = generarNumero()
                           }               