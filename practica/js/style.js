var miArray=['a','b','c','d','e'];
var arrayNombres=['Ivan', 'Vicente', 'Romina', 'Rosalba', 'Dolores']

function miFuncion(num1, num2){
    let res= num1+num2
    
     return console.log(res)
}

miFuncion(3 ,8)


const otraFuncion=(numero1, numero2) => {
    let resultado = numero1 + numero2 
    console.log(resultado)
}
otraFuncion(6, 9)
const iterarMiArray=miArray.filter( (item, index, array )=>{
 console.log(array,index)
 
});

const nombres=arrayNombres.filter(nombre=>nombre.length<=4);

console.log(nombres)
console.log(arrayNombres[0].length)


