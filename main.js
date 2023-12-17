const flashcardsData = [
  {
    word: 'Serendipity',
    meaning:
      'The occurrence and development of events by chance in a happy or beneficial way',
  },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
  {
    word: 'Quixotic',
    meaning: 'Extremely idealistic; unrealistic and impractical',
  },
  {
    word: 'Pernicious',
    meaning: 'Having a harmful effect, especially in a gradual or subtle way',
  },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  {
    word: 'Resilience',
    meaning: 'The capacity to recover quickly from difficulties; toughness',
  },
  {
    word: 'Ineffable',
    meaning: 'Too great or extreme to be expressed or described in words',
  },
  {
    word: 'Sycophant',
    meaning:
      'A person who acts obsequiously toward someone important in order to gain advantage',
  },
];

const cardContainer = document.getElementById('card-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const doneButton = document.getElementById('done-button');
const scoreCard = document.getElementById('score-card');

let revealedCards = [];

const updateScore = () => {
  scoreCard.innerText = `Score: ${revealedCards.length}/${flashcardsData.length}`;
};

const createCards = () => {
  flashcardsData.forEach((item, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full';
    cardElement.innerText = item.word;
    cardContainer.appendChild(cardElement);

    cardElement.addEventListener('click', () => {
      if (!cardElement.classList.contains('border-red-500')) {
        cardElement.classList.add('border-red-500');
        cardElement.innerText = item.meaning;
        revealedCards.push(item);
        updateScore();
      }
    });
  });
};

let isButtonClickable = true;

const handleStart = () => {
  if (!isButtonClickable) return;

  isButtonClickable = false;
  setTimeout(() => {
    isButtonClickable = true;
  }, 1000);
    createCards();
    resetButton.classList.remove('hidden');
    startButton.classList.add('hidden');
    doneButton.classList.remove('hidden');
    updateScore();

};


const handleReset = () => {
  cardContainer.innerHTML = '';
  revealedCards = [];
  updateScore();

  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
};

const handleDone = () => {
  localStorage.setItem('revealedCards', JSON.stringify(revealedCards));
  localStorage.setItem('totalCards', JSON.stringify(flashcardsData.length));
  window.location.href = 'wrong_answers.html';
};

startButton.addEventListener('click', handleStart);
resetButton.addEventListener('click', handleReset);
doneButton.addEventListener('click', handleDone);

updateScore();
