// REQUIRE => Fazer importaçoes de modulos, bibliotecas e entre outros

//neste exemplo, estamos incorporando a biblioteca http ao nosso projeto


const http = require('http')

let server = http.createServer(function(req, res){
    //criamos um servidor e passamos como argumento uma função anonima que vai receber uma requisição e uma resposta

    //Normalmente a resposta de uma requisição http é um arquivo html

    res.end("<html>  <head></head>  <body>  <h1> Minha primeira requisição com resposta NODE.JS </h1> </body>   </html>")

    server.listen(3000, () => {
        //fica escutando a porta 3000 aguardando uma requisição

        console.log('Servidor escutando a porta 300')
        console.log("Pressione CTRL+C para encerrar")

    }) 



})