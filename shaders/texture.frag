#version 300 es
precision highp float;

in vec2 out_texcord;
vec4 textureColor;


uniform sampler2D u_texture_sampler;
uniform float alpha;
uniform int discardValue;

out vec4 FragColor;


void main(void)
{   
	FragColor = texture(u_texture_sampler,out_texcord);
}
