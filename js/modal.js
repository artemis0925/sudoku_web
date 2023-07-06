const cloudOpenModal = document.querySelector('.cloud-rules');
const catOpenModal = document.querySelector('.cat-rules');
const rulesTitle = document.querySelector('#rules');
const modalWindow = document.querySelector('.modal');
const rulesModal = document.querySelector('.rules-modal');
const modalOverlay = document.querySelector('.modal__overlay');
const restartBtnWin = document.querySelector('#restartBtnWin');
const restartBtnLose = document.querySelector('#restartBtnLose');
const winWindow = document.querySelector('.end-game-win.modal');
const loseWindow = document.querySelector('.end-game-lose.modal');
const rulesWindow = document.querySelector('.rules-modal');
const confirmationWindow = document.querySelector('.confirmation-modal');
const rulesCloseIcon = document.querySelector('.rules-close-icon');
const confirmCloseIcon = document.querySelector('.confirm-close-icon');

cloudOpenModal.onclick = openRules;
catOpenModal.onclick = openRules;
rulesTitle.onclick = openRules;
confirmCloseIcon.onclick = closeConfirmationModal;
rulesCloseIcon.onclick = closeRulesModal;

function openRules() {
  rulesModal.classList.add('modal--isActive');
}

function closeRulesModal() {
  rulesWindow.classList.remove('modal--isActive');
}

function openWinWindow() {
  const content = document.querySelector('.end-game-win .modal__content');
  content.style.background = `url('./images/${chosenTopic}/win.jpg') no-repeat center center`;
  content.style.backgroundSize = 'cover';
  winWindow.classList.add('modal--isActive');
}

function openConfirmationModal() {
  const content = document.querySelector('.confirmation-modal .modal__content');
  content.style.background = `url('./images/${chosenTopic}/background.jpg') no-repeat center center`;
  content.style.backgroundSize = 'cover';
  confirmationWindow.classList.add('modal--isActive');
  pauseTimer();
}

function closeConfirmationModal() {
  confirmationWindow.classList.remove('modal--isActive');
  if (timerID) {
    setTimer(pausedTime);
    countdownTime();
  }
}

function openLoseWindow() {
  const content = document.querySelector('.end-game-lose .modal__content');
  content.style.background = `url('./images/${chosenTopic}/lose.jpg') no-repeat center center`;
  content.style.backgroundSize = 'cover';

  loseWindow.classList.add('modal--isActive');
}

function closeWinWindow() {
  winWindow.classList.remove('modal--isActive');
}

function closeLoseWindow() {
  loseWindow.classList.remove('modal--isActive');
}

restartBtnWin.onclick = function () {
  reloadGame();
  closeWinWindow();
};

restartBtnLose.onclick = function () {
  reloadGame();
  closeLoseWindow();
};

function reloadGame() {
  resetAndStopAudioPlayer();
  clearInterval(timerID);
  hideGameField();
  showStartWindow();
  resetCardsBoard();
}

function resetCardsBoard() {
  cardsContainer.innerHTML = '';
  createTaskBoard();
  createImageSelectionBlock(solution);
}
