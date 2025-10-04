// Ubicamos elementos dentro del DOM
 //hoja de estilos -> selector de atributo
 //const tema = document.querySelector('link[href="css/dark.css"]')
 const tema = document.querySelector('#tema')
 const btn = document.querySelector('#switcher figure')
   // selector de atributo
 const option = document.querySelector('img[alt="switch"]')
 const modo = document.querySelector('img[alt="modo oscuro"]')

 let flag = 'dark'
 btn.onclick = function()
                {
                    if ( flag == 'dark' ){
                        tema.href = 'css/light.css'
                        flag = 'light'
                        option.src = 'imgs/light.png'
                        modo.src = 'imgs/day-mode.png'
                    }
                    else{
                        tema.href = 'css/dark.css'
                        flag = 'dark'
                        option.src = 'imgs/dark.png'
                        modo.src = 'imgs/night-mode.png'
                    }
                }

