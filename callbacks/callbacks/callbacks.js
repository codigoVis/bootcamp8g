
const wall ={
 isBuilt: false,  
 isPlanished: false, 
 isPainted: false 
}

function build (wallToBuild , callback) {
    console.log(build)


    setTimeout(() => {
        wallToBuild.isBuilt=true
        const error = wallToBuild.isBuilt
        ? null
        :'cannot build '
       
        callback(error, wallToBuild)
    },300)
}

function planish (wallToPlanished , callback){
    console.log(planish)

    setTimeout(() => {
        wallToPlanished.isPlanished= true
        const error = wallToPlanished.isPlanished
        ? null
        :'cannot planish'

        callback(error, wallToPlanished)
    }, 2000)
    
}

function paint (wallToPaint, callback){
    console.log(paint)

    setTimeout (() => {
        wallToPaint.isPainted=true
        const error =wallToPaint.isPainted
        ? null
        :'cannot planish'

        callback(error, wallToPaint)
    }, 4000)
   
}

build(wall,(error,wallToBuild) =>{
 if(error) return console.error('Error in build')
    planish(wallToBuild,(planishError, wallToPlanished) => {
        if(planishError) return console.error('Error in planish')
        paint(wallToPlanished,(paintError, wallToPaint) => {
            if(paintError) return console.error('Error in paint')
            console.log(wallToPaint)
        })
    })

})

   





