class cube {


    vao_cube;

    constructor() {
        var vertices = new Float32Array([
        // top
		1.0, 1.0, -1.0,
		-1.0, 1.0, -1.0,
		-1.0, 1.0, 1.0,
		1.0, 1.0, 1.0,

		// bottom
		1.0, -1.0, -1.0,
		-1.0, -1.0, -1.0,
		-1.0, -1.0,  1.0,
		 1.0, -1.0,  1.0,

		 // front
		 1.0, 1.0, 1.0,
		-1.0, 1.0, 1.0,
		-1.0, -1.0, 1.0,
		 1.0, -1.0, 1.0,

		 // back
		 1.0, 1.0, -1.0,
		-1.0, 1.0, -1.0,
		-1.0, -1.0, -1.0,
		 1.0, -1.0, -1.0,

		 // right
		 1.0, 1.0, -1.0,
		 1.0, 1.0, 1.0,
		 1.0, -1.0, 1.0,
		 1.0, -1.0, -1.0,

         // left
		-1.0, 1.0, 1.0,
		-1.0, 1.0, -1.0,
		-1.0, -1.0, -1.0,
		-1.0, -1.0, 1.0
        ]);

        var texcords = new Float32Array([
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,


            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
        ]);

        var normals = new Float32Array([

        // top surface
		0.0, 1.0, 0.0,  // top-right of top
		0.0, 1.0, 0.0, // top-left of top
		0.0, 1.0, 0.0, // bottom-left of top
		0.0, 1.0, 0.0,  // bottom-right of top


        // bottom surface
		0.0, -1.0, 0.0,  // top-right of bottom
		0.0, -1.0, 0.0,  // top-left of bottom
		0.0, -1.0, 0.0,  // bottom-left of bottom
		0.0, -1.0, 0.0,   // bottom-right of bottom

        // front surface
		0.0, 0.0, 1.0,  // top-right of front
		0.0, 0.0, 1.0, // top-left of front
		0.0, 0.0, 1.0, // bottom-left of front
		0.0, 0.0, 1.0,  // bottom-right of front


        // back surface
		0.0, 0.0, -1.0,  // top-right of back
		0.0, 0.0, -1.0, // top-left of back
		0.0, 0.0, -1.0, // bottom-left of back
		0.0, 0.0, -1.0,  // bottom-right of back

        // right surface
		1.0, 0.0, 0.0,  // top-right of right
		1.0, 0.0, 0.0,  // top-left of right
		1.0, 0.0, 0.0,  // bottom-left of right
		1.0, 0.0, 0.0,  // bottom-right of right


        // left surface
		-1.0, 0.0, 0.0, // top-right of left
		-1.0, 0.0, 0.0, // top-left of left
		-1.0, 0.0, 0.0, // bottom-left of left
		-1.0, 0.0, 0.0, // bottom-right of left
        ]);

        this.vao_cube = gl.createVertexArray();
        gl.bindVertexArray(this.vao_cube);

        //vertices
        var vbo_position = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        gl.vertexAttribPointer(WebGLMacros.VOXEL_ATTRIBUTE_VERTEX, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(WebGLMacros.VOXEL_ATTRIBUTE_VERTEX);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        //texture
        var vbo_texture = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_texture);
        gl.bufferData(gl.ARRAY_BUFFER, texcords, gl.STATIC_DRAW);
        gl.vertexAttribPointer(WebGLMacros.VOXEL_ATTRIBUTE_TEXCORD, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(WebGLMacros.VOXEL_ATTRIBUTE_TEXCORD);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        //normals
        var vbo_normals = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_normals);
        gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
        gl.vertexAttribPointer(WebGLMacros.VOXEL_ATTRIBUTE_NORMAL, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(WebGLMacros.VOXEL_ATTRIBUTE_NORMAL);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        gl.bindVertexArray(null);

    }

    bind() {
        gl.bindVertexArray(this.vao_cube);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
    }

    unbind() {
        gl.bindVertexArray(null);
    }

    draw(){
        gl.bindVertexArray(this.vao_cube);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
        gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
        gl.bindVertexArray(null);
    }

    uninitialize(){
        gl.deleteVertexArray(vao_cube);
    }

}
