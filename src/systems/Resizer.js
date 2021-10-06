const setSize = (container, camera, renderer) => {
 
    // Set the camera's aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;

    // update the camera's frustum
    camera.updateProjectionMatrix();

    // update the size of the renderer AND the canvas
    renderer.setSize(window.innerWidth, window.innerHeight);

    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(window.devicePixelRatio);
  };

 class Resizer{
  constructor(container, camera, renderer) {
    //set initial size on load
    setSize(container, camera, renderer);

    window.addEventListener('resize', () =>{
      //set size again if resize occurs
      setSize(container, camera, renderer);

      this.onResize();
    });
  }
  //passing a hook to world.js and then adding it to renderer if resized
  onResize(){}
 }
export { Resizer };