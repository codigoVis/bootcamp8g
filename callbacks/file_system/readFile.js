
//script lee archivo
const fs=require('fs')

fs.readFile('hola.txt','utf8',(err,data)=>{
    if(err) return console.log('No se pudo leer elarchivo')
    console.log(data)
})