
//script  crea un archivo 
const fs=require('fs')

fs.writeFile('hola.txt', 'Hola mundo desde node','utf8',(error) => {
    if(error) return console.log('no se pudo crear el archivo')

    console.log('se creo el archivo')


})