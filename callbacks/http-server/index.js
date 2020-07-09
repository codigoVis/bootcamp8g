
//response header
const http=require('http')

const server = http.createServer((request, response) => {
    console.log('Me mandaron llamar ')
    console.log(request.method)
    console.log(request.url)

    response.writeHead(200,{
    'content-type': 'text/html'
    })

    if(request.url==='/adios'&&request.method==='GET'){
            response.write('<h1>Adios desde GET</h1>')
    }else if(request.url==='/adios' && request.method==='POST'){
            response.write('<h1> Adios desde POST</h1>')
   }else if(request.url==='/' && request.method==='GET'){
            response.write('<h1> Hola mundo desde  GET </h1>')
    }else if(request.url==='/' && request.method==='POST'){
            response.write('<h1> Hola mundo desde POST </h1>')
   }else{
        response.write('<h1> No se encontro la pagina </h1>')
    }
    response.end()
})

server.listen('8080',() => {
    console.log('El servidor esta escuchando')
})