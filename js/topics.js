let chosenTopic = 'theme1';

const topics = [
  document.querySelector('#theme1'),
  document.querySelector('#theme2'),
  document.querySelector('#theme3'),
  document.querySelector('#theme4'),
  document.querySelector('#theme5'),
  document.querySelector('#theme6'),
  document.querySelector('#theme7'),
];
console.log('topics: ', topics);

topics.forEach(topic => {
  topic.onclick = onTopicBtnClick;
});

function onTopicBtnClick(e) {
  console.log('e: ', e);
  const clickedTopic = e.target;

  if (clickedTopic.classList.contains('active')) return;
  topics.forEach(topic => {
    if (topic === clickedTopic) {
      chosenTopic = clickedTopic.id;
      console.log('chosenTopic: ', chosenTopic);
      topic.classList.add('active');
      cardsContainer.innerHTML = '';
      createTaskBoard();
      createImageSelectionBlock(solution);
    } else {
      topic.classList.remove('active');
    }
    bodyEl.style.background = `url('./images/${chosenTopic}/background.jpg') repeat center center`;
    // if (chosenTopic === 'theme1') {
    //   topicsBlock.style.backgroundColor = '#74eafd87';
    // } else if (chosenTopic === 'theme2') {
    //   topicsBlock.style.backgroundColor = '#cfb1cf87';
    // }
  });
}