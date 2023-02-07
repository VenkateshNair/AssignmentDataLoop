class shaderclass {

	constructor() {

	}

	initializeShaderProgram(vertexShader, fragmentShader) {

		var vertexShaderObject;
		var fragmentShaderObject;
		var shaderProgramObject;


		//vertex shader
		var vertexShaderSourceCode = this.readFile(vertexShader);
		vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vertexShaderObject, vertexShaderSourceCode);
		gl.compileShader(vertexShaderObject);

		//fragment shader
		var fragmentShaderSourceCode = this.readFile(fragmentShader);
		fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(fragmentShaderObject, fragmentShaderSourceCode);
		gl.compileShader(fragmentShaderObject);

		//shader object
		shaderProgramObject = gl.createProgram();
		gl.attachShader(shaderProgramObject, vertexShaderObject);
		gl.attachShader(shaderProgramObject, fragmentShaderObject);
		gl.bindAttribLocation(shaderProgramObject, WebGLMacros.VOXEL_ATTRIBUTE_VERTEX, "vPosition");
		gl.bindAttribLocation(shaderProgramObject, WebGLMacros.VOXEL_ATTRIBUTE_TEXCORD, "vTexCord");
		gl.bindAttribLocation(shaderProgramObject, WebGLMacros.VOXEL_ATTRIBUTE_NORMAL, "vNormal");
		gl.bindAttribLocation(shaderProgramObject, WebGLMacros.VOXEL_ATTRIBUTE_COLOR, "vColor");
		gl.bindAttribLocation(shaderProgramObject, WebGLMacros.VOXEL_ATTRIBUTE_BONEID, "vBoneIds");
		gl.bindAttribLocation(shaderProgramObject, WebGLMacros.VOXEL_ATTRIBUTE_WEIGHTS, "vWeights");

		this.glErrorChecking(vertexShaderObject, fragmentShaderObject, shaderProgramObject);

		return shaderProgramObject;

	}

	glErrorChecking(vertexShaderObject, fragmentShaderObject, shaderProgramObject) {

		//VS
		if (gl.getShaderParameter(vertexShaderObject, gl.COMPILE_STATUS) == false) {
			var error = gl.getShaderInfoLog(vertexShaderObject);
			if (error.length > 0) {
				alert(error);
			}
		}
		else {
			console.log("Vertex shader successfully compiled");
		}

		//FS
		if (gl.getShaderParameter(fragmentShaderObject, gl.COMPILE_STATUS) == false) {
			var error = gl.getShaderInfoLog(fragmentShaderObject);
			if (error.length > 0) {
				alert(error);
			}
		}
		else {
			console.log("Fragment shader successfully compiled");
		}

		//ShaderObject
		gl.linkProgram(shaderProgramObject);
		if (gl.getProgramParameter(shaderProgramObject, gl.LINK_STATUS) == false) {
			var error = gl.getProgramInfoLog(shaderProgramObject);
			if (error.length > 0) {
				alert(error);
			}
		}
		else {
			console.log("Program Object Linked Succcessfully");
		}
	}

	readFile(file)
	{
		var result;
		var f = new XMLHttpRequest();
		f.open("GET", file, false);
		f.onload = function () {
		if (f.readyState === 4) {
			if (f.status === 200 || f.status == 0) {
				result = f.responseText;
			}
		}
		}
		f.send(null);
		return result;
	}
}
