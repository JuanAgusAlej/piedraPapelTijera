let opciones = ["piedra", "papel", "tijera"]
let jugador = null
let bot = null

function numeroRandom() {
    return  Math.round(Math.random()*2) 
}

const playGame = function () {
    
//Determinar valor elegido
    bot = numeroRandom()

    jugador = parseInt(prompt("Ingrese la opcion ( 1 - Piedra | 2 - Papel | 3 - Tijera )"))
    if (!jugador) {
        return alert("Debe ingresar una opcion valida")
    }

    if (jugador > -1 && jugador < 3) {
        
        switch (true) {
            case jugaro === 0 && bot === 2:
                mensajeJuego("ganaste")                
                break;
                case jugaro === 1 && bot === 0:
                    mensajeJuego("ganaste")                
                break;
                case jugaro === 2 && bot === 1:
                    mensajeJuego("ganaste")                
                break;
                case jugaro === bot:
                    mensajeJuego("empate")                
                break;
            default:
                mensajeJuego("perdiste")
                break;
        }

    } else {
        alert("Debe ingresar un valor entre 0 y 2")
    }
     console.log(`Jugador: ${opcion[jugador]}  || Bot: ${opcion[bot]}`)
}

const mensajeJuego = function (mensaje) {
    switch (mensaje) {
        case "ganaste":
            Swal.fire({
                icon: 'success',
                title: 'GANASTE',
                text: `${opcion[jugador]} vence a ${opcion[bot]}`,
            })    
        break;
        case "empate":
            Swal.fire({
                icon: 'info',
                title: 'EMPATE',
                text: `${opcion[jugador]} es igual a ${opcion[bot]}`,
            })
            break;
        case "perdiste":
            Swal.fire({
                icon: 'error',
                title: 'PERDISTE',
                text: `${opcion[bot]} vence a ${opcion[jugador]}`,
            })
            break;
        
    }
}