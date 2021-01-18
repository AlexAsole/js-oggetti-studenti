/* Creare un oggetto che descriva uno studente con le seguenti proprietà:
 nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.*/
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
for (var key in alex) {
  console.log(alex[key])
}

/*Creare un array di oggetti di studenti.
 Ciclare su tutti gli studenti e stampare per ognuno nome e cognome*/
var studenti = [alex, gian, ale]
for (var i = 0; i < studenti.length; i++) {
  for (var key in studenti[i]) {
    if(key !== 'età'){
      console.log(studenti[i][key])
    }
  }
}
