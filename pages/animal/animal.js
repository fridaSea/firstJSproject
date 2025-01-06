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
  const animalNameHash = decodeURI(animalNameUrlHash); // haben die browsers sonderzeichen entfernt
  const animalName = animalNameHash.substring(1); // schneiden das erste zeichen weg
  return animals.find(function (animal) {
    return animal.commonName === animalName;
  });
}

function displayAnimal(animal) {
  console.log(animal);
  /// HIER SCHREIBE ICH ALLE INFOS REIN; WIE ES AUSSEHEN ASOLL
}

function controller(animals) {
  const animal = findAnimal(animals);
  displayAnimal(animal);
}

getData(function (animals) {
  controller(animals);
});
