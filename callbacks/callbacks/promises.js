
//constructor
//sintaxis
//new Promise()// regresa objeto de tipo promesa 
//new Promise(( resolve , reject) => {
 //if ('todo ok ') resolve('ok')
 //if('not ok ') reject('oups')
//})

//function algoAsincrono (){
 //return new Promise(( resolve , reject) => {
   //     if ('todo ok ') resolve('ok')
     //   if('not ok ') reject('oups')
       //})

//}

//algoAsincrono()
//.then((result)=>{ console.log('se resolvio')})
//.catch((error)=>{ console.log('hubo un error :', error )})

function build(wallToBuild){
    console.log('build starts')
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            wallToBuild.isBuild = true

            if(wallToBuild.isBuild) {
                resolve(wallToBuild)
            }else{
                reject('cannot build')
            }

        }, 3000)
    })
}
function planish(wallToPlanished){
    console.log('planish')

    return new Promise((resolve, reject) => {
        setTimeout(() => {
             wallToPlanished.isPlanish= true  

            if(wallToPlanished.isPlanish){
                resolve(wallToPlanished)
            } else {
                reject('cannot planish')
            }
        },2000)

    })
}
function paint(wallToPaint){
    console.log('paint')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            wallToPaint.isPaint =true

                if(wallToPaint.isPaint){
                    resolve(wallToPaint)
                }else{
                    reject('cannot paint')
                }

        },4000)
    })
}

build({})
.then((builtWall) => {
    console.log('buildWall:', builtWall) 
    planish(builtWall)
    .then((planishWall) => {
        console.log('planishWall: ', planishWall) 
        paint(planishWall)
        .then((paintWall) => {
            console.log('paintWall: ', paintWall)
        })
        .catch((paintError) => {
            console.log(' paint error: ',paintError)
        })
    }) 
    .catch((planishError) => {
        console.log('planish error: ', planishError)
    })
})
.catch((error) => {
    console.error('build error: ', error)
})
   






