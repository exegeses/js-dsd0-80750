/*
    un Array es un tipo de dato
*/
let n = 10
let n2 = 3.141592
let fruta = 'manzana'
let fecha = new Date()
let fn = function foo(){}
let nulo = null
let indef = 
console.log(typeof(n))
console.log(typeof(n2))
console.log(typeof(fruta))
console.log(typeof(fecha))
console.log(typeof(fn))
console.log(typeof(nulo))
console.log(typeof(indef))
/*
    tipos de datos
    number
    string
    object
    funciton
    undefined
*/
let miArray = []
console.log(miArray)
console.log(typeof(miArray))
/* --------------------- */
const marcas = [
                'Hermès','Zara','Boss',
                'Aeropostale','Kingin','Tomy',
                'Gola', 'Abercrombie', 'Topman',
                'H&M', 'Hollister', 'American Eagle',
                'Asos', 'Urban Outfitters', 'Old Navy',
                'Uniqlo'
               ]
console.log(marcas)
const cajaTexto = document.querySelector('#cajaTexto')
cajaTexto.textContent = marcas[0]

const mezcla = [
                'primero', 
                66, 
                'algo', 
                24, 
                fn, 
                indef, 
                fecha
               ] 
console.log(mezcla)
mezcla.push(10)
mezcla.push(30)
mezcla.push('hola')
console.log(mezcla)