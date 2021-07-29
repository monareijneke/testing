const filmListParent = document.querySelector("#overzicht"); //parent stap 1

// console.log(currentListChild);

//van elke film de poster in de Dom zetten
const addMoviesToDom = (moviesArray) => {
  //array maken
  moviesArray.forEach((movies) => {
    // en elk object in de array aanroepen
    const newLi = document.createElement("li"); //child defineren
    const newLiContent = document.createElement("img"); //child2 defineren
    newLi.classList = movies.imdbID; //add class to Li
    newLi.appendChild(newLiContent); //add Img as child to Li
    newLiContent.src = movies.Poster;
    filmListParent.appendChild(newLi);
    // console.log(movie);
  });
};
addMoviesToDom(movies);

//Filmfilteren
//selecteer buttons en maak er een array van
const radioButtons = document.getElementsByName("filter");
// console.log(Array.isArray(Array.from(radioButtons)));

const clearList = () => {
  //   const currentList = document.getElementById("overzicht");
  const currentList = document.getElementsByTagName("li");
  currentList.parentNode.removeChild(currentList);
  return false;
};

//voeg een event toe aan elke button en return button id
Array.from(radioButtons).forEach(function (item) {
  item.addEventListener(
    "change",
    (handleOnChangeEvent = (event) => {
      switch (event.target.id) {
        case "nieuw":
          clearList();
          addMoviesToDom(newMovies);
          break;
        case "avengers":
          addMoviesToDom(avengersMovies);
          break;
        case "xmen":
          addMoviesToDom(xmenMovies);
          break;
        case "princess":
          addMoviesToDom(princessMovies);
          break;
        case "batman":
          addMoviesToDom(batmanMovies);
          break;
        // default:
        //   console.log(
        //     "princess-films",
        //     "x-men-films",
        //     "avenger-films",
        //     "batman-films",
        //     "latest-films"
        //   );
      }
      console.log(event.target.id);
    })
  );
});
//alle princess films in een array
const princessMovies = movies.filter((pr) => {
  const prGenre = pr.Title.includes("Princess");
  return prGenre;
});
console.log(princessMovies);
//alle Avengers in Array
const avengersMovies = movies.filter((av) => {
  const avGenre = av.Title.includes("Avengers");
  return avGenre;
});
console.log(avengersMovies);
//alle X-men
const xmenMovies = movies.filter((xm) => {
  const xmGenre = xm.Title.includes("X-Men");
  return xmGenre;
});
console.log(xmenMovies);
//batman
const batmanMovies = movies.filter((bt) => {
  const btGenre = bt.Title.includes("Batman");
  return btGenre;
});
console.log(batmanMovies);

//nieuwste films
const newMovies = movies.filter((nw) => {
  // const newGenre = nw.Year.includes((year) => {
  //   const newGenre2 = newGenre >= "2014";
  return nw.Year >= "2014";
});
// });
console.log(newMovies);

// addMoviesToDom(princessMovies);
