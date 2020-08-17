
 

<template>
	<div id='componentBody'>

	<div id='titoloAppStyle' v-html='descrizione_app'>
	
	</div>




	<div class='bloccoPresentazioneApp'>

			<div class='bloccoPresentazioneAppElements'>
			
					<h3>
						User post message application
					</h3>
				
					<p>
						This app, show how use mongo &amp; node with VueJS frontend, for insert into  db user basic post message
					</p>

			</div>


			<div class='bloccoPresentazioneAppElements'>
			
			<!--	
			
			<img src="./assets/logo.png" alt="">
			
			-->

			</div>


			<div class='bloccoPresentazioneAppElements'>
			
			<!--	
			
			<img src="./assets/logo.png" alt="">
			
			-->

			</div>

			<div class='bloccoPresentazioneAppElements'>
			
			<!--	
			
			<img src="./assets/logo.png" alt="">
			
			-->

			</div>


			<div class='newPostBox'>

				<h3>
					Insert new post ...
				</h3>

					<form >

						<div>
						<label for='autoreLabel'> Author </label>
						<input v-model='titolo' name='autoreDati' type='text' placeholder='Author'/>
						</div>

						<div>
						<label for='textMsg'> Say somethings ... </label>
						<input v-model='msg' name='textDati' type='text' placeholder='write a message'/>
						</div>

						<div>
						<label for='imgMsg'> src url img </label>
						<input v-model='url_img' name='imgDati' type='text' placeholder='url img, es: https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
						value='https://images.unsplash.com/photo-1568480460649-14ec4222b7fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600'
						/>
						</div>

						<div>
							<button v-on:click.prevent='inviaPost(titolo, msg, url_img)' > invia il post </button>
						</div>

						<a  class='tagAForm'  href='/api/post' target='_blank'>show REST API</a>
						<a  v-on:click.prevent='updatePage()' class='tagAForm'>Refresh page</a>
						
					</form>

			</div>



<div id='outPutBox'>

			<h2>
				Output post
			</h2>

			<div v-for="(post, idx) in posts" v-bind:key="idx">

		<!--
				<div class='titoloPost'>{{ post[indice].titolo }}</div>
				<div class='paragPost'>{{ post[indice].paragrafo }}</div>
				<div class='imgPost'> <img v-bind:src='post[indice].img_url' /></div>
				<div class='dataPost'>{{ post[indice].caricatoIl }}</div>
		-->


					<div v-for='(msg, indice) in post' v-bind:key='indice'  >
					<div class='delPostBtn'></div>

							<div class='titoloPost'>{{ post[indice].titolo }}</div>
							<div class='paragPost'>{{ post[indice].paragrafo }}</div>
							<div class='imgPost'> <img v-bind:src='post[indice].img_url' /></div>
							<div class='dataPost'>{{ post[indice].caricatoIl }}</div>
							
								<form>
									<button v-on:click.prevent='eliminaPost(post[indice]._id);'> elimina post </button>
								</form>

							<hr style='margin: 77px auto 144px auto; width: 10%'>


					</div>

			</div>

</div>




</div>

<div v-html='footer' id='footerDiv' style='text-align:center'>
</div>

	</div>
</template>


<script>

 import axios from 'axios';



export default {
  data() {
    return {

      descrizione_app:
        "<h1>Basic node e mongo user post with Vue frontend</h1>",

      titolo: "",  
      msg: "",
      url_img: "",
      url: "https://source.unsplash.com/1600x900/?beach",

      posts: [],
	  postElementoDaRimuovere: 0,
      footer:
        " copyright giuseppe tarallo 2009 -- " +
        new Date().getFullYear() +
        " © "
    };
  },

  async created() {
    console.log("UI Vue creata ");

/* 
	attiva questo commento per l'immagine random I prefer the dog ; at startup
*/
	const urlRandom =  "https://source.unsplash.com/1600x900/?beach";



	await axios.get(urlRandom).then(dati => {
    console.log("img (1): ", dati.request.responseURL);  
    this.url_img = dati.request.responseURL;
    });

 


	
	// the dog image:

    // this.url_img = 'https://images.unsplash.com/photo-1568480460649-14ec4222b7fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600'

	await axios.get('/api/post').then(dati => {

    // console.log("GET METHODS :: dati posts ::: ", dati.data);  

    this.posts.push(dati.data);  

     });


 
  },


 methods: {

	updatePage()
	{
		const curPage = location.href;
		location.href = curPage;
	},

    async inviaPost(titolo, msg, img_url) {
      console.log("dati ricevuti: ");
      console.log("titolo: " + titolo);
      console.log("msg: " + msg);
      console.log("img_url: " + img_url);


await axios.post('/api/post',{ titolo, msg, img_url })


this.titolo = ''
this.msg = ''


	await axios.get('/api/post').then(dati => {

		// console.log("GET METHODS :: dati posts ::: ", dati.data);  

		return dati.data

     }).then( jsonDati =>{
		
		 this.posts.push([ jsonDati[jsonDati.length-1] ] )

	 });




const urlRandom =  "https://source.unsplash.com/1600x900/?beach";

	await axios.get(urlRandom).then(dati => {
    console.log("img (1): ", dati.request.responseURL);  
    this.url_img = dati.request.responseURL;
    });




    },

async eliminaPost(id) {

    //   const uri = "api/post/";

      console.log("dati: ");


      console.log("Elimina post chiamata");
      console.log("ID selezionato:", id);

await axios.delete('/api/post/' + id)


// Quando si elimina un elemento da un elemento
// della GUI salvato nell'oggetto locale come
// in questo caso: this.posts controllare
// sia che il client che abbia compilato la sua 
// struttura di file e catelle, ma i valori
// fondamentali da tener in considerazione
// sono quelli del SERVER LOCALE NODE, in quanto
// la versione locale della PARTE Vue riporta
// la variabile del FOR 'indice' in maniera
// non corretta mentre in NODE SI !!!!!

// In questa maniere il responsive delle UI
// è implementato correttamente!

// this.posts.splice(elementoUiVueDaEliminare, 1)


	// questo metodo che serve può essere
	// utilizzato per il debug, ma in
	// fase di deploy è da EVITARE in
	// perchè non è RESPONSIVE .........

	// ricarico il box outupt dei posts

	// this.posts = []

	// await axios.get('/api/post').then(dati => {
    // // console.log("GET METHODS :: dati posts ::: ", dati.data);  
    // this.posts.push(dati.data);  

    //  });

// console.log("POSIZIONE ELEMENTO: " + elementoCorrenteDaRimuovere)

// this.posts.splice(elementoCorrenteDaRimuovere, 1);

console.log("Contenuto this.post: ")
	

for(let i = 0; i< this.posts.length; i++)
{
 		console.log("post ----------------------")
		console.log(this.posts[i])

		this.posts[i].filter( (post, idx) =>{
			if(post._id == id){
			 console.log("uguali elimina :::::::::::::: ")
			 console.log("post._id: " + post._id)
			 console.log("id: " + id)
			 console.log("uguali elimina :::::::::::::: ")

			 this.posts[i].splice(idx, 1)
			}
		})

		
 }

	


    }
  }
};
</script>



<style scoped>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

body {
  padding: 0px;
  margin: 0px;
}

#componentBody {
  background: rgb(3, 54, 16);

  position: absolute;
  top: 0;
  left: 0;
}

#titoloAppStyle {
  color: white;
  text-align: center;
  font-style: italic;
}

.bloccoPresentazioneApp {
  display: flex;
  width: 90%;
  border: solid mediumseagreen 2px;
  margin: 0 auto;
  padding: 0px;
  flex-wrap: wrap;
  background: rgb(14, 14, 49);
}


.tagAForm
{
	display: inline-block;
	margin: 11px;
	color: white;
	text-decoration: none;
}

.tagAForm:hover
{
	color: mediumseagreen;
	cursor: pointer;
}

.bloccoPresentazioneAppElements h3 {
  margin: 22px 0px;
}

.bloccoPresentazioneAppElements {
  top: 4px;
}

.bloccoPresentazioneAppElements:nth-child(1) {
  border: solid orange 2px;

  margin: 7px;
  padding: 11px;

  color: white;

  width: 40%;
}

.bloccoPresentazioneAppElements:nth-child(1) > p {
  color: orange;
}

.bloccoPresentazioneAppElements:nth-child(2) {
  border: solid yellow 1px;
  width: 125px;
  height: 125px;
  padding: 0px;
  margin: 0px;
  border-radius: 50%;
  margin: 0 auto;
  background-image: url("./assets/node-logo.svg");
  background-size: 125px 125px;
  background-repeat: no-repeat;
  background-position: center 34px;
  padding: 83px;
  position: relative;
}

.bloccoPresentazioneAppElements:nth-child(3) {
  border: solid yellow 1px;
  width: 125px;
  height: 125px;
  padding: 0px;
  margin: 0px;
  border-radius: 50%;
  margin: 0 auto;
  background-image: url("./assets/mongo_db_logo.png");
  background-size: 125px 125px;
  background-repeat: no-repeat;
  background-position: center 34px;
  padding: 83px;
  position: relative;
}

.bloccoPresentazioneAppElements:nth-child(4) {
  border: solid yellow 1px;
  width: 125px;
  height: 125px;
  padding: 0px;
  margin: 0px;
  border-radius: 50%;
  margin: 0 auto;
  background-image: url("./assets/logo.png");
  background-size: 125px 125px;
  background-repeat: no-repeat;
  background-position: center 34px;
  padding: 83px;
  position: relative;
}

.delPostBtn {
  position: relative;
}


.newPostBox {
  margin: 11px auto 122px auto;
  height: 350px;
  border: solid rgb(116, 110, 163) 2px;
  width: 95%;
}

.newPostBox h3 {
  color: white;
  padding: 7px;
}

.newPostBox label {
  display: block;
  margin: 11px 0px 7px 7px;
  color: grey;
}

.newPostBox input[type="text"] {
  width: auto;

  width: 98%;
  margin: 0px auto;
  margin-left: 11px;
}

.newPostBox button {
  width: auto;

  width: 98%;
  margin: 0px auto;
  margin-left: 11px;
  margin-top: 7px;
  
}

.newPostBox h3 {
  margin: 11px 0px 22px 0px;
}

.titoloPost {
  text-align: center;
  font-size: 1.3em;
  font-weight: 500;
  font-style: italic;
}

.paragPost {
  margin: 33px 7px;
}

.imgPost img {
  width: 150;
  height: 150px;
  margin: 11px 0px 33px 11px;
}

.dataPost {
  /* word-wrap: break-word; */
  color: aliceblue;
  width: 100%;
  padding: 11px 7px;
  margin: 0 0px 11px 7px;
}

#outPutBox {
  width: 100vw;

  /* height: 350px; */
  width: 100%;
  overflow-x: hidden;
  border: solid yellow 2px;
  padding: 7px;
}

#outPutBox h2 {
  padding: 7px;
  color: rgb(233, 180, 81);
}

.titoloPost {
  color: white;
}

.paragPost {
  color: rgb(203, 218, 235);
}

#outPutBox button {
  width: 100%;
}

#footerDiv {
  color: white;
  text-align: center;
  font-size: 1.2em;
  padding: 5px;
}

@media (max-width: 984px) {
  .bloccoPresentazioneAppElements:nth-child(1) {
    display: inline-block;
    width: 100%;
    flex: 100%;
  }
}
</style>
		