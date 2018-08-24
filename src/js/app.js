import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh
} from "three";
import { OrbitControls } from "three/examples/js/controls/OrbitControls";
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
}

function setupCamera() {
    camera = new PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
}

function setupControls() {
    const controls = new OrbitControls(camera);
    camera.position.set(0, 20, 100);
    controls.update();
}

function setupGeometry() {
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({
        color: "red"
    });
    const cube = new Mesh(geometry, material);
    scene.add(cube);
}

function render() {
    renderer.render(scene, camera);
}

function init() {
    setupRenderer();
    setupScene();
    setupCamera();
    setupControls();
    setupGeometry();
}

init();
function animate() {
    requestAnimationFrame(animate);
    render();
}

animate();
