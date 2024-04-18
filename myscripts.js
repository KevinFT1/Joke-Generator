const jokes = [
    // Joke 1 (Dad Joke)
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
  
    // Joke 2 (Pun)
    "What do you call a fish with no eyes? Fsh!",
  
    // Joke 3 (One-liner)
    "I used to be addicted to soap, but I’m clean now.",
  
    // Joke 4 (Knock-knock)
    "Knock knock. Who's there? Dwayne. Dwayne who? Dwayne the bathtub, I'm dwowning!",
  
    // Joke 5 (Tech)
    "Why did the computer crash? It couldn't handle the work load.",
  
    // Joke 6 (Pop Culture)
    "What do you call a lazy kangaroo? Pouch potato!",
  
    // Joke 7 (Animal)
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
  
    // Joke 8 (Insult)
    "My therapist says I have a fear of intimacy. Now I know why I don't like Mondays.",
  
    // Joke 9 (Self-deprecating)
    "I don't trust stairs. They're always up to something.",
  
    // Joke 10 (Observational)
    "If you think nobody cares if you're alive, try missing a couple of car payments.",
  ];

const jokeText = document.getElementById('joke-text');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeText.textContent = jokes[randomIndex];
});