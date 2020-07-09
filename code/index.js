/*console.log('HELLO CODERS')


function suma (num1, num2){

   let res=num1+num2
    return res
    
}

console.log(suma(5 , 6))

function saludo(nombre){

 console.log(`hello ${nombre}`)
   
}

saludo("vicente")*/



//Funciones flecha en ES5

const years=[2000, 2005, 2008, 2012]

var edad5= years.map(function(años){
    
    return 2020 -años

})
console.log(edad5)

//Funciones en ES6 en tipo flecha

/*let edad6=years.map((años)=>{
    return 2020- años
})

console.log(edad6)*/

//Forma  reducida  de ES6

/*let edad6 = years.map( años => 2020 - años )
console.log(edad6)*/