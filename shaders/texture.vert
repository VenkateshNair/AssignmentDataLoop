#version 300 es

in vec4 vPosition;
in vec2 vTexCord;

out vec2 out_texcord;

uniform mat4 u_model_matrix;
uniform mat4 u_view_matrix;
uniform mat4 u_projection_matrix;

void main(void)
{

	gl_Position = u_projection_matrix * u_view_matrix * u_model_matrix * vPosition;
	out_texcord = vTexCord;
}
