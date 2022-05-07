var Encriptarboton = document.querySelector('.boton1'); // boton encriptar
var Desencriptar = document.querySelector('.boton2'); // boton desencriptar
var span = document.querySelector('.error') // span
var textoingresado = document.querySelector('.Encriptador-1') //encriptador texto


//---------------------------------------------------------------------------------------------------------------
var keys1 = "enter" // e
var keys2 = "imes" // i
var keys3 = "ai" // a 
var keys4 = "ober" // o
var keys5 = "ufat" // u
//---------------------------------------------------------------------------------------------------------------
function encriptar (){

    var mesaje = textoingresado.value;
    var mensajeEncriptdo = mesaje.replaceAll("e",keys1)
        .replaceAll("i",keys2) // replaceAll("letra", reemplazo) = reemplaza todos los caracteres que contenga a i 
        .replaceAll("a",keys3)
        .replaceAll("o",keys4)
        .replaceAll("u",keys5);

    return mensajeEncriptdo;
    console.log(mensajeEncriptdo);
}
//---------------------------------------------------------------------------------------------------------------
function desencriptar (){

    var  txtEncriptado = textoingresado.value;
    var mensajeDesencriptdo = txtEncriptado.replaceAll(keys1,"e")
        .replaceAll(keys2,"i") // replaceAll("letra", reemplazo) = reemplaza todos los caracteres que contenga a i 
        .replaceAll(keys3,"a")
        .replaceAll(keys4,"o")
        .replaceAll(keys5,"u");

    return mensajeDesencriptdo;
    console.log(mensajeDesencriptdo);
}
//---------------------------------------------------------------------------------------------------------------
function eliminarparrafos(){

    img2.remove();
    parafo.remove();
    parafo2.remove();

    botonCopiar.classList.remove("copiar");
    botonCopiar.classList.add("copiar2");
}

