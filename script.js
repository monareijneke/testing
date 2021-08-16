const landButton = document.querySelector(".landen");
const steenbokButton = document.querySelector(".steenbok");
const cardsButton = document.querySelector(".btn-alert");
const mensenButton = document.querySelector(".mensen");
const leeftijdButton = document.querySelector(".leeftijd");
const matchButton = document.querySelector(".match");
const buttons = document.querySelector(".buttons");
const newParent = document.querySelector(".lijst");

// console.log(newParent);

//     !!! LANDEN 1punt  !!!
// filter alle landen uniek en gesorteerd
const landen = randomPersonData.map((item) => {
  const landLijst = item.region;
  return landLijst; //lijst met 200 landen
});
console.log(landen);

const landenSort = landen.sort();
console.log(landen); //Lijst met 200 landen alfabetisch

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
const addLandenArrayToDom = () => {
  newParent.innerHTML = " ";
  newParent2.innerHTML = " ";
  parentTekst.innerHTML = " ";
  newTekst = document.createElement("p");
  newTekst.innerHTML = "Landen Lijst voor 1 punt";
  newParent.appendChild(newTekst);
  addLandToDom(uniekLand);
};
//add event
landButton.addEventListener("click", addLandenArrayToDom);

///   !!!MEESTE MENSEN 3 punter!!!
//filter
const counts = {};
const addLandenToDom = (array) => {
  array.forEach((aantal) => {
    counts[aantal] = (counts[aantal] || 0) + 1;
    const newLi = document.createElement("li");
    newLi.innerHTML = counts;
    newParent.appendChild(newLi);
  });

  console.log(counts);
};
const addMensenToDom = () => {
  newParent.innerHTML = " ";
  newParent2.innerHTML = " ";
  parentTekst.innerHTML = " ";
  newTekst = document.createElement("p");
  newTekst.innerHTML = "Hoeveel leden in welk land?";
  newParent.appendChild(newTekst);
  addLandenToDom(landen);
};

mensenButton.addEventListener("click", addMensenToDom);

// ///   !!!MEESTE MENSEN 3 punter!!!
// //filter
// const meesteMensen = randomPersonData.map((land) => {
//   return land.region;
// });
// const landenSort = meesteMensen.sort();
// const counts = {};

// const addLandenToDom = (array) => {
//   array.forEach((aantal) => {
//     counts[aantal] = (counts[aantal] || 0) + 1;
//     const newLi = document.createElement("li");
//     newLi.innerHTML = aantal;
//     newParent.appendChild(newLi);
//   });

//   console.log(counts);
// };
// const addMensenToDom = () => {
//   newParent.innerHTML = " ";
//   newTekst = document.createElement("p");
//   newTekst.innerHTML = "Hoeveel in welk land?";
//   newParent.appendChild(newTekst);
//   addLandenToDom(meesteMensen);
// };

// console.log(meesteMensen);

// mensenButton.addEventListener("click", addMensenToDom);
