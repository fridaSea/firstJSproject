// Daten per API abrufen = This is the structure that has to be build in order to get data from a server !!!
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

//getData(); // Works. it shows the response and the data
//console.log("animals:", animals);
//console.log(getData); // Check the structure of the animals array in the console

// CARDS

const displayAnimals = (animals) => {
  const cardsContainer = document.querySelector(".row"); // toatally forgot about the "cardsContainer" from the .html
  cardsContainer.innerHTML = ""; // NEW leere den container bevor neue karten hinzugefügt werden. ohne diese zeile sind immer alle da + alle, die per filter unten dran gehängt werden

  // Animals Array alphabetisch sortieren
  animals.sort((a, b) => {
    if (a.commonName < b.commonName) return -1; //element wird vor das andere gesetzt
    if (a.commonName > b.commonName) return 1; // element wird dahinter gesetzt
    return 0; //sind schon richtig sortiert, es ändert sich nichts
  });

  // Karten für jedes Tier erstellen
  for (let i = 0; i < animals.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class", "card");
    cardContainer.classList.add("col-sm-2");
    cardContainer.classList.add("border-secondary");
    //cardContainer.classList.add("text-center");
    //cardContainer.setAttribute("style", "width: 18rem");

    const cardImage = document.createElement("img");

    // console.log("animals[i]image :>>", animals[i].imageSrc);
    //-> das passt, hier werden in der Konsole entweder die Links ausgegebn oder false
    if (animals[i].imageSrc && animals[i].imageSrc !== "false") {
      cardImage.setAttribute("src", animals[i].imageSrc);
      cardImage.setAttribute("alt", "Image of " + animals[i].commonName);

      cardImage.addEventListener("error", function (error) {
        //console.log("Image load fail", error, animals[i]);
        cardImage.setAttribute("src", "/assets/no_pic-32.png");
        cardImage.setAttribute(
          "alt",
          "No image available for " + animals[i].commonName
        );
      });
    } else {
      //console.log("Platzhalterbild wird gesetzt"); // Hierbei wurd angezeigt, dass für 220 Tiere der Text gesetzt wird, was so auch stimmt mit den angaben von der API - auf der website wird mir aber immer noch kein platzhalterbild angezeigt
      cardImage.setAttribute("src", "/assets/no_pic-32.png");
      cardImage.setAttribute(
        "alt",
        "No image available for " + animals[i].commonName
      );
      // const cardImage = document.createElement("img");
      // cardImage.setAttribute("src", "assets/no_pic-32.png"); // want to have it for every element of the array
      // cardImage.setAttribute("alt", "Platzhalter ");
    }

    // Image - URL error for "Floreana giant tortoise" & Slender-billed curlew TO DO

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    // cardTitle.innerText = animals[i].commonName;

    if (animals[i].commonName && animals[i].commonName !== "false") {
      // cardTitle.setAttribute("src", animals[i].commonName);
      cardTitle.innerText = animals[i].commonName;
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
    cardButton.setAttribute(
      "href",
      "/pages/animal/animal.html#" + animals[i].commonName // alles was hinter dem # kommt, ist dem browser egal. es ist ein anker.
    ); // TO DO - Verlinkung noch hinzufügen
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

// 3. Generate Dropdown
const createDropDown = (animals) => {
  const dropdown = document.getElementById("locationDropdown");

  // console.log("animalsDropdown:", animals); // works
  //NEW
  // Stelle sicher, dass die Option "All Locations" hinzugefügt wird /// TO DO - ich möchte das bei ALL immer alle angezeigt werden, z.b. ganz an anfang wenn man auf die Seite kommt
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.innerText = "All Locations";
  dropdown.appendChild(allOption);

  // Sortiere das Array der Tiere alphabetisch nach der Location
  animals.sort((a, b) => {
    if (a.location < b.location) return -1;
    if (a.location > b.location) return 1;
    return 0;
  });

  // Erstelle die Dropdown Optionen für jede Location
  const locations = animals.map((animal) => {
    return animal.location;
  });
  // console.log("locations:>>", locations); // I created an array with the locations of the animals, still repeated (804)
  //const uniqueLocationsArray = new Set(locations); // It created a set, which I don`t want because I am not able to loop over it -> I need to transform this into an array (480)
  const uniqueLocationsArray = [...new Set(locations)]; // now I have an array with unique locations (480). No I am no longer loop over the animals but over uniqueLocationsArray and I don`t need to access any properties
  //console.log("uniqueLocationsArray:>>", uniqueLocationsArray); -> wird gedruckt

  for (let i = 0; i < uniqueLocationsArray.length; i++) {
    const option = document.createElement("option"); // for every animals I want to generate a dropdown element - created the element
    option.innerText = uniqueLocationsArray[i]; // what`s going to be the text of the option? - have the text
    option.value = uniqueLocationsArray[i];
    dropdown.appendChild(option);
  }
};

// Search Button
// Set an event listener to the button

function createSearch(animals) {
  const searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", function () {
    //filterBySearchInput(animals);
    combinedFilters(animals);
  });

  document
    .querySelector("#searchInput")
    .addEventListener("keyup", function (keyPressEvent) {
      if (keyPressEvent.code === "Enter") {
        // filterBySearchInput(animals);
        combinedFilters(animals);
      }
    });

  //wenn ich folgende funktion nutzen öchte, muss der search button raus, weil nicht mehr benötigt
  // document
  //   .querySelector("#searchInput")
  //   .addEventListener("input", function (keyPressEvent) {
  //     filterBySearchInput(animals);
  //   });
}

// 5. ADD EVENT LISTENERS //setDropdownEventListener UMBENENNEN FÜR NÄCHSTE FILTER !!!!
const setEventListener = (animals) => {
  const locationListDropdown = document.querySelector("#locationDropdown"); // FRAGE: WARUM KOMMT HIER EIN # DAVOR? -> weil bezogen auf css/ ich könnte auch schreiben mit getelementbyid, dann aber ohen #
  locationListDropdown.addEventListener("change", () => {
    //console.log("location selected", locationListDropdown.value);
    //filterByDropDown(animals); // FRAGE: WARUM PACKE ICH DAS HIER UNTEN REIN UND NICHT WIE DAS ANDERE OBEN?
    combinedFilters(animals);
  });
};

// 6. FILTER BY DROPDOWN
const filterByDropDown = (animals) => {
  //console.log("animal location in Filter:>>", animals); // it works
  // get drowndown value
  //console.log("filtering by dropdown"); // it works
  const selectedLocation = document.querySelector("#locationDropdown").value;
  //console.log("selectedLocation:>>", selectedLocation);
  //NEW
  // Wenn der Wert des Dropdowns "All Locations" oder ein leerer Wert ist, zeige alle Tiere an
  if (selectedLocation === "all" || !selectedLocation) {
    displayAnimals(animals); // Zeige alle Tiere an, wenn "All locations" ausgewählt ist
  } else {
    // FILTER die tiere nach dem ausgewählten standort
    const filteredLocations = animals.filter(
      (animal) => animal.location === selectedLocation
    );
    displayAnimals(filteredLocations);
  }
  //console.log("filteredLocations:>>", filteredLocations); // it works. je nach auswahl bekomme ich unterschieldich viele ergebnisse angezeigt
  // hier muss ich die oben erstellte Tabelle noch mit den gefilterten Locations aufrufen
};

// Filter by Search Input
const filterBySearchInput = (animals) => {
  const searchQuery = document.querySelector("#searchInput").value;
  //console.log("selectedLocation:>>", selectedLocation);

  const filteredAnimals = animals.filter((animal) => {
    if (
      searchQuery.length === 0 ||
      animal.commonName.toLowerCase().match(searchQuery.toLowerCase()) ||
      animal.location.toLowerCase().match(searchQuery.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });
  displayAnimals(filteredAnimals);

  //console.log("filteredLocations:>>", filteredLocations); // it works. je nach auswahl bekomme ich unterschieldich viele ergebnisse angezeigt
  // hier muss ich die oben erstellte Tabelle noch mit den gefilterten Locations aufrufen
};

const animalMatchesLocation = (animal) => {
  const selectedLocation = document.querySelector("#locationDropdown").value;
  return (
    !selectedLocation ||
    selectedLocation === "all" ||
    animal.location === selectedLocation
  );
};

const animalMatchesSearchQuery = (animal) => {
  const searchQuery = document.querySelector("#searchInput").value;
  return (
    searchQuery.length === 0 ||
    animal.commonName.toLowerCase().match(searchQuery.toLowerCase()) ||
    animal.location.toLowerCase().match(searchQuery.toLowerCase())
  );
};

// Combine both filters
const combinedFilters = (animals) => {
  // // console.log("combined filters working");
  // const selectedLocation = document.querySelector("#locationDropdown").value;
  // const searchQuery = document.querySelector("#searchInput").value;

  const filteredAnimals = animals.filter((animal) => {
    return animalMatchesLocation(animal) && animalMatchesSearchQuery(animal);
  });

  displayAnimals(filteredAnimals);
};

// 4. make control functions
// - a control function is usually in control of calling the different functions that make our code run
// - when you are doing this, you try to put all the functions in one place and your code will be much easiert to debug, to scale etc.
// the first function that has to run here is the fetch function because it needs to get the data
// this controller is  kind of a control center to  handle everything that is going on in my code

function controller(animals) {
  // get the data
  //
  // build CARDS (table) with data
  // buildMyCards(animals);
  // generate Dropdown filter options
  createDropDown(animals);
  // create filter functions
  setEventListener(animals);
  // set event listeners
  filterByDropDown(animals);
  //Search
  createSearch(animals);
}

// Initiales Laden der Daten
getData((animals) => {
  controller(animals);
});
// Infos zur Sort():
// sort(): Das sort()-Array wird mit einer Vergleichsfunktion verwendet, die die commonName-Eigenschaft der Tiere vergleicht. Dies stellt sicher, dass die Tiere alphabetisch nach ihrem commonName sortiert werden.

// a.commonName < b.commonName gibt -1 zurück, was bedeutet, dass a vor b kommt (alphabetisch).
// a.commonName > b.commonName gibt 1 zurück, was bedeutet, dass b vor a kommt.
// Wenn die commonName-Werte gleich sind, gibt die Funktion 0 zurück.
// Fehlende oder ungültige commonName-Werte: Im Fall eines fehlenden oder ungültigen commonName kannst du eine Standardbezeichnung wie "Unknown" setzen (falls noch nicht geschehen).
// kleine Datein mit wenig Code + gute Benennung von Funktionen und Dateien

// ALLE die kein BILD UND kein Titel/ common name  haben, sollen nicht angezeigt werden
// !!! KEINE ERGEBNISSE GEFUNDEN integrieren
// load more image by scrolling - https://webdesign.tutsplus.com/how-to-implement-infinite-scrolling-with-javascript--cms-37055t
