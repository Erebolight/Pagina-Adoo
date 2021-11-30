var nombre = document.getElementById("Nombre");
var contraseña = document.getElementById('pass');
var nombreUsuario = document.getElementById('lname');
var correo = document.getElementById('correo');
var error = document.getElementById("error");
var tel1 = document.getElementById('num1');
var tel2 = document.getElementById('num2');
error.style.color = "red";
function enviarFormulario(){
var expReg=  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var Valido = expReg.test(contraseña.value);
var expCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
var expNumero = /^d{10}$/;

var vCorreo = expCorreo.test(correo.value);

    console.log("enviando formulario");
    console.log(pass);
    var mensajesError = [];
    if (nombre.value === ''||nombre.value=== null )
    {
        window.alert(' Campo obligatorio vació (nombre) ');
    }
   //*  if (nombreUsuario.value === ''||nombreUsuario.value=== null )
    //{
    //    window.alert(' Ingresa un nombre de usuario ');
   // }
    if (contraseña.value === ''||contraseña.value=== null   )
    {
        window.alert(' Campo obligatorio vació (contraseña) ');
    }
    if (Valido!=true)
    {
        window.alert("Ingresa una contraseña con valores que se piden ");

    }

    if (correo.value === ''||correo.value=== null   )
    {
        window.alert(' Campo obligatorio vació (correo) ');
    }
    else {
        if (vCorreo!=true)
{
    window.alert("Correo invalido ");
}
    }

    if (tel2.value === ''||tel2.value=== null || tel1.value === ''||tel1.value=== null   )
    {
        window.alert(' Campo obligatorio vació (numeros) ');
    }
////////////validaciones

//numeros falta cehcar que sean numeros





    error.innerHTML = mensajesError.join(',');
    return false;
}
