/*

Los nidos de Alicia. (Variación con arreglos sin intervención de usuario).


Sea N el arreglo a recorrer.

Sea M el arreglo contentivo de los saltos a dar en el arreglo N.

Con x = el tamaño del arreglo N
Con y = el tamaño del arreglo M
Con z = 1; valor inicial de la exploración.
Con c = 0; contador.  
Ejemplo:

Si x = 5; y = 4
 
N = [2,3,5,7,9]
M = [2,7,-4,-2]

La función devuelve el número 1.

Explicación:

z = z+M[i]; donde i es una variable iterable i veces.
si z+M[i] == N[j] donde j es una variable iterable j veces.
entonces:
c+=1

La suma de z mas el valor dentro del arreglo M, deberá coincidir con un valor dentro del arreglo N.

Los números del arreglo pueden ser definidos en forma arbitraria, para eso se omite la parte de la función que crea y organiza los arreglos, además de eliminar las variables x, y, start, limit.

Condiciones:

Los números dentro de cada arreglo son diferentes, y están ordenados en forma ascendente.

El menor valor aceptable en el arreglo N es de 2.
El máximo valor aceptable en ambos arreglos no puede ser mayor a 10^9

La salida solo debe mostrar la cantidad de coincidencias recogidas en el recorrido.

alicia(x,y)...

*/
let start = 1
let limit = 10
let x = Math.floor(Math.random() * (limit-start)+limit)
let y = Math.floor(Math.random() * (limit-start)+limit)
let z = 1
let c = 0


function alicia(x,y){

    let N = []
    let M = []
    let temp = []

//////////creación aleatoria de arreglos////////////////////
    //el tamaño final del arreglo no será el mismo declarado porque se omiten los números repetidos al llenarlo.
    
    //llenando el arreglo N (limitado a iniciar en 2):
    for(let a = 0; a < x; a++){
        
        let num = Math.floor(Math.random() * (2-limit) + limit)

        if(!N.some(function(e){
            return e == num
        })){
            N.push(num)
        } 
        
    }
    //llenando el arreglo M (contiene numeros negativos):
    for(let b = 0; b < y; b++){
        let num = Math.floor(Math.random() * (-limit-limit) + limit)
        
        if(!M.some(function(e){
            return e == num
        })){
            M.push(num)
        }
        
    }
    //necesitamos satisfacer la condición de orden en el arreglo
    function reorder(a,b){
        return a-b
    }
    function reverse(a,b){
        return b-a
    }
    N.sort(reorder)
    M.sort(reverse)

 /////////////////////////////////////////////////////////////////  
    //inicio de la evaluación de los arreglos
    for (let f = 0; f < M.length; f++){
        z = z+M[f]
        if(z >= 1){
            temp.push(z)
        }
    }
        for(g = 0; g < N.length; g++){
            if(temp.some(function(e){
                return e == N[g]
            })){
                c+=1
            }
        }

    return c
}


