// function getData() {
//   fetch("https://extinct-api.herokuapp.com/api/v1/animal/804")
//     .then((response) => {
//       console.log("response:>>", response); // Paket kommt an mit Status (Erfolgsstaus oder Fehlerstatus)
//       return response.json(); // Paket wird aufgemacht und ich sehe den Inhalt, verarbeite den Inhalt und verpacke die Inhalte in einem json)
//     })
//     .then((result) => {
//       console.log("result:", result);
//       // const animals = data.data;
//       const animals = result.data;

//       console.log("animals:", animals);
//       //buildMyCards(animals); // rausnehmen, da es in der controller function aufgerufen wird
//       // displayAnimals(animals);
//       controller(animals);
//     })
//     .catch((error) => {
//       console.log("error:>>", error);
//     });
// }

function findAnimal(animals) {
  const animalNameUrlHash = document.location.hash; // Aus der url holen wir uns den anker der den comman name des tieres hat. Leerzeichen werden vom browser mit sonderzeichen ersetzt
  //console.log("Hash from URL:", animalNameUrlHash); // Überprüfe den Hash - works
  const animalNameHash = decodeURI(animalNameUrlHash); // haben die browsers sonderzeichen entfernt
  const animalName = animalNameHash.substring(1); // schneiden das erste zeichen weg
  //console.log("Decoded animal name:", animalName); // Überprüfe den Namen - works

  return animals.find(function (animal) {
    return animal.commonName === animalName;
  });
}

function displayAnimal(animal) {
  document.addEventListener("DOMContentLoaded", function () {
    getData(function (animals) {
      controller(animals);
    });
  });

  // Hole den Container
  const container = document.getElementById("contentContainer");
  // Überprüfen, ob der Container existiert
  if (!container) {
    console.log("Error: contentContainer not found.");
    return; // Frühzeitig abbrechen, wenn der Container nicht existiert
  }

  // Sicherstellen, dass das Animal-Objekt vorhanden ist
  if (!animal) {
    console.log("No animal found.");
    return;
  }

  // console.log("Displaying animal:", animal); // Debugging-Ausgabe - works

  //Erstellen des Card-Bodys
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  // Erstelle dynamischen Inhalt
  // Common Name
  const heading = document.createElement("h1");
  heading.innerText = animal.commonName;
  heading.classList.add("text-center", "my-4"); // Füge Bootstrap-Klassen hinzu

  // binomialName
  const cardBinomialName = document.createElement("p");
  cardBinomialName.innerText = "Binomial Name: " + animal.binomialName;

  //Bild
  const cardImage = document.createElement("img");
  // console.log("animals[i]image :>>", animals[i].imageSrc);
  //-> das passt, hier werden in der Konsole entweder die Links ausgegebn oder false
  if (animal.imageSrc && animal.imageSrc !== "false") {
    cardImage.setAttribute("src", animal.imageSrc);
    cardImage.setAttribute("alt", "Image of " + animal.commonName);

    // Fehlerbehandlung, wenn das Bild nicht geladen werden kann
    cardImage.addEventListener("error", function (error) {
      //console.log("Image load fail", error, animal);
      cardImage.setAttribute("src", "/assets/no_pic-32.png");
      cardImage.setAttribute(
        "alt",
        "No image available for " + animal.commonName
      );
    });
  } else {
    //console.log("Platzhalterbild wird gesetzt"); // Hierbei wurd angezeigt, dass für 220 Tiere der Text gesetzt wird, was so auch stimmt mit den angaben von der API - auf der website wird mir aber immer noch kein platzhalterbild angezeigt
    cardImage.setAttribute("src", "/assets/no_pic-32.png");
    cardImage.setAttribute(
      "alt",
      "No image available for " + animal.commonName
    );
  }

  // Location
  const cardLocation = document.createElement("p");
  cardLocation.innerText = "Location: " + animal.location;

  // Time
  const cardTime = document.createElement("p");
  cardTime.innerText = "Last Recorded: " + animal.lastRecord;

  // Short description
  const cardDescription = document.createElement("p");
  cardDescription.innerHTML = "Short description: <br>" + animal.shortDesc;
  // const paragraph = document.createElement("p");
  // paragraph.textContent = "Erforsche die Wunder der ausgestorbenen Spezies und vergessene Giganten.";

  // Füge den Inhalt in den Container ein
  cardBody.appendChild(heading);
  cardBody.appendChild(cardBinomialName);
  cardBody.appendChild(cardImage);
  cardBody.appendChild(cardLocation);
  cardBody.appendChild(cardTime);
  cardBody.appendChild(cardDescription);
  container.appendChild(cardBody);
}

function controller(animals) {
  const animal = findAnimal(animals);
  //console.log("Found animal:", animal); // Überprüfe, ob das Tier gefunden wurde - works
  displayAnimal(animal);
}

getData(function (animals) {
  //console.log("controller animals:>> ", animals);
  controller(animals);
});

//   ----------

//     const cardContainer = document.createElement("div");
//     cardContainer.setAttribute("class", "card");
//     cardContainer.classList.add("col-sm-2");
//     cardContainer.classList.add("border-secondary");

//     const cardTitle = document.createElement("h5");
//     cardTitle.setAttribute("class", "card-title");

//     if (animals[i].commonName && animals[i].commonName !== "false") {

//       cardTitle.innerText = animals[i].commonName;
//     } else {

//       cardTitle.innerText = "Unknown";
//     }

//     const cardButton = document.createElement("a");
//     cardButton.setAttribute("class", "btn btn-secondary");
//     cardButton.setAttribute(
//       "href",
//       "/pages/animal/animal.html#" + animals[i].commonName
//     cardButton.innerText = "Go somewhere";

//     cardContainer.appendChild(cardImage);
//     cardBody.appendChild(cardTitle);
//     cardBody.appendChild(cardButton);

//     cardsContainer.appendChild(cardContainer);

// });
