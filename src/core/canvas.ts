export function adjustCanvasDimension(canvas: HTMLCanvasElement): void {
	canvas.width = 320;
	canvas.height = 180;
}

export function adjustCanvasTransform(canvas: HTMLCanvasElement): void {
	const scaleX = window.innerWidth / canvas.width;
	const scaleY = window.innerHeight / canvas.height;

	const scalar = Math.max(scaleX, scaleY);

	canvas.style.transformOrigin = '0 0';
	canvas.style.transform = `scale(${scalar})`;
}
