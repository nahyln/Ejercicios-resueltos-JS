/*
Triplete de Pitágoras.

Sean los números naturales a < b < c:

c^2=a^2+b^2

ejemplo:

3^2+4^2=9+16=25

5^2=25

queremos:

a+b+c=1000

y luego:

hallar a*b*c


*/
let a = 0
let b = 0
let c = 0
let value = 1000
let limit = 1000
let result = 0


function ptr(){
    for(let i = 0; i <= limit; i++){
        for(let j = i + 1; j <= limit; j++){
            for(let k = j + 1; k <= limit; k++){
                if(((i*i+j*j) == (k*k)) && ((i+j+k)) == value && i != 0 && j != 0 && k!= 0){
                    result = i*j*k
                    break
                }
            }
        }
    }
    return result
}

