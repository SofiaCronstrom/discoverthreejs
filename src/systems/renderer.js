import * as THREE from 'three';

function createRenderer(){
 ////////////////////to make the pixels align antialias: true 
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.physicallyCorrectLights = true;
return renderer;
}

export {createRenderer};

