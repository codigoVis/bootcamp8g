const userData = () => {
    let nombre = prompt("Ingresa tu nombre")
    let apellido = prompt("Ingresa tus apellidos")

    let  calle= prompt("Ingresa tus calle")
    let numero = parseInt(prompt("Ingresa numero"))
    let colonia = prompt("Ingresa tu colonia")
    let codigoPostal= parseInt(prompt("Ingresa tu codigo postal"))
    let  alcaldia = prompt("Ingresa tu  alcaldia o municipio ")
    let userObject = {}
    userObject.name = nombre
    userObject.lastName= apellido
    userObject.direccion={}
    userObject.direccion.street = calle
    userObject.direccion.number= numero
    userObject.direccion.col=colonia
    userObject.direccion.cP=codigoPostal
    userObject.direccion.alcaldia=alcaldia  
    return userObject
}
//console.log(userData())

/* crear una función que pida al usuario los siguientes datos:
nombre, apellidos, calle, número, colonia, código postal, alcaldía o municipio
esa función debe devolver un objeto con la siguiente estructura:*/
var ArrayCars = [
    {
        year:"2000",
        maker:"Toyota",
        model:"Corolla",
        hp:"300"
    },
    {
        year:"1967",
        maker:"Ford",
        model:"Mustang",
        hp:"500"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Sentra",
        hp:"128"
    },
    {
        year:"2012",
        maker:"Mitubishi",
        model:"Lancer",
        hp:"300"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Altima",
        hp:"200"
    },
    {
        year:"1990",
        maker:"Volkswagen",
        model:"Sedan",
        hp:"80"
    },
    {
        year:"2015",
        maker:"Nissan",
        model:"Tiida",
        hp:"200"
    }
]

/*crear una función que pida al usuario un año (2000, 1989, etc).
la función debe extraer los autos del array cars, cuyo año sea mayor al indicado por el usuario
por cada auto extraído, mostrar al usuario un mensaje que diga
 "Opción ${indice}: ${fabricante del auto} ${nombre del auto} del año ${año de fabricación}, con ${hp} caballos de fuerza"*/

 const carUserData=(cars)=>{
     let carYear = parseInt(prompt("Ingrese un año por favor "))
    let filterCarsData=ArrayCars.filter((cars,index)=>{
        return parseInt(cars.year)>=carYear
    })
 
 }
 filterCarsData=forEach(cars=> {
    console.log(cars.years)
})
console.log(filterCarsData)

carUserData()
/*
});*/ 