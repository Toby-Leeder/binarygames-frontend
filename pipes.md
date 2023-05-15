<html>
  <style>
body {
  background-image: url('images/pipebackground.jpg');
  background-size: cover;
}
.container {
  position: relative;
  width: 80%;
  margin: 0 auto;
  height: 400px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  width: 100px;
  height: auto;
  position: relative;
  z-index: 2;
}
.left {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(20% - 50px);
}
.middle {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}
.right {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(80% - 50px);
}
.left .line-left,
.middle .line-left,
.right .line-left,
.middle .line-right,
.right .line-right {
  position: absolute;
  top: 33.33%;
  left: 0;
  right: 0;
  height: 2px;
  background-image: url('images/pipe1.jpg');
  background-repeat: repeat-x;
  z-index: 3;
}
.left:hover .line-left,
.middle:hover .line-left,
.right:hover .line-left {
  opacity: 0;
}
.middle .line-right,
.right .line-right {
  position: absolute;
  top: 33.33%;
  left: 0;
  right: 0;
  height: 2px;
  background-image: url('images/pipe1.jpg');
  background-repeat: repeat-x;
  z-index: 3;
}
.middle:hover .line-right,
.right:hover .line-right {
  opacity: 0;
}
.left .line-left {
  left: 0;
}
.middle .line-left {
  left: calc(33.33% - 1px);
}
.right .line-left {
  left: calc(66.66% - 1px);
}
.middle .line-right {
  right: calc(33.33% - 1px);
}
.right .line-right {
  right: 0;
}
  </style>
</head>
<body>
  <div class="container">
    <div class="left">
      <div class="line-left"></div>
      <img id="img1" src="images/trash1.png" />
    </div>
    <div class="middle">
      <div class="line-left"></div>
      <div class="line-right"></div>
      <img id="img2" src="images/trash2.png" />
    </div>
    <div class="right">
      <div class="line-right"></div>
      <img id="img3" src="images/trash3.png" />
    </div>
  </div>

  <script>
 const imgs = document.querySelectorAll('img');

let activeImg = null;
let initialY = null;

function dragStart(e) {
  activeImg = this;
  initialY = e.clientY - activeImg.offsetTop;
}

function dragEnd() {
  if (activeImg) {
    const container = activeImg.closest('.container');
    const lines = container.querySelectorAll('.line-left, .line-right');
    lines.forEach(line => line.style.opacity = 1);
  }
  activeImg = null;
  initialY = null;
}

function drag(e) {
  if (activeImg) {
    e.preventDefault();
    const y = e.clientY - initialY;
    activeImg.style.top = `${y}px`;

    const container = activeImg.closest('.container');
    const left = container.querySelector('.left');
    const middle = container.querySelector('.middle');
    const right = container.querySelector('.right');
    const linesLeft = container.querySelectorAll('.line-left');
    const linesRight = container.querySelectorAll('.line-right');

    if (activeImg === left.querySelector('img') && activeImg.offsetTop > left.offsetTop && activeImg.offsetTop < left.offsetTop + left.offsetHeight) {
      linesLeft.forEach(line => line.style.opacity = 0);
    } else {
      linesLeft.forEach(line => line.style.opacity = 1);
    }

    if (activeImg === middle.querySelector('img') && activeImg.offsetTop > middle.offsetTop && activeImg.offsetTop < middle.offsetTop + middle.offsetHeight) {
      linesLeft.forEach(line => line.style.opacity = 0);
      linesRight.forEach(line => line.style.opacity = 0);
    } else {
      linesLeft.forEach(line => line.style.opacity = 1);
      linesRight.forEach(line => line.style.opacity = 1);
    }

    if (activeImg === right.querySelector('img') && activeImg.offsetTop > right.offsetTop && activeImg.offsetTop < right.offsetTop + right.offsetHeight) {
      linesRight.forEach(line => line.style.opacity = 0);
    } else {
      linesRight.forEach(line => line.style.opacity = 1);
    }
  }
}

imgs.forEach(img => {
  img.addEventListener('mousedown', dragStart);
  img.addEventListener('mouseup', dragEnd);
  img.addEventListener('mousemove', drag);
});

  </script>
</body>
</html>`