import * as THREE from 'three';

function createRenderer(){
  
const renderer = new THREE.WebGLRenderer();
renderer.physicallyCorrectLights = true;
return renderer;
}

export {createRenderer};