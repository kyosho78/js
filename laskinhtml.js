            // Lue käyttäjän syöte
            let userInput1 = prompt("Anna ensimmäinen numero:");
            let userInput2 = prompt("Anna toinen numero:");

            // Tarkista, että syötteet ovat numeroita
            if (isNaN(userInput1) || isNaN(userInput2)) {
                document.write("Syötä kelvolliset numerot.");
            } else {
                // Muunna syötteet numeroiksi
                let num1 = parseInt(userInput1);
                let num2 = parseInt(userInput2);

                // Suorita laskutoimitukset ja näytä tulokset
                document.write("Summa: " + (num1 + num2) + "<br>");
                document.write("Erotus: " + (num1 - num2) + "<br>");
                document.write("Tulo: " + (num1 * num2) + "<br>");
                document.write("Jako: " + (num1 / num2) + "<br>");
            }
            