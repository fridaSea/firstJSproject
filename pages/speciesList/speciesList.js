// const displaybinomialName = (animalsArray) => {
//   const animalsContainer = document.querySelector(".cardsContainer");

//   // Loop through the animals array
//   for (let i = 0; i < animalsArray.length; i++) {
//     const animalGroup = animalsArray[i]; // Get each animal group (object)
//     //console.log("animalGroup:", animalGroup);
//     // Loop through the data property to access each individual animal
//     for (let j = 0; j < animalGroup.data.length; j++) {
//       const animal = animalGroup.data[j]; // Get each animal object
//       //console.log("animal:", animal);
//       const animalName = document.createElement("p");
//       animalName.innerText = animal.binomialName; // Display the binomial name
//       //console.log("animalName:", animalName);
//       animalsContainer.appendChild(animalName); // Append the name to the container
//     }
//   }
// };

// displaybinomialName(animals); // Pass the 'animals' array to the function

// // das gleiche jetzt für common name:
// const displaybinomialName = (animalsArray) => {
//   const animalsContainer = document.querySelector(".cardsContainer");

//   // Loop through the animals array
//   for (let i = 0; i < animalsArray.length; i++) {
//     const animalGroup = animalsArray[i]; // Get each animal group (object)
//     //console.log("animalGroup:", animalGroup);
//     // Loop through the data property to access each individual animal
//     for (let j = 0; j < animalGroup.data.length; j++) {
//       const animal = animalGroup.data[j]; // Get each animal object
//       //console.log("animal:", animal);
//       const animalName = document.createElement("p");
//       animalName.innerText = animal.commonName; // Display the binomial name
//       //console.log("animalName:", animalName);
//       animalsContainer.appendChild(animalName); // Append the name to the container
//     }
//   }
// };

// displaybinomialName(animals); // Pass the 'animals' array to the function

//----- WORKS SO FAR WITH THE FILE Above ------

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

      //displayAnimals(animalsArray)  -> Hier oben noch einfügen?
    })
    .catch((error) => {
      console.log("error:>>", error);
    });
}

//getData(); // Works. it shows the response and the data
//console.log("animals:", animals);
//console.log(getData); // Check the structure of the animals array in the console

// // Setup of the Cards

function buildMyCards(animals) {
  console.log("animals :>> ", animals);
  const commonNamesContainer = document.querySelector("body");

  for (let i = 0; i < animals.length; i++) {
    // console.log("animals[i] :>> ", animals[i]);
    const animalCommonName = document.createElement("p");
    animalCommonName.innerText = animals[i].commonName;

    commonNamesContainer.appendChild(animalCommonName);
  }
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
  const cardsContainer = document.querySelector(".cards-container"); // toatally forgot about the "cardsContainer" from the .html

  for (let i = 0; i < animals.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.setAttribute("style", "width: 18rem");

    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", animals[i].imageSrc); // want to have it for every element of the array
    cardImage.setAttribute("alt", "Image of an extincted animal");
    // HERE IF CONDITION EINFÜGEN FÜR DIE ANIMALS WELCHE KEIN BILD HABEN??? If ("imageSrc": "false",) insert "no pic(from assets)"

    // console.log("animals[i]image :>>", animals[i].imageSrc); -> das passt, hier werden in der Konsole entweder die Links ausgegebn oder false
    if (
      animals[i].imageSrc &&
      animals[i].imageSrc !== false &&
      animals[i].imageSrc !== "false"
    ) {
      cardImage.setAttribute("src", animals[i].imageSrc);
    } else {
      console.log("Platzhalterbild wird gesetzt"); // Hierbei wurd angezeigt, dass für 220 Tiere der Text gesetzt wird, was so auch stimmt mit den angaben von der API - auf der website wird mir aber immer noch kein platzhalterbild angezeigt
      cardImage.setAttribute("src", "/assets/no_pic-32.png");
      // const cardImage = document.createElement("img");
      // cardImage.setAttribute("src", "assets/no_pic-32.png"); // want to have it for every element of the array
      // cardImage.setAttribute("alt", "Platzhalter ");
    }

    // NOCH NICHT GANZ RICHTIG
    // if (animals[i].imageSrc !== false && animals[i].imageSrc !== "") {
    //   cardImage.setAttribute("src", animals[i].imageSrc);
    // } else {
    //   cardImage.setAttribute("src", "assets/no_pic-32.png");
    // }

    // ALT ALT ALT
    // if (animals[i].imageSrc) {
    //   cardImage.setAttribute("src", animals[i].imageSrc);
    // } else {
    //   cardImage.setAttribute("src", "assets/no_pic-32.png");
    // }
    // src = "assets/icons8-instagram-32.png";
    // schauen, ob das so richtig ist

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = animals[i].commonName;

    if (
      animals[i].commonName &&
      animals[i].commonName !== false &&
      animals[i].commonName !== "false"
    ) {
      cardTitle.setAttribute("src", animals[i].commonName);
    } else {
      //console.log("Common Name unknown");
      cardTitle.innerText = "Unknown";
    }

    // cardDescription lasse ich erst einmal raus, da es mir zu viel ist auf den Karten -> vielleicht die Description dort hinterlegen, wo mit dem Button hin verlinbkt werden kann TO DO
    // const cardDescription = document.createElement("p");
    // cardDescription.setAttribute("class", "card-text");
    // cardDescription.innerText = animals[i].shortDesc;

    // Button to ge somewhere könnte noch eingebaut werden

    // cardDescription lasse ich erst einmal raus, da es mir zu viel ist auf den Karten -> vielleicht die Description dort hinterlegen, wo mit dem Button hin verlinbkt werden kann TO DO
    // const cardDescription = document.createElement("p");
    // cardDescription.setAttribute("class", "card-text");
    // cardDescription.innerText = animals[i].shortDesc;

    // Button to ge somewhere könnte noch eingebaut werden

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
