
// Script elimina un Archivo
const fs=require('fs')

fs.unlink('hola.txt', (err) => {
    if(err) return console.log('No se pudo eliminar')
    console.log('Se elimino')

})