var nombre = document.getElementById("Nombre");
var contraseña = document.getElementById('pass');


function enviarInicio(){
    var expReg=  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var Valido = expReg.test(contraseña.value);

    

    
        console.log("enviando formulario");
        console.log(pass);
        var mensajesError = [];
        if (nombre.value === ''||nombre.value=== null )
        {
            window.alert(' Ingresa un nombre ');
        }
        
        if (contraseña.value === ''||contraseña.value=== null   )
        {
            window.alert(' Ingresa una contraseña ');

        
        }else
   {
    if (Valido!=true)
    {
        window.alert("Ingresa una contraseña valida");

    }
   }



    ////////////validaciones
 
    //numeros falta
    
    
    
    
        error.innerHTML = mensajesError.join(',');
        return false;
    }
    