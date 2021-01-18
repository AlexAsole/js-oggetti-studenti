/* Creare un oggetto che descriva uno studente con le seguenti proprietà:
 nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.*/
var alex = {
  'nome': 'Alex Giorgio',
  'cognome': 'Asole',
  'età': 24
}
for (var key in alex) {
  console.log(alex[key])
}
