//demo
var gbLookAt = false;
var increment = true;
var incrementT = 0.0;

function main() {


    
    //step-1 get canvas from DOM
    canvas = document.getElementById("VMN");
    //document in in build variable
    //error checking
    if (!canvas) {
        console.log("CANVAS NOT FOUND");
    }
    else {
        console.log("CANVAS  FOUND");
        console.log("CANVAS  WIDTH  = " + canvas.width);
        console.log("CANVAS  HEIGHT = " + canvas.height);
    }

    canvasOriginalWidth = canvas.width;
    canvasOriginalHeight = canvas.height;


    fullScreenWidth = window.screen.width * window.devicePixelRatio;
    fullScreenHeight = window.screen.height * window.devicePixelRatio;

    //step-2 window is inbuild variable , setting events
    //first param is inbuilt registered event , second param is function name

    window.addEventListener("keydown", keyDown, false);
    window.addEventListener("mousemove", mouseMove, false);
    window.addEventListener("mousedown", mouseDown, false);
    window.addEventListener("mouseup", mouseUp, false);
    window.addEventListener("resize", resize, false);

    //step-1 get drawing context from the canvas
    gl = canvas.getContext("webgl2", { antialias: false });
    //error checking
    if (!gl) {
        console.log("WebGL2 Context Not Found");
    }
    else {
        console.log("WebGL2 Context Found");
    }
  

    initialize();
    resize();		//warm up resize
    draw();			//warm up draw

}

function initialize() {

scene1_object = new scene1();

    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    projectionMatrix = mat4.create();
    resize();
}

function draw() {

    viewMatrix = mat4.create();
    
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    scene1_object.scene1_draw(viewMatrix,projectionMatrix,canvas.width,canvas.height);
    
    requestAnimationFrame(draw, canvas);

}

function resize() {

    if (bFullScreen == true) {
        canvas.width = fullScreenWidth;
        canvas.height = fullScreenHeight;
    }
    else {
        canvas.width = canvasOriginalWidth;
        canvas.height = canvasOriginalHeight;
    }
}

function uninitialize() {

}

