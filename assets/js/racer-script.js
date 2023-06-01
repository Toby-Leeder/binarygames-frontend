//global variables
const progressBar = document.querySelector(".progressbar .inner");
const car1 = document.querySelector(".car1");
const carCont = document.querySelector(".carContainer");
const startButton = document.querySelector("#start-button");
const button1 = document.querySelector("#answer-button1");
const game = document.getElementById("game")
const trafficLight = document.getElementById("traffic-light")

let seconds = 0;
let mins = 0;
let questions = 0;
const appendMins = document.getElementById("mins");
let Interval;
const appendSeconds = document.getElementById("seconds");
const appendQ = document.getElementById("questions");
const newQuestion = document.getElementById('questions-container')
var splashScreen = document.querySelector('.splash');


//hide game; load traffic light
window.addEventListener("load", () => {
  game.style.visibility = "hidden";
  document.getElementById("traffic-light").style.display = "visible";
});


function activateLights() {
    var lights = document.getElementsByClassName('light');
    
    for (var i = 0; i < lights.length; i++) {
      lights[i].classList.remove('active');
    }
    
    var activeLight = lights[0];
    activeLight.classList.add('active');
    
    setInterval(function() {
      activeLight.classList.remove('active');
      activeLight = activeLight.nextElementSibling || lights[0];
      activeLight.classList.add('active');
    }, 1000);
}
  

splashScreen.addEventListener('click',()=> {
    splashScreen.style.opacity = 0;
    setTimeout(()=>{
      splashScreen.classList.add('hidden')
    },610)
    activateLights();
    setTimeout(function() {
      document.getElementById("traffic-light").style.display = "none";
      game.style.visibility = "visible";
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    }, 3000); 
})


//progress bar animation; everytime correct answer is selected
let keyframeIndex = 0;
function barMove() {
  if (keyframeIndex < 10) { // limit to 10 keyframes
    const animationDuration = 5;
    progressBar.style.animation = `progressbar-countdown ${animationDuration}s forwards`;
    progressBar.style.animationPlayState = "running";
    progressBar.style.animationIterationCount = 1;
    progressBar.style.animationTimingFunction = "linear";
    progressBar.style.width = `${(keyframeIndex + 1) * 10}%`;
    carCont.style.animationPlayState = "running"; 
    setTimeout(function() {
      progressBar.style.animationPlayState = "paused";
      carCont.style.animationPlayState = "paused"; 
    }, 500); 
    keyframeIndex++;
  }
  addQuestion();
}


function startTimer () {
  mins++; 
  if(mins <= 9){
    appendMins.innerHTML = "0" + mins;
  }
  if (mins > 9){
    appendMins.innerHTML = mins;
  } 
  if (mins > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    mins = 0;
    appendMins.innerHTML = "0" + 0;
  }
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }
}

//appends QUESTIONS COMPLETED div
function addQuestion () { 
  questions++;
  appendQ.innerHTML = questions;
  if (questions > 10) {
      questions = 10;
      appendQ.innerHTML = questions;
  }
  if (questions === 10) {
      showEndScreen();
  }
}

//slows road-lines down everytime wrong answer is given -- ill figure out how to translate the car itself to the left after n@tm
function startMoveLeft() {
  const roadLines = document.querySelector('.lines-body');
  const animationDuration = 9;
  roadLines.style.animationDuration = `${animationDuration}s`;
  setTimeout(() => {
      roadLines.style.animationDuration = '3s'; 
  }, 2000);
}


//randomly generated questions/answers code
const option1 = document.getElementById("answer-button1"),
option2 = document.getElementById("answer-button2"),
option3 = document.getElementById("answer-button3"),
option4 = document.getElementById("answer-button4");
function generate_equation() {
  var num1 = Math.floor(Math.random() * 9),
  num2 = Math.floor(Math.random() * 9),
  binary1 = num1.toString(2).padStart(4, '0'),
  binary2 = num2.toString(2).padStart(4, '0');
  
  var choice1 = Math.floor(Math.random() * 9),
  choice2 = Math.floor(Math.random() * 9),
  choice3 = Math.floor(Math.random() * 9),
  allAnswers = [],
  switchAnswers = [];

  function uniqueAnswers() {
    while (choice1 == choice2 || choice1 == choice3 || choice1 == eval(num1 + num2)){
      console.log("not unique C1")
      choice1 = Math.floor(Math.random() * 9)
    }
    while (choice2 == choice3 || choice2 == eval(num1 + num2)) {
      console.log("not unique C2")
      choice2 = Math.floor(Math.random() * 9)
    }
    while (choice3 == eval(num1 + num2)){
      console.log("not unique C3")
      choice3 = Math.floor(Math.random() * 9)
    }
  }
  while (choice1 == choice2 || choice1 == choice3 || choice1 == eval(num1 + num2) || choice2 == choice3 || choice2 == eval(num1 + num2) || choice3 == eval(num1 + num2)){
    uniqueAnswers()
  }

  var binchoice1 = choice1.toString(2).padStart(4, '0'),
  binchoice2 = choice2.toString(2).padStart(4, '0'),
  binchoice3 = choice3.toString(2).padStart(4, '0');
  
  answer = eval(num1 + num2);
  binanswer = answer.toString(2).padStart(4, '0') 

  newQuestion.innerHTML = "What is " + binary1 + " + " + binary2;

  allAnswers = [binanswer, binchoice1, binchoice2, binchoice3];
  
  for (i = allAnswers.length; i--;) {
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };
  
  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2]; 
  option4.innerHTML = switchAnswers[3];
};
generate_equation()

option1.addEventListener("click", function(){
  const selectedAnswer = parseInt(option1.innerHTML, 2);
  if(selectedAnswer == answer){
    ans = 1
    setTimeout(function() {
      ans = 0; 
    }, 1000);
    barMove();
    generate_equation();
  }
  else{
    startMoveLeft()
    document.getElementById("answer-button1").disabled = true;
    document.getElementById("answer-button2").disabled = true;
    document.getElementById("answer-button3").disabled = true;
    document.getElementById("answer-button4").disabled = true;
    newQuestion.innerHTML = "Incorrect";
    ans = 2
    setTimeout(function() {
      ans = 0
      document.getElementById("answer-button1").disabled = false;
      document.getElementById("answer-button2").disabled = false;
      document.getElementById("answer-button3").disabled = false;
      document.getElementById("answer-button4").disabled = false;
      generate_equation()
    }, 2000);
  }
});

option2.addEventListener("click", function(){
  const selectedAnswer = parseInt(option2.innerHTML, 2);
  if(selectedAnswer == answer){
    ans = 1
    setTimeout(function() {
      ans = 0; 
    }, 1000);
    barMove();
    generate_equation();
  }
  else{
    startMoveLeft()
    document.getElementById("answer-button1").disabled = true;
    document.getElementById("answer-button2").disabled = true;
    document.getElementById("answer-button3").disabled = true;
    document.getElementById("answer-button4").disabled = true;
    newQuestion.innerHTML = "Incorrect";
    ans = 2
    setTimeout(function() {
      ans = 0
      document.getElementById("answer-button1").disabled = false;
      document.getElementById("answer-button2").disabled = false;
      document.getElementById("answer-button3").disabled = false;
      document.getElementById("answer-button4").disabled = false;
      generate_equation()
    }, 2000);
  }
});

option3.addEventListener("click", function(){
  const selectedAnswer = parseInt(option3.innerHTML, 2);
  if(selectedAnswer == answer){
    ans = 1
    setTimeout(function() {
      ans = 0; 
    }, 1000);
    barMove();
    generate_equation();
  }
  else{
    startMoveLeft()
    document.getElementById("answer-button1").disabled = true;
    document.getElementById("answer-button2").disabled = true;
    document.getElementById("answer-button3").disabled = true;
    document.getElementById("answer-button4").disabled = true;
    newQuestion.innerHTML = "Incorrect";
    ans = 2
    setTimeout(function() {
      ans = 0
      document.getElementById("answer-button1").disabled = false;
      document.getElementById("answer-button2").disabled = false;
      document.getElementById("answer-button3").disabled = false;
      document.getElementById("answer-button4").disabled = false;
      generate_equation()
    }, 2000);
  }
});

option4.addEventListener("click", function(){
  const selectedAnswer = parseInt(option4.innerHTML, 2);
  if(selectedAnswer == answer){
    ans = 1
    setTimeout(function() {
      ans = 0; 
    }, 1000);
    barMove();
    generate_equation();
}
else{
  startMoveLeft()
  document.getElementById("answer-button1").disabled = true;
  document.getElementById("answer-button2").disabled = true;
  document.getElementById("answer-button3").disabled = true;
  document.getElementById("answer-button4").disabled = true;
  newQuestion.innerHTML = "Incorrect";
  ans = 2
  setTimeout(function() {
    ans = 0
    document.getElementById("answer-button1").disabled = false;
    document.getElementById("answer-button2").disabled = false;
    document.getElementById("answer-button3").disabled = false;
    document.getElementById("answer-button4").disabled = false;
    generate_equation()
  }, 2000);
}
});


function showEndScreen() {
  clearInterval(Interval);
  const endTime = document.getElementById("end-time");
  endTime.textContent = appendSeconds.innerHTML + ":" + appendMins.innerHTML;
  game.style.visibility = "hidden";
  const endScreen = document.getElementById("end-screen");
  endScreen.style.display = "block";
}



// start of sprite animation code 
window.addEventListener('load', function(){
ans = 0
const canvas = document.getElementById('spriteContainer');
const ctx = canvas.getContext('2d');
canvas.width = 220 * 1.2;
canvas.height = 160 * 1.2; 

class Car {
    constructor(){ 
        this.image = document.getElementById("car")
        this.spriteWidth = 220;
        this.spriteHeight = 160;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.x = 0;
        this.y = 0;
        this.scale = 1.2;
        this.minFrame = 0;
        this.maxFrame = 48;
        this.frameX = 0;
        this.frameY = 0;
    }
    draw(context){
        context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width * this.scale, this.height * this.scale);
    }
    update(){
        if (this.frameX < 15) this.frameX++ 
        else this.frameX = 0;

        if (ans === 0) {
          this.frameY = 0;
        } else if (ans === 1) {
          this.frameY = 1;
        } else if (ans === 2) {
          this.frameY = 2;
        }
    }
}
const car = new Car();

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    car.draw(ctx);
    car.update();
    requestAnimationFrame(animate);
    
}
animate();
});
