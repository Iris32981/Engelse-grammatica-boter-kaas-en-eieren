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

// DOM Elementen
let startModal, startGameBtn, helpBtn, levelSelect, categorySelect, timerSelect, soundToggleBtn;
let btn1Player, btn2Players, statusX, statusO, scoreXEl, scoreOEl, playerOName;
let cells, messageDisplay, newGameBtn, resetScoreBtn;
let statTotal, statCorrect, statAccuracy;
let overlay, modalCategoryTag, modalLevelBadge, modalPlayerInfo, questionText, optionsContainer, explanationCard, retryQuestionBtn;
let timerBarContainer, timerDisplay, timerBar;

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
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
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

function bindDOMElements() {
  startModal = document.getElementById('startModal');
  startGameBtn = document.getElementById('startGameBtn');
  helpBtn = document.getElementById('helpBtn');

  levelSelect = document.getElementById('levelSelect');
  categorySelect = document.getElementById('categorySelect');
  timerSelect = document.getElementById('timerSelect');
  soundToggleBtn = document.getElementById('soundToggleBtn');

  btn1Player = document.getElementById('btn1Player');
  btn2Players = document.getElementById('btn2Players');
  statusX = document.getElementById('statusX');
  statusO = document.getElementById('statusO');
  scoreXEl = document.getElementById('scoreX');
  scoreOEl = document.getElementById('scoreO');
  playerOName = document.getElementById('playerOName');

  cells = document.querySelectorAll('.cell');
  messageDisplay = document.getElementById('message');
  newGameBtn = document.getElementById('newGameBtn');
  resetScoreBtn = document.getElementById('resetScoreBtn');

  statTotal = document.getElementById('statTotal');
  statCorrect = document.getElementById('statCorrect');
  statAccuracy = document.getElementById('statAccuracy');

  overlay = document.getElementById('questionOverlay');
  modalCategoryTag = document.getElementById('modalCategoryTag');
  modalLevelBadge = document.getElementById('modalLevelBadge');
  modalPlayerInfo = document.getElementById('modalPlayerInfo');
  questionText = document.getElementById('questionText');
  optionsContainer = document.getElementById('optionsContainer');
  explanationCard = document.getElementById('explanationCard');
  retryQuestionBtn = document.getElementById('retryQuestionBtn');

  timerBarContainer = document.getElementById('timerBarContainer');
  timerDisplay = document.getElementById('timerDisplay');
  timerBar = document.getElementById('timerBar');
}

function initGame() {
  bindDOMElements();

  if (startGameBtn) {
    startGameBtn.addEventListener('click', () => {
      soundFX.playClick();
      if (startModal) startModal.style.display = 'none';
    });
  }

  if (helpBtn) {
    helpBtn.addEventListener('click', () => {
      soundFX.playClick();
      if (startModal) startModal.style.display = 'flex';
    });
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      isAudioMuted = !isAudioMuted;
      soundToggleBtn.textContent = isAudioMuted ? '🔇' : '🔊';
    });
  }

  if (cells) {
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  }

  if (newGameBtn) newGameBtn.addEventListener('click', () => { soundFX.playClick(); restartGame(); });
  if (resetScoreBtn) resetScoreBtn.addEventListener('click', () => { soundFX.playClick(); resetAllScores(); });

  if (btn1Player) btn1Player.addEventListener('click', () => { soundFX.playClick(); setMode(true); });
  if (btn2Players) btn2Players.addEventListener('click', () => { soundFX.playClick(); setMode(false); });

  if (categorySelect) categorySelect.addEventListener('change', () => { soundFX.playClick(); restartGame(); });
  if (levelSelect) {
    levelSelect.addEventListener('change', () => {
      soundFX.playClick();
      currentLevel = parseInt(levelSelect.value);
      restartGame();
    });
  }

  if (retryQuestionBtn) retryQuestionBtn.addEventListener('click', handleRetryQuestion);

  filterAndPrepareQuestions();
  restartGame();
}

function setMode(single) {
  isSinglePlayer = single;
  if (btn1Player) btn1Player.classList.toggle('active', single);
  if (btn2Players) btn2Players.classList.toggle('active', !single);
  if (playerOName) playerOName.textContent = single ? 'O Computer' : 'O Speler O';
  restartGame();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function filterAndPrepareQuestions() {
  const selectedCategory = categorySelect ? categorySelect.value : 'all';
  currentLevel = levelSelect ? parseInt(levelSelect.value) : 1;

  availableQuestions = questionDatabase.filter(q => {
    const matchesLevel = q.level === currentLevel;
    const matchesCategory = selectedCategory === 'all' || q.category === selected