import { getElements } from './elements.js';

let i = 0;
let score = 0;
const getFirstHeader = document.getElementsByClassName('question')[0];
const getOption1 = document.getElementsByClassName('option-1')[0];
const getOption2 = document.getElementsByClassName('option-2')[0];
const getOption3 = document.getElementsByClassName('option-3')[0];
const showScore = document.getElementsByClassName('score')[0];
const labelScore = document.getElementsByClassName('label-score')[0];
const message = document.getElementsByClassName('message')[0];
const displayAnswer = document.getElementsByClassName('displayAnswer')[0];
const options = [getOption1, getOption2, getOption3];
// const nextBtn = document.querySelector('.nextQuestion');

const fetchJSON = function () {
  fetch('./example.json')
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      const timer = setInterval(showQuestions, 10000);
      function showQuestions() {
        if (i < data.length) {
          labelScore.style.display = 'none';
          getFirstHeader.textContent = data[i].question;
          getOption1.textContent = data[i].options[0];
          getOption2.textContent = data[i].options[1];
          getOption3.textContent = data[i].options[2];

          const correctAnswer = data[i].answer;

          options.forEach(option => {
            option.addEventListener('click', function () {
              if (option.textContent === correctAnswer) {
                document.querySelector('body').style.backgroundColor = 'green';
                showScore.textContent = score + 1;
                score++;
              } else {
                document.querySelector('body').style.backgroundColor = 'red';
              }
              options.forEach(btn => {
                btn.setAttribute('disabled', 'true');
                displayAnswer.innerHTML = correctAnswer;
              });
            });
            displayAnswer.innerHTML = '?';
          });

          options.forEach(btn => btn.removeAttribute('disabled'));
          let defaultBc = (document.querySelector(
            'body'
          ).style.backgroundColor = '');
          defaultBc++;
          i++;
        } else {
          getFirstHeader.textContent = 'YOU ARE ALL DONE!';
          message.textContent = '';
          displayAnswer.textContent = '?';
          getOption1.style.display = 'none';
          getOption2.style.display = 'none';
          getOption3.style.display = 'none';
          labelScore.style.display = 'block';
          document.querySelector('body').style.backgroundColor = '';
          clearInterval(timer);
          // nextBtn.style.display = 'none';
        }
      }
      // nextBtn.addEventListener('click', () => {
      //   showQuestions();
      // });
      showQuestions();
    })
    .catch(error => console.log('Unable to fetch data:', error));
};
fetchJSON();
