const canvas = document.getElementById("escapeCanvas")
canvas.width = "1980"
canvas.height = "1080"
makeCursor()

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

function makeOverlay(type){
    document.getElementById("overlay").remove();
    var escape = document.getElementById("escapeContainer")
    switch(type){
        case "rgb":
            var popUp = document.createElement("div")
            popUp.id = "overlay"
            popUp.style.minWidth = "100%"
            popUp.style.height = "auto"
            popUp.style.top = `0%`
            popUp.style.left = `0%`;
            
            var main = document.createElement("div")
            main.classList.add("mainDiv")
            main.style.position = "relative";
            main.style.borderRadius = "10px";
            main.id = "main"

            var table = document.createElement("table")
            table.classList.add("mainTable")
            table.id = "mainTable"

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
    }
    // var popUp = document.createElement("div")
    // popUp.id = "overlay"
    // popUp.style.maxWidth = "50%"
    // popUp.style.maxHeight = "50%"
    // popUp.style.backgroundColor = "red"
    // popUp.style.top = `50%`
    // popUp.style.left = `50%`;
    // escape.appendChild(popUp);
}

import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { PointerLockControls } from '../js/PointerControls.js';


var roomLength = 20
var roomHeight = 5.5

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);

camera.position.z = 2
camera.position.y = 1.8

const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias:true
});

renderer.setPixelRatio(window.devicePixelRatio);

const gltfLoader = new GLTFLoader();
const url = 'models/csp.glb';
gltfLoader.load(url, (gltf) => {
    const root = gltf.scene;
    scene.add(root);
})

const light = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(light);   

const raycaster = new THREE.Raycaster()

const controls = new PointerLockControls( camera, document.body );
controls.connect();

camera.position.z -= 2
camera.rotation.y += Math.PI/2
camera.position.y += 1

let pos = {x: -10000, y:-10000}

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

    if (!controls.isLocked){
        scrollEnable()
    }


    move();

    renderer.render(scene, camera)
    requestAnimationFrame(render)
}
requestAnimationFrame(render)

renderer.render(scene, camera)

let raycastIds = [58, 32, 45, 50, 46]
function intersectedObjectCheck(id){
    if (raycastIds.includes(id)){
        return true
    }
    else{
        return false
    }
    // console.log(id)
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

    }
})

var forward = false;
var back = false;
var left = false;
var right = false;
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

canvas.addEventListener("click", (event) => {
    if (!controls.isLocked){
        scrollDisable()
        makeCursor();
        controls.lock();
    }
    else {
    }
});

function move(){
    if(controls.isLocked){
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
        <tr> \
            <td class="buttons" colspan="2"> \
                <button id="hintR" class="redBox">HINT</button> \
                <br><br> \
                <button id="hintG" class="greenBox" >HINT</button> \
                <br><br> \
                <button id="hintB" class="blueBox" >HINT</button> \
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
    guessText = document.getElementById("guessText");

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
            message = document.getElementById("message");

            i = 0;

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
