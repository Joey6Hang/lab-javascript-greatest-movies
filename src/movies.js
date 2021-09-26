// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const directors = movies.map(mov => {
    return  mov.director
  });

  return directors;
  // const directors = movies.map(function(mov){
  //   return mov.director;

  // })
  // return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMovies = movies.filter(movie => {
    return movie.genre.includes('Drama');
  })

  const stevenMovies = dramaMovies.filter(movie => {
    return movie.director === "Steven Spielberg"
  })

  // comment garder dans les films dram seulement ceux dirigé
  //  par Steven Spielberg
  return stevenMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const total = movies.reduce(function(sum , movie){
  sum + movies.score;
  } , 0)
  const average = total / movies.length;
  return average.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => {
    return movie.genre.includes('Drama');
  })
    const total = dramaMovies.reduce(function(sum , movie){
      return sum + movie.score;
    }, 0)
    const average = total / dramaMovies.length;
    return average.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  const mov = movies.map(function(elment){
    mov.year.sort((a, b) => b - a);
    if(a == b){
      return mov.title.sort((c , d)=> c -d);
    }else{
      return mov;
    }
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const mov = movies.map(function(elment){
  if(movies.length <= 20){
    return mov.title.sort((a , b)=> a-b);
  }
})
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
