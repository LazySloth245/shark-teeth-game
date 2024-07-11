const buttons = document.querySelectorAll('button');

function unselectPreviousButton () {
  const selectedButton = document.querySelector('.selected-button');
  if (selectedButton) {
    selectedButton.classList.remove('selected-button');
  }
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    document.querySelector('img').src = `img/shark-teeth-${index+1}.jpg`;
    unselectPreviousButton();
    button.classList.add('selected-button');
  });
});

document.querySelector('.title').addEventListener('click', () => {
  document.querySelector('img').src = 'img/shark-teeth.jpg';
  unselectPreviousButton();
});