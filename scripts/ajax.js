
$(document).ready(function () {

    $.ajax({
        url: "../audio/datos.json",
        success: function (resultado) {

            var fila = document.getElementById("fila")

            for (let i in resultado.canciones) {
                var columna = document.createElement("div")
                columna.setAttribute("class", "col-12 col-md-6 col-lg-4")

                fila.appendChild(columna)

                var carta = document.createElement("div")
                carta.setAttribute("class", "card my-2")

                columna.appendChild(carta) //carta está dentro de columna

                var encabezadoCarta = document.createElement("div")
                encabezadoCarta.setAttribute("class", "card-header text-center")

                carta.appendChild(encabezadoCarta)

                var imagen = document.createElement("img")
                imagen.setAttribute("class", "card-img-top w-25")
                imagen.setAttribute("src", "../images/icon_" + resultado.canciones[i].icono + ".svg")

                encabezadoCarta.appendChild(imagen)

                var cuerpoCarta = document.createElement("div")
                cuerpoCarta.setAttribute("class", "card-body text-center bg-dark")

                carta.appendChild(cuerpoCarta)

                var nombre = document.createElement("h4")
                nombre.innerText = resultado.canciones[i].nombre
                nombre.setAttribute("class", "text-primary")

                cuerpoCarta.appendChild(nombre)

                var sonido = document.createElement("audio")
                sonido.setAttribute("src", "../audio/" + resultado.canciones[i].ruta)
                sonido.setAttribute("controls", "true")

                cuerpoCarta.appendChild(sonido)
            }
        }
    })
})



// Con este EventListener, al hacer click en play se detiene la canción que está sonando 
//y reproduce la seleccionada

document.addEventListener("play", function (cancionActual) {
    var audios = document.getElementsByTagName("audio")
    for (let i in audios) {
        if (audios[i] != cancionActual.target) {
            audios[i].pause();
        }

    }

}, true)



// document.addEventListener('play', function (e) {
//     var audios = document.getElementsByTagName('audio');
//     for (var i = 0, len = audios.length; i < len; i++) {
//       if (audios[i] != e.target) {
//         audios[i].pause();
//       }
//     }
//   }, true)