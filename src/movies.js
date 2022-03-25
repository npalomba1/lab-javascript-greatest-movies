// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movieArr) {
  let getDirector = movieArr.map(function(movie){
  return movie.director;
})
  let s = new Set(getDirector)
  s = [...s]
  return s
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieArr) {
  let howMany = movieArr.filter(function(movie){
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  })
  return howMany.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  let scores = moviesArr.reduce(function (total, movie){
    return total + movie.score
  }, 0)
  return parseFloat(scores/moviesArr.length).toFixed(2); 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  let dramas = moviesArr.filter(function(movie){
    return movie.genre.includes('Drama');
  })
  let dramasAvgScore = scoresAverage(dramas);
  return dramasAvgScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  let sortedYears = [...moviesArr];
  sortedYears.sort(function(a, b){
    return a.year - b.year
  })
  return sortedYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArr) {
  let mapArr = movieArr.map(function(movie){
    return movie.title;
  })
  let sortedArr = mapArr.sort(function(a, b){
    return a.localeCompare(b); 
  })
  return sortedArr.slice(0,20); 
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
