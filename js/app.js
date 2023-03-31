function comenzarJuego() {
  let eleccion = ["Piedra", "Papel", "Tijera"]
  let usuarioEleccion = document.getElementById("usuarioEleccion").value
  let eleccionCantidad = eleccion.length
  let numeroAzar = Math.floor(Math.random() * eleccionCantidad)
  let compuEleccion = eleccion[numeroAzar]
  let resultadoFinal = document.getElementById("resultadoFinal")

  if (usuarioEleccion == compuEleccion) {
    resultadoFinal.innerHTML = "Empate"
  } else if (compuEleccion == "Piedra") {
    if (usuarioEleccion == "Papel") {
      resultadoFinal.innerHTML = "Felicidades, ganaste!"
    } else if (usuarioEleccion == "Tijera") {
      alert("Mala suerte, perdiste. Queres volver a intentar?")
        
    }

  } else if (compuEleccion == "Papel") {
    if (usuarioEleccion == "Tijera") {
      resultadoFinal.innerHTML = "Felicidades, ganaste!"
    } else if (usuarioEleccion == "Piedra") {
      alert("Mala suerte, perdiste. Queres volver a intentar?")
        
      }
    }else if (compuEleccion == "Tijera") {
    if (usuarioEleccion == "Piedra") {
      resultadoFinal.innerHTML = "Felicidades, ganaste!"
    } else if (usuarioEleccion == "Papel") {
      alert("Mala suerte, perdiste. Queres volver a intentar?")

      }
    }
  }
