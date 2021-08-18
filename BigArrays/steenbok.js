//   !!!STEENBOK 3punter!!!
// filter
const steenbokVrouwen = randomPersonData.filter((person) => {
  const vrouw30 = person.gender === "female" && person.age >= 30;
  return vrouw30;
});
// console.log(steenbokVrouwen);

//addToDom
const addVrouwToDom = (array) => {
  array.forEach((vrouw) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = `${vrouw.name}  ${vrouw.surname}: age  ${vrouw.age}`;
    newParent.appendChild(newLi);
  });
};

const addVrouwenToDom = () => {
  newParent.innerHTML = " ";
  newParent2.innerHTML = " ";
  parentTekst.innerHTML = " ";
  newTekst = document.createElement("p");
  newTekst.innerHTML = `Steenbok vrouwen van 30+.<br>
  (helaas zijn het nog niet alleen Steenbokvrouwen....)`;
  newParent.appendChild(newTekst);
  addVrouwToDom(steenbokVrouwen);
};

//add event
steenbokButton.addEventListener("click", addVrouwenToDom);
