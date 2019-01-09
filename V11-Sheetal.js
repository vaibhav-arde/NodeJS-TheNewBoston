var movies = require('./V11-movies');

var sheetalMovies = movies();
sheetalMovies.favMovie = "Bhai : Vyakti or Valli";
sheetalMovies.name = "Sheetal";
console.log(`${sheetalMovies.name}'s favorite movie is : "${sheetalMovies.favMovie}"`);
