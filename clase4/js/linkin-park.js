// Ubicamos elementos dentro del DOM
// ampliada
const ampliada = document.querySelector('#hero img')
// botones minuatura
const minis = document.querySelector('#minis')
    const miniUno = minis.children[0]
    const miniDos = minis.children[1]
    const miniTres = minis.children[2]
    const miniCuatro = minis.children[3]
    const miniCinco = minis.children[4]
    const miniSeis = minis.children[5]

function cambiarImagen( imagen )
{
    ampliada.src = `imgs/${imagen}.jpg`
}

// conrtoles
miniUno.onclick = function()
                    {
                        cambiarImagen('mike-shinoda')
                    }
miniDos.onclick = function()
                    {
                        cambiarImagen('joe-han')
                    }
miniTres.onclick = function()
                    {
                        cambiarImagen('chester-benington')
                    }
miniCuatro.onclick = function()
                    {
                        cambiarImagen('brad-delson')
                    }
miniCinco.onclick = function()
                    {
                        cambiarImagen('rob-bourdon')
                    }
miniSeis.onclick = function()
                    {
                        cambiarImagen('dave-phoenix-farrell')
                    }
                