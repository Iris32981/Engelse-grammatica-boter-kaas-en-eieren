// Database met Engelse Grammatica vragen voor de brugklas per Level (1, 2, 3)
const questionDatabase = [
  // LEVEL 1 - EASY (VMBO / Basis)
  {
    level: 1,
    category: "present_simple",
    categoryName: "Present Simple",
    text: "My brother _______ a new bicycle.",
    options: ["have got", "has got", "is got"],
    correct: "has got",
    rule: "Bij 'he/she/it' (my brother = he) gebruik je <b>has got</b>."
  },
  {
    level: 1,
    category: "present_simple",
    categoryName: "Present Simple",
    text: "_______ you like playing football on Saturdays?",
    options: ["Do", "Does", "Are"],
    correct: "Do",
    rule: "Vragen in de Present Simple met 'you' beginnen met <b>Do</b>."
  },
  {
    level: 1,
    category: "present_simple",
    categoryName: "Present Simple",
    text: "She _______ to school by bike every morning.",
    options: ["go", "goes", "going"],
    correct: "goes",
    rule: "De 'shit-regel' (he/she/it): voeg <b>-s</b> of <b>-es</b> toe aan het werkwoord."
  },
  {
    level: 1,
    category: "present_simple",
    categoryName: "Present Simple",
    text: "Tom _______ television every evening.",
    options: ["watch", "watches", "watching"],
    correct: "watches",
    rule: "Werkwoorden die eindigen op -ch krijgen <b>-es</b> bij he/she/it."
  },
  {
    level: 1,
    category: "present_continuous",
    categoryName: "Present Continuous",
    text: "I _______ my homework at the moment.",
    options: ["am doing", "do", "is doing"],
    correct: "am doing",
    rule: "Met 'I' vorm je de Present Continuous met <b>am + werkwoord-ing</b>."
  },
  {
    level: 1,
    category: "present_continuous",
    categoryName: "Present Continuous",
    text: "Look! The dog _______ in the garden.",
    options: ["is running", "are running", "runs"],
    correct: "is running",
    rule: "'Look!' geeft aan dat iets nu gebeurt. Bij 'the dog' gebruik je <b>is + werkwoord-ing</b>."
  },
  {
    level: 1,
    category: "past_simple",
    categoryName: "Past Simple",
    text: "Yesterday, I _______ my grandmother in Amsterdam.",
    options: ["visit", "visited", "was visit"],
    correct: "visited",
    rule: "Verleden tijd (Past Simple) van regelmatige werkwoorden krijgt <b>-ed</b>."
  },
  {
    level: 1,
    category: "past_simple",
    categoryName: "Past Simple",
    text: "We _______ a good film on TV last night.",
    options: ["watch", "watched", "were watch"],
    correct: "watched",
    rule: "'Last night' geeft de verleden tijd aan. Voeg <b>-ed</b> toe aan 'watch'."
  },
  {
    level: 1,
    category: "pronouns",
    categoryName: "Voornaamwoorden & Preposities",
    text: "My birthday is _______ October.",
    options: ["in", "on", "at"],
    correct: "in",
    rule: "Bij maanden gebruik je het voorzetsel <b>in</b> (in October, in May)."
  },
  {
    level: 1,
    category: "pronouns",
    categoryName: "Voornaamwoorden & Preposities",
    text: "We always go to bed _______ 10 o'clock.",
    options: ["in", "on", "at"],
    correct: "at",
    rule: "Bij exacte tijdstippen gebruik je altijd <b>at</b> (at 10 o'clock)."
  },
  {
    level: 1,
    category: "pronouns",
    categoryName: "Voornaamwoorden & Preposities",
    text: "Can you pass me _______ apple, please?",
    options: ["a", "an", "the"],
    correct: "an",
    rule: "Voor een klinkerklank (a, e, i, o, u) gebruik je <b>an</b>."
  },

  // LEVEL 2 - MEDIUM (HAVO / Brugklas)
  {
    level: 2,
    category: "present_simple",
    categoryName: "Present Simple",
    text: "They _______ watch TV in the afternoon.",
    options: ["don't", "doesn't", "aren't"],
    correct: "don't",
    rule: "Ontkenning met 'they' in de Present Simple is <b>don't</b> (do not)."
  },
  {
    level: 2,
    category: "present_simple",
    categoryName: "Present Simple",
    text: "My sister _______ like mushrooms.",
    options: ["don't", "doesn't", "isn't"],
    correct: "doesn't",
    rule: "Bij 'she' (my sister) gebruik je <b>doesn't</b> bij een ontkenning."
  },
  {
    level: 2,
    category: "present_continuous",
    categoryName: "Present Continuous",
    text: "Listen! Somebody _______ at the door.",
    options: ["knocks", "is knocking", "are knocking"],
    correct: "is knocking",
    rule: "'Listen!' geeft aan dat iets op dit moment plaatsvindt: Present Continuous (be + -ing)."
  },
  {
    level: 2,
    category: "present_continuous",
    categoryName: "Present Continuous",
    text: "Why _______ you wearing a winter coat today?",
    options: ["are", "is", "do"],
    correct: "are",
    rule: "Vragen in de Present Continuous met 'you' krijgen de vorm <b>are + subject + -ing</b>."
  },
  {
    level: 2,
    category: "past_simple",
    categoryName: "Past Simple",
    text: "We _______ to Spain two years ago.",
    options: ["go", "goed", "went"],
    correct: "went",
    rule: "'Go' is een onregelmatig werkwoord. De verleden tijd is <b>went</b>."
  },
  {
    level: 2,
    category: "past_simple",
    categoryName: "Past Simple",
    text: "He _______ a new smartphone last week.",
    options: ["buyed", "bought", "buys"],
    correct: "bought",
    rule: "'Buy' is onregelmatig: buy - <b>bought</b> - bought."
  },
  {
    level: 2,
    category: "comparatives",
    categoryName: "Vergelijkingen",
    text: "An elephant is _______ than a tiger.",
    options: ["bigger", "more big", "biggest"],
    correct: "bigger",
    rule: "Korte woorden krijgen <b>-er</b> bij een vergelijking (+ dubbele medeklinker bij big)."
  },
  {
    level: 2,
    category: "comparatives",
    categoryName: "Vergelijkingen",
    text: "This computer game is _______ than the old one.",
    options: ["more exciting", "excitinger", "most exciting"],
    correct: "more exciting",
    rule: "Lange woorden (3+ lettergrepen) krijgen <b>more</b> voor de vergelijking."
  },
  {
    level: 2,
    category: "present_perfect",
    categoryName: "Present Perfect",
    text: "I _______ my keys! I can't open the door.",
    options: ["have lost", "lost", "has lost"],
    correct: "have lost",
    rule: "Present Perfect (have/has + voltooid deelwoord) gebruikt voor resultaat in het heden."
  },

  // LEVEL 3 - HARD (VWO / Tweetalig)
  {
    level: 3,
    category: "present_perfect",
    categoryName: "Present Perfect",
    text: "She _______ lived in London since 2020.",
    options: ["has", "have", "was"],
    correct: "has",
    rule: "Bij 'she' gebruik je <b>has + voltooid deelwoord</b>. 'Since' geeft het beginpunt aan."
  },
  {
    level: 3,
    category: "present_perfect",
    categoryName: "Present Perfect vs Past Simple",
    text: "We _______ to Paris last summer.",
    options: ["went", "have gone", "were gone"],
    correct: "went",
    rule: "'Last summer' is een afgesloten tijdstip in het verleden, dus gebruik je de <b>Past Simple</b>."
  },
  {
    level: 3,
    category: "comparatives",
    categoryName: "Vergelijkingen",
    text: "This is the _______ mistake you could ever make.",
    options: ["worst", "badder", "worstest"],
    correct: "worst",
    rule: "Onregelmatige overtreffende trap: bad - worse - <b>the worst</b>."
  },
  {
    level: 3,
    category: "present_simple",
    categoryName: "Present Simple vs Continuous",
    text: "Water _______ at 100 degrees Celsius.",
    options: ["boils", "is boiling", "boil"],
    correct: "boils",
    rule: "Feiten en natuurwetten staan altijd in de <b>Present Simple</b>."
  },
  {
    level: 3,
    category: "pronouns",
    categoryName: "Voornaamwoorden",
    text: "Neither of the students _______ done their homework.",
    options: ["has", "have", "are"],
    correct: "has",
    rule: "'Neither' is taalkundig enkelvoud, dus gebruik je <b>has</b>."
  },
  {
    level: 3,
    category: "past_simple",
    categoryName: "Irregular Verbs",
    text: "The bird _______ away into the clouds.",
    options: ["flew", "flyed", "flown"],
    correct: "flew",
    rule: "Verleden tijd van 'fly' is <b>flew</b> (fly - flew - flown)."
  }
];

// DOM Elementen
const levelSelect = document.getElementById('levelSelect');
const categorySelect = document.getElementById('categorySelect');
const btn1Player = document.getElementById('btn1Player');
const btn2Players = document.getElementById('btn2Players');
const statusX = document.getElementById('statusX');
const statusO = document.getElementById('statusO');
const scoreXEl = document.getElementById('scoreX');
const scoreOEl = document.getElementById('scoreO');
const playerOName = document.getElementById('playerOName');
const cells = document.querySelectorAll('.cell');
const messageDisplay = document.getElementById('message');
const newGameBtn = document.getElementById('newGameBtn');
const resetScoreBtn = document.getElementById('resetScoreBtn');
const statTotal = document.getElementById('statTotal');
const statCorrect = document.getElementById('statCorrect');
const statAccuracy = document.getElementById('statAccuracy');

// Modal Elementen
const overlay = document.getElementById('questionOverlay');
const modalCategoryTag = document.getElementById('modalCategoryTag');
const modalLevelBadge = document.getElementById('modalLevelBadge');
const modalPlayerInfo = document.getElementById('modalPlayerInfo');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const explanationCard = document.getElementById('explanationCard');

// Spelstatus Variabelen
let currentLevel = 2;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let currentCellIndex = null;
let availableQuestions = [];
let isSinglePlayer = true;
let isComputerThinking = false;

let scoreX = 0;
let scoreO = 0;
let totalQuestionsAnswered = 0;
let totalCorrectAnswers = 0;

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Geluidseffecten via Web Audio Synthesizer
const soundFX = {
  ctx: null,
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playTone(freq, type, duration, gainVal = 0.1) {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch(e) {}
  },
  playPop() { this.playTone(400, 'sine', 0.08); },
  playCorrect() {
    this.playTone(523.25, 'sine', 0.1);
    setTimeout(() => this.playTone(659.25, 'sine', 0.12), 100);
    setTimeout(() => this.playTone(783.99, 'sine', 0.18), 200);
  },
  playWrong() {
    this.playTone(220, 'sawtooth', 0.12);
    setTimeout(() => this.playTone(175, 'sawtooth', 0.2), 120);
  },
  playWin() {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.22), idx * 110);
    });
  }
};

function initGame() {
  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  newGameBtn.addEventListener('click', restartGame);
  resetScoreBtn.addEventListener('click', resetAllScores);

  btn1Player.addEventListener('click', () => setMode(true));
  btn2Players.addEventListener('click', () => setMode(false));
  categorySelect.addEventListener('change', restartGame);
  levelSelect.addEventListener('change', () => {
    currentLevel = parseInt(levelSelect.value);
    restartGame();
  });

  filterAndPrepareQuestions();
  restartGame();
}

function setMode(single) {
  isSinglePlayer = single;
  btn1Player.classList.toggle('active', single);
  btn2Players.classList.toggle('active', !single);
  playerOName.textContent = single ? 'O Computer' : 'O Speler O';
  restartGame();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function filterAndPrepareQuestions() {
  const selectedCategory = categorySelect.value;
  currentLevel = parseInt(levelSelect.value);

  availableQuestions = questionDatabase.filter(q => {
    const matchesLevel = q.level === currentLevel;
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
    return matchesLevel && matchesCategory;
  });

  if (availableQuestions.length === 0) {
    availableQuestions = questionDatabase.filter(q => q.level === currentLevel);
  }

  shuffleArray(availableQuestions);
}

function handleCellClick(e) {
  if (isComputerThinking || !gameActive) return;

  const clickedCell = e.currentTarget || e.target;
  currentCellIndex = parseInt(clickedCell.getAttribute('data-index'));

  if (gameState[currentCellIndex] !== '') return;

  if (availableQuestions.length === 0) {
    filterAndPrepareQuestions();
  }

  const question = availableQuestions.pop();
  showQuestionModal(question);
}

function showQuestionModal(question) {
  modalCategoryTag.textContent = question.categoryName || "Grammatica";
  
  modalLevelBadge.textContent = `Level ${question.level}`;
  modalLevelBadge.className = `level-badge level-${question.level}-tag`;

  modalPlayerInfo.textContent = `Speler ${currentPlayer}, vul het juiste antwoord in:`;
  modalPlayerInfo.className = `modal-title ${currentPlayer === 'X' ? 'player-x' : 'player-o'}`;

  const formattedText = question.text.replace('_______', '<u>_______</u>');
  questionText.innerHTML = formattedText;

  optionsContainer.innerHTML = '';
  explanationCard.style.display = 'none';

  let shuffledOptions = [...question.options];
  shuffleArray(shuffledOptions);

  shuffledOptions.forEach(option => {
    const btn = document.createElement('button');
    btn.classList.add('option-btn');
    btn.textContent = option;
    btn.addEventListener('click', () => handleAnswer(option, question, btn));
    optionsContainer.appendChild(btn);
  });

  overlay.style.display = 'flex';
}

function handleAnswer(selectedOption, question, clickedBtn) {
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');
  optionButtons.forEach(btn => btn.disabled = true);

  totalQuestionsAnswered++;

  if (selectedOption === question.correct) {
    totalCorrectAnswers++;
    clickedBtn.classList.add('correct-btn');
    explanationCard.className = 'explanation-card success';
    explanationCard.innerHTML = `<strong>✨ Goed geantwoord!</strong><br>${question.rule}`;
    explanationCard.style.display = 'block';
    soundFX.playCorrect();

    setTimeout(() => {
      overlay.style.display = 'none';
      updateCell(cells[currentCellIndex], currentCellIndex);
      checkWinCondition();
      updateStatsUI();
    }, 1200);
  } else {
    clickedBtn.classList.add('wrong-btn');
    optionButtons.forEach(btn => {
      if (btn.textContent === question.correct) {
        btn.classList.add('correct-btn');
      }
    });
    explanationCard.className = 'explanation-card error';
    explanationCard.innerHTML = `<strong>❌ Helaas, dat is onjuist!</strong> Het goede antwoord is: <b>${question.correct}</b>.<br><br><b>Uitleg:</b> ${question.rule}`;
    explanationCard.style.display = 'block';
    soundFX.playWrong();

    setTimeout(() => {
      overlay.style.display = 'none';
      updateStatsUI();
      switchPlayer();
    }, 2200);
  }
}

function updateCell(cell, index) {
  gameState[index] = currentPlayer;
  cell.textContent = currentPlayer === 'X' ? 'X' : 'O';
  cell.classList.add(currentPlayer.toLowerCase());
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  if (currentPlayer === 'X') {
    statusX.classList.add('active');
    statusO.classList.remove('active');
    isComputerThinking = false;
    messageDisplay.textContent = isSinglePlayer 
      ? 'Jouw beurt! Klik op een vakje om een vraag te beantwoorden.' 
      : 'Speler X is aan de beurt!';
  } else {
    statusO.classList.add('active');
    statusX.classList.remove('active');

    if (isSinglePlayer && gameActive) {
      isComputerThinking = true;
      messageDisplay.textContent = '🤖 Computer denkt na...';
      setTimeout(makeComputerMove, 800);
    } else {
      messageDisplay.textContent = 'Speler O is aan de beurt!';
    }
  }
}

function makeComputerMove() {
  if (!gameActive) return;

  let emptyCells = [];
  gameState.forEach((val, idx) => {
    if (val === '') emptyCells.push(idx);
  });

  if (emptyCells.length === 0) return;

  // Slimme zet bepalen: 1. Probeer te winnen, 2. Blokkeer Speler X, 3. Kies het midden, 4. Willekeurig
  let move = findBestMove('O');
  if (move === null) move = findBestMove('X');
  if (move === null && emptyCells.includes(4)) move = 4;
  if (move === null) {
    move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  }

  currentCellIndex = move;
  updateCell(cells[move], move);
  soundFX.playPop();
  checkWinCondition();
  isComputerThinking = false;
}

function findBestMove(player) {
  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    let vals = [gameState[a], gameState[b], gameState[c]];
    if (vals.filter(v => v === player).length === 2 && vals.filter(v => v === '').length === 1) {
      if (gameState[a] === '') return a;
      if (gameState[b] === '') return b;
      if (gameState[c] === '') return c;
    }
  }
  return null;
}

function checkWinCondition() {
  let roundWon = false;
  let winningLine = [];

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
      roundWon = true;
      winningLine = [a, b, c];
      break;
    }
  }

  if (roundWon) {
    gameActive = false;
    winningLine.forEach(idx => cells[idx].classList.add('winning-cell'));
    soundFX.playWin();

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    if (currentPlayer === 'X') {
      scoreX++;
      scoreXEl.textContent = `${scoreX} winst`;
      messageDisplay.textContent = '🎉 Speler X heeft gewonnen!';
    } else {
      scoreO++;
      scoreOEl.textContent = `${scoreO} winst`;
      messageDisplay.textContent = isSinglePlayer ? '💻 De computer heeft gewonnen!' : '🎉 Speler O heeft gewonnen!';
    }
    return;
  }

  if (!gameState.includes('')) {
    gameActive = false;
    messageDisplay.textContent = '🤝 Gelijkspel!';
    return;
  }

  switchPlayer();
}

function restartGame() {
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  isComputerThinking = false;

  cells.forEach(cell => {
    cell.textContent = '';
    cell.className = 'cell';
  });

  statusX.classList.add('active');
  statusO.classList.remove('active');
  messageDisplay.textContent = 'Klik op een leeg vakje om een vraag te beantwoorden!';

  filterAndPrepareQuestions();
}

function resetAllScores() {
  scoreX = 0;
  scoreO = 0;
  totalQuestionsAnswered = 0;
  totalCorrectAnswers = 0;
  scoreXEl.textContent = '0 winst';
  scoreOEl.textContent = '0 winst';
  updateStatsUI();
  restartGame();
}

function updateStatsUI() {
  statTotal.textContent = totalQuestionsAnswered;
  statCorrect.textContent = totalCorrectAnswers;
  const acc = totalQuestionsAnswered > 0 ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100) : 0;
  statAccuracy.textContent = `${acc}%`;
}

// Start het spel zodra de pagina geladen is
window.addEventListener('DOMContentLoaded', initGame);