// // Daten per API abrufen = This is the structure that has to be build in order to get data from a server !!!
// function getData() {
//   fetch("https://extinct-api.herokuapp.com/api/v1/animal/804")
//     .then((response) => {
//       console.log("response:>>", response);
//       return response.json();
//     })
//     .then((result) => {
//       console.log("result:", result);
//       // const animals = data.data;
//       const animals = result.data;
//       console.log("animals:", animals);

//       //displayAnimals(animalsArray)  -> Hier oben noch einfügen?
//     })
//     .catch((error) => {
//       console.log("error:>>", error);
//     });
// }

// getData();

// const apiURL = "https://extinct-api.herokuapp.com/api/v1/animal/804";
// console.log("api URL:", apiURL);

// const getLocation = () => {
//     fetch(apiURL)
//     .then(response) => {
//         return response.json();
//     }.then(result) => {
//         console.log("result:", result);
//     }
// };

// - Dropdown größer machen, damit auch das "p" komplett angezeigt wird

// BUILDING FILTERS

// DROPDOWN
//1. fetching the data
const getLocation = () => {
  fetch("https://extinct-api.herokuapp.com/api/v1/animal/804")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const animals = result.data;
      console.log("animals:", animals);
      //createHtmlTable(animals);
      //createDropDown(animals); // js works synchronus, we call one function after the other. Only when the first function is done, the second function get`s triggered.
      controller(animals);
    })
    .catch((error) => {
      console.log("error:>>", error);
    });
};

//2. function for creating table and dropdown
const createHtmlTable = (animals) => {
  const table = document.getElementById("table");
  table.innerText = "";

  /* The same as beneth
  for(let i=0; i < animals.length; i++){
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerText = animals[i].location;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerText = animals[i].commonName;
    row.appendChild(column2);
  }*/

  animals.forEach((animal, i) => {
    let row = document.createElement("tr");
    table.appendChild(row);

    let column = document.createElement("td");
    column.innerText = animal.commonName;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerText = animal.location;
    row.appendChild(column2);
  });
};

getLocation();

// 3. Generate Dropdown
const createDropDown = (animals) => {
  const dropdown = document.getElementById("locationDropdown");

  // console.log("animalsDropdown:", animals); // works
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

// 4. make control functions
// - a control function is usually in control of calling the different functions that make our code run
// - when you are doing this, you try to put all the functions in one place and your code will be much easiert to debug, to scale etc.
// the first function that has to run here is the fetch function because it needs to get the data
// this controller is  kind of a control center to  handle everything that is going on in my code

function controller(animals) {
  // get the data
  //
  // build table with data
  createHtmlTable(animals);
  // generate Dropdown filter options
  createDropDown(animals);
  // create filter functions
  setEventListener(animals);
  // set event listeners
  filterByDropDown(animals);
}

// 5. ADD EVENT LISTENERS
const setEventListener = (animals) => {
  const locationListDropdown = document.querySelector("#locationDropdown"); // FRAGE: WARUM KOMMT HIER EIN # DAVOR? -> weil bezogen auf css/ ich könnte auch schreiben mit getelementbyid, dann aber ohen #
  locationListDropdown.addEventListener("change", () => {
    //console.log("location selected");
    filterByDropDown(animals); // FRAGE: WARUM PACKE ICH DAS HIER UNTEN REIN UND NICHT WIE DAS ANDERE OBEN?
  });
};

// ///ALTERNATIVE, DIE ICH HIER ABER AUCH NICHT NUTZEN SOLLTE  - FRAGE - FUNKTIONIERT NICHT GANZ; DA ES DEN CONSOLE:LOG NICHT HOCH ZÄHLT WENN ICH MEHRMALS KLICKE
// const setEventListener = () => {
//   const locationListDropdown = document.querySelector("#locationDropdown"); // FRAGE: WARUM KOMMT HIER EIN # DAVOR?
//   locationListDropdown.addEventListener("change", filterByDropDown);
//   console.log("location selected");
// };

// 6. FILTER BY DROPDOWN

const filterByDropDown = (animals) => {
  //console.log("animal location in Filter:>>", animals); // it works
  // get drowndown value
  //console.log("filtering by dropdown"); // it works
  const selectedLocation = document.querySelector("#locationDropdown").value;
  console.log("selectedLocation:>>", selectedLocation);
  // FILTER
  const filteredLocations = animals.filter((animal) => {
    return selectedLocation === animal.location;
  });
  //console.log("filteredLocations:>>", filteredLocations); // it works. je nach auswahl bekomme ich unterschieldich viele ergebnisse angezeigt
  createHtmlTable(filteredLocations); // hier muss ich die oben erstellte Tabelle noch mit den gefilterten Locations aufrufen
};

// TO DO
// - ich möchte ja keine tabelle darstellen sondern sie Karten. Also die bereits vorhandenen Cards möchte ich filtern können
// - breite des Filterkastens anpassen
// - get elementbyid - LIEBER NICHT verwendden, sondern einheitlich und besser queryselector
// HAVE TO BE DONE !!!! TO DO!!!
// - SUCHE bauen
// -    Filter kombinieren
// - filtern über Checkboxen

// INFO
// - flow of the data

// function kopieren aus specieslist + dann filtern über die cards und nicht über die Tabelle
