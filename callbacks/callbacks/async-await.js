
//async / await
// async asincrono
//await esperar

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

async function main (){
    const builtWall= await build({})
    const planishedWall=await planish(builtWall)
    const paintedWall=await paint(planishedWall)
    console.log('paintedWall:', paintedWall )
}

main()
.then(() => {
    console.log('DONE!')
})
.catch(error => {
    console.error('Error: ', error)
})