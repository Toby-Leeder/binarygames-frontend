var binaryRacer = `
<div> <!-- the div for the entire game starts here...--> \
  <div class="wrapper"> \
    <div class="menu"> \
      <div class="menu-title" >B1NARY RACER ⪢⪢⪢</div> \
      <div class="menu-button">Back to Escape Room</div> \
    </div> \
    <div class="splash"> \
      <h1 class = "splash-header">click here to start</h1> \
    </div> \
    <div class="traffic-light" id="traffic-light"> \
      <div class="light red"></div> \
      <div class="light yellow"></div> \
      <div class="light green"></div> \
    </div> \ 
    <div class="end-screen" id="end-screen" style="display: none;"> \
      <p>Time taken: <span id="end-time"></span></p> \
    </div> \
    <div id="game"> \
    <div class="top-container"> \
      <p> \
        <div class="questions-completed">QUESTIONS COMPLETED: </div> \
        <div id="questions" class="questions-completed"> 0</div> \
        <div class="questions-completed">/ 10</div> \
        <div class="time-container"> \
          <div class="time-elapsed">TIME : </div>  \
          <div class="time-elapsed" id="seconds">00 :</div> \
          <div class="time-elapsed" id="mins">00</div> \
        </div> \
      </p> \
    </div> \
    <div class="progressbar"> \
      <div class="inner"></div> \
    </div> \
    <div class="image-container"> \
      <img src="images/BRG_road.png" alt="road"> \
      <div class="lines-body"></div> \
      <canvas id="spriteContainer" class="carContainer"> \
        <img class="car1" id ="car" src="images/carSprites.png"> \
      </canvas> \
    </div> \
    <div class="bottom-UI"> \
      <div class="questions-given" id="questions-container"> QUESTIONS HERE</div> \
      <div class="button-container"> \
        <button class="answer-button1" id="answer-button1">-</button> \
        <button class="answer-button2" id="answer-button2">-</button> \ 
        <button class="answer-button3" id="answer-button3">-</button> \
        <button class="answer-button4" id="answer-button4">-</button> \
      </div> \
    </div> \
    <div id='progressbar'></div> \
    </div> \
  </div> \
</div> <!-- ..and ends here--> \
`