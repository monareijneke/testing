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

//add tekstregel button 4 in <p> to DOM
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
