function validar(formulario){
   var exReg= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   if (!exReg.test(formulario.correo.value)){
    formulario.correo.focus();
    elemento = document.getElementById('errorEmail');
    elemento.innerText = "El formato del e-mail no es valido";
    return false;
   }
   else{
       elemento = document.getElementById('errorEmail');
       elemento.innerText = "";
   }

    if (formulario.contrasena.value.trim().length<8){
        formulario.contrasena.focus()
        elemento = document.getElementById('errorContrasena');
        elemento.innerText = "La contraseña debe tener al menos 8 caracteres";
        return false;
    }
    else{
        elemento = document.getElementById('errorContrasena');
        elemento.innerText = "";
    }

    if (formulario.confirmacion.value!=formulario.contrasena.value){
        formulario.confirmacion.focus()
        elemento = document.getElementById('errorConfirmacion');
        elemento.innerText = "Las contraseñas no coinciden";
        return false;
    }
    else{
        elemento = document.getElementById('errorConfirmacion');
        elemento.innerText = "";
    }

    if (formulario.generoFav.value==""){
        formulario.generoFav.focus()
        elemento = document.getElementById('errorGeneroFav');
        elemento.innerText = "Seleccione su género favorito";
        return false;
    }
    else{
        elemento = document.getElementById('errorGeneroFav');
        elemento.innerText = "";
    }

    if (formulario.rangoEdad.value == ""){
        elemento = document.getElementById('errorEdad');
        elemento.innerText = "Seleccione su rango de edad";
        return false;
    }
    else{
        elemento = document.getElementById('errorEdad');
        elemento.innerText = "";
    }


    if (!formulario.terminos.checked){
        formulario.terminos.focus()
        elemento = document.getElementById('errorCondiciones');
        elemento.innerText = "Debe aceptar los términos y las condiciones";
        return false;
    }
    else{
        elemento = document.getElementById('errorCondiciones');
        elemento.innerText = "";
    }
}