// Uitgebreide Vragenbank met zowel meerkeuze ('mc') als open typ-vragen ('input')
const questionDatabase = [
  // LEVEL 1 - BRUGKLAS
  { level: 1, type: "mc", category: "present_simple", categoryName: "Present Simple", text: "My brother _______ a new bicycle.", options: ["have got", "has got", "is got"], correct: "has got", rule: "Bij 'he/she/it' (my brother = he) gebruik je <b>has got</b>." },
  { level: 1, type: "input", category: "present_simple", categoryName: "Present Simple", text: "She _______ (go) to school by bike every morning.", correct: ["goes"], rule: "De 'shit-regel' (he/she/it): voeg <b>-s</b> of <b>-es</b> toe aan het werkwoord." },
  { level: 1, type: "mc", category: "present_simple", categoryName: "Present Simple", text: "_______ you like playing football on Saturdays?", options: ["Do", "Does", "Are"], correct: "Do", rule: "Vragen in de Present Simple met 'you' beginnen met <b>Do</b>." },
  { level: 1, type: "input", category: "present_simple", categoryName: "Present Simple", text: "Tom _______ (watch) television every evening.", correct: ["watches"], rule: "Werkwoorden die eindigen op -ch krijgen <b>-es</b> bij he/she/it." },
  { level: 1, type: "mc", category: "present_continuous", categoryName: "Present Continuous", text: "I _______ my homework at the moment.", options: ["am doing", "do", "is doing"], correct: "am doing", rule: "Met 'I' vorm je de Present Continuous met <b>am + werkwoord-ing</b>." },
  { level: 1, type: "input", category: "past_simple", categoryName: "Past Simple", text: "Yesterday, I _______ (visit) my grandmother.", correct: ["visited"], rule: "Verleden tijd van regelmatige werkwoorden krijgt <b>-ed</b>." },
  { level: 1, type: "mc", category: "pronouns", categoryName: "Voornaamwoorden & Preposities", text: "My birthday is _______ October.", options: ["in", "on", "at"], correct: "in", rule: "Bij maanden gebruik je het voorzetsel <b>in</b> (in October, in May)." },
  { level: 1, type: "mc", category: "pronouns", categoryName: "Voornaamwoorden & Preposities", text: "Can you pass me _______ apple, please?", options: ["a", "an", "the"], correct: "an", rule: "Voor een klinkerklank (a, e, i, o, u) gebruik je <b>an</b>." },

  // LEVEL 2 - TWEEDE KLAS
  { level: 2, type: "mc", category: "present_simple", categoryName: "Present Simple", text: "They _______ watch TV in the afternoon.", options: ["don't", "doesn't", "aren't"], correct: "don't", rule: "Ontkenning met 'they' in de Present Simple is <b>don't</b> (do not)." },
  { level: 2, type: "input", category: "present_simple", categoryName: "Present Simple", text: "My sister _______ (not / like) mushrooms.", correct: ["doesn't like", "does not like"], rule: "Bij 'she' (my sister) gebruik je <b>doesn't + hele werkwoord</b>." },
  { level: 2, type: "mc", category: "present_continuous", categoryName: "Present Continuous", text: "Listen! Somebody _______ at the door.", options: ["knocks", "is knocking", "are knocking"], correct: "is knocking", rule: "'Listen!' geeft aan dat iets NU plaatsvindt: Present Continuous (be + -ing)." },
  { level: 2, type: "input", category: "past_simple", categoryName: "Past Simple", text: "We _______ (go) to Spain two years ago.", correct: ["went"], rule: "'Go' is een onregelmatig werkwoord. De verleden tijd is <b>went</b>." },
  { level: 2, type: "input", category: "past_simple", categoryName: "Past Simple", text: "He _______ (buy) a new smartphone last week.", correct: ["bought"], rule: "'Buy' is onregelmatig: buy - <b>bought</b> - bought." },
  { level: 2, type: "mc", category: "comparatives", categoryName: "Vergelijkingen", text: "An elephant is _______ than a tiger.", options: ["bigger", "more big", "biggest"], correct: "bigger", rule: "Korte woorden krijgen <b>-er</b> bij een vergelijking (+ dubbele medeklinker bij big)." },
  { level: 2, type: "input", category: "comparatives", categoryName: "Vergelijkingen", text: "A car is _______ (fast) than a bicycle.", correct: ["faster"], rule: "Voeg <b>-er</b> toe voor de vergroottrap bij korte bijvoeglijke naamwoorden." },

  // LEVEL 3 - DERDE KLAS
  { level: 3, type: "mc", category: "present_perfect", categoryName: "Present Perfect", text: "She _______ lived in London since 2020.", options: ["has", "have", "was"], correct: "has", rule: "Bij 'she' gebruik je <b>has + voltooid deelwoord</b>. 'Since' geeft het beginpunt aan." },
  { level: 3, type: "input", category: "present_perfect", categoryName: "Present Perfect", text: "I _______ (lose) my keys! I can't open the door.", correct: ["have lost", "'ve lost"], rule: "Present Perfect: <b>have/has + voltooid deelwoord</b>." },
  { level: 3, type: "input", category: "past_simple", categoryName: "Past Continuous", text: "While I _______ (watch) TV, the phone rang.", correct: ["was watching"], rule: "Voor een langdurige handeling in het verleden gebruik je de <b>Past Continuous</b> (was/were + -ing)." },
  { level: 3, type: "mc", category: "present_perfect", categoryName: "Present Perfect vs Past Simple", text: "We _______ to Paris last summer.", options: ["went", "have gone", "were gone"], correct: "went", rule: "'Last summer' is een afgesloten tijdstip in het verleden, dus gebruik je de <b>Past Simple</b>." },
  { level: 3, type: "input", category: "comparatives", categoryName: "Vergelijkingen", text: "This is the _______ (bad) mistake you could make.", correct: ["worst"], rule: "Onregelmatige overtreffende trap: bad - worse - <b>the worst</b>." },
  { level: 3, type: "mc", category: "advanced", categoryName: "Conditionals", text: "If it rains tomorrow, we _______ stay indoors.", options: ["will", "would", "had"], correct: "will", rule: "First Conditional: <b>If + Present Simple, will + hele werkwoord</b>." },

  // LEVEL 4 - BOVENBOUW
  { level: 4, type: "input", category: "advanced", categoryName: "Past Perfect", text: "By the time we arrived, the movie _______ (start) already.", correct: ["had started"], rule: "Past Perfect: <b>had + voltooid deelwoord</b> voor handelingen vóór een ander moment in het verleden." },
  { level: 4, category: "advanced", categoryName: "Passive Voice", text: "The new library _______ built by workers last year.", options: ["was", "is", "has been"], correct: "was", rule: "Lijdende vorm (Passive) in het verleden: <b>was/were + voltooid deelwoord</b>." },
  { level: 4, type: "input", category: "advanced", categoryName: "Conditionals", text: "If I _______ (be) you, I would accept that job offer.", correct: ["were"], rule: "Second Conditional (hypothetisch): 'If I <b>were</b> you'." },
  { level: 4, type: "mc", category: "advanced", categoryName: "Conditionals", text: "Had I known about the party, I _______ come.", options: ["would have", "will have", "would"], correct: "would have", rule: "Third Conditional: <b>Had + voltooid deelwoord, would have + voltooid deelwoord</b>." },
  { level: 4, type: "input", category: "advanced", categoryName: "Gerunds & Infinitives", text: "He admitted _______ (steal) the bicycle.", correct: ["stealing"], rule: "Na het werkwoord 'admit' volgt een <b>gerund</b> (werkwoord + -ing)." }
];

const levelNames = { 1: "Brugklas", 2: "Tweede klas", 3: "Derde klas", 4: "Bovenbouw" };

let currentLevel = 1;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let currentCellIndex = null;
let availableQuestions = [];
let isSinglePlayer = true;
let isComputerThinking = false;

let playerXName = "Speler X";
let playerOName = "Computer";

let scoreX = 0, scoreO = 0, totalQuestionsAnswered = 0, totalCorrectAnswers = 0;
let questionTimerInterval = null, remainingTime = 0, lastFailedQuestion = null, isAudioMuted = false;

let startModal, startGameBtn, helpBtn, levelSelect, categorySelect, timerSelect, customTimerGroup, customTimerInput, soundToggleBtn;
let nameXInput, nameOInput, nameOLabel, labelPlayerX, labelPlayerO;
let btn1Player, btn2Players, statusX, statusO, scoreXEl, scoreOEl;
let cells, messageDisplay, newGameBtn, resetScoreBtn;
let statTotal, statCorrect, statAccuracy;
let overlay, modalCategoryTag, modalLevelBadge, modalPlayerInfo, questionText, optionsContainer, explanationCard, retryQuestionBtn;
let timerBarContainer, timerDisplay, timerBar;

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const soundFX = {
  ctx: null,
  init() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
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
      osc.connect(gain); gain.connect(this.ctx.destination);
      osc.start(); osc.stop(this.ctx.currentTime + duration);
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
  customTimerGroup = document.getElementById('customTimerGroup');
  customTimerInput = document.getElementById('customTimerInput');
  soundToggleBtn = document.getElementById('soundToggleBtn');

  nameXInput = document.getElementById('nameXInput');
  nameOInput = document.getElementById('nameOInput');
  nameOLabel = document.getElementById('nameOLabel');
  labelPlayerX = document.getElementById('labelPlayerX');
  labelPlayerO = document.getElementById('labelPlayerO');

  btn1Player = document.getElementById('btn1Player');
  btn2Players = document.getElementById('btn2Players');
  statusX = document.getElementById('statusX');
  statusO = document.getElementById('statusO');
  scoreXEl = document.getElementById('scoreX');
  scoreOEl = document.getElementById('scoreO');
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
      updatePlayerNames();
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

  if (nameXInput) nameXInput.addEventListener('input', updatePlayerNames);
  if (nameOInput) nameOInput.addEventListener('input', updatePlayerNames);

  if (timerSelect) {
    timerSelect.addEventListener('change', () => {
      soundFX.playClick();
      if (customTimerGroup) {
        customTimerGroup.style.display = timerSelect.value === 'custom' ? 'flex' : 'none';
      }
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

  updatePlayerNames();
  filterAndPrepareQuestions();
  restartGame();
}

function updatePlayerNames() {
  playerXName = nameXInput && nameXInput.value.trim() !== "" ? nameXInput.value.trim() : "Speler X";
  
  if (isSinglePlayer) {
    playerOName = "Computer";
    if (nameOInput) nameOInput.value = "Computer";
  } else {
    playerOName = nameOInput && nameOInput.value.trim() !== "" ? nameOInput.value.trim() : "Speler O";
  }

  if (labelPlayerX) labelPlayerX.textContent = `X ${playerXName}`;
  if (labelPlayerO) labelPlayerO.textContent = `O ${playerOName}`;
}

function setMode(single) {
  isSinglePlayer = single;
  if (btn1Player) btn1Player.classList.toggle('active', single);
  if (btn2Players) btn2Players.classList.toggle('active', !single);

  if (nameOLabel) nameOLabel.textContent = single ? "Naam Computer / O" : "Naam Speler O";
  if (nameOInput) {
    nameOInput.value = single ? "Computer" : "Speler O";
    nameOInput.disabled = single;
  }

  updatePlayerNames();
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
  if (modalCategoryTag) modalCategoryTag.textContent = question.categoryName || "Grammatica";
  
  if (modalLevelBadge) {
    modalLevelBadge.textContent = levelNames[question.level] || `Level ${question.level}`;
    modalLevelBadge.className = `level-badge level-${question.level}-tag`;
  }

  const activeName = currentPlayer === 'X' ? playerXName : playerOName;
  if (modalPlayerInfo) {
    modalPlayerInfo.textContent = `${activeName}, vul het juiste antwoord in:`;
    modalPlayerInfo.className = `modal-title ${currentPlayer === 'X' ? 'player-x' : 'player-o'}`;
  }

  const formattedText = question.text.replace('_______', '<u>_______</u>');
  if (questionText) questionText.innerHTML = formattedText;

  if (optionsContainer) optionsContainer.innerHTML = '';
  if (explanationCard) explanationCard.style.display = 'none';
  if (retryQuestionBtn) retryQuestionBtn.style.display = 'none';

  if (question.type === "input") {
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'text-input-container';

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.className = 'text-answer-input';
    textInput.placeholder = 'Typ hier je antwoord...';
    textInput.autofocus = true;

    const submitBtn = document.createElement('button');
    submitBtn.className = 'submit-answer-btn';
    submitBtn.textContent = 'Verstuur Antwoord 🚀';

    const processInputAnswer = () => {
      const userText = textInput.value.trim();
      if (!userText) return;
      soundFX.playClick();
      handleAnswer(userText, question, submitBtn, textInput);
    };

    submitBtn.addEventListener('click', processInputAnswer);
    textInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') processInputAnswer();
    });

    inputWrapper.appendChild(textInput);
    inputWrapper.appendChild(submitBtn);
    if (optionsContainer) optionsContainer.appendChild(inputWrapper);

  } else {
    const grid = document.createElement('div');
    grid.className = 'options-grid';

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
      grid.appendChild(btn);
    });

    if (optionsContainer) optionsContainer.appendChild(grid);
  }

  if (overlay) overlay.style.display = 'flex';

  let timerLimit = 0;
  if (timerSelect) {
    if (timerSelect.value === 'custom') {
      timerLimit = customTimerInput ? parseInt(customTimerInput.value) || 30 : 30;
    } else {
      timerLimit = parseInt(timerSelect.value);
    }
  }

  if (timerLimit > 0) {
    startTimer(timerLimit, question);
  } else {
    if (timerBarContainer) timerBarContainer.style.display = 'none';
  }
}

function startTimer(seconds, question) {
  clearInterval(questionTimerInterval);
  remainingTime = seconds;
  if (timerBarContainer) timerBarContainer.style.display = 'block';
  if (timerDisplay) timerDisplay.textContent = `${remainingTime}s`;
  if (timerBar) {
    timerBar.style.width = '100%';
    timerBar.style.backgroundColor = '#1dd1a1';
  }

  questionTimerInterval = setInterval(() => {
    remainingTime--;
    if (timerDisplay) timerDisplay.textContent = `${remainingTime}s`;
    const percentage = (remainingTime / seconds) * 100;
    if (timerBar) timerBar.style.width = `${percentage}%`;

    if (remainingTime <= 3) {
      if (timerBar) timerBar.style.backgroundColor = '#ff4757';
      soundFX.playTick();
    }

    if (remainingTime <= 0) {
      clearInterval(questionTimerInterval);
      handleTimeout(question);
    }
  }, 1000);
}

function handleTimeout(question) {
  disableModalInputs();

  totalQuestionsAnswered++;
  soundFX.playWrong();

  const correctDisplay = Array.isArray(question.correct) ? question.correct.join(" / ") : question.correct;

  if (explanationCard) {
    explanationCard.className = 'explanation-card error';
    explanationCard.innerHTML = `<strong>⏰ Tijd is om!</strong> Het goede antwoord was: <b>${correctDisplay}</b>.<br><br><b>Uitleg:</b> ${question.rule}`;
    explanationCard.style.display = 'block';
  }
  if (retryQuestionBtn) retryQuestionBtn.style.display = 'inline-block';

  setTimeout(() => {
    if (retryQuestionBtn && retryQuestionBtn.style.display === 'none') return; 
    if (overlay) overlay.style.display = 'none';
    updateStatsUI();
    switchPlayer();
  }, 5000);
}

function disableModalInputs() {
  const optionButtons = optionsContainer ? optionsContainer.querySelectorAll('.option-btn, .submit-answer-btn, .text-answer-input') : [];
  optionButtons.forEach(el => el.disabled = true);
}

function checkAnswerCorrectness(userAns, targetCorrect) {
  const cleanUser = userAns.toLowerCase().trim();
  if (Array.isArray(targetCorrect)) {
    return targetCorrect.some(c => c.toLowerCase().trim() === cleanUser);
  }
  return targetCorrect.toLowerCase().trim() === cleanUser;
}

function handleAnswer(selectedOption, question, activeEl, textInputEl) {
  clearInterval(questionTimerInterval);
  disableModalInputs();

  totalQuestionsAnswered++;

  const isCorrect = checkAnswerCorrectness(selectedOption, question.correct);

  if (isCorrect) {
    totalCorrectAnswers++;
    if (activeEl) activeEl.classList.add('correct-btn');
    if (textInputEl) textInputEl.style.borderColor = '#1dd1a1';

    if (explanationCard) {
      explanationCard.className = 'explanation-card success';
      explanationCard.innerHTML = `<strong>✨ Goed geantwoord!</strong><br>${question.rule}`;
      explanationCard.style.display = 'block';
    }
    soundFX.playCorrect();

    setTimeout(() => {
      if (overlay) overlay.style.display = 'none';
      updateCell(cells[currentCellIndex], currentCellIndex);
      checkWinCondition();
      updateStatsUI();
    }, 3000);
  } else {
    if (activeEl) activeEl.classList.add('wrong-btn');
    if (textInputEl) textInputEl.style.borderColor = '#ff4757';

    const correctDisplay = Array.isArray(question.correct) ? question.correct.join(" / ") : question.correct;

    if (explanationCard) {
      explanationCard.className = 'explanation-card error';
      explanationCard.innerHTML = `<strong>❌ Helaas, dat is onjuist!</strong> Het goede antwoord is: <b>${correctDisplay}</b>.<br><br><b>Uitleg:</b> ${question.rule}`;
      explanationCard.style.display = 'block';
    }
    soundFX.playWrong();

    if (retryQuestionBtn) retryQuestionBtn.style.display = 'inline-block';

    setTimeout(() => {
      if (overlay && overlay.style.display !== 'none' && retryQuestionBtn && retryQuestionBtn.dataset.clicked !== 'true') {
        overlay.style.display = 'none';
        updateStatsUI();
        switchPlayer();
      }
      if (retryQuestionBtn) retryQuestionBtn.dataset.clicked = 'false';
    }, 5000);
  }
}

function handleRetryQuestion() {
  soundFX.playClick();
  if (retryQuestionBtn) retryQuestionBtn.dataset.clicked = 'true';
  
  let similarQuestions = questionDatabase.filter(q => 
    q.category === lastFailedQuestion.category && 
    q.level === lastFailedQuestion.level &&
    q.text !== lastFailedQuestion.text
  );

  if (similarQuestions.length === 0) {
    similarQuestions = questionDatabase.filter(q => q.level === lastFailedQuestion.level);
  }

  const nextQuestion = similarQuestions[Math.floor(Math.random() * similarQuestions.length)];
  showQuestionModal(nextQuestion);
}

function updateCell(cell, index) {
  if (!cell) return;
  gameState[index] = currentPlayer;
  cell.textContent = currentPlayer === 'X' ? 'X' : 'O';
  cell.classList.add(currentPlayer.toLowerCase());
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  if (currentPlayer === 'X') {
    if (statusX) statusX.classList.add('active');
    if (statusO) statusO.classList.remove('active');
    isComputerThinking = false;
    if (messageDisplay) {
      messageDisplay.textContent = isSinglePlayer 
        ? `${playerXName}, jouw beurt! Klik op een vakje.` 
        : `${playerXName} is aan de beurt!`;
    }
  } else {
    if (statusO) statusO.classList.add('active');
    if (statusX) statusX.classList.remove('active');

    if (isSinglePlayer && gameActive) {
      isComputerThinking = true;
      if (messageDisplay) messageDisplay.textContent = '🤖 Computer denkt na...';
      setTimeout(makeComputerMove, 900);
    } else {
      if (messageDisplay) messageDisplay.textContent = `${playerOName} is aan de beurt!`;
    }
  }
}

// MINDER SLIMME ROBOT AI (Maakt veel meer menselijke foutjes!)
function makeComputerMove() {
  if (!gameActive) return;

  let emptyCells = [];
  gameState.forEach((val, idx) => {
    if (val === '') emptyCells.push(idx);
  });

  if (emptyCells.length === 0) return;

  let move = null;

  // Robot slimheid instellingen:
  // 1. Slechts 35% kans dat hij ziet dat hij zelf 3 op een rij kan maken.
  // 2. Slechts 25% kans dat hij ziet dat jij 3 op een rij gaat maken (en je blokkeert).
  const noticeWin = Math.random() < 0.35;
  const noticeBlock = Math.random() < 0.25;

  if (noticeWin) {
    move = findBestMove('O'); // Probeer te winnen
  }

  if (move === null && noticeBlock) {
    move = findBestMove('X'); // Blokkeer de speler
  }

  // Als de robot het niet zag of er geen directe kansen waren: kiest hij willekeurig!
  if (move === null) {
    move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  }

  currentCellIndex = move;
  if (cells) updateCell(cells[move], move);
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
    if (cells) winningLine.forEach(idx => cells[idx].classList.add('winning-cell'));
    soundFX.playWin();

    if (typeof confetti === 'function') {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    const winnerName = currentPlayer === 'X' ? playerXName : playerOName;

    if (currentPlayer === 'X') {
      scoreX++;
      if (scoreXEl) scoreXEl.textContent = `${scoreX} winst`;
    } else {
      scoreO++;
      if (scoreOEl) scoreOEl.textContent = `${scoreO} winst`;
    }

    if (messageDisplay) messageDisplay.textContent = `🎉 ${winnerName} heeft gewonnen!`;
    return;
  }

  if (!gameState.includes('')) {
    gameActive = false;
    if (messageDisplay) messageDisplay.textContent = '🤝 Gelijkspel!';
    return;
  }

  switchPlayer();
}

function restartGame() {
  clearInterval(questionTimerInterval);
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  isComputerThinking = false;

  if (cells) {
    cells.forEach(cell => {
      cell.textContent = '';
      cell.className = 'cell';
    });
  }

  if (statusX) statusX.classList.add('active');
  if (statusO) statusO.classList.remove('active');
  if (messageDisplay) messageDisplay.textContent = `${playerXName}, klik op een leeg vakje om te beginnen!`;

  filterAndPrepareQuestions();
}

function resetAllScores() {
  scoreX = 0;
  scoreO = 0;
  totalQuestionsAnswered = 0;
  totalCorrectAnswers = 0;
  if (scoreXEl) scoreXEl.textContent = '0 winst';
  if (scoreOEl) scoreOEl.textContent = '0 winst';
  updateStatsUI();
  restartGame();
}

function updateStatsUI() {
  if (statTotal) statTotal.textContent = totalQuestionsAnswered;
  if (statCorrect) statCorrect.textContent = totalCorrectAnswers;
  const acc = totalQuestionsAnswered > 0 ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100) : 0;
  if (statAccuracy) statAccuracy.textContent = `${acc}%`;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGame);
} else {
  initGame();
}