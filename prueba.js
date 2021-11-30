var contraseña = document.getElementById('pass');
var error = document.getElementById(error);

function ValidarDocumento(){
    var expReg=  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var Valido = expReg.test(contraseña.value);
    console.log(pass);
    if (Valido==true)
    {
        alert("El pass es valido");

      
    }
    else
    {alert("El pass No es validopppppp");
 return false;
    }
}