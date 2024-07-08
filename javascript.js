const totalTeeth = 20;
let teethIndex = document.querySelector('.teeth-index').innerHTML;

document.querySelector('.add-button').addEventListener('click', () => {
  if (teethIndex <=6) {
    teethIndex++;

    document.querySelector('.teeth-index').innerHTML = teethIndex;

    document.querySelector('.result').innerHTML = (totalTeeth - teethIndex)%4;
  }
});

document.querySelector('.minus-button').addEventListener('click', () => {
  if (teethIndex >=2) {
    teethIndex--;

    document.querySelector('.teeth-index').innerHTML = teethIndex;
    
    document.querySelector('.result').innerHTML = (totalTeeth - teethIndex)%4;
  }
});