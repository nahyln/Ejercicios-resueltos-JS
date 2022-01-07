/*
La función retorna la mayor cantidad de ceros consecutivos dentro de la expresión binaria de un número.

N = un número entero cualquiera.

let N = ...
*/

function n(N){
    let count = 0
    let gap = []
    let arr = []
    let bin = (N % 2).toString() //Convertir a string para conservar el 0 en caso de existir.

        //Iterar mientras sea divisible por 2 y almacenar en la variable como binario.
        for(; N > 1;){
            N = parseInt(N/2)
            bin = (N % 2) + bin
        }
        
        //Almacenar cada número en un arreglo como entero.
       for(i = 0; i < bin.length; i++){
           arr.push(parseInt(bin.charAt(i)))
       } 

       //Almacenar la suma de los ceros continuos en otro arreglo para comparar.
       for (let j in arr){
            if(arr[j] != 0){
                gap.push(count)
                count = 0
            } else {
                count = count + 1
            }
            
            
       }

       gap.sort() //Ordenar el arreglo que contiene las secuencias de ceros.

                 
    return gap[gap.length-1] //Devolver el valor más alto entre las secuencias.
}
