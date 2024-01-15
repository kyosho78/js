const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForNumber(question, callback) {
  rl.question(question, (input) => {
    const number = parseFloat(input);
    if (isNaN(number)) {
      console.log('Anna kelvollinen numero.');
      askForNumber(question, callback); // Pyydä numeroa uudelleen
    } else {
      callback(number);
    }
  });
}

askForNumber('Anna ensimmäinen numero: ', (num1) => {
  askForNumber('Anna toinen numero: ', (num2) => {
    console.log(`Summa: ${num1 + num2}`);
    console.log(`Erotus: ${num1 - num2}`);
    console.log(`Tulo: ${num1 * num2}`);
    console.log(`Jako: ${num1 / num2}`);
    rl.close();
  });
});
