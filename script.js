const landButton = document.querySelector(".landen");
const steenbokButton = document.querySelector(".steenbok");
const cardsButton = document.querySelector(".btn-alert");
const mensenButton = document.querySelector(".mensen");
const leeftijdButton = document.querySelector(".leeftijd");
const matchButton = document.querySelector(".match");

async function getData() {
  const data = await randomPersonData();
  return data;
}
console.log(randomPersonData);

getData().then(function (persons) {
  persons.forEach((person) => {
    const newLi = document.createElement("li");
    const newParent = document.querySelector(".landen");
    newLi.innerHTML = `${person.region}`;
    newParent.appendChild(newLi);
    console.log(newLi);
  });
});

landButton.addEventListener("click", function () {
  alert("I'm clicked!");
});
