import { Canvas, Root } from './core/@';

Root.createRoot(document.body).then(async (root) => {
	let canvas: HTMLCanvasElement;

	canvas = await Canvas.createCanvas(root);
	canvas = await Canvas.adjustCanvas(canvas, { canvasX: 900, canvasY: 1600 });
});
