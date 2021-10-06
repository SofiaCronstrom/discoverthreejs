import * as THREE from 'three';

function createScene(){
    const scene = new THREE.Scene();

    scene.background = new THREE.Color('cadetblue')

    return scene;
}

export {createScene};