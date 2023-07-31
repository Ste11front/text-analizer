// creare un'applicazione node che legga un qualsiasi file di testo
// e nella stessa cartella in cui lo legge scriva un file che si chiama 
// come l'originale aggiungendo '-report'
// es pippo.txt => pippo-report.txt;

// numero caratteri: 400 (non compresi gli spazi)
// numero parole: 100

const fs = require('fs');
const path = require('path');

const filename = process.argv[2];
const parsedFilename = path.parse(filename);
const reportFilename = parsedFilename.name + '-report' + parsedFilename.ext;

fs.readFile(filename, 'utf8', function(err, data) {
  if (err) {
    console.error(err);
    return;
  }

  const words = data.split(' ');
  let characters = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== ' ') {
      characters++;
    }
  }

  console.log('Numero parole:', words.length);
  console.log('Numero caratteri:', characters);

  fs.writeFile(reportFilename, 'Numero parole: ' + words.length + '\nNumero caratteri: ' + characters, function(err) {
    if (err) {
      console.error(err);
      return;
    }

    console.log('Il file', reportFilename, 'è stato creato con successo!');
  });
});

// Questo codice crea un’applicazione node che legge un qualsiasi file di testo // e nella stessa cartella in cui lo legge scrive un file che si chiama // come l’originale aggiungendo ‘-report’ // es pippo.txt => pippo-report.txt;

// Il codice mostra anche il numero di caratteri (non compresi gli spazi) e il numero di parole nel file originale

// Importo i moduli fs e path per lavorare con i file e i percorsi const fs = require(‘fs’); const path = require(‘path’);

// Prendo il nome del file da leggere dal terzo argomento della linea di comando const filename = process.argv[2]; // Estraggo il nome e l’estensione del file usando il modulo path const parsedFilename = path.parse(filename); // Creo il nome del file da scrivere aggiungendo ‘-report’ al nome originale const reportFilename = parsedFilename.name + ‘-report’ + parsedFilename.ext;

// Leggo il file originale in formato utf8 usando il modulo fs fs.readFile(filename, ‘utf8’, function(err, data) { // Se c’è un errore, lo stampo e termino la funzione if (err) { console.error(err); return; }

// Divido il contenuto del file in parole usando lo spazio come separatore const words = data.split(’ '); // Inizializzo una variabile per contare i caratteri let characters = 0; // Scorro tutti i caratteri del file for (let i = 0; i < data.length; i++) { // Se il carattere non è uno spazio, lo aggiungo al conteggio if (data[i] !== ’ ') { characters++; } }

// Stampo il numero di parole e il numero di caratteri console.log(‘Numero parole:’, words.length); console.log(‘Numero caratteri:’, characters);

// Scrivo il file di report con le stesse informazioni fs.writeFile(reportFilename, 'Numero parole: ’ + words.length + '\nNumero caratteri: ’ + characters, function(err) { // Se c’è un errore, lo stampo e termino la funzione if (err) { console.error(err); return; }

// Altrimenti, stampo un messaggio di successo
// console.log('Il file', reportFilename, 'è stato creato con successo!'); }); });

// task aggiuntivi:
// a) carattere con più occorrenze: e
// b) parola con più occorrenze: un