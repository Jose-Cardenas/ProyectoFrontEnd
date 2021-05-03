
$(document).ready(function () {

    

    // cuando la pagina está cargada, se busca la información en datos.json mediante ajax.
    // mediante el for se recorre cada elemno del arreglo "canciones" que viene del json y cre crea una columna que contiene un card, un img, un card-body, un texto y una etiqueda audio.
    //con la información del json se completan los atributos de cada etiqueta
  
    $.ajax({
      url: "./audio/datos.json",
      success: function (result) {

        function compare( a, b ) {
            if ( a.reproducciones < b.reproducciones ){
              return 1;
            }
            if ( a.reproducciones > b.reproducciones ){
              return -1;
            }
            return 0;
          }
          var top=result.canciones.sort(compare);
         



        for (var i=0;i<3;i++) {
  
          var divRow = document.createElement("div");
          var divNombre = document.createElement("div");
          var h5=document.createElement("h5")
          var divCancion = document.createElement("div")
          var audio = document.createElement("audio")
          
          contenedorTop.appendChild(divRow)
          divRow.appendChild(divNombre)
          divNombre.appendChild(h5)
          divRow.appendChild(divCancion)
          divCancion.appendChild(audio)

          h5.innerText = top[i].nombre

          divRow.setAttribute("class","row border-top py-2")
          divNombre.setAttribute("class","col-0 col-md-3 d-none d-md-block text-primary")
          divCancion.setAttribute("class","col-12 col-md-9")


          audio.setAttribute('src', "./audio/" + top[i].ruta)
          audio.setAttribute('controls', "true")
        }
      }
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