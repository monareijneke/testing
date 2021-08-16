const newParent2 = document.querySelector(".buttons2");
const newButton = document.createElement("input");
const parentTekst = document.querySelector(".randomTekst");
const childTekst = document.createElement("p");

const leeftijd = randomPersonData.filter((item) => {
  const leeftijdLijst = item.region === "Greece";
  return leeftijdLijst;
});
console.log(leeftijd);

const getAverageAge = (leeftijd) => {
  const average =
    leeftijd.reduce((prev, user) => prev + user.age, 0) / leeftijd.length;
  return Math.round(average);
};
console.log(getAverageAge(leeftijd));

const createButtons = () => {
  newParent.innerHTML = " ";
  parentTekst.innerHTML = " ";
  newButton.classList = "greece";
  newButton.name = "buttonLand";
  newButton.type = "button";
  newButton.value = "Greece";
  newParent2.appendChild(newButton);
  return createButtons;
};

const showTekst = () => {
  childTekst.innerHTML = `De gemiddelde persoon in ${
    newButton.value
  } is ${getAverageAge(leeftijd)} jaar oud!`;
  parentTekst.appendChild(childTekst);
};

newButton.addEventListener("click", showTekst);
leeftijdButton.addEventListener("click", createButtons);
