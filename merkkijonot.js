// const email = "akseli.vonkumula@yritysoy.fi"

// var nimiOsat = email.split('@')[0].split('.');
// var etunimi = nimiOsat[0];
// var sukunimi = nimiOsat[1]

// console.log("Etunimi: " + etunimi)
// console.log("Sukunimi: " + sukunimi)

// if (sukunimi.indexOf("von") > -1) {
//     console.log("Käyttäjä on aatelinen.")
// }


const email = "akseli.vonkumula@yritysoy.fi"

var nimiOsat = email.split('@')[0].split('.');
var etunimi = nimiOsat[0];
var sukunimi = nimiOsat[1]

console.log("Etunimi: " + etunimi)
console.log("Sukunimi: " + sukunimi)

if (sukunimi.indexOf("v") === 0) {
    console.log("Sukunimi alkaa v:llä.")
}

// const email = "akseli.vonkumula@yritysoy.fi"

// var nimiOsat = email.split('@')[0].split('.');
// var etunimi = nimiOsat[0].charAt(0).toUpperCase() + nimiOsat[0].slice(1);
// var sukunimi = nimiOsat[1].charAt(0).toUpperCase() + nimiOsat[1].slice(1);

// console.log("Etunimi: " + etunimi)
// console.log("Sukunimi: " + sukunimi)

// if (sukunimi.indexOf("von") > -1) {
//     console.log("Käyttäjä on aatelinen.")
// }

