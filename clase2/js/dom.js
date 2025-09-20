/*
    Ubicar elementos dentro del DOM
*/
//document.getElementById('caja')
const caja = document.querySelector('#caja')
console.log(typeof(caja))
caja.textContent = 'Rosa'
caja.style.backgroundColor = '#ffaaaa'
caja.style.rotate = '90deg'
