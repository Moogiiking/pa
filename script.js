document.addEventListener('DOMContentLoaded', function() {
  const setupElement = document.getElementById('setup');
  const punchlineElement = document.getElementById('punchline');
  const newJokeButton = document.getElementById('new-joke-btn');

  function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        setupElement.textContent = data.setup;
        punchlineElement.textContent = data.punchline;
        punchlineElement.style.display = 'none';
        punchlineElement.style.opacity = '0';
        
        newJokeButton.textContent = 'Punchline';
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
        setupElement.textContent = 'Sorry, something went wrong!';
        punchlineElement.textContent = '';
      });
  }

  newJokeButton.addEventListener('click', function() {
    if (punchlineElement.style.display === 'none') {
      punchlineElement.style.display = 'block';
      punchlineElement.style.opacity = '1';
      newJokeButton.textContent = 'Get New Joke';
    } else {
      fetchJoke();
    }
  });

  fetchJoke();
});
