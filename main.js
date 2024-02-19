const vowelInput = document.getElementById('vowelInput');
const vowelResult = document.getElementById('vowelResult');

const wordInput = document.getElementById('wordInput');
const wordResult = document.getElementById('wordResult');

const characterInput = document.getElementById('characterInput');
const characterResult = document.getElementById('characterResult');

function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
}

function countVowels() {
  const input = vowelInput.value.toLowerCase();
  const vowels = input.split('').filter(isVowel);
  vowelResult.innerHTML = `${vowels.length} vowels`;
  vowelResult.classList.remove('hidden');
}

function countWords() {
  const input = wordInput.value;
  const words = input.split(' ').filter((word) => word !== '');
  wordResult.innerHTML = `${words.length} words`;
  wordResult.classList.remove('hidden');
}

function countCharacters() {
  const input = characterInput.value;
  characterResult.innerHTML = `${input.length} characters`;
  characterResult.classList.remove('hidden');
}

vowelInput.addEventListener('input', countVowels);
wordInput.addEventListener('input', countWords);
characterInput.addEventListener('input', countCharacters);
