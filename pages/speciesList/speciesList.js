/*console.log(animals);

const displaybinomialName = (animalsArray) => {
  const animalsContainer = document.querySelector(".binomialNameList");

  for (let i = 0; i < animalsArray.length; i++) {
    const animalName = document.createElement("p");
    animalName.innerText = animalsArray.data[i].binomialName;

    animalsContainer.appendChild(animalName);
  }
};

displaybinomialName(animals);
*/

console.log(animals); // Check the structure of the animals array in the console

const displaybinomialName = (animalsArray) => {
  const animalsContainer = document.querySelector(".binomialNameList");

  // Loop through the animals array
  for (let i = 0; i < animalsArray.length; i++) {
    const animalGroup = animalsArray[i]; // Get each animal group (object)

    // Loop through the data property to access each individual animal
    for (let j = 0; j < animalGroup.data.length; j++) {
      const animal = animalGroup.data[j]; // Get each animal object

      const animalName = document.createElement("p");
      animalName.innerText = animal.binomialName; // Display the binomial name

      animalsContainer.appendChild(animalName); // Append the name to the container
    }
  }
};

displaybinomialName(animals); // Pass the 'animals' array to the function
