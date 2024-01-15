var puhelimet = ["Huawei", "Samsung", "Iphone", "Asus ROG"]

for (let i = 0; i < puhelimet.length; i++) {
    console.log("Puhelin " + (i+1) + ". on " + puhelimet[i] )
}

// puhelimet.forEach( p => 
//     console.log("Puhelin on " + p)
// )

var puhelimet = ["Huawei", "Samsung", "Iphone", "Asus ROG"];

puhelimet.forEach((p, index) => 
    console.log("Puhelin " + (index + 1) + ". on " + p)
)


// puhelimet.map( p => 
//     console.log("Puhelin on " + p)
// )


puhelimet.map((p, index) => 
    console.log("Puhelin " + (index + 1) + ". on " + p)
)
