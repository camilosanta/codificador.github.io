var error = false;

textoingresado.addEventListener("input",function(){
 //--------------------------------------------------------------------------------------------------------------- 
    
 if(this.value.length > 0){
        //expreciones
        var exprecion =/[A-Z]/; //exprecion mayusculas
        var exprecion2 =/[ÁÉÍÓÚ[áéíóú]/; //exprecion de acentos
        var exprecion3 =/[\\\+\º\ª\|\"\@\$\~\%\€\&\¬\/\(\)\=\'\[\]\¨\´\{\}\Ç\ç\-\_\+\-\*\<\>\·]/; //caracteres especiales ecprecion
        //verifica si la exprecion se encuentra en textoingresado
        var cumple = exprecion.test(textoingresado.value);
        var cumple2 = exprecion2.test(textoingresado.value);
        var cumple3 = exprecion3.test(textoingresado.value);

//---------------------------------------------------------------------------------------------------------------
        //cuando una esprecion se testea de vuelve true si cumple si no false
        
        if(cumple == true || cumple2 == true || cumple3 == true){
            if(cumple2 == true){
                span.textContent="⛔Caracter Con Acento⛔";
                error = true;
            }
            if(cumple3 == true){
                span.textContent="⛔Caracter Especial⛔";
                error = true;
            }
            if(cumple == true){
                span.textContent="⛔Caracter En Mayuscula⛔";
                error = true;
            }
        }else{
            span.textContent="";
            error = false;
        }
        return //corta el if
    }

});
