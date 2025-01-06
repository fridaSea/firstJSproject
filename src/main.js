function getData(callback) {
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
      //buildMyCards(animals); // rausnehmen, da es in der controller function aufgerufen wird
      // displayAnimals(animals);
      callback(animals);
    })
    .catch((error) => {
      console.log("error:>>", error);
    });
}
