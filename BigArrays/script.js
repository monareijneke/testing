const landButton = document.querySelector(".landen");
const steenbokButton = document.querySelector(".steenbok");
const cardsButton = document.querySelector(".btn-alert");
const mensenButton = document.querySelector(".mensen");
const leeftijdButton = document.querySelector(".leeftijd");
const clearButton = document.querySelector(".reset");
const buttons = document.querySelector(".buttons");
const newParent = document.querySelector(".lijst");

// console.log(newParent);

//     !!! LANDEN 1punt  !!!
// filter alle landen uniek en gesorteerd
const landen = randomPersonData.map((item) => {
  const landLijst = item.region;
  return landLijst; //lijst met 200 landen
});
// console.log(landen);

const landenSort = landen.sort();
// console.log(landen); //Lijst met 200 landen alfabetisch

const uniekLand = landen.filter((c, index) => {
  return landen.indexOf(c) === index;
});

//add to DOM
const addLandToDom = (array) => {
  array.forEach((land) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = land;
    newParent.appendChild(newLi);
  });
};

//add tekstregel button 1 in <p> to DOM
const addLandenArrayToDom = () => {
  newParent.innerHTML = " ";
  newParent2.innerHTML = " ";
  parentTekst.innerHTML = " ";
  newTekst = document.createElement("p");
  newTekst.innerHTML = "Landen Lijst:";
  newParent.appendChild(newTekst);
  addLandToDom(uniekLand);
};

//clear field
const clearDom = () => {
  newParent.innerHTML = " ";
  newParent2.innerHTML = " ";
  parentTekst.innerHTML = " ";
};

//add event
landButton.addEventListener("click", addLandenArrayToDom);
clearButton.addEventListener("click", clearDom);
