// Daten per API abrufen = This is the structure that has to be build in order to get data from a server !!!
function getData() {
  fetch("https://extinct-api.herokuapp.com/api/v1/animal/804")
    .then((response) => {
      console.log("response:>>", response); // Paket kommt an mit Status (Erfolgsstaus oder Fehlerstatus)
      return response.json(); // Paket wird aufgemacht und ich sehe den Inhalt, verarbeite den Inhalt und verpacke die Inhalte in einem json)
    })
    .then((result) => {
      console.log("result:", result);
      // const animals = data.data;
      const animals = result.data;

      console.log("animals:", animals);
      buildMyCards(animals);
      displayAnimals(animals);
    })
    .catch((error) => {
      console.log("error:>>", error);
    });
}

//getData(); // Works. it shows the response and the data
//console.log("animals:", animals);
//console.log(getData); // Check the structure of the animals array in the console

// // SETUP OF THE CARDS

function buildMyCards(animals) {
  console.log("animals :>> ", animals);
  const commonNamesContainer = document.querySelector("body");

  // for (let i = 0; i < animals.length; i++) {
  //   // console.log("animals[i] :>> ", animals[i]);
  //   const animalCommonName = document.createElement("p");
  //   animalCommonName.innerText = animals[i].commonName;

  //   commonNamesContainer.appendChild(animalCommonName);
  // }
}

getData();

// CARDS
{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}

//console.log(animals);

const displayAnimals = (animals) => {
  // Animals Array alphabetisch sortieren
  animals.sort((a, b) => {
    if (a.commonName < b.commonName) return -1;
    if (a.commonName > b.commonName) return 1;
    return 0;
  });

  const cardsContainer = document.querySelector(".row"); // toatally forgot about the "cardsContainer" from the .html

  for (let i = 0; i < animals.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.classList.add("col-sm-2");
    cardContainer.classList.add("border-secondary");
    //cardContainer.classList.add("text-center");
    //cardContainer.setAttribute("style", "width: 18rem");

    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", animals[i].imageSrc); // want to have it for every element of the array
    cardImage.setAttribute("alt", "Image of an extincted animal");
    // HERE IF CONDITION EINFÜGEN FÜR DIE ANIMALS WELCHE KEIN BILD HABEN??? If ("imageSrc": "false",) insert "no pic(from assets)"

    console.log("animals[i]image :>>", animals[i].imageSrc);
    //-> das passt, hier werden in der Konsole entweder die Links ausgegebn oder false
    if (animals[i].imageSrc && animals[i].imageSrc !== "false") {
      cardImage.setAttribute("src", animals[i].imageSrc);

      cardImage.addEventListener("error", function (error) {
        //console.log("Image load fail", error, animals[i]);
        cardImage.setAttribute("src", "/assets/no_pic-32.png");
      });
    } else {
      //console.log("Platzhalterbild wird gesetzt"); // Hierbei wurd angezeigt, dass für 220 Tiere der Text gesetzt wird, was so auch stimmt mit den angaben von der API - auf der website wird mir aber immer noch kein platzhalterbild angezeigt
      cardImage.setAttribute("src", "/assets/no_pic-32.png");
      // const cardImage = document.createElement("img");
      // cardImage.setAttribute("src", "assets/no_pic-32.png"); // want to have it for every element of the array
      // cardImage.setAttribute("alt", "Platzhalter ");
    }

    // Image - URL error for "Floreana giant tortoise" & Slender-billed curlew TO DO

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = animals[i].commonName;

    if (animals[i].commonName && animals[i].commonName !== "false") {
      cardTitle.setAttribute("src", animals[i].commonName);
    } else {
      //console.log("Common Name unknown");
      cardTitle.innerText = "Unknown";
    }

    // cardDescription lasse ich erst einmal raus, da es mir zu viel ist auf den Karten -> vielleicht die Description dort hinterlegen, wo mit dem Button hin verlinbkt werden kann TO DO
    // const cardDescription = document.createElement("p");
    // cardDescription.setAttribute("class", "card-text");
    // cardDescription.innerText = animals[i].shortDesc;

    const cardButton = document.createElement("a");
    cardButton.setAttribute("class", "btn btn-secondary");
    cardButton.setAttribute("href", "#"); // TO DO - Verlinkung noch hinzufügen
    cardButton.innerText = "Go somewhere";

    //cardBody.appendChild(cardDescription);
    cardContainer.appendChild(cardImage);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardButton);
    cardContainer.appendChild(cardBody);
    cardsContainer.appendChild(cardContainer); // wenn ich die Reihenfolge hier ändern möchte, muss ich hier die Reihenfolge ändenr
  }
};

// Using Grid (Stacked horizontal) to display the Cards

// Bootstrap Vorlage:
// <div class="container text-center">
//   <div class="row">
//     <div class="col-sm-8">col-sm-8</div>
//     <div class="col-sm-4">col-sm-4</div>
//   </div>
//   <div class="row">
//     <div class="col-sm">col-sm</div>
//     <div class="col-sm">col-sm</div>
//     <div class="col-sm">col-sm</div>
//   </div>
// </div>

// Infos zur Sort():
// sort(): Das sort()-Array wird mit einer Vergleichsfunktion verwendet, die die commonName-Eigenschaft der Tiere vergleicht. Dies stellt sicher, dass die Tiere alphabetisch nach ihrem commonName sortiert werden.

// a.commonName < b.commonName gibt -1 zurück, was bedeutet, dass a vor b kommt (alphabetisch).
// a.commonName > b.commonName gibt 1 zurück, was bedeutet, dass b vor a kommt.
// Wenn die commonName-Werte gleich sind, gibt die Funktion 0 zurück.
// Fehlende oder ungültige commonName-Werte: Im Fall eines fehlenden oder ungültigen commonName kannst du eine Standardbezeichnung wie "Unknown" setzen (falls noch nicht geschehen).
