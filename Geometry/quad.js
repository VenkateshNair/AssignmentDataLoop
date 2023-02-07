class quad {


    vao_quad;

    constructor() {
        var vertices = new Float32Array([
            1.0, 1.0, 0.0,
            -1.0, 1.0, 0.0,
            -1.0, -1.0, 0.0,
            1.0, -1.0, 0.0
        ]);

        var texcords = new Float32Array([
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
        ]);

        var normals = new Float32Array([
            0.0, 1.0, 1.0,
            0.0, 1.0, 1.0,
            0.0, 1.0, 1.0,
            0.0, 1.0, 1.0,
        ]);

        this.vao_quad = gl.createVertexArray();
        gl.bindVertexArray(this.vao_quad);

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

                //texture
        var vbo_normals = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_normals);
        gl.bufferData(gl.ARRAY_BUFFER, normals, gl.STATIC_DRAW);
        gl.vertexAttribPointer(WebGLMacros.VOXEL_ATTRIBUTE_NORMAL, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(WebGLMacros.VOXEL_ATTRIBUTE_NORMAL);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        gl.bindVertexArray(null);

    }

    bind() {
        gl.bindVertexArray(this.vao_quad);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    }

    unbind() {
        gl.bindVertexArray(null);
    }

    draw(){
        gl.bindVertexArray(this.vao_quad);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
        gl.bindVertexArray(null);
    }

    draw(type){
        gl.bindVertexArray(this.vao_quad);
        gl.drawArrays(type, 0, 4);
        gl.bindVertexArray(null);
    }

        uninitialize(){
        gl.deleteVertexArray(vao_quad);
    }
}
