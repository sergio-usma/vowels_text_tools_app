const vowelInput = document.getElementById('vowelInput');
const vowelResult = document.getElementById('vowelResult');

const wordInput = document.getElementById('wordInput');
const wordResult = document.getElementById('wordResult');

const characterInput = document.getElementById('characterInput');
const characterResult = document.getElementById('characterResult');

const copyVowelText = document.getElementById('copyVowelText');
const copyWordText = document.getElementById('copyWordText');
const copyCharText = document.getElementById('copyCharText');
const copyAlert = document.getElementById('alertCopy');

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

function toClipboard(element) {
  navigator.clipboard
    .writeText(element)
    .then(() => {
      copyAlert.textContent = 'Copied!';
      copyAlert.classList.remove('hidden');
      copyAlert.classList.add('show-alert');
    })
    .catch(() => {
      copyAlert.textContent = 'Bad request!';
      copyAlert.classList.remove('hidden');
      copyAlert.classList.add('error-alert');
    })
    .finally(() => {
      setTimeout(() => {
        copyAlert.classList.remove('show-alert');
        copyAlert.classList.add('hidden');
      }, 2000);
    });
}

copyVowelText.addEventListener('click', () => {
  toClipboard(vowelInput.value);
});
copyWordText.addEventListener('click', () => {
  toClipboard(wordInput.value);
});
copyCharText.addEventListener('click', () => {
  toClipboard(characterInput.value);
});

vowelInput.addEventListener('input', countVowels);
wordInput.addEventListener('input', countWords);
characterInput.addEventListener('input', countCharacters);
