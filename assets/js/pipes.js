        const questions = [
            { question: "Which operator is used for addition?", answer: 1 },
            { question: "Which operator is used for subtraction?", answer: 2 },
            { question: "Which operator is used for multiplication?", answer: 3 },
            { question: "Which operator is used for division?", answer: 4 },
            { question: "Which operator is used for calculating the remainder of a division?", answer: 5 },
            { question: "Which operator is used for incrementing a variable by 1?", answer: 6 },
            { question: "Which operator is used for decrementing a variable by 1?", answer: 7 },
            { question: "Which operator is used for assigning a value to a variable?", answer: 8 },
            { question: "Which operator is used for adding a value to the current value of a variable and then assigning the result to the variable?", answer: 9 },
            { question: "Which operator is used for assigning a value to a variable?", answer: 10 },
            { question: "Which operator is used for multiplying the current value of a variable by a value and then assigning the result to the variable?", answer: 11 },
            { question: "Which operator is used for dividing the current value of a variable by a value and then assigning the result to the variable?", answer: 12 },
            { question: "Which operator is used for calculating the remainder of dividing the current value of a variable by a value and then assigning the result to the variable?", answer: 13 },
            { question: "Which operator is used for checking if two values are equal?", answer: 14 },
            { question: "Which operator is used for checking if two values are not equal?", answer: 15 },
            { question: "Which operator is used for checking if one value is greater than another?", answer: 16 },
            { question: "Which operator is used for checking if one value is less than another?", answer: 17 },
            { question: "Which operator is used for checking if one value is greater than or equal to another?", answer: 18 },
            { question: "Which operator is used for checking if one value is less than or equal to another?", answer: 19 },
            { question: "Which operator is used for performing a logical AND operation between two conditions?", answer: 20 },
            { question: "Which operator is used for performing a logical OR operation between two conditions?", answer: 21 },
            { question: "Which operator is used for negating a boolean value?", answer: 22 },
            { question: "Which operator is used for performing a bitwise AND operation between two values?", answer: 23 },
            { question: "Which operator is used for performing a bitwise OR operation between two values?", answer: 24 },
            { question: "Which operator is used for performing a bitwise XOR operation between two values?", answer: 25 },
            { question: "Which operator is used for performing a bitwise complement operation on a value?", answer: 26 },
            { question: "Which operator is used for shifting the bits of a value to the left by a specified number of positions?", answer: 27 },
            { question: "Which operator is used for shifting the bits of a value to the right by a specified number of positions?", answer: 28 }
        ];

class MushroomAnimation {
  constructor(position) {
    this.frames = 6;
    this.currentFrame = 0;
    this.frameSpacing = 70;
    this.animationSpeed = 200;
    this.mushroomElement = document.getElementById("mushroom");
    this.mushroomElement.style.position = "absolute";

    const currentPosition = parseFloat(this.mushroomElement.style.left) || position;
    const offset = 0;
    const startingPosition = currentPosition - (offset / window.innerWidth) * 100;
    this.mushroomElement.style.left = `${startingPosition}%`;
    const startingHeight = 1350;
    this.mushroomElement.style.top = `${startingHeight}%`;
    this.animationTimeout = null;
  }

  animateFrames() {
    this.mushroomElement.style.backgroundPosition = `-${this.currentFrame * this.frameSpacing}px 0px`;

    this.currentFrame++;
    if (this.currentFrame >= this.frames) {
      this.currentFrame = 0;
      this.stopAnimation();
    }

    const currentPosition = parseFloat(this.mushroomElement.style.left) || 100; 
    const newPosition = currentPosition - 1;

    this.mushroomElement.style.left = `${newPosition}%`;

    this.animationTimeout = setTimeout(() => {
      this.animateFrames();
    }, this.animationSpeed);
  }


  startAnimation() {
    if (parseFloat(this.mushroomElement.style.left) <= -100) {
      return;
    }
    if (animationStarted) {
      return;
    }

    this.animateFrames();
  }

  pauseAnimation() {
    clearTimeout(this.animationTimeout);
    this.animationTimeout = null;
  }

  resumeAnimation() {
    if (!this.animationTimeout) {
      this.animateFrames();
    }
  }

  stopAnimation() {
    clearTimeout(this.animationTimeout);
    this.animationTimeout = null;
  }
}

let currentQuestion = 0;
let score = 0;
let animationStarted = false;
let mushroomAnimation;

function updateQuestion() {
  const questionElement = document.querySelector('.question');
  const buttons = document.querySelectorAll('.option');

  questionElement.textContent = questions[currentQuestion].question;

  const answer = questions[currentQuestion].answer;
  buttons[answer - 1].classList.add('correct');
}

function handleAnswer(selectedAnswer) {
  const answer = questions[currentQuestion].answer;

  if (selectedAnswer === answer) {
    const buttons = document.querySelectorAll('.option');
    buttons[answer - 1].classList.add('hidden');
    score++;

    if (currentQuestion === questions.length - 1) {
      mushroomAnimation.startAnimation();
      setTimeout(() => {
        mushroomAnimation.stopAnimation();
      }, 2000);
    } else {
      currentQuestion++;
      updateQuestion();
      mushroomAnimation.resumeAnimation();
      setTimeout(() => {
        mushroomAnimation.pauseAnimation();
      }, 300);
    }
  } else {
    alert("Wrong answer! You lose.");
  }
}

function initializeQuiz() {
  updateQuestion();
}

initializeQuiz();

const buttons = document.querySelectorAll('.option');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => handleAnswer(index + 1));
});

mushroomAnimation = new MushroomAnimation(100);

function showPopup() {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.style.opacity = '1';
  popupContainer.style.visibility = 'visible';
}

function hidePopup() {
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.style.opacity = '0';
  popupContainer.style.visibility = 'hidden';
  setTimeout(() => {
    mushroomAnimation.startAnimation();
    setTimeout(() => {
      mushroomAnimation.stopAnimation();
    }, 3500);
  }, 1000);
}

document.querySelector('.popup-button').addEventListener('click', hidePopup);

setTimeout(showPopup, 500);


const quizContainer = document.querySelector('.quiz-container');
const goHomeButton = document.createElement('a');
goHomeButton.href = 'https://binarygames.tech/';
goHomeButton.innerText = 'Go home';
goHomeButton.classList.add('option');
quizContainer.appendChild(goHomeButton);