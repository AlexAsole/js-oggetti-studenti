var alex = {
  'nome': 'Alex Giorgio',
  'cognome': 'Asole',
  'età': 24
}
var gian = {
  'nome': 'Gianpaolo',
  'cognome': 'Garbarino',
  'età': 42
}
var ale = {
  'nome': 'Alessandro',
  'cognome': 'Liggeri',
  'età': 25
}
var altroStudente = {}
var studenti = [alex, gian, ale];
/* Creare un oggetto che descriva uno studente con le seguenti proprietà:
 nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.*/
for (var key in alex) {
  console.log(alex[key]);
}
/*Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
 inserendo nell’ordine: nome, cognome e età. */
 var nomeStud = prompt('Inserisci il tuo nome!');
 var cognomeStud = prompt('Inserisci il tuo cognome!');
 var etaStud = parseInt(prompt('Inserisci la tua età!'));
/*Assegno ogni elemento inserito a un attributo del oggetto*/
 altroStudente.nome = nomeStud;
 altroStudente.cognome = cognomeStud;
 altroStudente.età = etaStud;
/*inserisco nell'array l'oggetto generato*/
 studenti.push(altroStudente);
/*Creare un array di oggetti di studenti.
 Ciclare su tutti gli studenti e stampare per ognuno nome e cognome*/
 for (var i = 0; i < studenti.length; i++) {
   // for (var key in studenti[i]) {
   //   if(key !== 'età'){
   //     console.log(studenti[i][key]);
   //   }
   // }
   console.log(studenti[i].nome)
   console.log(studenti[i].cognome)
 }
