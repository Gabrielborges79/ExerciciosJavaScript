function validaArray(array, num){
   try{
    if (!array && !num) throw new ReferenceError("Envie os parametros");

    if (typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object ");

    if (typeof num !== 'number') throw new TypeError("Array precisa ser do tipo numero ");


    if (array.lenght != num) throw new RangeError ("Tamanho invalido");

   }
catch(e){
    if(e instanceof ReferenceError){
        console.log("Este erro é um Reference Error");
        console.log (e.message);
    }
    else if(e instanceof TypeError){
        console.log("Este erro é um TypeError");
       console.log (e.message);
    }
    else if(e instanceof RangeError){
        console.log("Este erro é um RangeError");
        console.log (e.message);
    }

    else{
        console.log("erro inesperado" + e);
    }
}
}

console.log(validaArray());