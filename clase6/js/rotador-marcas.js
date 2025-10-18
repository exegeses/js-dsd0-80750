const marcas = [
                'Hermès','Zara','Boss',
                'Aeropostale','Kingin','Tomy',
                'Gola', 'Abercrombie', 'Topman',
                'H&M', 'Hollister', 'American Eagle',
                'Asos', 'Urban Outfitters', 'Old Navy',
                'Uniqlo'
               ]
// ubicamos elementosa dentro del DOM
const contenedor = document.querySelector('#contenedor') 
    const anterior = contenedor.children[0]
    const span = contenedor.children[1]
    const siguiente = contenedor.children[2]
// estado inicial : Ver el nombre de una marca en el spam
let indice = 7
span.textContent = marcas[indice]
// control
anterior.addEventListener(
                'click',
                () =>
                {
                    indice --
                    if( indice < 0 ){
                        indice = marcas.length - 1
                    }
                    span.textContent = marcas[indice]
                }
)
siguiente.addEventListener(
                'click',
                () =>
                {
                    //indice = indice + 1
                    indice ++
                    if( indice > marcas.length-1 ){
                        indice = 0 
                    }
                    span.textContent = marcas[indice]
                }
)