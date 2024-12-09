console.log(animals);

const displaybinomialName = (animalsArray) => {
  const animalsContainer = document.querySelector(".binomialNameList");

  for (let i = 0; i < animalsArray.length; i++) {
    const animalName = document.createElement("p");
    animalName.innerText = animalsArray.data[i].binomialName;

    animalsContainer.appendChild(animalName);
  }
};

displaybinomialName(animals);
