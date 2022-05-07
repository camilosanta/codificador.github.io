var botonCopiar = document.querySelector(".copiar");

//copiar 
botonCopiar.addEventListener("click",function(){

    // variable que evalua lo que tiene le contenedortext
    var mensajeEncriptdo = contenedortext.value;  
    navigator.clipboard.writeText(mensajeEncriptdo);
})