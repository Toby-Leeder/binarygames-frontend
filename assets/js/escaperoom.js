// initializes the canvas
const canvas = document.getElementById("escapeCanvas")

// sets the number of pixels used for the canvas
canvas.width = "1980"
canvas.height = "1080"

// creates the player cursor overlay
makeCursor()

// creates the cursor for the player using the overlay html element
function makeCursor(){
    if(document.getElementById("overlay")){
        document.getElementById("overlay").remove();
    }
    var overlay = document.createElement("img")
    overlay.id = "overlay"
    overlay.style.top = `50%`
    overlay.style.left =  `49%`;
    overlay.src = "../images/cursor.png";
    overlay.style.maxWidth = `5%`
    document.getElementById("escapeContainer").appendChild(overlay);
}

// creates different overlays based on the type passed through
function makeOverlay(type){
    document.getElementById("overlay").remove(); // removes whatever is currently overlaying the screen
    var escape = document.getElementById("escapeContainer")
    switch(type){
        // creates tgb popup elements
        case "racer":
            var popUp1 = document.createElement("div")
            popUp1.id = "overlay"
            popUp1.style.maxWidth = "90%"
            popUp1.style.height = "auto"
            popUp1.style.top = `10%`
            popUp1.style.left = `5%`;

            var link1 = document.createElement('link');
            link1.rel = 'preconnect';
            link1.href = 'https://fonts.googleapis.com/';

            var link2 = document.createElement('link');
            link2.rel = 'preconnect';
            link2.href = 'https://fonts.gstatic.com/';
            link2.setAttribute('crossorigin', '');

            var link3 = document.createElement('link');
            link3.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap';
            link3.rel = 'stylesheet';

            var link4 = document.createElement('link');
            link4.rel = 'stylesheet';
            link4.href = 'assets/css/racerStyles1.css';

            var div1 = document.createElement('div');
            div1.className = 'wrapper';
            div1.id = 'wrapper';

            var div2 = document.createElement('div');
            div2.className = 'menu';

            var div3 = document.createElement('div');
            div3.className = 'menu-title';
            div3.textContent = 'B1NARY RACER ⪢⪢⪢';

            var div5 = document.createElement('div');
            div5.className = 'splash';

            var h1 = document.createElement('h1');
            h1.className = 'splash-header';
            h1.textContent = 'click here to start';

            var div6 = document.createElement('div');
            div6.className = 'traffic-light';
            div6.id = 'traffic-light';

            var div7 = document.createElement('div');
            div7.className = 'light red';

            var div8 = document.createElement('div');
            div8.className = 'light yellow';

            var div9 = document.createElement('div');
            div9.className = 'light green';

            var div10 = document.createElement('div');
            div10.className = 'end-screen';
            div10.id = 'end-screen';
            div10.textContent = 'TIME TAKEN: ';
            div10.style.display = 'none';

            var p = document.createElement('p');

            var span1 = document.createElement('span');
            span1.id = 'end-time';

            var div11 = document.createElement('div');
            div11.className = 'top-container';
            div11.id = 'top-container';

            var div12 = document.createElement('div');
            div12.className = 'questions-completed';
            div12.textContent = 'QUESTIONS COMPLETED: ';

            var div13 = document.createElement('div');
            div13.id = 'questions';
            div13.className = 'questions-completed';
            div13.textContent = '0';

            var div14 = document.createElement('div');
            div14.className = 'questions-completed';
            div14.textContent = '/ 10';

            var div15 = document.createElement('div');
            div15.className = 'time-container';

            var div16 = document.createElement('div');
            div16.className = 'time-elapsed';
            div16.textContent = 'TIME : ';

            var div17 = document.createElement('div');
            div17.className = 'time-elapsed';
            div17.id = 'seconds';
            div17.textContent = '00 :';

            var div18 = document.createElement('div');
            div18.className = 'time-elapsed';
            div18.id = 'mins';
            div18.textContent = '00';

            var div19 = document.createElement('div');
            div19.className = 'progressbar';
            div19.id = 'progressbar1';

            var div20 = document.createElement('div');
            div20.className = 'inner';

            var div21 = document.createElement('div');
            div21.className = 'image-container';
            div21.id = 'image-container';

            var road = document.createElement('img');
            road.src = "../images/BRG_road.png";
            road.alt = 'road';

            var div22 = document.createElement('div');
            div22.className = 'lines-body';

            var canvas = document.createElement('canvas');
            canvas.id = 'spriteContainer';
            canvas.className = 'carContainer';

            var carImg = document.createElement('img');
            carImg.className = 'car1';
            carImg.id = 'car';
            carImg.src = 'images/carSprites.png';

            var div23 = document.createElement('div');
            div23.className = 'bottom-UI';
            div23.id = 'bottom-UI';

            var div24 = document.createElement('div');
            div24.className = 'questions-given';
            div24.id = 'questions-container';
            div24.textContent = 'QUESTIONS HERE';

            var div25 = document.createElement('div');
            div25.className = 'button-container';

            var button1 = document.createElement('button');
            button1.className = 'answer-button1';
            button1.id = 'answer-button1';
            button1.textContent = '-';

            var button2 = document.createElement('button');
            button2.className = 'answer-button2';
            button2.id = 'answer-button2';
            button2.textContent = '-';

            var button3 = document.createElement('button');
            button3.className = 'answer-button3';
            button3.id = 'answer-button3';
            button3.textContent = '-';

            var button4 = document.createElement('button');
            button4.className = 'answer-button4';
            button4.id = 'answer-button4';
            button4.textContent = '-';

            var div26 = document.createElement('div');
            div26.id = 'progressbar';

            // Append the elements to the appropriate parent elements
            div2.appendChild(div3);

            div5.appendChild(h1);

            div6.appendChild(div7);
            div6.appendChild(div8);
            div6.appendChild(div9);

            div10.appendChild(p);
            p.appendChild(span1);

            div11.appendChild(div12);
            div11.appendChild(div13);
            div11.appendChild(div14);
            div11.appendChild(div15);
            div15.appendChild(div16);
            div15.appendChild(div17);
            div15.appendChild(div18);

            div19.appendChild(div20);

            div21.appendChild(road);
            div21.appendChild(div22);
            div21.appendChild(canvas);
            canvas.appendChild(carImg);

            div23.appendChild(div24);
            div23.appendChild(div25);
            div25.appendChild(button1);
            div25.appendChild(button2);
            div25.appendChild(button3);
            div25.appendChild(button4);

            div1.appendChild(div2);
            div1.appendChild(div5);
            div1.appendChild(div6);
            div1.appendChild(div10);
            div1.appendChild(div11);
            div11.appendChild(div19);
            div11.appendChild(div21);
            div1.appendChild(div23);
            div1.appendChild(div26);

            popUp1.appendChild(div1); // Append div1 to popUp1

            // Append the elements to the document's body
            document.head.appendChild(link1);
            document.head.appendChild(link2);
            document.head.appendChild(link3);
            document.head.appendChild(link4);

            escape.appendChild(popUp1)

            // Load the external JavaScript file
            const script = document.createElement('script');
            script.src = '../assets/js/racer-script1.js';
            document.body.appendChild(script);
            break;


        case "rgb":
            var popUp = document.createElement("div")
            popUp.id = "overlay"
            popUp.style.maxWidth = "90%"
            popUp.style.height = "auto"
            popUp.style.top = `10%`
            popUp.style.left = `5%`;
            
            var main = document.createElement("div")
            main.classList.add("mainDiv")
            main.style.position = "relative";
            main.style.borderRadius = "10px";
            main.style.maxHeight = "50%"
            main.id = "main"

            var table = document.createElement("table")
            table.classList.add("mainTable")
            table.id = "mainTable"
            // table.style.display = "flex"

            var tr = document.createElement("tr")

            var td = document.createElement("td")
            td.classList.add("colorBox")
            td.id = "colorBox"
            td.rowSpan = "4"
            td.style.height = "12em"
            td.colSpan = "4"

            tr.appendChild(td)
            table.appendChild(tr)
            main.appendChild(table)
            popUp.appendChild(main)
            escape.appendChild(popUp)

            // var button = document.createElement("button")
            // button.onclick = function(){startRGB()}
            // button.style.fontSize = "4rem"
           
            // document.getElementById("colorBox").appendChild(button)
            console.log("rgbing")
            startRGB(); 
            break;
        
        // create base64 popup elements
        case "b64":
            var popUp = document.createElement("div")
            popUp.id = "overlay"
            popUp.style.minWidth = "90%"
            popUp.style.maxHeight = "90%"
            popUp.style.top = `3%`
            popUp.style.left = `5%`;

            var main = document.createElement("div")
            main.id = "bombDefusal"
            main.style.height = "27em"
            main.classList.add("gameSection")
            main.style.backgroundColor = "grey"
            main.style.border = "1px black"

            var header = document.createElement("h2")
            header.innerHTML = "Bomb Defusal"

            var bomb = document.createElement("div")
            bomb.id = "bomb"
            bomb.classList.add("container")

            var container2 = document.createElement("div")
            container2.id = "container2"
            container2.style.width = "100%"
            container2.style.height = "80%"

            var timerContainer = document.createElement("div")
            timerContainer.classList.add("timerContainer")
            timerContainer.style.height = "40%"

            var timer = document.createElement("div")
            timer.id = "timer"
            timer.classList.add("timer")
            timer.innerHTML = "12:00"

            timerContainer.appendChild(timer)
            container2.appendChild(timerContainer)

            var codeContainer = document.createElement("div")
            codeContainer.classList.add("codeContainer")

            var defusal = document.createElement("div")
            defusal.style.height = "100%"
            defusal.classList.add("defusal")

            var screen = document.createElement("screen")
            screen.innerHTML = "DECODE THE FOLLOWING"

            var span = document.createElement("span")
            span.id = "encodedBox"

            var codeInput = document.createElement("div")
            codeInput.id = "codeInput"
            codeInput.classList.add("codeInput")
            codeInput.innerHTML = "____"

            screen.appendChild(span)
            defusal.appendChild(screen)
            defusal.appendChild(codeInput)

            var keypadDiv = document.createElement("div")
            keypadDiv.style.height = '100%';
            keypadDiv.classList.add("keypad")

            var row1 = document.createElement("div")
            row1.classList.add("row")

            var row2 = document.createElement("div")
            row2.classList.add("row")

            var row3 = document.createElement("div")
            row3.classList.add("row")

            var row4 = document.createElement("div")
            row4.classList.add("row")

            for (var i = 1; i <= 9; i++){
                var data = document.createElement("div")
                data.className = "data";
                data.innerHTML = i
                data.id = `data${i}`
                if (i <= 3){
                    row1.appendChild(data)
                }
                else if (i <= 6){
                    row2.appendChild(data)
                }
                else {
                    row3.appendChild(data)
                }
            }

            var back = document.createElement("div")
            back.classList.add("data")
            back.onclick = function(){keypad('back')}
            back.innerHTML = "⌫"

            var data0 = document.createElement("div")
            data0.classList.add("data")
            data0.onclick = function(){keypad('back')}
            data0.innerHTML = "0"

            var enter = document.createElement("div")
            enter.classList.add("data")
            enter.onclick = function(){keypad('enter')}
            enter.innerHTML = "↩"

            row4.appendChild(back)
            row4.appendChild(data0)
            row4.appendChild(enter)

            keypadDiv.appendChild(row1)
            keypadDiv.appendChild(row2)
            keypadDiv.appendChild(row3)
            keypadDiv.appendChild(row4)

            codeContainer.appendChild(defusal)
            codeContainer.appendChild(keypadDiv)

            container2.appendChild(codeContainer)

            var container3 = document.createElement("div")
            container3.classList.add("container3")

            var options1 = document.createElement("div")
            options1.classList.add("options1")
            options1.onclick = function(){modalOpen('base64')}
            options1.innerHTML = "BASE64"

            var options2 = document.createElement("div")
            options2.classList.add("options2")
            options2.onclick = function(){modalOpen('ascii')}
            options2.innerHTML = "ASCII"

            var options3 = document.createElement("div")
            options3.classList.add("options3")
            options3.onclick = function(){modalOpen('notepad')}
            options3.innerHTML = "NOTEPAD"

            container3.appendChild(options1)
            container3.appendChild(options2)
            container3.appendChild(options3)

            bomb.appendChild(container2)
            bomb.appendChild(container3)

            main.appendChild(header)
            main.appendChild(bomb)

            // thanks ChatGPT!
            // Function to create modal element with given ID and class
            function createModalElement(id, className) {
                var divElement = document.createElement("div");
                divElement.id = id;
                divElement.className = className;
                return divElement;
            }
            
            // Function to create span element with given onclick function and class
            function createSpanElement(onclickFunction, className) {
                var spanElement = document.createElement("span");
                spanElement.onclick = onclickFunction;
                spanElement.className = className;
                spanElement.innerHTML = "&times;";
                return spanElement;
            }
            
            // Function to create img element with given class and src
            function createImgElement(className, src) {
                var imgElement = document.createElement("img");
                imgElement.className = className;
                imgElement.src = src;
                return imgElement;
            }
            
            // Function to create textarea element with given cols and rows
            function createTextareaElement(cols, rows) {
                var textareaElement = document.createElement("textarea");
                textareaElement.cols = cols;
                textareaElement.rows = rows;
                return textareaElement;
            }
            
            // Create the first modal
            var base64Modal = createModalElement("base64", "modal");
            var base64Span = createSpanElement(function() {
                modalClose('base64');
            }, "close");
            var base64Img = createImgElement(
                "modal-content",
                "https://github.com/Azeem-Khan1/fastpages-project/assets/111464932/50b6a1db-13ef-4403-ba76-3714a4a1363e"
            );
            base64Modal.appendChild(base64Span);
            base64Modal.appendChild(base64Img);
            
            // Create the second modal
            var asciiModal = createModalElement("ascii", "modal");
            var asciiSpan = createSpanElement(function() {
                modalClose('ascii');
            }, "close");
            var asciiImg = createImgElement(
                "modal-content",
                "https://github.com/Azeem-Khan1/fastpages-project/assets/111464932/683ec7fa-03d8-4a7c-aafd-1133b7ccc7af"
            );
            asciiModal.appendChild(asciiSpan);
            asciiModal.appendChild(asciiImg);
            
            // Create the third modal
            var notepadModal = createModalElement("notepad", "modal");
            var notepadSpan = createSpanElement(function() {
                modalClose('notepad');
            }, "close");
            var notepadDiv = document.createElement("div");
            notepadDiv.className = "modal-content";
            var notepadTextarea = createTextareaElement(100, 25);
            notepadDiv.appendChild(notepadTextarea);
            notepadModal.appendChild(notepadSpan);
            notepadModal.appendChild(notepadDiv);
            
            // Append the modals to the document body
            main.appendChild(base64Modal);
            main.appendChild(asciiModal);
            main.appendChild(notepadModal);
            
            popUp.appendChild(main)

            escape.appendChild(popUp)    

            // Thanks chat gpt
            for (var i = 1; i <= 9; i++) {
                (function (num) {
                  document.getElementById(`data${num}`).onclick = function () { // necessary because of javascript compiler scope or order or something, without this immediately invoked function expression the onclick would be set after i finishes counting up, so the buttons all added 10
                    keypad(num);
                  };
                })(i);
              }
              
            
            b64difficultySelect(5)
            break;
    }
}

// threejs and addons import
import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { PointerLockControls } from '../js/PointerControls.js';

// initializes threejs scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);

// sets the initial position of the camera
camera.position.z = 0
camera.position.y = 2.8
camera.rotation.y += Math.PI/2

// initializes three renderer
const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias:true
});

// sets the pixel ratio of the renderer to match the pixel ratio of the user's screen
renderer.setPixelRatio(window.devicePixelRatio);

// initializes GLTFloader object
const gltfLoader = new GLTFLoader();

// url to the escape room model
const url = 'models/csp.glb';

// loads the model using the gltf loader 
gltfLoader.load(url, (gltf) => {
    const root = gltf.scene;
    scene.add(root);
})

// creates the scene lighting
const light = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(light);   

// initializes raycaster object
const raycaster = new THREE.Raycaster()

// initializes pointer lock controls object
const controls = new PointerLockControls( camera, document.body );
controls.connect();

let oldObject
let oldObjectColor
let oldObject2
let oldObjectColor2

function render(){

    raycaster.setFromCamera({x: 0, y:0}, camera);

    const intersectedObjects = raycaster.intersectObjects(scene.children);

    if(oldObject){
        oldObject.object.material.color = oldObjectColor
        oldObject = undefined
    }

    if (intersectedObjects.length && intersectedObjectCheck(intersectedObjects[0].object.id)) {
        oldObject = {...intersectedObjects[0]}
        oldObjectColor ={...intersectedObjects[0].object.material.color}
        intersectedObjects[0].object.material.color = new THREE.Color(0xDDDDDD);
    }

    // enablse scrolling whenever the controls are not locked
    if (!controls.isLocked){
        scrollEnable()
    }

    // movement funciton call
    move();
    
    // render loop
    renderer.render(scene, camera)
    requestAnimationFrame(render)
}
requestAnimationFrame(render)

// main threejs render
renderer.render(scene, camera)

// object id whitelist for highlighting when raycasted
let raycastIds = [58, 32, 45, 50, 46]

// function to check if the object is included in the whitelist
function intersectedObjectCheck(id){
    if (raycastIds.includes(id)){
        return true
    }
    else{
        return false
    }
}

window.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();

    raycaster.setFromCamera({
        x: 0,
        y: 0
    }, camera);

    const intersectedObjects = raycaster.intersectObjects(scene.children);

    if(oldObject){
        oldObject.object.material.color = oldObjectColor
        oldObject = undefined
    }

    if (intersectedObjects.length) {
        let object = intersectedObjects[0].object
        oldObject = {...intersectedObjects[0]}
        oldObjectColor ={...intersectedObjects[0].object.material.color}
        const color = new THREE.Color("hsl(0, 100%, 50%)");
        intersectedObjects[0].object.material.color = {isColor: true, r:0, g:1, b:0}
        intersectedObjects[0].object.material.color = color

        if(object.id == 58 && controls.isLocked){
            controls.unlock()
            makeOverlay("rgb")
        }

        else if(object.id == 50 && controls.isLocked){
            controls.unlock()
            makeOverlay("b64")
        }
        
        else if(object.id == 45 && controls.isLocked){
            controls.unlock()
            makeOverlay("racer")
        }

        else if(object.id == 46 && controls.isLocked){
            controls.unlock()
            makeOverlay("racer")
        }
    }
})

// global movement variable definition
var forward = false;
var back = false;
var left = false;
var right = false;

// event listener to check for starting movement by pressing WASD
document.addEventListener("keydown", (event) => {
    switch (event.code) {
        case 'KeyW':
            forward = true
            break
        case 'KeyA':
            left = true
            break
        case 'KeyS':
            back = true
            break
        case 'KeyD':
            right = true
            break
    }
});

// event listener to check for stopping movement by lifting up WASD
document.addEventListener("keyup", (event) => {
    switch (event.code) {
        case 'KeyW':
            forward = false
            break
        case 'KeyA':
            left = false
            break
        case 'KeyS':
            back = false
            break
        case 'KeyD':
            right = false
            break            
    }
})

// event listener to detect a click on the canvas which removes any pop up and activates the pointerlock controls
canvas.addEventListener("click", (event) => {
    if (!controls.isLocked){
        scrollDisable()
        makeCursor();
        controls.lock();
    }
    else {
    }
});

// function run during every render cycle, reads global variabls to check whether to run move functions or not.
function move(){
    if(controls.isLocked){ // First checks if the player is in the pointer control
        if (forward){
            controls.moveForward(0.1);
        }
        if (back){
            controls.moveBackward(0.1);
        }
        if (right){
            controls.moveRight(0.1);
        }
        if (left){
            controls.moveLeft(0.1);
        }   
    }
}

function scrollDisable() {
    // To get the scroll position of current webpage
    var topScroll = window.pageYOffset || document.documentElement.scrollTop;
    var leftScroll = window.pageXOffset || document.documentElement.scrollLeft;
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(leftScroll, topScroll);
            };
    }
    
function scrollEnable() {
    window.onscroll = function() {};
}
    

/* 
*
*  RGB CODE
*
*/



// Represents total rounds of guessing, will be changeable at a menu later.
var maxColors = 3;
var colorsChecked = 0;
var totalSum = 0;
var hints = 0;
var rgb = [0, 0, 0];
var submit = "";
const scoreMultiplier = 1000;

const buttons = ["hintR", "hintG", "hintB"];

// I am so sorry. To my Scrum Team, Mr. Mortensen, and Mr. Yeung.
const defaultTable = `
        <tr> \
            <td class="colorBox" id="colorBox" rowspan="4" colspan="2"> \
                <span id="mainColorBox"></span> \
                <br> \
                <span id="subColorBox" style="font-size:.5em"></span> \
            </td> \
            <td id="textBox" class="textBox" colspan="2"> \
                <br> \
                <b id="message">Guess the RGB value of the color at left.</b> \
                <br> \
            </td> \
        </tr> \
        <tr style="display: flex;"> \
            <td>
                <button id="hintR" class="redBox">HINT</button> \
            </td>
            <td>
                <button id="hintG" class="greenBox" >HINT</button> \
            </td>
            <td>
                <button id="hintB" class="blueBox" >HINT</button> \
            </td>

            <td class="buttons" colspan="2"> \
                <br><br> \
            </td> \
        </tr> \
        <tr> \
            <td colspan="2"> \
                <input id="inputBox" placeholder="Enter R, G, B here"> \
            </td> \
        </tr> \
        <tr> \
            <td style="width:25%"> \
                <span id="infoText"> \
                    <b>Score: </b><span id="scoreText">0</span> \
                    <br>
                    <b>Guesses: </b><span id="guessText">0/10</span> \
                    <br> \
                    <b>Avg. Acc.: </b><span id="accText">N/A</span> \
                    <br> \
                    <b>Hints: </b><span id="hintText">0/3</span> \
                    <br> \
                </span> \
            </td>  \
            <td> \
                <button class="submit" id="submitButton" >SUBMIT</button> \
            </td> \
        </tr> \
        `;

function startRGB() {
    const table = document.getElementById("mainTable");
    // table.innerHTML = difficultySelectTable;
    difficultySelect(5, table);
    console.log("starting")
    document.getElementById("hintR").onclick = function(){hint('red')}
    document.getElementById("hintG").onclick = function(){hint('green')}
    document.getElementById("hintB").onclick = function(){hint('blue')}
    document.getElementById("submitButton").onclick = function(){checkColor()}
}

function difficultySelect(count, table) {
    maxColors = count;
    table.innerHTML = defaultTable;
    var guessText = document.getElementById("guessText");

    if (maxColors == "infinite") {
        maxColors = "∞";
        guessText.innerHTML = "0/∞";
    } else {
        guessText.innerHTML = colorsChecked + "/" + maxColors;
    }

    submit = document.getElementById("submitButton");

    document
        .getElementById("inputBox")
        .addEventListener("keydown", function () {
            if (event.key === "Enter") {
                submit.click();
            }
        });

    getNewRgb();
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNewRgb() {
    for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Math.random() * 256);
    }

    var newRgb = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";

    var colorStyle = document.getElementById("colorBox").style;

    colorStyle.backgroundColor = newRgb;
    colorStyle.borderLeft = "1px solid " + newRgb;
    colorStyle.borderBottom = "1px solid " + newRgb;
}

function calculateAcc(input) {
    var inputList = input.split(",");
    var sum = 0;
    var guess;

    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i][0] == " ") {
            guess = Number(inputList[i].slice(1));
        } else {
            guess = Number(inputList[i]);
        }

        var actual = rgb[i];

        sum += 100 - 100 * Math.abs((guess - actual) / 255);
    }

    colorsChecked += 1;
    totalSum += sum;
    return sum / 3;
}

function calculateAvgAcc() {
    return totalSum / (3 * colorsChecked);
}

function calculateScore(input) {
    var inputList = input.split(",");
    var sum = 0;
    var guess;

    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i][0] == " ") {
            guess = Number(inputList[i].slice(1));
        } else {
            guess = Number(inputList[i]);
        }

        var actual = rgb[i];

        sum += 100 - 100 * Math.abs((guess - actual) / 255);
    }

    return scoreMultiplier * (sum / 3);
}

function calculateTotalScore() {
    return scoreMultiplier * calculateAvgAcc();
}

function validateInput(input) {
    const format =
        /([$01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s?([$01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s?([$01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/;

    return format.test(input);
}

function getOppositeRgb(rgb) {
    var newList = [];
    var color;
    
    if (Array.isArray(rgb)) {
        for (let i = 0; i < rgb.length; i++) {
            newList.push(255 - rgb[i]);
        }
    } else {
        var rgbList = rgb.split(",");

        for (let i = 0; i < rgbList.length; i++) {
            if (rgbList[i][0] == " ") {
                color = Number(rgbList[i].slice(1));
            } else {
                color = Number(rgbList[i]);
            }

            newList.push(255 - color);
        }
    }

    return "rgb(" + newList[0] + ", " + newList[1] + ", " + newList[2] + ")";
}

function checkColor() {
    var input = document.getElementById("inputBox").value;

    if (!validateInput(input)) {
        return alert(
            "Invalid input: Please enter in the following format\n255, 255, 255"
        );
    }

    var oppositeReal = getOppositeRgb(rgb);
    var oppositeGuess = getOppositeRgb(input);

    document.getElementById("mainColorBox").style.color = oppositeReal;
    document.getElementById("subColorBox").style.color = oppositeReal;

    document.getElementById("subColorBox").innerHTML =
        " \
    <b>Accuracy: </b>" +
        calculateAcc(input).toFixed(2) +
        "% \
    <br> \
    <b>Score: </b>+" +
        calculateScore(input).toFixed(0);

    document.getElementById("guessText").innerHTML =
        colorsChecked + "/" + maxColors;
    document.getElementById("accText").innerHTML =
        calculateAvgAcc().toFixed(2) + "%";
    document.getElementById("scoreText").innerHTML =
        calculateTotalScore().toFixed(0);

    submit.style.backgroundColor = "rgb(" + input + ")";
    submit.style.color = oppositeGuess;
    submit.style.border = "1px solid " + oppositeGuess;

    if (colorsChecked == maxColors) {
        document.getElementById("message").innerHTML =
            'Game over! See your color in the "NEXT" button.';
        submit.innerHTML = "FINISH";
        submit.onclick = function () {
            makeCursor();
            controls.lock();
        };
    } else {
        document.getElementById("message").innerHTML =
            'See your color in the "NEXT" button.';
        submit.innerHTML = "NEXT";
        submit.onclick = function () {
            next();
        };
    }
}

async function hint(color) {
    var index
    var id
    if (color == "red") {
        index = 0;
        id = "hintR";
    } else if (color == "green") {
        index = 1;
        id = "hintG";
    } else {
        index = 2;
        id = "hintB";
    }

    var button = document.getElementById(id);

    if (button.innerHTML.slice(0, 4) == "HINT") {
        if (hints == 3) {
            var message = document.getElementById("message");

            var i = 0;

            while (i < 3) {
                message.innerHTML = "";
                await sleep(200);
                message.innerHTML = "You have run out of hints!";
                await sleep(200);
                i += 1;
            }
        } else {
            button.innerHTML = id.slice(4) + " = " + rgb[index];
            hints += 1;
            document.getElementById("hintText").innerHTML = hints + "/3";
        }
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function next() {
    submit.innerHTML = "SUBMIT";
    submit.style.backgroundColor = "transparent";
    submit.style.borderColor = "transparent";
    submit.onclick = function () {
        checkColor();
    };
    document.getElementById("mainColorBox").innerHTML = "";
    document.getElementById("subColorBox").innerHTML = "";
    document.getElementById("inputBox").value = "";
    document.getElementById("message").innerHTML =
        "Guess the RGB value of the color at left.";

    for (let i = 0; i < buttons.length; i++) {
        var button = document.getElementById(buttons[i]);

        if (button.innerHTML.slice(0, 4) != "HINT") {
            button.innerHTML = "HINT";
        }
    }

    getNewRgb();
}

/* 
*
*  BASE64 CODE
*
*/

// Create global variable for guess
var codeGuess = "";

// Create global variable for initial minutes
var initialMinutes = "";

function b64random(min, max) {
    // Round up minimum
    min = Math.ceil(min);

    // Round down maximum
    max = Math.floor(max);

    // Get random integer between minimum and maximum (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCode() {
    // Create variable for unencoded code to be used later
    var unencoded = "";

    // Concatenate 4 random digits to unencoded variable to create code
    for (let i = 0; i < 4; i++) {
        unencoded += b64random(0, 9).toString();
    }

    // Encode the 4 digit code using JavaScript's btoa() function, define as variable for later use
    var encoded = btoa(unencoded);

    // Return the encoded code
    return encoded;
}

function keypad(input) {
    // Create variable for text element in HTML for easy access
    codeInput = document.getElementById("codeInput");

    // Create variable for number of digits already guessed
    var digits = codeGuess.length;

    // Create array for new guess
    var newGuess = codeInput.innerHTML.split("");

    // If the enter button was pressed, run enter() function
    if (input == "enter") {
        // If there are not enough digits, do nothing
        if (digits != 4) {
            return;
        }

        // If there are 4/4 digits, enter the guessed code
        else {
            enter();
        }
    }

    // If the back button was pressed, remove the previous digit
    else if (input == "back") {
        // If there is nothing to delete, do nothing
        if (digits == 0) {
            return;
        }

        // Remove item in array
        newGuess[digits - 1] = "_";

        // Update GUI to match new guess by setting innerHTML equal to the array as a string
        codeInput.innerHTML = newGuess.join("");

        // Update guess by removing last digit
        codeGuess = codeGuess.slice(0, digits - 1);
    }

    // If a number was pressed...
    else {
        // Don't add another digit to the guess if there are already 4
        if (digits == 4) {
            return;
        }

        // Change appropriate item in array to match new guess
        newGuess[digits] = input;

        // Update GUI to match new guess by setting innerHTML equal to the array as a string
        codeInput.innerHTML = newGuess.join("");

        // Update guess with new digit
        codeGuess += input;
    }
}

function enter() {
    // If the code equals the unencoded code then win, otherwise win
    if (codeGuess == atob(encoded)) {
        // Use atob instead of a variable for unencoded to better hide it from inspect element
        win();
    } else {
        loss("wrong code");
    }
}

function b64difficultySelect(n) {

    // Start the timer before making game visible to avoid showing default time of 12:00
    countdown(n);

    // Make actual game visible
    document.getElementById("bomb").style.display = "";

    // Generate a code and display it on the UI
    document.getElementById("encodedBox").innerHTML = generateCode();
}

function modalOpen(type) {
    // Open modal images with parameter for which one
    document.getElementById(type).style.display = "block";
}

function modalClose(type) {
    // Close modal images with parameter for which one
    document.getElementById(type).style.display = "none";
}

function updateTime(type, timerArray, time) {
    // Update indexes of timer based on whether minutes or seconds
    if (type == "min") {
        var a = 0;
        var b = 1;
    } else if (type == "sec") {
        var a = 3;
        var b = 4;
    }

    // Turn time into a string then an array
    time = time.toString().split("");

    // Update timer list to match time, accounting for 2 digit time amounts
    if (time.join("") < 10) {
        timerArray[a] = 0;
        timerArray[b] = time[0];
    } else {
        timerArray[a] = time[0];
        timerArray[b] = time[1];
    }
}

function countdown(maxMinutes) {
    // Update initial minutes
    initialMinutes = maxMinutes;

    // Define variable for the UI timer for easy use
    var timer = document.getElementById("timer");

    // Separate minutes left on timer from maximum minutes
    var minutes = maxMinutes;

    // Define seconds
    var seconds = 0;

    // Turn the current values of the timer into an array (They can be anything at the start)
    var timerArray = timer.innerHTML.split("");

    // Define iterations for the amount of times the function loops
    var iterations = 0;

    // Initialize timer on UI instead of just allowing loop to do it because otherwise it would take 1 sec

    // Update the timerArray to match minutes using function
    updateTime("min", timerArray, minutes);

    // Update the UI timer to match the array
    timer.innerHTML = timerArray.join("");

    var secondInterval = setInterval(function () {
        if (iterations % 60 == 0) {
            // Iterations = seconds passed, thus maxMinutes * 60 = maximum iterations for the timer to complete
            if (iterations == maxMinutes * 60) {
                // Lose the game due to time up
                loss("time");

                // Return nothing to stop the rest of the loop from running
                return;
            }

            // Pass one minute if 60 iterations (seconds) pass
            minutes -= 1;

            // Update timerArray to match minutes
            updateTime("min", timerArray, minutes);

            // Update the UI timer to match the array
            timer.innerHTML = timerArray.join("");
        }

        // Add one iteration
        iterations++;

        // If seconds is 0 then reset to 60 after subtracting a minute
        if (seconds == 0) {
            seconds = 60;
        }

        // Count down one second per iteration
        seconds -= 1;

        // Same process as minutes but for seconds
        timerArray = timer.innerHTML.split("");

        updateTime("sec", timerArray, seconds);

        timer.innerHTML = timerArray.join("");
    }, 1000);
}

// Restart function instead of location.reload() to same memory instead of refreshing page
function restart(type) {
    // Hide win or loss screen
    document.getElementById(type + "Screen").style.display = "none";

    // Show start screen
    document.getElementById("startScreen").style.display = "";

    // Reset timer to default
    document.getElementById("timer").innerHTML = "00:00";

    // Reset inputted code to default
    codeGuess = "";

    // Reset inputted code on UI to default
    document.getElementById("codeInput").innerHTML = "____";
}

function win() {
    // Get time of win before hiding game UI
    time = document.getElementById("timer").innerHTML;

    // Stop countdown
    clearInterval(secondInterval);

    // Hide game UI
    document.getElementById("bomb").style.display = "none";

    // Show win screen
    document.getElementById("winScreen").style.display = "";

    // Show winning time from timer
    document.getElementById("winTime").innerHTML = time;

    // Show correct code
    document.getElementById("winCode").innerHTML = atob(encoded);
}

function loss(type) {
    // Stop the timer
    clearInterval(secondInterval);

    // Get time of loss before hiding game UI
    var time = document.getElementById("timer").innerHTML;

    // Define initial time
    var initialTime = ["0", "0", ":", "0", "0"];

    // Define minutes as initial minutes using old code
    var minutes = initialMinutes;

    // Hide game UI
    document.getElementById("bomb").style.display = "none";

    // Show loss screen
    document.getElementById("lossScreen").style.display = "";

    // Show correct code
    document.getElementById("lossCode").innerHTML = atob(encoded);

    // If reason for losing is wrong code, show time of loss
    if (type == "wrong code") {
        // Show winning time from timer
        document.getElementById("lossTime").innerHTML = time;

        // Make loss message match
        document.getElementById("lossText").innerHTML = "TIME REMAINING:";
    }

    // If reason for losing is time, show initial time
    else if (type == "time") {
        // Update minutes of initial time to match
        updateTime("min", initialTime, minutes);

        // Update the text to match the array
        document.getElementById("lossTime").innerHTML = initialTime.join("");

        // Make loss message match
        document.getElementById("lossText").innerHTML = "TIME TAKEN:";
    }
}

function showTab(difficulty) {
    // Define a list for the different difficulty levels
    var difficulties = ["easy", "medium", "hard"];

    // Iterate through each difficulty
    for (let i = 0; i < difficulties.length; i++) {
        // Get the specific tab for the difficulty
        var tab = document.getElementById(difficulties[i] + "Tab");

        // If the difficulty matches the one clicked, darken the background, and show leaderboard
        if (i == difficulty) {
            tab.style.backgroundColor = "rgb(123, 123, 123)";
        }

        // Otherwise set to default color and hide other leaderboards
        else {
            tab.style.backgroundColor = "rgb(153, 153, 153)";
        }
    }

    document.getElementById("leaderboard").innerHTML =
        makeLeaderboard(difficulty);
}

function makeLeaderboard(difficulty) {
    var leaderboard = {};

    fetch;
}
