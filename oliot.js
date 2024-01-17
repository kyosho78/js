  
var autot = [
    { id: 1, merkki: "Toyota", vuosimalli: 2006, hinta: 3000 },
    { id: 2, merkki: "Ford", vuosimalli: 2016, hinta: 7500 },
    { id: 3, merkki: "Lada", vuosimalli: 2021, hinta: 12000 }
  ];
  
  var standard_input = process.stdin;
  standard_input.setEncoding('utf-8');
  
  console.log("JavaScript autohaku");
  console.log("Sovellus suljetaan kirjoittamalla 'exit'");
  process.stdout.write("Hae autoja merkin mukaan:");
  
  standard_input.on('data', function (data) {
    data = data.trim().toLowerCase(); // Convert input to lowercase and remove whitespace
  
    if (data === 'exit') {
      console.log("Kiitos ja näkemiin");
      process.exit();
    } else {
      var foundCars = autot.filter(function (a) {
        return a.merkki.toLowerCase().includes(data);
      });
  
      if (foundCars.length > 0) {
        foundCars.forEach(function (a) {
          console.log("Merkki: " + a.merkki + " vm. " + a.vuosimalli + " Hinta: " + a.hinta);
        });
      } else {
        console.log("Ei löytynyt autoja annetulla merkillä.");
      }
    }
  });
  

// //Taulukoiden olioita
// var autot = [{id: 1, merkki: "Toyota", vuosimalli: 2006, hinta: 3000},
//  {id: 2, merkki: "Ford", vuosimalli: 2016, hinta: 7500},
//  {id: 3, merkki: "Lada", vuosimalli: 2021, hinta: 12000}]


//  var standard_input = process.stdin
//  //Asetetaan input-merkistö
//  standard_input.setEncoding('utf-8')
//  //Aloitetaan sovellus ja kirjoitetaan käyttäjälle ohjeita
//  console.log("JavaScript autohaku")
//  console.log("Sovellus suljetaan kirjoittamalla 'exit'")
//  process.stdout.write("Hae autoja merkin mukaan:")
// standard_input.on('data', function (data) {
//     // Sovellus suljetaan, kun käyttäjää antaa avainsanan "exit"

//     if (data === 'exit\r\n'){
//     console.log("Kiitos ja näkemiin")
//     process.exit()
//      } 
    
//     else {
//         autot.forEach(a => {
//             if (a.merkki.indexOf(data) > -1 ) {
//                 console.log("Merkki: " + a.merkki + "vm. " + a.vuosimalli + "Hinta: " + a.hinta)}
            
//         }
//         )
//     }}
// )
    




     //Muussa tapauksessa lasketaan yhteen lukujen summia






// console.log(autot)

// //Oliot ajetaan forEach silmukassa läpi
// autot.forEach(auto => {
//     //Black Friday : poista kommentti
//     // auto.hinta = 100
//     console.log(auto.merkki + " on vuodelta " + auto.vuosimalli+ "." + " Auton id on: " + auto.id)
//     console.log("Hinta: " + auto.hinta)
//     console.log("__________________________________________________________________________")
// }
// )

// autot.forEach(auto => {
//     if (auto.id ===3) {
//         console.log("Auto id:llä " + auto.id + " on Lujaa laatua " + auto.merkki)
//         console.log("_______________________________________________________________________")
//     }
// })
