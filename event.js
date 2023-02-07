
var XButtonDownCord;
var YButtonDownCord;
var XButtonReleaseCord;
var YButtonReleaseCord;
var deltaXCord;
var deltaYCord;
var currentRotateAngleX = 0;
var currentRotateAngleY = 0;
var currentTranslateX = 0;
var currentTranslateY = 0;
var isLButtonSet = false;
var isRotate = false;
var isTranslate = false;

function toogleFullScreen() {
    var fullScreenElement = document.fullscreenElement ||			//chrome or opera
        document.webkitFullScreenElement ||		//apple - safari
        document.mozFullScreenElement ||		//mozilla firefox
        document.msFullscreenElement ||			//internet explorer
        null;

    //if not fullscreen
    if (fullScreenElement == null) {
        if (canvas.requestFullscreen)		//checking if function exits
        {
            canvas.requestFullscreen();
        }
        else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen();
        }
        else if (canvas.mozRequestFullScreen) {
            canvas.mozRequestFullScreen();
        }
        else if (canvas.msRequestFullscreen) {
            canvas.msRequestFullscreen();
        }

        bFullScreen = true;
    }//if already fullscreen
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }

        bFullScreen = false;
    }

}


function keyDown(event) {

    switch (event.keyCode) {

    }

    switch(event.key)
    {
        case 'r':
        case 'R':
            isRotate = true;
            isTranslate = false;
            break;

        case 't':
        case 'T':
            isRotate = false;
            isTranslate = true;
            break;

        case 'f':
        case 'F':
            toogleFullScreen();
            break;
    }
  }
function mouseMove(event) {
  
    if(isLButtonSet == true)
    {
        XButtonReleaseCord = event.clientX;
        YButtonReleaseCord = event.clientY;
        deltaXCord = XButtonReleaseCord - XButtonDownCord;
        deltaYCord = YButtonReleaseCord - YButtonDownCord;
        if(isRotate == true)
        {
            currentRotateAngleX = currentRotateAngleX + (deltaXCord / 2);
            currentRotateAngleY = currentRotateAngleY + (deltaYCord / 2);
        }
        else if(isTranslate == true)
        {
            currentTranslateX = currentTranslateX + (deltaXCord / 100);
            currentTranslateY = (currentTranslateY - (deltaYCord / 100));
        }

        XButtonDownCord = XButtonReleaseCord;
        YButtonDownCord = YButtonReleaseCord;
    }

}

function mouseDown(event) {

      isLButtonSet = true;
      XButtonDownCord = event.clientX;
      YButtonDownCord = event.clientY;
}

function mouseUp(event) {
    isLButtonSet = false;
}