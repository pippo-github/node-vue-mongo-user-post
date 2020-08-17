
 
/* 

Questo file deve risiedere nella cartella del progetto VUE: './client', deve stare nella sua root, fuori da ogni cartella (deve essere globale), altrimenti non funziona.

Tramite questo il file di configuarazione  (tutto il progetto Vue sara tradotto nei veri CSS, JS e HTML necessari, per essere integrati nella applicazione Node, ... come fa webpack di solito ... )

inoltre tale file farà da configurazione per il proxy tra la parte client e quella server in modo tale che l'indirizzo seguente sia raggiungibile al suo interno

http://localhost:5000/post/api/


Tale indirizzo in fase di deployng e publicazione su heroku deve divenare, oppure anche in fase di testing 'npm run serve', di può utilizzare questo file (vue.config.js), configurato in questo modo:

post/api/

Proprio per raggiungere tale indirizzo è necessario configurare il proxy, ed e' proprio a questo che serve questo file, il quale deve avere una configurazione come la seguente


NB: a configurazione ultimanta ricorda  di RIAVVIARE IL SERVER DELLA APP VUE !!!


questa istruzione:


	outputDir: path.resolve(__dirname, '../server/bublic'),


Serve a dire ad npm, quando compili il progetto in versione BUILD, metti tutto il risultato nella cartella sel server NODE (in tal modo da rendere tutto locale la UI Vue ed i servizi NODE)


Fatta e testa questa configurazione si deve procedere con la creazione della versione di BUILD della UI Vue:

npm run build


Questo file ad ogni modifica va ricompilato ovviamente

*/

const path = require('path')

module.exports = {
	publicPath:   './',
 	outputDir: path.resolve(__dirname, '../server/public'),
    lintOnSave: false,
	devServer: {
		proxy: {
            '/api': {
                target: `http://localhost:5000`,
            }
        },
 	}
}		