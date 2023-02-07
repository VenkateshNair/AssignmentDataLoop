function setPerspective() {
    mat4.perspective(projectionMatrix, 45, parseFloat(canvas.width) / parseFloat(canvas.height), 0.1, 10000);
}

function setOrthographic( l,  r,  b,  t,  n,  f) {

	if (canvas.width <= canvas.height) {
		mat4.ortho(projectionMatrix, l,
			r,
			b,
			t,
			n,
			f);
	}
	else {
		mat4.ortho(projectionMatrix,
			l,
			r,
			b,
			t,
			n,
			f);
	}
}

