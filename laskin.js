
// Tuodaan readline-moduuli, jota käytetään käyttäjän syötteen lukemiseen.
const readline = require('readline');

// Luodaan readline-käyttöliittymä käyttäen prosessin stdin ja stdout.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Määritellään funktio pyytämään käyttäjältä numeroa.
// Tämä funktio ottaa kaksi argumenttia: kysymyksen ja callback-funktion.
function askForNumber(question, callback) {
  rl.question(question, (input) => {
    const number = parseFloat(input); // Muunnetaan syöte liukuluvuksi.
    if (isNaN(number)) { // Tarkistetaan, onko syöte ei-numero.
      console.log('Anna kelvollinen numero.'); // Jos ei ole numero, näytetään virheilmoitus.
      askForNumber(question, callback); // Kutsutaan funktiota uudelleen samalla kysymyksellä.
    } else {
      callback(number); // Jos syöte on numero, kutsutaan callback-funktiota annetulla numerolla.
    }
  });
}

// Kutsutaan askForNumber-funktiota ensimmäisen numeron saamiseksi.
askForNumber('Anna ensimmäinen numero: ', (num1) => {
  // Kun ensimmäinen numero on saatu, kutsutaan askForNumber-funktiota uudelleen toisen numeron saamiseksi.
  askForNumber('Anna toinen numero: ', (num2) => {
    // Kun molemmat numerot on saatu, suoritetaan laskutoimitukset ja tulostetaan tulokset.
    console.log(`Summa: ${num1 + num2}`);
    console.log(`Erotus: ${num1 - num2}`);
    console.log(`Tulo: ${num1 * num2}`);
    console.log(`Jako: ${num1 / num2}`);
    rl.close(); // Suljetaan readline-käyttöliittymä.
  });
});

