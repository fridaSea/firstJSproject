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
