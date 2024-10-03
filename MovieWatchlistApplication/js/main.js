document.addEventListener("DOMContentLoaded", function () {
  const movieInput = document.getElementById("movie-name");
  const addMovieBtn = document.getElementById("add-movie-btn");
  const movieList = document.getElementById("movie-list");

  // Use an array to store the list of movies.
  let movies = [];

  // Function to add a movie to the list
  function addMovie() {
    const movieTitle = movieInput.value.trim();

    // Check if the input is not empty and the movie is not already in the array
    if (movieTitle !== "" && !movies.includes(movieTitle)) {
      // Add the movie to the array
      movies.push(movieTitle);

      // Create a new list item for the movie
      const li = document.createElement("li");
      li.classList.add("collection-item");

      // Create span for the movie title
      const titleSpan = document.createElement("span");
      titleSpan.classList.add("movie-title");
      titleSpan.textContent = movieTitle;

      // Create the remove button
      const removeBtn = document.createElement("i");
      removeBtn.classList.add("material-icons", "remove-btn");
      removeBtn.textContent = "delete";

      // Append the title and remove button to the list item
      li.appendChild(titleSpan);
      li.appendChild(removeBtn);

      // Append the list item to the movie list
      movieList.appendChild(li);

      // Clear the input field
      movieInput.value = "";

      // Add event listener to the remove button
      removeBtn.addEventListener("click", function () {
        // Remove the movie from the array
        movies = movies.filter(movie => movie !== movieTitle);
        li.remove(); // Remove the item from the DOM
      });
    }
  }

  // Add movie when the button is clicked
  addMovieBtn.addEventListener("click", addMovie);

  // Optionally, allow the user to press Enter to add the movie
  movieInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addMovie();
    }
  });
}); 

