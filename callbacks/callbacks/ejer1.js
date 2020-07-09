
// funciones y Async  / await 
function entrevista(entrevistaKodemia){
    console.log(' hacer  entrevista')
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            entrevistaKodemia.isEntrevista = true

            if(entrevistaKodemia.isEntrevista) {
                resolve(entrevistaKodemia)
            }else{
                reject('No se pudo hacer entrevista')
            }

        }, 3000)
    })
}   
function oferta(ofertaKodemia){
    console.log(' oferta')
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            ofertaKodemia.isOferta = true

            if(ofertaKodemia.isOferta) {
                resolve(ofertaKodemia)
            }else{
                reject('No se pudo hacer la oferta')
            }

        }, 2000)
    })
}   
function apartado(apartadoKodemia){
    console.log(' Apartado')
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            apartadoKodemia.isApartado = true

            if(apartadoKodemia.isApartado) {
                resolve(apartadoKodemia)
            }else{
                reject('No se pudo hacer el apartado')
            }

        }, 3000)
    })
}  
function primeraClase(primeraClaseKodemia){
    console.log(' ApartadoPrimera clase KOdemia')
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            primeraClaseKodemia.isPrimeraClase = true

            if(primeraClaseKodemia.isPrimeraClase) {
                resolve(primeraClaseKodemia)
            }else{
                reject('No se pudo ir a la primera clase')
            }

        }, 3000)
    })
}    

async function bootcamp (){
    const entrevistaHecha= await entrevista({})
    const ofertaHecha=await oferta(entrevistaHecha)
    const apartadoHecho=await apartado(ofertaHecha)
    const primeraClaseHecha=await primeraClase(apartadoHecho)
    console.log('primeraClaseHecha:', primeraClaseHecha )
}

bootcamp()
.then(() => {
    console.log('DONE!')
})
.catch(error => {
    console.error('Error: ', error)
})



