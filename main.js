const vowelInput = document.getElementById('vowelInput');
const vowelResult = document.getElementById('vowelResult');
const vowelButton = document.getElementById('vowelButton');

const wordInput = document.getElementById('wordInput');
const wordResult = document.getElementById('wordResult');
const wordButton = document.getElementById('wordButton');

const characterInput = document.getElementById('characterInput');
const characterResult = document.getElementById('characterResult');
const characterButton = document.getElementById('characterButton');

function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
}

function countVowels() {
  const input = vowelInput.value.toLowerCase();
  const vowels = input.split('').filter(isVowel);
  vowelResult.innerHTML = `Result: ${vowels.length} vowels`;
  vowelResult.classList.remove('hidden');
}

function countWords() {
  const input = wordInput.value;
  const words = input.split(' ').filter((word) => word !== '');
  wordResult.innerHTML = `Result: ${words.length} words`;
  wordResult.classList.remove('hidden');
}

function countCharacters() {
  const input = characterInput.value;
  characterResult.innerHTML = `Result: ${input.length} characters`;
  characterResult.classList.remove('hidden');
}

vowelButton.addEventListener('click', countVowels);
wordButton.addEventListener('click', countWords);
characterButton.addEventListener('click', countCharacters);
