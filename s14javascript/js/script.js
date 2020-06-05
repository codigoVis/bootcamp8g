

var originalString = "La mejor forma de predecir el futuro es creándolo";
var stringArray = originalString.split(" ");

var isString= stringArray.map((word, index)  => index % 2 === 0 ? word.toUpperCase() : word ).join(" ")

console.log(isString)


/*Considerar el string original "La mejor forma de predecir el futuro es creándolo"
con base en dicho string, realizar lo siguiente:
1.- Regresar un nuevo string, en el cual las palabras pares esten escritas en minúscula, y las palabras nones en mayúscula
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "LA mejor FORMA de PREDECIR el FUTURO es CREÁNDOLO"*/

var newString=stringArray.filter( word => word.length >= 5).join(" ")
                            
console.log(newString)


/*2.- Regresar un nuevo string, que sea una frase formada con todas las palabras del string original que tengan más de 5 letras
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "mejor forma predecir futuro creándolo"*/

    var promedio=stringArray.reduce((acum,word,index)=>{
        return acum +word.length

    },0)/stringArray.length
    console.log(promedio)

/*3.- Regresar el promedio de caracteres por palabra con base en el string original
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "La frase usa en promedio ${average} caracteres por palabra"
*/
