var contenedor2 = document.querySelector(".contendor-encriptador-2")
var contenedorImg2 = document.querySelector(".imagen1-contenedor");
var img2 = document.querySelector(".imagen1");
var parafo = document.querySelector(".parrafo1")
var parafo2 = document.querySelector(".parrafo2")
//---------------------------------------------------------------------------------------------------------------
var contenedortext = document.createElement("textarea");
contenedortext.classList.add("textoarea3")
contenedortext.setAttribute('disabled','on'); // agrega el atributo disabled y su valor que es on
contenedorImg2.appendChild(contenedortext)

//---------------------------------------------------------------------------------------------------------------
Encriptarboton.addEventListener("click",function(){
   
    if(textoingresado.value == ""){
        span.textContent="⛔Ingresa un texto⛔";
        contenedortext.textContent = "Ingresa un texto";
        
    } else{
        span.textContent="";
        eliminarparrafos()
        contenedortext.textContent = encriptar();
        contenedortext.classList.remove("textoarea3")
        contenedortext.classList.add("textoarea2")
    }   

    if(error == true){
        alert("solo letras minusculas y sin acentos ")
        contenedortext.textContent = "Error01";
    }
   
   
    
})
//---------------------------------------------------------------------------------------------------------------
Desencriptar.addEventListener("click",function(){

  
    if(textoingresado.value == ""){
        span.textContent="⛔Ingresa un texto⛔";
        contenedortext.textContent = "Ingresa un texto";
        
       
    }else{
        span.textContent="";
        
        
        eliminarparrafos()
        contenedortext.textContent = desencriptar();
        contenedortext.classList.remove("textoarea3")
        contenedortext.classList.add("textoarea2")
    }
    if(error == true){
        alert("solo letras minusculas y sin acentos ")
        contenedortext.textContent = "Error01";
    }
    
})