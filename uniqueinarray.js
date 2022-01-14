/*
Evalua los elementos dentro de un arreglo dado y cuenta la ocurrencia de cada valor en otro arreglo.

Al recorrer el arreglo secundario, se busca el elemento que se se repite una sola vez, y se retorna el índice, cuyo valor corresponde al elemento del arreglo original.

let A = []...


*/

function unique(A){

    let count = []
    let num = 0

    A.forEach(function(n){
        count[n] = (count[n] || 0) + 1
    })

    count.forEach((e, index) => {
        if(e == 1){
            num = index
        } else {
            return 0
        }
    })

   return num
    
}

