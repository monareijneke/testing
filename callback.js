//OPDRACHT CALLBACK

function huiswerkMaken(vak, callback) {
  setTimeout(() => {
    console.log(`ja, ja, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
  }, 1000);
}
huiswerkMaken();

function klaarMetHuiswerk() {
  console.log("kijk ik ben klaar met huiswerk");
}
huiswerkMaken(`wiskunde`, klaarMetHuiswerk);
