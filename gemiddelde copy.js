const newParent2 = document.querySelector(".buttons2");
const newButton = document.createElement("button");
const parentTekst = document.querySelector(".randomTekst");
const childTekst = document.createElement("p");

const leeftijdLandenLijst = randomPersonData.filter((item) => {
  const leeftijdLijst = item.region;
  return leeftijdLijst;
});
console.log(leeftijdLandenLijst);

const getAverageAge = (leeftijdLandenLijst) => {
  const average =
    leeftijdLandenLijst.reduce((prev, user) => prev + user.age, 0) /
    leeftijdLandenLijst.length;
  return Math.round(average); //gemiddelde leeftijd afgerond
};
console.log(getAverageAge(leeftijdLandenLijst));

const addButtonToDom = (array) => {
  array.forEach((land) => {
    newParent.innerHTML = " ";
    parentTekst.innerHTML = " ";
    newButton.classList = land;
    newButton.name = land;
    newButton.value = land;
    newParent2.appendChild(newButton);
  });
};

const addTekstToDom = () => {
  childTekst.innerHTML = `De gemiddelde persoon in ${
    newButton.value
  } is ${getAverageAge(leeftijdLandenLijst)} jaar oud!`;
  parentTekst.appendChild(childTekst);
};

newButton.addEventListener("click", addTekstToDom);
leeftijdButton.addEventListener("click", addButtonToDom);
