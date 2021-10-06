import * as THREE from 'three'
import { PerspectiveCamera } from 'three'

function createCamera(){
    const camera = new PerspectiveCamera(35, 1, 0.1, 100);
     // fov = Field Of View
     // aspect ratio (dummy value)
     // near clipping plane
     // far clipping plane

     camera.position.set(0, 0, 10);

     return camera;
}

export {createCamera}