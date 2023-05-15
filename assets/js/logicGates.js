function setCtx(ctx){
  ctx.fillStyle = `rgb(255, 255, 255)`
  ctx.strokeStyle = `rgb(255, 255, 255)`
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
var connectIterator
function drawLines(canvas, doubleLines, mar, row, texts){
  ctx = canvas.getContext("2d")
  var height = canvas.height
  var width = canvas.width * 0.2 * 0.25
  var margin = height/mar
  var start = (width * 2 + 80) * row

  doubleLines.forEach((line, j) => {
    makeDoubleLine(ctx, line, margin, width, start, texts[j])
    genDiv(width, margin * line, start)
    makeConnectingLines(ctx, width, margin * line, start, connectIterator, row)
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
  connectIterator = 0
  doubleLines.forEach((el, i) => {
    drawLines(firstCanvas, doubleLines[i], lineMargin[i], rowStarts[i], logicValues[i])
  })
  // drawLines(firstCanvas, doubleLines[0], lineMargin[0], rowStarts[1])
  // canvases.forEach((canvas, i) => {
  //   canvas.height = canvasHeights
  //   canvas.width = canvasWidths
  //   drawLines(canvas, doubleLines[i], lineMargin[i])
  // })
}

var targetDivs = []

function genDiv(width, topPlace, start){
  var canvasDiv = document.getElementById("canvasDiv");
  var div = document.createElement("div");

  // var width = canvas.width * 0.2 * 0.25
  var rect = canvasDiv.getBoundingClientRect();

  // div.style.position = "absolute";
  // div.style.borderStyle = "solid";
  // div.style.borderColor = "white";
  div.classList.add("targetDiv")
  div.draggable = false;
  div.style.top = topPlace + 20 + "px";
  div.style.left = start + width + rect.left + "px";
  div.style.display = "none"
  // div.style.height = "72px";
  // div.style.width = "72px";

  targetDivs.push(div)
  document.getElementById("playspace").appendChild(div);
  // canvasDiv.appendChild(div);
  // document.getElementsByTagName("body")[0].appendChild(div);
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

function makeConnectingLines(ctx, width, topPlace, start, i, row){
  var targetDivs = document.getElementsByClassName("targetDiv")
  if(targetDivs[i].childNodes.length == 0) return
  makeTargetDivsVisible()
  var firstHeight = targetDivs[0].getBoundingClientRect().top - targetDivs[1].getBoundingClientRect().top
  firstHeight = Math.abs(firstHeight)
  console.log(firstHeight)
  makeTargetDivsInvisible()
  console.log(row)
  var mult = 1
  ctx.fillRect(start + 80 + width, topPlace - 1, width, 2)
  if(row == 0){
    mult = i % 2 == 0 ? 1 : -1
    ctx.fillRect(start + 80 + width * 2, topPlace - 1 * mult, 2, (firstHeight/4) * mult)
  }
  if(row == 1){
    mult = i % 2 == 0 ? 1 : -1
    ctx.fillRect(start + 80 + width * 2, topPlace - 1 * mult, 2, (firstHeight/2 + 2) * mult)
  }
  if(row == 2){
    ctx.fillRect(start + 80 + width * 2, topPlace - 1 * mult, 2, 62)
  }
  // switch (i) {
  //   case 0:
  //     break;
  // }
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
  targetDivs.forEach(div => {
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
  for (var i = 0; i < targetDivs.length; i++){
    targetDivs[i].remove()
  }
  targetDivs = []
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
