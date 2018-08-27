import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Color,
    AmbientLight
} from "three";
import { OrbitControls } from "three/examples/js/controls/OrbitControls";
import { GLTFLoader } from "three/examples/js/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/js/loaders/OBJLoader";
import styles from "../sass/app.scss"; //eslint-disable-line

// global variables
let renderer;
let scene;
let camera;

function setupRenderer() {
    renderer = new WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);
}

function setupScene() {
    scene = new Scene();
    scene.background = new Color(0xcccccc);
    scene.add(new AmbientLight(0x666666));
}

function setupCamera() {
    camera = new PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        3000
    );
}

function setupControls() {
    const controls = new OrbitControls(camera);
    camera.position.set(0, 120, 500);
    controls.update();
}

// function setupGeometry() {
//     const geometry = new BoxGeometry(1, 1, 1);
//     const material = new MeshBasicMaterial({
//         color: "red"
//     });
//     const cube = new Mesh(geometry, material);
//     scene.add(cube);
// }

function render() {
    renderer.render(scene, camera);
}

function loadOBJ() {
    const loader = new OBJLoader();
    loader.load(
        "../../model.obj",
        obj => {
            scene.add(obj);
        },
        xhr => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded"); //eslint-disable-line
        },
        error => {
            console.log(error, "An error happened"); //eslint-disable-line
        }
    );
}

function loadGLTF() {
    const loader = new GLTFLoader();
    loader.load(
        "../../model.gltf",
        gltf => {
            scene.add(gltf);
        },
        xhr => {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded"); //eslint-disable-line
        },
        error => {
            console.log(error, "An error happened"); //eslint-disable-line
        }
    );
}

function init() {
    setupRenderer();
    setupScene();
    setupCamera();
    setupControls();
    // loadGLTF();
    loadOBJ();
}

init();
function animate() {
    requestAnimationFrame(animate);
    render();
}

animate();
