function validarRut(){
    //SE OBTIENE EL NÚMERO Y EL DV
    var rut = document.getElementById('rut').value;
    var dv = document.getElementById('dv').value;
    var valido = false;
    

    if(validarVacios(rut)){
        if(esNumerico(rut)){
            if(validarCantidadCaracteres(rut)){
                if(formulaRut(rut,dv)){
                    cadena = "RUT válido";
                    valido = true;
                }else{
                    cadena = "RUT inválido";
                    valido = false;
                }
            }else{
                alert("Debe ingresar entre 7 y 9 números");
            }
        }else{
            alert("Debe ingresar solo números");
        }
    }else{
        alert("Campo en blanco");
    }

    alert(cadena);
    return valido;

}

// SE VALIDAN LOS VACÍOS
function validarVacios(a){
    if(a.length > 0){
        return true;
    }else{
        return false;
    }
}

function esNumerico(a){
    if (!/^([0-9])*$/.test(a)){
      return false;
    }
    else{
      return true;
    }
}

//SE VALIDA QUE HAYA ENTRE 7 Y 9 CARACTERES
function validarCantidadCaracteres(rut){
    if(rut.length >= 7 && a.length <= 9){
        return true;
    }else{
        return false;
    }
}

//SE APLICA LA FÓRMULA
function formulaRut(rut,dv){

    //SI EL LARGO DEL RUT ES 7 SE AGREGAN DOS 0 Y SI ES 8 SE AGREGA 1. SI EL LARGO ES 9 SE DEJA IGUAL.
    switch(rut.length){
        case 7:
            rut = "00"+rut;
        break;

        case 8:
            rut = "0"+rut;
        break;

        case 9:
            rut = rut;
        break;
    }

    //SECUENCIA PARA MULTIPLICAR POR DIGITOS DEL RUT
    var valores = [4,3,2,7,6,5,4,3,2];
    //SE INICIALIZA LA SUMA
    var suma = 0;
    
    //SE ITERA PARA MULTIPLICAR EL RUT POR LA SECUENCIA ANTERIOR
    for(i=0;i<rut.length;i++){
        suma += (valores[i]*parseInt(rut.substr(i,1)));
    }

    //SE DIVIDE SUMA EN 11 Y SE OBTIENE EL RESTO (SUMA%11). A 11 SE LE RESTA EL RESTO
    calculodv=11-(suma%11); 

    // SI EL RESTO ES 10 EL DV ES K Y SI ES 11 EL DV ES 0
    switch(calculodv){
        case 10:
            calculodv = 'K'; 
        break;

        case 11:
            calculodv = 0;
        break;
        default:;
    }

    //SI DV Y CALCULO DV SON IGUALES SE RETORNA TRUE O FALSE Y SE PUEDE AVANZAR;
    if(calculodv == dv){
        return true;
    }else{
        return false;
    }

}