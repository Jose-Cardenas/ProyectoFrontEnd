
$(document).ready(function () {

  canciones=document.getElementById("canciones")

  // cuando la pagina está cargada, se busca la información en datos.json mediante ajax.
  // mediante el for se recorre cada elemno del arreglo "canciones" que viene del json y cre crea una columna que contiene un card, un img, un card-body, un texto y una etiqueda audio.
  //con la información del json se completan los atributos de cada etiqueta

  $.ajax({
    url: "http://127.0.0.1:5500/audio/datos.json",
    success: function (result) {
      for (var i in result.canciones) {

        var divCol = document.createElement("div");
        var card = document.createElement("div");
        var img = document.createElement("img")
        var cardBody = document.createElement("div")
        var p = document.createElement("p")
        var audio = document.createElement("audio")
        p.innerText = result.canciones[i].nombre
        canciones.appendChild(divCol)
        divCol.appendChild(card)
        card.appendChild(img)
        card.appendChild(cardBody)
        cardBody.appendChild(p)
        cardBody.appendChild(audio)
        divCol.setAttribute('class', "col-12 col-sm-6 col-lg-4 my-1 mx-0 song")
        card.setAttribute('class', 'card')
        img.setAttribute('src', "../images/icon_" + result.canciones[i].icono + ".svg")
        img.setAttribute('class', "card-img-top w-25 mx-auto")
        cardBody.setAttribute('class', "card-body text-center bg-dark overflow-hidden")
        audio.setAttribute('controls', "true")
        audio.setAttribute("class","audio-width")
        audio.setAttribute('src', "../audio/" + result.canciones[i].ruta)
      }
    }
  });
  // con el siguiente codigo se filtra por las canciones, cuando una canción no cumple con la busqueda, 
  // se oculta la columna que la contiene que es clase .song
  $("#buscar").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".song").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });



});

// Con este EventListener, al hacer click en play se detiene la canción que está sonando 
//y reproduce la seleccionada

document.addEventListener('play', function (e) {
  var audios = document.getElementsByTagName('audio');
  for (var i = 0, len = audios.length; i < len; i++) {
    if (audios[i] != e.target) {
      audios[i].pause();
    }
  }
}, true)