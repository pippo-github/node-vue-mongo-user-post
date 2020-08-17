const mio_router = require('express').Router()
const express = require('express')
const mongo = require('mongodb').MongoClient
const cors = require('cors')
const ObjectID = require('mongodb').ObjectID



let instanzaApp = express()



mio_router.use(express.json())
mio_router.use(express.urlencoded({ extended: false }))
mio_router.use(cors())


// tutti i routes '/' equivalgono a:  '/api/post'

mio_router.get('/', (richiesta, risposta) => {
    console.log("sei nella /post/api del server :: GET methods !!!")
        // risposta.write("sei nella /post/api del server :: GET methods !!!")

    bancaDati = instanzaApp.locals.dbDatiGlobaliCollezione

    bancaDati.find({}).toArray().then(dati => {
        console.log(JSON.stringify(dati, undefined, 2))
        risposta.end(JSON.stringify(dati, undefined, 2))
    })

})

mio_router.post('/', (richiesta, risposta) => {
    console.log("sei nella /post/api del server :: POST methods !!!")
    risposta.send("sei nella /post/api del server :: POST methods !!!")


    const t = richiesta.body.titolo
    const m = richiesta.body.msg
    const i = richiesta.body.img_url


    console.log("autore: " + t)
    console.log("msg: " + m)
    console.log("immagineUrl: " + i)




    mia_collezione = instanzaApp.locals.dbDatiGlobaliCollezione;

    // ES6 sintassi evito di ripetere 
    // il nome della propietà, qunado
	// questa ha lo stesso nome della
	// variabile
    // titolo: titolo   
    // diventa, solo: titolo

    try {
        mia_collezione.updateOne({ titolo: t },

            {
                $set: {
                    titolo: t,
                    img_url: i,
                    paragrafo: m,
                    caricatoIl: `Posted : 	${new Date().getDate() }/${new Date().getMonth() }/${new Date().getFullYear() }  - 
											${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} `
                }

            }, { upsert: true }
        )
    } catch (e) {}

    risposta.status(201).end(`Opeazione effettuata`)


})


mio_router.delete('/:id', (richiesta, risposta) => {
    console.log("sei nella /post/api del server :: DELETE methods !!!")
    risposta.end("sei nella /post/api del server :: DELETE methods !!!")

    const id_selezionato = ObjectID(richiesta.params.id)
    console.log("id selezionato: " + id_selezionato)

    bancaDati = instanzaApp.locals.dbDatiGlobaliCollezione;

    bancaDati.remove({ _id: id_selezionato })



})

const  gestioneRouterFileNotFound = (richiesta, risposta, next) => {
	risposta.end("richiesta 404")
	next()
}


mio_router.use(gestioneRouterFileNotFound)

const db_uri_locale = "mongodb+srv://pippoatlas:pippoatlas@bancadatigenerica-bxkaj.mongodb.net/post_utente?retryWrites=true&w=majority"

const heroku_con_db = (process.env.DB_CONNESSIONE) ? process.env.DB_CONNESSIONE : db_uri_locale

mongo.connect(heroku_con_db, { useUnifiedTopology: true }, (errore, serverDB) => {
    if (errore)
        console.log(errore.message)

    bancaDati = serverDB.db('postDB')
    collezione = bancaDati.collection('post_utente')

    instanzaApp.locals.dbDatiGlobaliCollezione = collezione
})

module.exports = mio_router