// import * as THREE from 'three'
// import { MapControls, OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import Stats from 'three/examples/jsm/libs/stats.module'

// import {
//     PerspectiveCamera,
//     WebGLRenderer,
//     Scene,
//     Mesh,
//     BoxBufferGeometry,
//     MeshBasicMaterial,
//     Color,
//     } from THREE;

import {World} from './world';

function main() {
const container = document.querySelector('#scene-container');
const world = new World(container);

world.render(); 


}
main();