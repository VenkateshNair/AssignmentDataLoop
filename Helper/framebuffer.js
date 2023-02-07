class framebuffer_with_color_rbo_depth {

    m_multisampleFbo;
    m_multisamplTexture;
    m_fbo;
    m_color_texture;
    m_width;
    m_height;
    m_depth_texture;

    constructor(width, height) {

        this.m_width = width;
        this.m_height = height;

        //FBO creation
        this.m_fbo = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.m_fbo);

        // fbo color attachment
        this.m_color_texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.m_color_texture);


        var anisotropyExtension = gl.getExtension("EXT_texture_filter_anisotropic");


        const ext = gl.getExtension("EXT_color_buffer_float");
        gl.getExtension('OES_texture_float');   
        if (!ext) {
            alert("need EXT_color_buffer_float");
            return;
        }

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
            this.m_width, this.m_height, 0,
            gl.RGBA, gl.UNSIGNED_BYTE, null);



     if (anisotropyExtension != null) {
        // turn on anisotropic filtering only if it is available.
        var max = gl.getParameter(anisotropyExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        gl.texParameteri(gl.TEXTURE_2D, 
            anisotropyExtension.TEXTURE_MAX_ANISOTROPY_EXT, max);
            }

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.m_color_texture, 0);

        // fbo depth attachment
        this.m_depth_texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.m_depth_texture);

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT24,
            this.m_width, this.m_height, 0,
            gl.DEPTH_COMPONENT, gl.UNSIGNED_INT, null);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.m_depth_texture, 0);

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    framebuffer_set() {

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.m_fbo);
    }

    framebuffer_unset() {

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    uninitialize() {
     
        gl.deleteTexture(this.m_color_texture);
        gl.deleteTexture(this.m_depth_texture);
        gl.deleteFramebuffer(this.m_fbo);
    }
}
