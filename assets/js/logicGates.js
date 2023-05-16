function setCtx(ctx){
  ctx.fillStyle = `rgb(255, 255, 255)`
  ctx.strokeStyle = `rgb(255, 255, 255)`
  ctx.lineWidth = 2  
}
function setBlackCtx(ctx){
  ctx.fillStyle = `rgb(0, 0, 0)`
  ctx.strokeStyle = `rgb(0, 0, 0)`
  ctx.lineWidth = 2
}

//AND gate
function drawAND(ctx){
  setCtx(ctx)
  ctx.fillRect(0, 24, 15, 2)
  ctx.fillRect(0, 54, 15, 2)
  ctx.fillRect(15, 9, 2, 60)
  ctx.fillRect(15, 9, 15, 2)
  ctx.fillRect(15, 69, 15, 2)
  ctx.beginPath();
  ctx.arc(30, 40, 30, Math.PI/2, 3*Math.PI/2, true)
  ctx.stroke();
  ctx.fillRect(60, 39, 20, 2)
}
drawAND(document.getElementById("ANDgate").getContext("2d"))
drawAND(document.getElementById("ANDgate1").getContext("2d"))
drawAND(document.getElementById("ANDgate2").getContext("2d"))

//OR gate
function drawOR(ctx){
  setCtx(ctx)
  ctx.fillRect(0, 24, 19, 2)
  ctx.fillRect(0, 54, 19, 2)
  ctx.beginPath()
  ctx.ellipse(11, 39, 30, 10, Math.PI/2, 0, Math.PI, true)
  ctx.moveTo(61, 39)
  ctx.ellipse(35, 24, 30, 10, 0.53, 0, Math.PI, true)
  ctx.moveTo(61, 39)
  ctx.ellipse(35, 54, 30, 10, 2*Math.PI-0.53, 0, Math.PI, false)
  ctx.stroke()
  ctx.fillRect(60, 39, 20, 2);
}

drawOR(document.getElementById("ORgate").getContext("2d"))

//NAND gate
function drawNAND(ctx){
  setCtx(ctx)
  ctx.fillRect(0, 24, 15, 2)
  ctx.fillRect(0, 54, 15, 2)
  ctx.fillRect(15, 9, 2, 60)
  ctx.fillRect(15, 9, 15, 2)
  ctx.fillRect(15, 69, 15, 2)
  ctx.beginPath();
  ctx.arc(30, 40, 30, Math.PI/2, 3*Math.PI/2, true)
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(66, 40, 6, 0, 2 * Math.PI)
  ctx.stroke();
  ctx.fillRect(72, 39, 20, 2);
}

drawNAND(document.getElementById("NANDgate").getContext("2d"))

// NOR gate
function drawNOR(ctx){
  setCtx(ctx)
  ctx.fillRect(0, 24, 15, 2)
  ctx.fillRect(0, 54, 15, 2)
  ctx.beginPath()
  ctx.ellipse(7, 39, 30, 10, Math.PI/2, 0, Math.PI, true)
  ctx.moveTo(61, 39)
  ctx.ellipse(35, 24, 30, 10, 0.53, 0, Math.PI, true)
  ctx.moveTo(61, 39)
  ctx.ellipse(35, 54, 30, 10, 2*Math.PI-0.53, 0, Math.PI, false)
  ctx.stroke()
  ctx.beginPath();
  ctx.arc(67, 40, 6, 0, 2 * Math.PI)
  ctx.stroke();
  ctx.fillRect(72, 39, 20, 2);
}

drawNOR(document.getElementById("NORgate").getContext("2d"))

//XOR gate
function drawXOR(ctx){
  setCtx(ctx)
  ctx.fillRect(0, 24, 11, 2)
  ctx.fillRect(0, 54, 11, 2)
  ctx.beginPath()
  ctx.ellipse(3, 39, 30, 10, Math.PI/2, 0, Math.PI, true)
  ctx.stroke()
  ctx.beginPath()
  ctx.ellipse(11, 39, 30, 10, Math.PI/2, 0, Math.PI, true)
  ctx.moveTo(61, 39)
  ctx.ellipse(35, 24, 30, 10, 0.53, 0, Math.PI, true)
  ctx.moveTo(61, 39)
  ctx.ellipse(35, 54, 30, 10, 2*Math.PI-0.53, 0, Math.PI, false)
  ctx.stroke()
  ctx.fillRect(60, 39, 20, 2);
}

drawXOR(document.getElementById("XORgate").getContext("2d"))

var tempDivRect = document.getElementsByClassName("tempDiv")[0].getBoundingClientRect()
var logicValues = [[["false", "true"], ["false", "false"], ["true", "true"], ["true", "false"], ["true", "true"]], [["true", "true"], [" ", " "]], [["true", ""]], [["", ""]]]

function makeDoubleLine(ctx, down, margin, width, start, text){
  setCtx(ctx)
  ctx.fillText(text[0], start + 4, down * margin - 24)
  ctx.fillRect(start, down*margin + 14, width, 2)
  ctx.fillText(text[1], start + 4, down * margin + 4)
  ctx.fillRect(start, down*margin - 16, width, 2)
  // var start = width + 80
  // var mult = mod % 2 == 1 ? -1 : 1
  // ctx.fillRect(start, down*margin - 1, 20, 2)
  // ctx.fillRect(start + 20, down*margin - mult * 1, 2, mult * 23)
  // ctx.fillRect(start + 20, down*margin + mult * 22 - 1, 200, 2)
  // mod++
}
var connectIterator = 0
function drawLines(canvas, doubleLines, mar, row, texts){
  var ctx = canvas.getContext("2d")
  var height = canvas.height
  var width = canvas.width * 0.2 * 0.25
  var margin = height/mar
  var start = (width * 2 + 80) * row

  doubleLines.forEach((line, j) => {
    makeDoubleLine(ctx, line, margin, width, start, texts[j])
    genDiv(width, margin * line, start)
    connectIterator++
  })
}

var firstCanvas = document.getElementById("firstCanvas")
var secondCanvas = document.getElementById("secondCanvas")
var thirdCanvas = document.getElementById("thirdCanvas")

var doubleLines = [[1,2,4,5,7], [3, 9], [3], [1]]
var rowStarts = [0, 1, 2, 3]
var lineMargin = [8, 16, 8, 2]

// document.getElementById("ANDgate").style.left = document.getElementById("firstCanvas").getBoundingClientRect().right + "px"
// document.getElementById("ANDgate1").style.top = document.getElementById("firstCanvas").getBoundingClientRect().top + document.getElementById("firstCanvas").getBoundingClientRect().height/8 - 40 + "px"
// document.getElementById("ANDgate2").style.top = document.getElementById("firstCanvas").getBoundingClientRect().top + document.getElementById("firstCanvas").getBoundingClientRect().height/(8/7) - 40 + "px"

function makeLines(){
  var canvasHeights = document.getElementById(`playspace`).getBoundingClientRect().height
  var canvasWidths = document.getElementById(`canvasDiv`).getBoundingClientRect().width
  
  // var canvases = [firstCanvas, secondCanvas, thirdCanvas]
  firstCanvas.height = canvasHeights
  firstCanvas.width = canvasWidths
  doubleLines.forEach((el, i) => {
    drawLines(firstCanvas, doubleLines[i], lineMargin[i], rowStarts[i], logicValues[i])
  })
}

var globalTargetDivs = []

function genDiv(width, topPlace, start){
  var canvasDiv = document.getElementById("canvasDiv");
  var div = document.createElement("div");

  var rect = canvasDiv.getBoundingClientRect();

  div.classList.add("targetDiv")
  div.draggable = false;
  div.style.top = topPlace + 20 + "px";
  div.style.left = start + width + rect.left + "px";
  div.style.display = "none"

  globalTargetDivs.push(div)
  document.getElementById("playspace").appendChild(div);
}

function makeTargetDivsVisible(){
  var targetDivs = document.getElementsByClassName("targetDiv")
  for(var i = 0; i < targetDivs.length; i++){
    targetDivs[i].display = "grid"
  }
}

function makeTargetDivsInvisible(){
  var targetDivs = document.getElementsByClassName("targetDiv")
  for(var i = 0; i < targetDivs.length; i++){
    targetDivs[i].display = "none"
  }
}

function connectLines(isWhite){
  var connectI = 0
  var targetDivs = document.getElementsByClassName("targetDiv")
  makeTargetDivsVisible()
  targetDivs[0].style.display = "grid"
  targetDivs[1].style.display = "grid"
  var firstHeight = targetDivs[0].getBoundingClientRect().top - targetDivs[1].getBoundingClientRect().top
  firstHeight = Math.abs(firstHeight)
  for(var i = 0; i < 2; i++){
    if(targetDivs[i].childNodes.length > 0){
      targetDivs[i].style.display = "grid"
    } else {
      targetDivs[i].style.display = "none"
    }
  }
  makeTargetDivsInvisible()
  var canvas = firstCanvas
  var ctx = canvas.getContext("2d")
  if(isWhite){
    setCtx(ctx)
  } else {
    setBlackCtx(ctx)
  }
  doubleLines.forEach((el, i) => {
    var lines = doubleLines[i]
    var mar = lineMargin[i]
    var row = rowStarts[i]
    var height = canvas.height
    var width = canvas.width * 0.2 * 0.25
    var margin = height/mar
    var start = (width * 2 + 80) * row
    lines.forEach((line) => {
      makeConnectingLines(ctx, width, margin * line, start, connectI, row, isWhite, firstHeight)
      connectI++
    })
  })
}

function makeConnectingLines(ctx, width, topPlace, start, i, row, isWhite, firstHeight){
  var strokeWidth = isWhite ? 2 : 4
  var targetDivs = document.getElementsByClassName("targetDiv")
  // makeTargetDivsVisible()
  // targetDivs[0].style.display = "grid"
  // targetDivs[1].style.display = "grid"
  // var firstHeight = targetDivs[0].getBoundingClientRect().top - targetDivs[1].getBoundingClientRect().top
  // targetDivs[0].style.display = "none"
  // targetDivs[1].style.display = "none"
  // firstHeight = Math.abs(firstHeight)
  // makeTargetDivsInvisible()
  if(!isWhite){
    if(targetDivs[i].childNodes.length > 0 ) return
    if(i == 4) {
      ctx.clearRect(start + 79 + width, topPlace - 2, (width * 2 + 80) * 2 + width, strokeWidth + 1)
      ctx.clearRect(start + 79 + width + (width * 2 + 80) * 2 + width, topPlace + 2, strokeWidth, -(firstHeight * 2.8) - 1)
      return
    }
    var mult = 1
    ctx.clearRect(start + 80 + width - 1, topPlace - 2, width + 1, strokeWidth)
    if(row == 0){
      mult = i % 2 == 0 ? 1 : -1
      ctx.clearRect(start + 79 + width * 2, topPlace - 2 * mult, strokeWidth, (firstHeight/3.3) * mult)
    }
    if(row == 1){
      mult = i % 2 == 0 ? -1 : 1
      ctx.clearRect(start + 80 + width * 2, topPlace - 1 * mult, strokeWidth, (firstHeight * 1.3) * mult)
    }
    if(row == 2){
      ctx.clearRect(start + 80 + width * 2, topPlace - 2 * mult, strokeWidth, (firstHeight/1.22) * mult)
    }
    return
  }
  if(targetDivs[i].childNodes.length == 0 ) return
  if(i == 4) {
    ctx.fillRect(start + 80 + width, topPlace - 1, (width * 2 + 80) * 2 + width, strokeWidth)
    ctx.fillRect(start + 80 + width + (width * 2 + 80) * 2 + width, topPlace + 1, strokeWidth, -(firstHeight * 2.8))
    return
  }
  var mult = 1
  ctx.fillRect(start + 80 + width, topPlace - 1, width, strokeWidth)
  if(row == 0){
    mult = i % 2 == 0 ? 1 : -1
    ctx.fillRect(start + 80 + width * 2, topPlace - 1 * mult, strokeWidth, (firstHeight/3.3) * mult)
  }
  if(row == 1){
    mult = i % 2 == 0 ? -1 : 1
    ctx.fillRect(start + 80 + width * 2, topPlace - 1 * mult, strokeWidth, (firstHeight * 1.3) * mult)
  }
  if(row == 2){
    ctx.fillRect(start + 80 + width * 2, topPlace - 1 * mult, strokeWidth, (firstHeight/1.22) * mult)
  }
}

let dragger

var ANDgate = document.getElementById("ANDgate")
var ANDgate1 = document.getElementById("ANDgate1")
var ANDgate2 = document.getElementById("ANDgate2")
var ORgate = document.getElementById("ORgate")
var NANDgate = document.getElementById("NANDgate")
var NORgate = document.getElementById("NORgate")
var XORgate = document.getElementById("XORgate")

var gates = [ANDgate, ANDgate1, ANDgate2, ORgate, NANDgate, NORgate, XORgate]

// sets dragging functions to each gate
gates.forEach((gate) => {
  gate.addEventListener("mousedown", dragStart)
  gate.addEventListener("mouseup", dragEnd)  
})

var targetDivBound
var getBar = document.getElementById('getBar')
var getBarRect = document.getElementById(`getBar`).getBoundingClientRect()

function dragStart(event){
  document.addEventListener("mousemove", moveTarget)
  
  dragger = event.currentTarget
  var parent = dragger.parentElement
  if(parent.classList.contains("targetDiv")){
    parent.style.display = "none"
  }

  dragger.style.position = "absolute"

  dragger.style.left = event.clientX - 40 + "px"
  dragger.style.top = event.clientY - 40 + "px"

  var types = ["and", "or", "nand", "nor", "xor"]
  var type
  types.forEach((each) => {
    if(dragger.classList.contains(each))
    type = each
  })
  document.getElementById(`${type}div`).appendChild(dragger)
  connectLines(false)

  // var targetDiv = document.getElementById(`${type}div`)
  // targetDivBound = targetDiv.getBoundingClientRect()
}

var goodDiv = []

function dragEnd(event){
  document.removeEventListener("mousemove", moveTarget)
  if(event.clientX < getBarRect.right){
    dragger.style.position = "static"
    dragger = ""
    return
  }
  globalTargetDivs.forEach(div => {
    div.style.display = "grid"
    var rect = div.getBoundingClientRect()
    var x = event.clientX
    var y = event.clientY
    if(x > rect.left && x < rect.right && y < rect.bottom && y > rect.top){
      div.appendChild(dragger)
      dragger.style.position = "static"
      dragger.classList.add("placedGate")
      goodDiv.push(div)
    }
    div.style.display = "none"
    gates.forEach(gate => {
      if(div.contains(gate)){
        div.style.display = "grid"
      }
    })

  })
  connectLines(true)
  dragger = ''
}

var playspace = document.getElementById(`playspace`).getBoundingClientRect()

function moveTarget(event){
  // checks if moved target is outside of the play box
   if(event.clientY < playspace.top || event.clientY > playspace.bottom || event.clientX < playspace.left || event.clientX > playspace.right){
    mouseUp(dragger, event.clientX, event.clientY)
  } else if(event.clientX){
    dragger.style.left = event.clientX - 40 + "px"
    dragger.style.top = event.clientY - 40 + "px"
  }
}

// dispaches a mouse event to stop the dragging
function mouseUp(el, x, y) {
  var ev = new MouseEvent("mouseup", {
    view: window,
    clientX: x,
    clientY: y
  })
  el.dispatchEvent(ev)
}

function deleteTargetDivs(){
  for (var i = 0; i < globalTargetDivs.length; i++){
    globalTargetDivs[i].remove()
  }
  globalTargetDivs = []
}

makeLines()
function resize(){
  deleteTargetDivs()
  makeLines()
  getBarRect = document.getElementById(`getBar`).getBoundingClientRect()
  playspace = document.getElementById(`playspace`).getBoundingClientRect()
  gates.forEach(gate => {
    var types = ["and", "or", "nand", "nor", "xor"]
    var type
    types.forEach((each) => {
      if(gate.classList.contains(each))
      type = each
    })
    document.getElementById(`${type}div`).appendChild(gate)
  })
}

window.onresize = resize
