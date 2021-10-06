import * as THREE from 'three';

function createCube(){
    const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

  
    const material = new THREE.MeshPhongMaterial({color: 'yellow'});
    const cube = new THREE.Mesh(geometry, material);
    cube.rotation.set(-0.5, -0.2, 0.7);
    
    return cube;
}

export {createCube};