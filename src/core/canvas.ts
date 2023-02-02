export async function adjustCanvas(
	canvas: HTMLCanvasElement,
	options?: {
		canvasX?: number;
		canvasY?: number;
	}
): Promise<HTMLCanvasElement> {
	if (!!options) {
		if (!!options?.canvasX) canvas.width = options.canvasX;
		if (!!options?.canvasY) canvas.height = options.canvasY;
	}

	const canvasX = canvas.width;
	const canvasY = canvas.height;
	const parrentX = canvas.parentElement?.clientWidth;
	const parrentY = canvas.parentElement?.clientHeight;

	if (!parrentX) throw 'Parrent element is invalid!';
	if (!parrentY) throw 'Parrent element is invalid!';

	const scaleX = parrentX / canvasX;
	const scaleY = parrentY / canvasY;
	const scalar = Math.min(scaleX, scaleY);

	const transX = parrentX / 2 - (canvasX * scalar) / 2;

	canvas.style.transformOrigin = '0 0';
	canvas.style.transform = `translateX(${transX}px) scale(${scalar})`;

	return Promise.resolve(canvas);
}

export async function createCanvas(root: HTMLElement): Promise<HTMLCanvasElement> {
	const htmlCanvasElement = document.createElement('canvas');

	return Promise.resolve(root.appendChild(htmlCanvasElement));
}
