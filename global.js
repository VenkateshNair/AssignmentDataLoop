//declaring an enum
const WebGLMacros =
{
	VOXEL_ATTRIBUTE_VERTEX: 0,
	VOXEL_ATTRIBUTE_COLOR: 1,
	VOXEL_ATTRIBUTE_NORMAL: 2,
	VOXEL_ATTRIBUTE_TEXCORD: 3,
	VOXEL_ATTRIBUTE_BONEID: 4,
	VOXEL_ATTRIBUTE_WEIGHTS: 5,

};

const GLErrorMacros =
{
	GL_ERROR_CHECK_SHADER: 0,
	GL_ERROR_CHECK_SHADER_PROGRAM: 1,
};


var requestAnimationFrame = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame;

//canvas related variables
var canvas = null;
var gl = null;
var canvasOriginalWidth;
var canvasOriginalHeight;
var bFullScreen = false;

var fullScreenWidth;
var fullScreenHeight;

//matrix
var projectionMatrix;
var viewMatrix;


//scenes
var scene1_object;


