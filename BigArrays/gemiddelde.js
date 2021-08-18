const newParent2 = document.querySelector(".buttons2");
const parentTekst = document.querySelector(".randomTekst");
const childTekst = document.createElement("p");

//landenlijst
const leeftijdLandenLijst = randomPersonData.filter((item) => {
  const leeftijdLijst = item.region;
  return leeftijdLijst;
});
// console.log(leeftijdLandenLijst);

//gemiddelde leeftijd berekenen
const getAverageAge = (leeftijdLandenLijst) => {
  const average = Math.round(
    leeftijdLandenLijst.reduce((prev, user) => prev + (user.age || user), 0) /
      leeftijdLandenLijst.length
  );
  addTekstToDom(average);
  return Math.round(average); //gemiddelde leeftijd afgerond
};

//add to DOM
const addGemiddeldeToDom = (array) => {
  array.forEach((land) => {
    const newLi = document.createElement("li");
    const newButton = document.createElement("button");
    newButton.innerHTML = land;
    newButton.classList = "lijst2";
    newLi.appendChild(newButton);
    newButton.addEventListener("click", (event) => {
      let arr = [];
      randomPersonData.map((item) => {
        if (item.region === event.target.innerHTML) {
          arr.push(item.age);
        }
      });
      getAverageAge(arr);
    });
    newParent.appendChild(newLi);
  });
};

//add tekstregel button 5 in <p> to DOM
const addMensenArrayToDom = () => {
  newParent.innerHTML = " ";
  newParent2.innerHTML = " ";
  parentTekst.innerHTML = " ";
  newTekst = document.createElement("p");
  newTekst.innerHTML = "Select een land om de gemiddelde leeftijd te zien:";
  newParent.appendChild(newTekst);
  addGemiddeldeToDom(uniekLand); //aanspreken functie forEach met argument uniekland
};

const addTekstToDom = (average) => {
  newTekst.innerHTML = " ";
  childTekst.innerHTML = `Select een land om de gemiddelde leeftijd te zien:<br>
  <b>De gemiddelde persoon in ${event.target.innerHTML} is ${average} jaar oud!`;
  parentTekst.appendChild(childTekst);
};

leeftijdButton.addEventListener("click", addMensenArrayToDom);
