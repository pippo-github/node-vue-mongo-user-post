const mongo = require('mongodb').MongoClient

class inizializzaDB
{

	

 

	 static  getVal()
	{
		 console.log("ciao dal getVal() : ")

		 		console.log("costruttore chiamato")
try{


		const db_uri_locale = "mongodb+srv://pippoatlas:pippoatlas@bancadatigenerica-bxkaj.mongodb.net/post_utente?retryWrites=true&w=majority"

		const heroku_con_db = (process.env.DB_CONNESSIONE) ? process.env.DB_CONNESSIONE : db_uri_locale

		mongo.connect(heroku_con_db, { useUnifiedTopology: true }, (errore, serverDB) =>{
			if(errore)
				console.log(errore)

			bancaDati  = serverDB.db('postDB')
			collezione = bancaDati.collection('post_utente') 

			
			collezione.find({})

			})

}
catch(e){ console.log(e) }
		

	}

}



export default inizializzaDB