
// Script agrega tecto  al archivo
const  fs=require('fs')

fs.appendFile('hola.txt',' Hola koders',(err)=>{
    if(err) return console.log('no se agrego koders')
    console.log('se modifico')
})