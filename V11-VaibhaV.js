var movies = require('./V11-movies');

var vaibhavMovies = movies();
vaibhavMovies.name = "VaibhaV";
console.log(`${vaibhavMovies.name}'s favorite movie is : "${vaibhavMovies.favMovie}"`);