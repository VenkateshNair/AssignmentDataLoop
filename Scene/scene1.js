
class scene1 {

//geometry
quad;
Assignmentcube;
grid;

//texture
containerTexture;

//shaders/effects
shaderobj;
textureShaderObject;
colorShaderObject;

//matrices
viewMatrix;
customViewMatrix;
projectionMatrix;


constructor(){

    //geometry
    this.quad = new quad();
    this.Assignmentcube = new cube();


    //texture
    this.containerTexture = new texture("Resources/Images/container.jpg");

    //shaders/effects
    this.shaderobj = new shaderclass();
    this.colorShaderObject = this.shaderobj.initializeShaderProgram("shaders/color.vert", "shaders/color.frag");
    this.textureShaderObject = this.shaderobj.initializeShaderProgram("shaders/texture.vert", "shaders/texture.frag");

}

scene1_draw(viewMatrix,projectionMatrix,width,height){

    var modelMatrix = mat4.create();
    //3D scene - left top
    setPerspective();
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(0, height/2, width/2, height/2);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.disable(gl.SCISSOR_TEST);
    gl.viewport(0, height/2, width/2, height/2);
    
    gl.useProgram(this.textureShaderObject);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D,this.containerTexture.m_textureId);
    gl.uniform1i(gl.getUniformLocation(this.textureShaderObject, "u_texture_sampler"), 0);
    
    //cube
    mat4.identity(modelMatrix);
    mat4.translate(modelMatrix,modelMatrix,[currentTranslateX,currentTranslateY,0]);
    mat4.scale(modelMatrix,modelMatrix,[1.5,1,0.8]);
    mat4.rotateY(modelMatrix,modelMatrix,degToRad(currentRotateAngleX));
    mat4.rotateX(modelMatrix,modelMatrix,degToRad(currentRotateAngleY));
    mat4.identity(viewMatrix);
    mat4.translate(modelMatrix, modelMatrix, [0,0,0]);
    mat4.translate(viewMatrix, viewMatrix, [0,0,-5]);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.textureShaderObject, "u_model_matrix"), false, modelMatrix);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.textureShaderObject, "u_view_matrix"), false, viewMatrix);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.textureShaderObject, "u_projection_matrix"), false, projectionMatrix);
    this.Assignmentcube.draw();
    gl.useProgram(null);

    gl.useProgram(this.colorShaderObject);
    mat4.identity(modelMatrix);
   // mat4.scale(modelMatrix,modelMatrix,[2,2,2]);
    mat4.identity(viewMatrix);
    mat4.translate(viewMatrix, viewMatrix, [0,0,-5]);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.colorShaderObject, "u_model_matrix"), false, modelMatrix);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.colorShaderObject, "u_view_matrix"), false, viewMatrix);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.colorShaderObject, "u_projection_matrix"), false, projectionMatrix);
    this.quad.draw();
    gl.useProgram(null);



    //3D scene - left bottom
    //setOrthographic(-5,5,-5,5,-6,6);
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(0, 0, width/2, height/2);
    gl.clearColor(0.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.disable(gl.SCISSOR_TEST);
    gl.viewport(0, 0, width/2, height/2);
    
    gl.useProgram(this.textureShaderObject);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D,this.containerTexture.m_textureId);
    gl.uniform1i(gl.getUniformLocation(this.textureShaderObject, "u_texture_sampler"), 0);
    
    //cube
    mat4.identity(modelMatrix);
    mat4.translate(modelMatrix,modelMatrix,[currentTranslateX,currentTranslateY,0]);
    mat4.scale(modelMatrix,modelMatrix,[1.5,1,0.8]);
    mat4.rotateY(modelMatrix,modelMatrix,degToRad(currentRotateAngleX));
    mat4.rotateX(modelMatrix,modelMatrix,degToRad(currentRotateAngleY));
    mat4.identity(viewMatrix);
    mat4.translate(viewMatrix, viewMatrix, [0,0,-5]);
    mat4.rotateY(viewMatrix, viewMatrix, degToRad(45));

    gl.uniformMatrix4fv(gl.getUniformLocation(this.textureShaderObject, "u_model_matrix"), false, modelMatrix);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.textureShaderObject, "u_view_matrix"), false, viewMatrix);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.textureShaderObject, "u_projection_matrix"), false, projectionMatrix);
    this.Assignmentcube.draw();

    //3D scene - right bottom
    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(width/2, 0, width/2, height/2);
    gl.clearColor(0.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.disable(gl.SCISSOR_TEST);
    gl.viewport(width/2, 0, width/2, height/2);
    
    gl.useProgram(this.textureShaderObject);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D,this.containerTexture.m_textureId);
    gl.uniform1i(gl.getUniformLocation(this.textureShaderObject, "u_texture_sampler"), 0);
    
    //cube
    mat4.identity(modelMatrix);
    mat4.translate(modelMatrix,modelMatrix,[currentTranslateX,currentTranslateY,0]);
    mat4.scale(modelMatrix,modelMatrix,[1.5,1,0.8]);
    mat4.rotateY(modelMatrix,modelMatrix,degToRad(currentRotateAngleX));
    mat4.rotateX(modelMatrix,modelMatrix,degToRad(currentRotateAngleY));
    mat4.identity(viewMatrix);
    mat4.translate(viewMatrix, viewMatrix, [0,0,-5]);
    mat4.rotateX(viewMatrix, viewMatrix, degToRad(90));

    gl.uniformMatrix4fv(gl.getUniformLocation(this.textureShaderObject, "u_model_matrix"), false, modelMatrix);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.textureShaderObject, "u_view_matrix"), false, viewMatrix);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.textureShaderObject, "u_projection_matrix"), false, projectionMatrix);
    this.Assignmentcube.draw();


   
}
uninitialize(){

    //shaders/effects
    this.textureShaderObject.uninitialize();

    //texture
    this.containerTexture.uninitialize();

    //geometry
    quad.uninitialize();
    Assignmentcube.uninitialize();
}
}