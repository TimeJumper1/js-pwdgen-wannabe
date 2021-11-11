// chiediamo all'utente nome cognome e colore preferito
const userName = prompt('inserisci il tuo nome');
console.log(userName)

const userSurname = prompt('inserisci il tuo cognome');
console.log(userSurname)

const userColor = prompt('inserisci il tuo colore preferito');
console.log(userColor)

const userMessage = 'la tua password super sicura è: ' + userName + userSurname + userColor +'21'

document.getElementById('password').innerHTML = userMessage