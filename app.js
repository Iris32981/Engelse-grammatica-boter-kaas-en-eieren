// Database met Engelse Grammatica vragen verdeeld over 4 Niveaus (Brugklas, Tweede klas, Derde klas, Bovenbouw)
const questionDatabase = [
  // LEVEL 1 - BRUGKLAS
  { level: 1, category: "present_simple", categoryName: "Present Simple", text: "My brother _______ a new bicycle.", options: ["have got", "has got", "is got"], correct: "has got", rule: "Bij 'he/she/it' (my brother = he) gebruik je <b>has got</b>." },
  { level: 1, category: "present_simple", categoryName: "Present Simple", text: "_______ you like playing football on Saturdays?", options: ["Do", "Does", "Are"], correct: "Do", rule: "Vragen in de Present Simple met 'you' beginnen met <b>Do</b>." },
  { level: 1, category: "present_simple", categoryName: "Present Simple", text: "She _______ to school by bike every morning.", options: ["go", "goes", "going"], correct: "goes", rule: "De 'shit-regel' (he/she/it): voeg <b>-s</b> of <b>-es</b> toe aan het werkwoord." },
  { level: 1, category: "present_continuous", categoryName: "Present Continuous", text: "I _______ my homework at the moment.", options: ["am doing", "do", "is doing"], correct: "am doing", rule: "Met 'I' vorm je de Present Continuous met <b>am + werkwoord-ing</b>." },
  { level: 1, category: "pronouns", categoryName: "Voornaamwoorden & Preposities", text: "My birthday is _______ October.", options: ["in", "on", "at"], correct: "in", rule: "Bij maanden gebruik je het voorzetsel <b>in</b> (in October, in May)." },
  { level: 1, category: "pronouns", categoryName: "Voornaamwoorden & Preposities", text: "Can you pass me _______ apple, please?", options: ["a", "an", "the"], correct: "an", rule: "Voor een klinkerklank (a, e, i, o, u) gebruik je <b>an</b>." },

  // LEVEL 2 - TWEEDE KLAS
  { level: 2, category: "present_simple", categoryName: "Present Simple", text: "They _______ watch TV in the afternoon.", options: ["don't", "doesn't", "aren't"], correct: "don't", rule: "Ontkenning met 'they' in de Present Simple is <b>don't</b> (do not)." },
  { level: 2, category: "present_continuous", categoryName: "Present Continuous", text: "Listen! Somebody _______ at the door.", options: ["knocks", "is knocking", "are knocking"], correct: "is knocking", rule: "'Listen!' geeft aan dat iets op dit moment plaatsvindt: Present Continuous (be + -ing)." },
  { level: 2, category: "past_simple", categoryName: "Past Simple", text: "We _______ to Spain two years ago.", options: ["go", "goed", "went"], correct: "went", rule: "'Go' is een onregelmatig werkwoord. De verleden tijd is <b>went</b>." },
  { level: 2, category: "past_simple", categoryName: "Past Simple", text: "He _______ a new smartphone last week.", options: ["buyed", "bought", "buys"], correct: "bought", rule: "'Buy' is onregelmatig: buy - <b>bought</b> - bought." },
  { level: 2, category: "comparatives", categoryName: "Vergelijkingen", text: "An elephant is _______ than a tiger.", options: ["bigger", "more big", "biggest"], correct: "bigger", rule: "Korte woorden krijgen <b>-er</b> bij een vergelijking (+ dubbele medeklinker bij big)." },
  { level: 2, category: "comparatives", categoryName: "Vergelijkingen", text: "This computer game is _______ than the old one.", options: ["more exciting", "excitinger", "most exciting"], correct: "more exciting", rule: "Lange woorden (3+ lettergrepen) krijgen <b>more</b> voor de vergelijking." },

  // LEVEL 3 - DERDE KLAS
  { level: 3, category: "present_perfect", categoryName: "Present Perfect", text: "She _______ lived in London since 2020.", options: ["has", "have", "was"], correct: "has", rule: "Bij 'she' gebruik je <b>has + voltooid deelwoord</b>. 'Since' geeft het beginpunt aan." },
  { level: 3, category: "past_simple", categoryName: "Past Continuous", text: "While I _______ TV, the phone suddenly rang.", options: ["was watching", "watched", "am watching"], correct: "was watching", rule: "Voor een langdurige handeling die werd onderbroken in het verleden gebruik je de <b>Past Continuous</b> (was/were + -ing)." },
  { level: 3, category: "present_perfect", categoryName: "Present Perfect vs Past Simple", text: "We _______ to Paris last summer.", options: ["went", "have gone", "were gone"], correct: "went", rule: "'Last summer' is een afgesloten tijdstip in het verleden, dus gebruik je de <b>Past Simple</b>." },
  { level: 3, category: "comparatives", categoryName: "Vergelijkingen", text: "This is the _______ mistake you could ever make.", options: ["worst", "badder", "worstest"], correct: "worst", rule: "Onregelmatige overtreffende trap: bad - worse - <b>the worst</b>." },
  { level: 3, category: "advanced", categoryName: "Conditionals", text: "If it rains tomorrow, we _______ stay indoors.", options: ["will", "would", "had"], correct: "will", rule: "First Conditional (mogelijkheid in de toekomst): <b>If + Present Simple, will + hele werkwoord</b>." },

  // LEVEL 4 - BOVENBOUW
  { level: 4, category: "advanced", categoryName: "Past Perfect", text: "By the time we arrived at the cinema, the movie _______ already started.", options: ["had", "has", "was"], correct: "had", rule: "De <b>Past Perfect</b> (had + voltooid deelwoord) geeft aan dat een handeling plaatsvond vóór een ander moment in het verleden." },
  { level: 4, category: "advanced", categoryName: "Passive Voice", text: "The new library _______ built by workers last year.", options: ["was", "is", "has been"], correct: "was", rule: "Lijdende vorm (Passive) in het verleden: <b>was/were + voltooid deelwoord</b>." },
  { level: 4, category: "advanced", categoryName: "Conditionals", text: "If I _______ you, I would accept that job offer immediately.", options: ["were", "am", "would be"], correct: "were", rule: "Second Conditional (hypothetisch): 'If I <b>were</b> you' (subjunctive mood)." },
  { level: 4, category: "advanced", categoryName: "Conditionals", text: "Had I known about the party, I _______ come.", options: ["would have", "will have", "would"], correct: "would have", rule: "Third Conditional (onmogelijk verleden): <b>Had + voltooid deelwoord, would have + voltooid deelwoord</b>." },
  { level: 4, category: "advanced", categoryName: "Gerunds & Infinitives", text: "He admitted _______ the bicycle without permission.", options: ["stealing", "to steal", "stolen"], correct: "stealing", rule: "Na het werkwoord 'admit' volgt een <b>gerund</b> (werkwoord + -ing)." }
];

const levelNames = {
  1: "Brugklas",
  2: "Tweede klas",
  3: "Derde klas",
  4: "Bovenbouw"
};

// DOM Elementen
const startModal = document.getElementById('startModal');
const startGameBtn = document.getElementById('startGameBtn');
const helpBtn = document.getElementById('helpBtn');

const levelSelect = document.getElementById('levelSelect');
const categorySelect = document.getElementById('categorySelect');
const timerSelect = document.getElementById('timerSelect');
const soundToggleBtn = document.getElementById('soundToggleBtn');

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

// Modal Vraag Elementen
const overlay = document.getElementById('questionOverlay');
const modalCategoryTag = document.getElementById('modalCategoryTag');
const modalLevelBadge = document.getElementById('modalLevelBadge');
const modalPlayerInfo = document.getElementById('modalPlayerInfo');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const explanationCard = document.getElementById('explanationCard');
const retryQuestionBtn = document.getElementById('retryQuestionBtn');

// Timer Elementen
const timerBarContainer = document.getElementById('timerBarContainer');
const timerDisplay = document.getElementById('timerDisplay');
const timerBar = document.getElementById('timerBar');

// Spelstatus Variabelen
let currentLevel = 1;
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

let questionTimerInterval = null;
let remainingTime = 0;
let lastFailedQuestion = null;
let isAudioMuted = false;

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Web Audio Synthesizer voor Interactieve Geluidseffecten
const soundFX = {
  ctx: null,
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playTone(freq, type, duration, gainVal = 0.1) {
    if (isAudioMuted) return;
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
  playClick() { this.playTone(600, 'sine', 0.05, 0.05); },
  playPop() { this.playTone(400, 'sine', 0.08); },
  playTick() { this.playTone(800, 'triangle', 0.04, 0.03); },
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
  startGameBtn.addEventListener('click', () => {
    soundFX.playClick();
    startModal.style.display = 'none';
  });

  helpBtn.addEventListener('click', () => {
    soundFX.playClick();
    startModal.style.display = 'flex';
  });

  soundToggleBtn.addEventListener('click', () => {
    isAudioMuted = !isAudioMuted;
    soundToggleBtn.textContent = isAudioMuted ? '🔇' : '🔊';
  });

  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  newGameBtn.addEventListener('click', () => { soundFX.playClick(); restartGame(); });
  resetScoreBtn.addEventListener('click', () => { soundFX.playClick(); resetAllScores(); });

  btn1Player.addEventListener('click', () => { soundFX.playClick(); setMode(true); });
  btn2Players.addEventListener('click', () => { soundFX.playClick(); setMode(false); });

  categorySelect.addEventListener('change', () => { soundFX.playClick(); restartGame(); });
  levelSelect.addEventListener('change', () => {
    soundFX.playClick();
    currentLevel = parseInt(levelSelect.value);
    restartGame();
  });

  retryQuestionBtn.addEventListener('click', handleRetryQuestion);

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

  soundFX.playClick();

  if (availableQuestions.length === 0) {
    filterAndPrepareQuestions();
  }

  const question = availableQuestions.pop();
  showQuestionModal(question);
}

function showQuestionModal(question) {
  lastFailedQuestion = question;
  modalCategoryTag.textContent = question.categoryName || "Grammatica";
  
  modalLevelBadge.textContent = levelNames[question.level] || `Level ${question.level}`;
  modalLevelBadge.className = `level-badge level-${question.level}-tag`;

  modalPlayerInfo.textContent = `Speler ${currentPlayer}, vul het juiste antwoord in:`;
  modalPlayerInfo.className = `modal-title ${currentPlayer === 'X' ? 'player-x' : 'player-o'}`;

  const formattedText = question.text.replace('_______', '<u>_______</u>');
  questionText.innerHTML = formattedText;

  optionsContainer.innerHTML = '';
  explanationCard.style.display = 'none';
  retryQuestionBtn.style.display = 'none';

  let shuffledOptions = [...question.options];
  shuffleArray(shuffledOptions);

  shuffledOptions.forEach(option => {
    const btn = document.createElement('button');
    btn.classList.add('option-btn');
    btn.textContent = option;
    btn.addEventListener('click', () => {
      soundFX.playClick();
      handleAnswer(option, question, btn);
    });
    optionsContainer.appendChild(btn);
  });

  overlay.style.display = 'flex';

  const timerLimit = parseInt(timerSelect.value);
  if (timerLimit > 0) {
    startTimer(timerLimit, question);
  } else {
    timerBarContainer.style.display = 'none';
  }
}

function startTimer(seconds, question) {
  clearInterval(questionTimerInterval);
  remainingTime = seconds;
  timerBarContainer.style.display = 'block';
  timerDisplay.textContent = `${remainingTime}s`;
  timerBar.style.width = '100%';
  timerBar.style.backgroundColor = '#1dd1a1';

  questionTimerInterval = setInterval(() => {
    remainingTime--;
    timerDisplay.textContent = `${remainingTime}s`;
    const percentage = (remainingTime / seconds) * 100;
    timerBar.style.width = `${percentage}%`;

    if (remainingTime <= 3) {
      timerBar.style.backgroundColor = '#ff4757';
      soundFX.playTick();
    }

    if (remainingTime <= 0) {
      clearInterval(questionTimerInterval);
      handleTimeout(question);
    }
  }, 1000);
}

function handleTimeout(question) {
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');
  optionButtons.forEach(btn => btn.disabled = true);

  totalQuestionsAnswered++;
  soundFX.playWrong();

  explanationCard.className = 'explanation-card error';
  explanationCard.innerHTML = `<strong>⏰ Tijd is om!</strong> Het goede antwoord was: <b>${question.correct}</b>.<br><br><b>Uitleg:</b>${question.rule}`;
  explanationCard.style.display = 'block';
  retryQuestionBtn.style.display = 'inline-block';

  // Verlengd naar 5000ms (5 seconden) om de feedback te kunnen lezen
  setTimeout(() => {
    if (retryQuestionBtn.style.display === 'none') return; 
    overlay.style.display = 'none';
    updateStatsUI();
    switchPlayer();
  }, 5000);
}

function handleAnswer(selectedOption, question, clickedBtn) {
  clearInterval(questionTimerInterval);

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

    // Verlengd naar 3000ms (3 seconden) om de feedback te kunnen lezen
    setTimeout(() => {
      overlay.style.display = 'none';
      updateCell(cells[currentCellIndex], currentCellIndex);
      checkWinCondition();
      updateStatsUI();
    }, 3000);
  } else {
    clickedBtn.classList.add('wrong-btn');
    optionButtons.forEach(btn => {
      if (btn.textContent === question.correct) {
        btn.classList.add('correct-btn');
      }
    });
    explanationCard.className = 'explanation-card error';
    explanationCard.innerHTML = `<strong>❌ Helaas, dat is onjuist!</strong> Het goede antwoord is: <b>${question.correct}</b>.<br><br><b>Uitle