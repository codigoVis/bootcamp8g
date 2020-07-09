const fs=require('fs')

const archivos=fs.readdirSync('./');
console.log(archivos)

fs.readdir('./', function(err,file){
    if(err) console.log('Error', err)
    else console.log('Resultado', file)
})