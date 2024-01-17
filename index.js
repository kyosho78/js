//Palvelut sivun näyttäminen
function palvelut() {
    let palvelut = `<h2>Palvelumme</h2>
   
   
          <p>Eläinlääkäri</p>
          <p>Päiväjoito</p>
          <p>Yöhoito</p>
   
    
    `
    document.getElementById("sisältö").innerHTML = palvelut
  

}

//Yhteystiedot
function yhteystiedot() {
    document.getElementById("sisältö").innerHTML = ""
    var otsikko = document.createElement("h2");
    var teksti = document.createTextNode("Yhteystiedot");
    otsikko.appendChild(teksti);
    // var sisältö = document.getElementById("sisältö");
    sisältö.appendChild(otsikko);

    var puhelin = document.createElement("h4");
    var puhTeksti = document.createTextNode("Puhelinnumero 0401234567");
    puhelin.appendChild(puhTeksti);
    sisältö.appendChild(puhelin);
    var osoite = document.createElement("h4");
    var osoiteTeksti = document.createTextNode("Careeriatie 4, 00160 Porvoo");
    osoite.appendChild(osoiteTeksti);
    sisältö.appendChild(osoite);
}

//Tumma ja vaalea teema sivulle
// function tumma(){
//     document.getElementById("sivu").body.style.backgroundColor = "black";
//     document.getElementById("sivu").body.style.color = "white";
// }

function tumma() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "lightgreen"; // Optional: Change text color to white for better visibility
    localStorage.setItem("teema", "tumma")
}

// function vaalea(){
//     document.getElementById("sivu").style.backgroundColor = "white";
//     document.getElementById("sivu").style.color = "black";
// }

function vaalea() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"; // Optional: Change text color to white for better visibility
    localStorage.setItem("teema", "vaalea")
}

//Suoritetaan aina alussa, valinta jää muistiin
if (localStorage.getItem("teema") == "tumma") {
    tumma()
}

//Suoritetaan aina alussa, valinta jää muistiin
else {
    vaalea()
}

