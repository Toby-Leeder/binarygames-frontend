{% include nav-menu.html %}

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="pipes.css">
  </head>
  <body>
    <main class="table">
      <section class="table_header">
        <h1>Pipes Game</h1>
      </section>
      <section class="table_body">
<html>
<head>
  <title>Clickable Image</title>
</head>
<body>
  <h2>Click on an area of the image to reveal a question and answer prompt</h2>

<div>
  <div alt="" class="line_pipe" onclick=" window.open(this.src)"></div>
</div>

<div>
  <div alt="" class="four_pipe" onclick=" window.open(this.src)"></div>
</div>
</body>
</html>


<div class="game">
  <div class="pipes">
    <div class="pipe p"></div>
    <div class="pipe q"></div>
    <div class="pipe r"></div>
    <div class="pipe p"></div>
    <div class="pipe q"></div>
    <div class="pipe ballslol"></div>
  </div>
  <div class="expression">
    <p>Connect the pipes to create a valid solution:</p>
    <p class="logic">p ∧ q → r</p>
  </div>
</div>


<script>

const expression = "p && q -> r";
const variables = ["p", "q", "r"];

for (let i = 0; i < pipes.length; i++) {
  pipes[i].classList.add(variables[i]);
}
pipes.forEach(pipe => {
  pipe.addEventListener("click", () => {
    pipe.classList.toggle("connected");
    
    const connectedPipes = document.querySelectorAll(".pipe.connected");
    const values = {};
    variables.forEach(variable => {
      values[variable] = connectedPipes.some(pipe => pipe.classList.contains(variable));
    });
    const result = eval(expression);
    
    if (result) {
      pipe.classList.add("correct");
    } else {
      pipe.classList.remove("correct");
    }
  });
});
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
pipes.forEach(pipe => {
  pipe.addEventListener("click", () => {
    pipe.classList.toggle("rotated");
  });
});

<script>