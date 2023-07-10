let emptyCellIndex = null; // на початку гри користувач ще не обрав жодної картинки, яку б вын хотів вставити, тому null
let chosenImageIndex = 1; // на початку гри перший елемент активний за замовчуванням
let chosenLevel = 'level1';
let chosenTopic = 'theme1';
let lifes;
let hints;
let generatedSolution = generateArrayWithUniqueDigit(4);
let generatedTask = createTaskArrayWithHyphen(generatedSolution);
let solution = generatedSolution;
let cardsTaskBoard = generatedTask;
// Обираємо контейнер, в який будемо вставляти нашу розмітку із картинками
const cardsContainer = document.querySelector('.cards-container');
const bodyEl = document.querySelector('body');
const backBtn = document.querySelector('.back-btn');
const hintsBlock = document.querySelector('.hints-block');

// Гравець може повернутись на стартове меню при кліці на кнопку "назад"
backBtn.onclick = openConfirmationModal;
createTaskBoard();
createImageSelectionBlock(solution);
