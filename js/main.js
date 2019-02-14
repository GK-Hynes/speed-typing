window.addEventListener("load", init);

// Global variables

// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM element variables
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hate",
  "quaint",
  "earthquake",
  "spare",
  "waste",
  "alike",
  "sail",
  "tumble",
  "credit",
  "open",
  "finicky",
  "connection",
  "complain",
  "jumpy",
  "tiresome",
  "magical",
  "remain",
  "elbow",
  "calculating",
  "flawless",
  "hug",
  "dramatic",
  "question",
  "common",
  "mindless",
  "linen",
  "coil",
  "empty",
  "grieving",
  "truculent",
  "watery",
  "toe",
  "great",
  "store",
  "branch",
  "sister",
  "swanky",
  "pop",
  "press",
  "drag",
  "cover",
  "conscious",
  "vivacious",
  "money",
  "stimulating",
  "contain",
  "protect",
  "smelly",
  "chunky",
  "paltry"
];

// Initialize game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;

  // Load random word from array
  showWord(words);

  // Start matching on word input
  wordInput.addEventListener("input", startMatch);

  // Call countdown every second
  setInterval(countdown, 1000);

  // Check game status
  setInterval(checkStatus, 50);
}

// Start matching
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match current word to word input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Choose and show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);

  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Check that there is time left
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }

  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!";
    score = -1;
  }
}
