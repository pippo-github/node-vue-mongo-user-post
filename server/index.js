const express = require('express')
const server = express()
const cors = require('cors')
const path = require('path')

const gestioneRouter = require('./gestioneRouter')


const PORTA = (process.env.PORT) ? process.env.PORT : 5000


server.use('/api/post', gestioneRouter)
server.use(cors())

server.use(express.static(path.join(__dirname,'public')))


server.listen(PORTA, () =>{
	console.log(`server up alla porta ${ PORTA }`)
})


// va esattamente così '*.' altrimenti non funziona per gli 404 error

server.get('*', (richiesta, risposta) =>{
	console.log('richiesta non accessibile, verrai rediretto  a /post/api')
	// risposta.redirect('/post/api')


	console.log(path.join(__dirname, 'public/index.html'))
	risposta.sendFile(__dirname + '/public/index.html')

})





// server.use(gestioneRouterFileNotFound)

