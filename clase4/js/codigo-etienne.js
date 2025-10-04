// Ubicamos elementos dentro del DOM 
const ampliada = document.querySelector('#hero img')
const minis = document.querySelector('#minis')
const nombresImagenes = [
    'mike-shinoda',
    'joe-han',
    'chester-benington',
    'brad-delson',
    'rob-bourdon',
    'dave-phoenix-farrell'
]
function cambiarImagen(imagen) {
    ampliada.src = `imgs/${imagen}.jpg`;
}

let mini = '';
for (let i = 0; i < minis.children.length; i++) {
    mini = minis.children[i]
    mini.onclick = function() {
        cambiarImagen(nombresImagenes[i])
    }
}

