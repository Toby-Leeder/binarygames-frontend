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
drawOR(document.getElementById("ORgate1").getContext("2d"))

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
drawNOR(document.getElementById("NORgate1").getContext("2d"))

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
var logicValues = [[["false", "true"], ["false", "false"], ["true", "true"], ["true", "false"], ["true", "true"]], [["", ""], [" ", " "]], [["", ""]], [["", ""]], [[""]]]
var logicBoolValues = [[[false, true], [false, false], [true, true], [true, false], [true, true]], [["", ""], [" ", " "]], [["", ""]], [["", ""]]]
var logicBoolValuesCorrect = [[[false, true], [false, false], [true, true],[true, false], [true, true]], [[false, true], [true, true]], [[false, false]], [[false, true]]]

function makeDoubleLine(ctx, down, margin, width, start, text){
  setCtx(ctx)
  ctx.fillText(text[0], start + 4, down * margin - 24)
  ctx.fillRect(start, down*margin + 14, width, 2)
  ctx.fillText(text[1], start + 4, down * margin + 4)
  ctx.fillRect(start, down*margin - 16, width, 2)
}
var connectIterator = 0
var idnum = 0
function drawLines(canvas, doubleLines, mar, row, texts){
  var ctx = canvas.getContext("2d")
  var height = canvas.height
  var width = canvas.width * 0.2 * 0.25
  var margin = height/mar
  var start = (width * 2 + 80) * row
  doubleLines.forEach((line, j) => {
    makeDoubleLine(ctx, line, margin, width, start, texts[j])
    genDiv(width, margin * line, start, idnum)
    idnum++
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

  let ctx = firstCanvas.getContext("2d")
  ctx.clearRect(0, 0, firstCanvas.height, firstCanvas.width)
  doubleLines.forEach((el, i) => {
    drawLines(firstCanvas, doubleLines[i], lineMargin[i], rowStarts[i], logicBoolValues[i])
  })
  connectLines(true)
  // makeText()
}

function resetLines(){
  var canvasHeights = document.getElementById(`playspace`).getBoundingClientRect().height
  var canvasWidths = document.getElementById(`canvasDiv`).getBoundingClientRect().width
  
  firstCanvas.height = canvasHeights
  firstCanvas.width = canvasWidths

  let ctx = firstCanvas.getContext("2d")
  ctx.clearRect(0, 0, firstCanvas.height, firstCanvas.width)
  doubleLines.forEach((el, i) => {
    var ctx = firstCanvas.getContext("2d")
    var lines = doubleLines[i]
    var mar = lineMargin[i]
    var row = rowStarts[i]
    var texts = logicBoolValues[i]
    var height = firstCanvas.height
    var width = firstCanvas.width * 0.2 * 0.25
    var margin = height/mar
    var start = (width * 2 + 80) * row
    lines.forEach((line, j) => {
      makeDoubleLine(ctx, line, margin, width, start, texts[j])
    })
  })
  connectLines(true)
  setFinal()
  // makeText()
}

var globalTargetDivs = []

function genDiv(width, topPlace, start, idnum){
  var canvasDiv = document.getElementById("canvasDiv");
  var div = document.createElement("div");

  var rect = canvasDiv.getBoundingClientRect();

  // div.id = `${idnum}targetDiv`
  div.classList.add("targetDiv")
  div.draggable = false;
  div.style.top = topPlace + 63 + "px";
  div.style.left = start + width + rect.left + "px";
  // div.style.display = "none"

  globalTargetDivs.push(div)
  document.getElementById("canvasDiv").appendChild(div);
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

function makeText(){
  var canvas = firstCanvas
  var ctx = canvas.getContext("2d")
  setCtx(ctx)
  doubleLines.forEach((el, i) => {
    var lines = doubleLines[i]
    var mar = lineMargin[i]
    var row = rowStarts[i]
    var text = logicBoolValues[i]
    var height = canvas.height
    var width = canvas.width * 0.2 * 0.25
    var margin = height/mar
    var start = (width * 2 + 80) * row
    lines.forEach((line, j) => {
      ctx.fillText(text[j][0], start + 4, line * margin - 24)
      ctx.fillText(text[j][1], start + 4, line * margin + 4)
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
var ORgate1 = document.getElementById("ORgate1")
var NANDgate = document.getElementById("NANDgate")
var NORgate = document.getElementById("NORgate")
var NORgate1 = document.getElementById("NORgate1")
var XORgate = document.getElementById("XORgate")

var gates = [ANDgate, ANDgate1, ANDgate2, ORgate, ORgate1, NANDgate, NORgate, NORgate1, XORgate]

// sets dragging functions to each gate
gates.forEach((gate) => {
  gate.addEventListener("mousedown", dragStart)
  gate.addEventListener("mouseup", dragEnd)  
})

var targetDivBound
var getBar = document.getElementById('getBar')
var getBarRect = document.getElementById(`getBar`).getBoundingClientRect()

function dragStart(event){
  window.addEventListener("mousemove", moveTarget)
  console.log(`x: ${event.clientX}, y: ${event.clientY}`)
  dragger = event.currentTarget
  var parent = dragger.parentElement
  if(parent.classList.contains("targetDiv")){
    parent.style.display = "none"
  }

  dragger.style.position = "fixed"

  dragger.style.left = event.clientX - 40 + "px"
  dragger.style.top = event.clientY - 40 + "px"

  var types = ["and", "or", "nand", "nor", "xor"]
  var type
  types.forEach((each) => {
    if(dragger.classList.contains(each))
    type = each
  })
  document.getElementById(`${type}div`).appendChild(dragger)
  console.log(`x: ${dragger.style.left}, y: ${dragger.style.top}`)

  // let divs = document.getElementsByClassName("targetDiv")
  // for(let i = 0; i < divs.length; i++){
  //   if(divs[i].childNodes.length > 0){
  //     divs[i].style.display = "grid"
  //     console.log(divs[i])
  //   }
  // }
  // connectLines(false)
  checkLogic()
  resetLines()
  // var targetDiv = document.getElementById(`${type}div`)
  // targetDivBound = targetDiv.getBoundingClientRect()
}

var goodDiv = []

function dragEnd(event){
  window.removeEventListener("mousemove", moveTarget)
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
    var logicCheck = false
    if(x > rect.left && x < rect.right && y < rect.bottom && y > rect.top){
      div.appendChild(dragger)
      dragger.style.position = "static"
      dragger.classList.add("placedGate")
      goodDiv.push(div)
      // setOutput(logic(div), div)
    }
    div.style.display = "none"
    gates.forEach(gate => {
      if(div.contains(gate)){
        div.style.display = "grid"
      }
    })

  })
  checkLogic()
  resetLines()
  // makeText()
    // connectLines(true)

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
  logicBoolValues = [[[false, true], [false, false], [true, true], [true, false], [true, true]], [["", ""], [" ", " "]], [["", ""]], [["", ""]]]
  logicBoolValuesCorrect = [[[false, true], [false, false], [true, true],[true, false], [true, true]], [[false, true], [true, true]], [[false, false]], [[false, true]]]
  finalGate = ""
  deleteTargetDivs()
  makeLines()
  getBarRect = document.getElementById(`getBar`).getBoundingClientRect()
  playspace = document.getElementById(`playspace`).getBoundingClientRect()
  gates.forEach(gate => {
    document.getElementById(`${gate.classList[0]}div`).appendChild(gate)
    gate.style = ""
  })
}

window.onresize = resize
window.onscroll = resize

function logic(div){
  var gate
  if (!isNaN(parseInt(reverseString(div.firstChild.id)[0]))){
    gate = reverseString(reverseString(div.firstChild.id).slice(5))
  }
  else{
    gate = reverseString((reverseString(div.firstChild.id).slice(4)))
  }
  inputs = checkInput(div.id)
  if (gate == "AND"){
      if (inputs[0] == "true" && inputs[1] == "true"){
        return true
      }
  }
  if (gate == "OR"){
    if (inputs[0] == "true" || inputs[1] == "true"){
      return true
    }
  }
  if (gate == "NAND"){
    if (!(inputs[0] == "true" && inputs[1] == "true")){
      return true
    }
  }
  if (gate == "NOR"){
    if (!(inputs[0] == "true" || inputs[1] == "true")){
      return true
    }
  }
  if (gate == "XOR"){
    if ((inputs[0] == "true" || inputs[1] == "true") && !(inputs[0] == "true" && inputs[1] == "true")){
      return true
    }
  }
  return false
}

function reverseString(str) {
  return str.split("").reverse().join(""); 
}

function checkInput(div){
  gateNum = parseInt(div[0])
  if (gateNum <= 4){
    return logicValues[0][parseInt(div[0])];
  }
  else if (gateNum <= 6 ){
    return logicValues[1][parseInt(div[0]) - 4];
  }
  else{
    return logicValues[2][parseInt(div[0]) - 6];
  }
}

function setOutput(bool, div){
  divNum = parseInt(div.id[0])
  if(divNum < 4){
    // console.log(logicValues[1][1][divNum])
    if (bool){
      logicValues[1][1][divNum] = "true";
    }
    else{
      logicValues[1][1][divNum] = "false";
    }
    ctx = document.getElementById("firstCanvas").getContext("2d")
    setCtx(ctx)
    ctx.fillText(logicValues[1][1][0], 173, 123)
  }
  
}

let finalGate = ""

function setFinal(){
  let canvas = document.getElementById("firstCanvas")
  let ctx = canvas.getContext("2d")
  setCtx(ctx)
  ctx.fillText(finalGate, canvas.width * 0.35 + 321, canvas.height/2 - 4)
  // ctx.clearRect(0, 0, canvas.width, canvas.height)
  // ctx.fillText(out, 20, 20)
}

function checkLogic(){
  let divs = document.getElementsByClassName("targetDiv")
  let iter = 0
  for(let it = 0; it < logicBoolValues.length; it++){
    let row = logicBoolValues[it]
    row.forEach((col, i)=> {
      const rw = it + 1 // sets row in front of current row
      const halfi = Math.floor(i/2) // sets the two boxes to one box
      const modi = i % 2 // top or bottom alternates
      if(divs[iter].childNodes.length > 0){
        if(iter == 8)
          // setFinal(gateOut(col[0], col[1], divs[iter].childNodes[0].classList[0]))
          finalGate = gateOut(col[0], col[1], divs[iter].childNodes[0].classList[0])
        else if(iter == 4)
          logicBoolValues[3][0][1] = gateOut(col[0], col[1], divs[iter].childNodes[0].classList[0])
        else
          logicBoolValues[rw][halfi][modi] = gateOut(col[0], col[1], divs[iter].childNodes[0].classList[0])
      } 
      else {
        let isEmpty = "No"
        try {
          isEmpty = logicBoolValues[rw][halfi][modi] ?? "No"
        } catch {
          // trying to access array out of bounds
        }
        if(isEmpty != "No")
          if(iter == 4)
          logicBoolValues[3][0][1] = ""
          else
          logicBoolValues[rw][halfi][modi] = ""
      }
      iter++
    })
  }
}

function gateOut(top, bottom, gate){
  if((top === "") || (bottom === "")) return ""
  switch (gate) {
    case "and":
      return top && bottom

    case "or":  
      return top || bottom
    
    case "nand":
      return !(top && bottom)

    case "nor":
      return !(top || bottom)

    case "xor":
      if(!(top && bottom))
        return top || bottom
      else
        return false
  }
}

document.getElementById("checkButton").onclick = () => {
  let foundBad = false
  let c = logicBoolValuesCorrect
  logicBoolValues.forEach((row, i) => {
    row.forEach((col, j) => {
      if(col[0] != c[i][j][0]) {
        foundBad = true; console.log(col[0], c[i][j][0])
      }
      if(col[1] != c[i][j][1]){
      foundBad = true
      }
    })
  })
  if(!foundBad && finalGate)
    alert("You Win!")
  else 
    alert("You Lose!")

}
let map = document.getElementById("map")
map.addEventListener("mousedown", () => {
  let space = document.getElementById("space")
  let button = document.getElementById("checkButton")
  let img = document.getElementById("map")

  space.style.display = "none"
  button.style.display = "none"
  img.style.height = "80vh"
  img.style.width = "80vw"
})

map.addEventListener("mouseup", () => {
  let space = document.getElementById("space")
  let button = document.getElementById("checkButton")
  let img = document.getElementById("map")

  space.style.display = "block"
  button.style.display = "block"
  img.style.height = "80px"
  img.style.width = "80px"
})

function pmm(ev){
  console.log(`x: ${ev.clientX}, y: ${ev.clientY}`)
}

window.addEventListener("mousedown", (ev) => {
  pmm(ev)
  window.addEventListener("mousemove", pmm)
})
window.addEventListener("mouseup", (ev) => {
  pmm(ev)
  window.removeEventListener("mousemove", pmm)
})