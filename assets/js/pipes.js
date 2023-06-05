
let currentQuestion = 0; // sets current question to 0
let animationStarted = false; // sets value to false for animation started
let mushroomAnimation;

          const questions = [ // Questions for quiz
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
  constructor(position) { // constructor for animation
    this.frames = 6; // Number of frames
    this.currentFrame = 0; // Starting frame
    this.frameSpacing = 70; // How far apart each frame is
    this.animationSpeed = 200; // Rate at which the frames are changing
    this.mushroomElement = document.getElementById("mushroom");
    this.mushroomElement.style.position = "absolute";

    const currentPosition = parseFloat(this.mushroomElement.style.left) || position;
    const offset = 180;
    const startingPosition = currentPosition - (offset / window.innerWidth) * 100;
    this.mushroomElement.style.left = `${startingPosition}%`;
    const startingHeight = 75; // Sets height for the animation
    this.mushroomElement.style.top = `${startingHeight}%`;
    this.animationTimeout = null;
  }

  animateFrames() {
    this.mushroomElement.style.backgroundPosition = `-${this.currentFrame * this.frameSpacing}px 0px`; // Updates the background position of the mushroom element to show the current frame

    this.currentFrame++; // function to go to next frame
    if (this.currentFrame >= this.frames) { // checks to see frames shown
      this.currentFrame = 0; // moves to first frame
      this.stopAnimation(); // stops animation
    }

    const currentPosition = parseFloat(this.mushroomElement.style.left) || 100;  // gets position of mushroom
    const newPosition = currentPosition - 1; // finds new position

    this.mushroomElement.style.left = `${newPosition}%`;

    this.animationTimeout = setTimeout(() => {
      this.animateFrames();
    }, this.animationSpeed); 
  }


  startAnimation() { 
    if (parseFloat(this.mushroomElement.style.left) <= -100) { // checks to make sure mushroom is on screen
      return;
    }
    if (animationStarted) {
      return;
    }

    this.animateFrames(); // starts animation
  }

  pauseAnimation() {
    clearTimeout(this.animationTimeout);
    this.animationTimeout = null; // resets animation time
  }

  resumeAnimation() {
    if (!this.animationTimeout) {
      this.animateFrames(); // calls animate frames to resume animation
    }
  }

  stopAnimation() {
    clearTimeout(this.animationTimeout);
    this.animationTimeout = null; // resets animation time
  }
}

function updateQuestion() {
  const questionElement = document.querySelector('.question');
  const buttons = document.querySelectorAll('.option');

  questionElement.textContent = questions[currentQuestion].question; // Displays Question

  const answer = questions[currentQuestion].answer; // connects question to answer
  buttons[answer - 1].classList.add('correct'); // sets that button to correct class
}

function handleAnswer(selectedAnswer) {
  const answer = questions[currentQuestion].answer;

  if (selectedAnswer === answer) { // checks if answer is correct
    const buttons = document.querySelectorAll('.option');
    buttons[answer - 1].classList.add('hidden');

    if (currentQuestion === questions.length - 1) {
      mushroomAnimation.startAnimation();
      setTimeout(() => {
        mushroomAnimation.stopAnimation();
      }, 2000); // time animation is running
    } else {
      currentQuestion++;
      updateQuestion();
      mushroomAnimation.resumeAnimation(); // starts animation
      setTimeout(() => {
        mushroomAnimation.pauseAnimation();  // stops animation
      }, 300); // time animation is running
    }
  } else {
    alert("Wrong answer! You lose."); // displays when wrong
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
    mushroomAnimation.startAnimation(); // Starts mushroom animation
    setTimeout(() => { // time mushroom animation is running for
      mushroomAnimation.stopAnimation(); // stops mushroom animation
    }, 300);
  }, 1000);
}

document.querySelector('.popup-button').addEventListener('click', hidePopup);

setTimeout(showPopup, 500);