const canvas = document.getElementById("escapeCanvas")
console.log(canvas.style.height)
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

function makeOverlay(){
    document.getElementById("overlay").remove();
    var popUp = document.createElement("div")
    popUp.id = "overlay"
    popUp.style.maxWidth = "50%"
    popUp.style.maxHeight = "50%"
    popUp.style.backgroundColor = "red"
    popUp.style.top = `50%`
    popUp.style.left = `50%`;
    document.getElementById("escapeContainer").appendChild(popUp);
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
}

window.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    console.log(scene)

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
        console.log(intersectedObjects[0].object.id)
        console.log(intersectedObjects[0])

        if(object.id == 10 && controls.isLocked){
            controls.unlock()
            makeOverlay()
        }

        console.log("You Clicked Me!")
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
    