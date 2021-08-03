//oefening promise chain
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

//promise 1: sorteren en hoofdletters
const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    if (
      words.every((word) => {
        return typeof word === "string"; //check of elk item een string is
      })
    ) {
      resolve(
        sortWords(
          words.map((word) => {
            //aanroepen sorteerfunctie items
            return word.toUpperCase(); //in hoofdletters zetten
          })
        )
      );
    } else {
      reject("Not a string!"); //return dit als array items geen string is
    }
  });
};
//promise 2: sorteren
const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort()); //als true, woorden sorteren
    } else {
      reject("strings only!");
    }
  });
};

makeAllCaps(arrayOfWords) //call de eerste promise over arrayOfWords
  .then(sortWords(arrayOfWords)) //daarna de tweede promise over arrayOfWords
  .then((result) => console.log(result)) //if true
  .catch((error) => console.log(error)); //if false

makeAllCaps(complicatedArray) //call de eerte promise over complicatedArray
  .then(sortWords(complicatedArray)) //dan de tweede
  .then((result) => console.log(result)) //if true
  .catch((error) => console.log(error)); //if false

//en toch is het erg ingewikkeld
