const caja = document.querySelector('#caja')
const imagenDado = caja.children[0]
const boton = document.querySelector('#boton')

// declaramos funciones de control
function getNumero()
{
    let numero = Math.floor( Math.random() * 6 + 1 )
    return numero
}
function cambiarImagen( imagen )
{
    //imagenDado.src = 'red/dice-'+ imagen +'.png'
    imagenDado.src = `red/dice-${imagen}.png`
}
function playAudio()
{
    let sonidoDado = new Audio('audio/dice.mp3')
    sonidoDado.play()
}

//control
boton.onclick = function()
                {
                    let numero = getNumero()                   
                    console.log(numero)

                    /* switch(numero){
                        case 1:
                            cambiarImagen('red/dice-1.png')
                            break
                        case 2:
                            cambiarImagen('red/dice-2.png')
                            break
                        case 3:
                            cambiarImagen('red/dice-3.png')
                            break
                        case 4:
                            cambiarImagen('red/dice-4.png')
                            break
                        case 5:
                            cambiarImagen('red/dice-5.png')
                            break
                        default:
                            cambiarImagen('red/dice-6.png')
                            break                        
                    } */

                    cambiarImagen( numero )
                    playAudio()
                }