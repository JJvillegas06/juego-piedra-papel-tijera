const computador = document.querySelector('.mano-pc')
const usuario = document.querySelector('.mano-usuario')
const tijera = document.getElementById('tijera')
const papel = document.getElementById('papel')
const piedra = document.getElementById('piedra')
const resultado = document.querySelector('.resultado')
const reiniciar = document.querySelector('.reiniciar')
/*function opcionAleatoria (){
    
    console.log(eleccionPc)
}
computador.addEventListener('click', opcionAleatoria)*/

function papelbtn (){
    let numeroAleatorio = Math.floor(Math.random() * 3)
    let eleccionPc = 0
    if(numeroAleatorio == 0){
        eleccionPc = tijera
    }else if(numeroAleatorio == 1){
        eleccionPc = piedra
    }else if(numeroAleatorio == 2){
        eleccionPc = papel
    }

    if(eleccionPc == tijera){
        resultado.innerHTML = "Perdiste"
    } else if(eleccionPc == piedra){
        resultado.innerHTML = "Ganaste"
    }else if(eleccionPc == papel){
        resultado.innerHTML = "Empate"
    }
    console.log(eleccionPc)

}

papel.addEventListener('click',papelbtn)

function tijerabtn(){
    let numeroAleatorio = Math.floor(Math.random() * 3)
    let eleccionPc = 0
    if(numeroAleatorio == 0){
        eleccionPc = tijera
    }else if(numeroAleatorio == 1){
        eleccionPc = piedra
    }else if(numeroAleatorio == 2){
        eleccionPc = papel
    }

    if(eleccionPc == tijera){
        resultado.innerHTML = "Empate"
    } else if(eleccionPc == piedra){
        resultado.innerHTML = "Perdiste"
    }else if(eleccionPc == papel){
        resultado.innerHTML = "Ganaste"
    }
    console.log(eleccionPc)

}
tijera.addEventListener('click',tijerabtn)

function piedrabtn(){
    let numeroAleatorio = Math.floor(Math.random() * 3)
    let eleccionPc = 0
    if(numeroAleatorio == 0){
        eleccionPc = tijera
    }else if(numeroAleatorio == 1){
        eleccionPc = piedra
    }else if(numeroAleatorio == 2){
        eleccionPc = papel
    }

    if(eleccionPc == tijera){
        resultado.innerHTML = "Ganaste"
    } else if(eleccionPc == piedra){
        resultado.innerHTML = "Empate"
    }else if(eleccionPc == papel){
        resultado.innerHTML = "Perdiste"
    }
    console.log(eleccionPc)

}
piedra.addEventListener('click',piedrabtn)

function reinicio (){
    resultado.innerHTML = "Resultado..."
}

reiniciar.addEventListener('click',reinicio)

