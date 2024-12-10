export function getElements() {
  const rootElement = document.getElementsByClassName('root')[0];
  const newHeader = document.createElement('header');
  const newH1 = document.createElement('h1');
  const newMain = document.createElement('main');
  const newSectionLeft = document.createElement('section');
  const newPar1 = document.createElement('p');
  const newH2 = document.createElement('h2');
  const newDiv = document.createElement('div');
  const newBtn1 = document.createElement('button');
  const newBtn2 = document.createElement('button');
  const newBtn3 = document.createElement('button');
  const newSectionRight = document.createElement('section');
  const newPar2 = document.createElement('p');
  const newPar3 = document.createElement('p');
  const newSpan = document.createElement('span');

  newH1.textContent = 'Quiz game!';
  newPar1.textContent = 'Start guessing...';
  newPar2.textContent = '?';
  newPar3.textContent = 'Score: ';
  newSpan.textContent = '0';

  newSectionLeft.className = 'left';
  newPar1.className = 'message';
  newH2.className = 'question';
  newDiv.className = 'options';
  newBtn1.className = 'option-1';
  newBtn2.className = 'option-2';
  newBtn3.className = 'option-3';
  newSectionRight.className = 'right';
  newPar2.className = 'displayAnswer';
  newPar3.className = 'label-score';
  newSpan.className = 'score';

  rootElement.append(newHeader, newMain);
  newHeader.appendChild(newH1);
  newMain.append(newSectionLeft, newSectionRight);
  newSectionLeft.append(newPar1, newH2, newDiv);
  newDiv.append(newBtn1, newBtn2, newBtn3);
  newSectionRight.append(newPar2, newPar3);
  newPar3.appendChild(newSpan);
}
getElements();
