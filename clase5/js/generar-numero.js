// Ubicamos elementos dentro del DOM
const btn = document.querySelector('#btn')
const cajaTexto = document.querySelector('#cajaTexto')

/*
    Al pulsar el botón vamos a generar un número aleatorio
    Este número debe ser un número entero entre 1 ~ 10 (incluídos)
    Mostrar este número en el párrafo
*/
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

btn.onclick = function()
                {
                    cajaTexto.textContent = generarNumero()
                }