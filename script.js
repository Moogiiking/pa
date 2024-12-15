// script.js

document.addEventListener('DOMContentLoaded', function() {
  const setupElement = document.getElementById('setup');
  const punchlineElement = document.getElementById('punchline');
  const newJokeButton = document.getElementById('new-joke-btn');

  // Function to fetch a random joke from the API
  function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        // Display the setup and hide the punchline initially
        setupElement.textContent = data.setup;
        punchlineElement.textContent = data.punchline;
        punchlineElement.style.display = 'none';
        punchlineElement.style.opacity = '0';
        
        // Reset the button text to "Punchline" when new joke is fetched
        newJokeButton.textContent = 'Punchline';
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
        setupElement.textContent = 'Sorry, something went wrong!';
        punchlineElement.textContent = '';
      });
  }

  // Display punchline when the user clicks the button
  newJokeButton.addEventListener('click', function() {
    if (punchlineElement.style.display === 'none') {
      // Show punchline and change button text to "Get New Joke"
      punchlineElement.style.display = 'block';
      punchlineElement.style.opacity = '1';
      newJokeButton.textContent = 'Get New Joke';
    } else {
      // If punchline is visible, fetch a new joke and change button text back to "Punchline"
      fetchJoke();
    }
  });

  // Fetch the first joke when the page loads
  fetchJoke();
});
