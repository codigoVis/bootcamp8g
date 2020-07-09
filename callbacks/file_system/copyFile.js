
//Script  que copia archivo
const fs= require ('fs')

fs.copyFile('hola.txt','copia.txt',(err) => {
    if(err) return console.log('No se pudo copiar el archivo')
    console.log('secopio el archivo')
})
