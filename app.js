var palabra = prompt('Ingrese una palabra para verficiar si es polindromo');

function esPalindromo(palabara){
    var respuesta = "La palabra \"" + palabara + "\"";
    var palabraOriginal = palabara.toLowerCase();
    var conEspacios = palabraOriginal.split("");
    var sinEspacios = "";

    for(i in conEspacios){
        if(conEspacios[i] != " "){
            sinEspacios += conEspacios[i];
        }
    }

    var original = sinEspacios.split("");
    var reverse = sinEspacios.split("").reverse();
    var igual = true;

    for(i in original){
        if(original[i] == reverse[i]){
        }else{
            igual = false;
        }
    }
    
    if(igual){
        respuesta += " es un palindromo";
    }else{
        respuesta += " no es un palindromo";
    }

    return respuesta;
}
document.write("<h1>" + esPalindromo(palabra) + "</h1>");