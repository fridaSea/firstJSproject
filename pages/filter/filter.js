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
      createHtmlTable(animals);
    })
    .catch((error) => {
      console.log("error:>>", error);
    });
};

//2. function for creating table and dropdown
const createHtmlTable = (animals) => {
  const table = document.getElementById("table");

  /*for(let i=0; i < animals.length; i++){
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
    column.innerText = animal.location;
    row.appendChild(column);

    let column2 = document.createElement("td");
    column2.innerText = animal.commonName;
    row.appendChild(column2);
  });
};

// filter

getLocation();
