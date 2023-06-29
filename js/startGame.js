document.getElementById('rules').addEventListener('click', showRules);
const startWindow = document.getElementById('start-window');
const gameWindow = document.getElementById('game-window');
const startGameBtn = document.getElementById('start-game');
const restartGameBtn = document.getElementById('restart-game');
const endWindow = document.getElementById('end-window');

//----правила гри----//
function showRules() {
  const rulesWindow = document.createElement('div');
  rulesWindow.id = 'rules-window';
  rulesWindow.innerHTML = '<h2>Правила гри:</h2><p></p>';

  startWindow.appendChild(rulesWindow);

  document.addEventListener('click', closeRules);

  startWindow.style.pointerEvents = 'none';
}

function closeRules(event) {
  if (!event.target.closest('#rules-window')) {
    const rulesWindow = document.getElementById('rules-window');
    rulesWindow.parentNode.removeChild(rulesWindow);

    startWindow.style.pointerEvents = 'auto';

    document.removeEventListener('click', closeRules);
  }
}

startGameBtn.addEventListener('click', onStartGameBtnClick);
restartGameBtn.addEventListener('click', onRestartGameBtnClick);

//----при кліці на кнопку Старт----//
function onStartGameBtnClick() {
  // Перевіряємо чи обрав гравець всі опції
  // if (
  //   gameSettings.topic === null ||
  //   gameSettings.level === null ||
  //   gameSettings.timer === null
  // ) {
  //   // якщо хоча б одна опція не вибрана, то гра не має запускатись
  //   return;
  // }
  // Приховуємо стартове меню
  hideStartWindow();
  // Показуємо всі елементи гри
  showGameField();
}

//----ховаємо блок із стартом гри ----//
function hideStartWindow() {
  startWindow.style.display = 'none';
}
//----показуємо блок із стартом гри ----//
function showStartWindow() {
  startWindow.style.display = 'block';
}
//----показуємо блок із елеменами гри( дошка , блок вибору картинок, життя, таймер) ----//
function showGameField() {
  bodyEl.style.background = `url('./images/${chosenTopic}/background.jpg') no-repeat center center`;
  bodyEl.style.display = 'block';
  bodyEl.style.backgroundSize = 'cover';
  gameWindow.style.display = 'block';
  cardsContainer.style.display = 'flex';
}
//----ховаємо блок із із елеменами гри( дошка , блок вибору картинок, життя, таймер)----//
function hideGameField() {
  bodyEl.style.background = `url('./images/start-background.jpg') no-repeat center center`;
  bodyEl.style.display = 'flex';
  bodyEl.style.backgroundSize = 'cover';
  bodyEl.style.justifyContent = 'end';

  gameWindow.style.display = 'none';
  cardsContainer.style.display = 'none';
}

//----перезапуск гри----//
function onRestartGameBtnClick() {
  endWindow.style.display = 'none';
  startWindow.style.display = 'flex';
}

// ___________________________________________________________________

const gameSettings = {
  topic: null,
  level: null,
  timer: null,
};

//----знаходимо кнопку теми яка є активною----//
const activeTopic = Array.from(topics).find(topic =>
  topic.classList.contains('active'),
);
//----записуємо айді активної кнопки теми у обєкт налаштування для старту гри----//
gameSettings.topic = activeTopic ? activeTopic.id : null;
