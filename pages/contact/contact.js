// ------------
// Copy von dem das funktioniert um schnell drauf zugreifen zu können
// Daten per API abrufen = This is the structure that has to be build in order to get data from a server !!!
function getData() {
  fetch("https://extinct-api.herokuapp.com/api/v1/animal/804")
    .then((response) => {
      console.log("response:>>", response);
      return response.json();
    })
    .then((result) => {
      console.log("result:", result);
      // const animals = data.data;
      const animals = result.data;
      console.log("animals:", animals);
      buildMyCards(animals);
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
  const commonNamesContainer = document.querySelector("body"); // toatally forgot about the "cardsContainer" from the .html

  for (let i = 0; i < animals.length; i++) {
    // console.log("animals[i] :>> ", animals[i]);
    const animalCommonName = document.createElement("p");
    animalCommonName.innerText = animals[i].commonName;

    commonNamesContainer.appendChild(animalCommonName);
  }
}

getData();

// ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT ALT

// /* ALT - FUNKTIONIERT NICHT
// console.log(animals);

// const displaybinomialName = (animalsArray) => {
//   const animalsContainer = document.querySelector(".binomialNameList");

//   for (let i = 0; i < animalsArray.length; i++) {
//     const animalName = document.createElement("p");
//     animalName.innerText = animalsArray.data[i].binomialName;

//     animalsContainer.appendChild(animalName);
//   }
// };

// displaybinomialName(animals);
// */

// // ZU NUTZEN FÜR animals.js - FUNKTIONIERT ORIGINAL

// // console.log(getData); // Check the structure of the animals array in the console

// // const displaybinomialName = (animalsArray) => {
// //   const animalsContainer = document.querySelector(".binomialNameList");

// //   // Loop through the animals array
// //   for (let i = 0; i < animalsArray.length; i++) {
// //     const animalGroup = animalsArray[i]; // Get each animal group (object)

// //     // Loop through the data property to access each individual animal
// //     for (let j = 0; j < animalGroup.data.length; j++) {
// //       const animal = animalGroup.data[j]; // Get each animal object

// //       const animalName = document.createElement("p");
// //       animalName.innerText = animal.binomialName; // Display the binomial name

// //       animalsContainer.appendChild(animalName); // Append the name to the container
// //     }
// //   }
// // };

// // displaybinomialName(animals); // Pass the 'animals' array to the function

// // Daten per API abrufen = This is the structure that has to be build in order to get data from a server !!!
// function getData() {
//   fetch("https://extinct-api.herokuapp.com/api/v1/animal/804")
//     .then((response) => {
//       console.log("response:>>", response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log("data:", data);
//     })
//     .catch((error) => {
//       console.log("error:>>", error);
//     });
// }

// getData(); // Works. it shows the response and the data

// // Setting up the cards
// // console.log(animals); // Check the structure of the animals array in the console

// const displayAnimals = (animalsArray) => {
//   const cardsContainer = document.querySelector(".cards-container");
//   // console.log("cardsContainer:", cardsContainer); - wird auch geprinted
//   // console.log("animalsArray:", animalsArray); // wird auch geprinted
//   // Loop through the animals array
//   for (let i = 0; i < animalsArray.length; i++) {
//     const animalGroup = animalsArray[i];
//     //console.log("animalGroup:", animalGroup);
//     for (let j = 0; j < animalGroup.length; j++) {
//       const animal = animalGroup.data[j];

//       console.log("animal:", animal);

//       const cardContainer = document.createElement("div");
//       cardContainer.setAttribute("class", "card");
//       cardContainer.setAttribute("style", "width: 18rem;");

//       const cardImage = document.createElement("img"); // hier ist der fehler aufgetreten
//       cardImage.setAttribute("src", animalsArray[i].imageSrc);
//       cardImage.setAttribute("alt", "picture of an animal");

//       // IF CONDITION für die Tiere mit keinen bildern
//       // if (imageSrc=true) {
//       //   show cardImage
//       // } else {
//       //   insert pic "no pic"
//       // }

//       const cardBody = document.createElement("div");
//       cardBody.setAttribute("class", "card-body");

//       const cardTitel = document.createElement("h5");
//       cardTitel.setAttribute("class", "card-title");
//       cardTitel.innerText = animalsArray[i].commonName;

//       const cardDescription = document.createElement("p");
//       cardDescription.setAttribute("class", "card-text");
//       cardDescription.innerText = animalsArray[i].shortDesc;

//       // laut bootstrap a href könnte noch eingefügt werden, ansonsten kann man natürlich auch selbst entscheiden, was man noch einblenden möchte

//       cardContainer.appendChild(cardImage); // changed the order in comparison to the video, because I want the picture to come first
//       cardBody.appendChild(cardTitel);
//       cardBody.appendChild(cardDescription);
//       cardContainer.appendChild(cardBody);
//       cardsContainer.appendChild(cardContainer);
//     }
//   }
// };

// displayAnimals(getData);

// /*)TOD OD
// //Fehlerbehandlung für ungültige Bilder: Du kannst sicherstellen, dass nur Bilder mit gültigen URLs angezeigt werden. Zum Beispiel, wenn imageSrc den Wert "false" hat, kannst du es überspringen oder ein Platzhalterbild verwenden.
