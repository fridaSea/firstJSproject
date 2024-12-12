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
