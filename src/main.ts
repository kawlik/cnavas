import { Canvas, Root, Test } from './core/@';

Root.createRoot(document.body)
	.then(async (root) => {
		let canvas: HTMLCanvasElement;

		canvas = await Canvas.createCanvas(root);
		canvas = await Canvas.adjustCanvas(canvas, {
			canvasX: window.innerWidth * 2,
			canvasY: window.innerHeight * 2,
		});

		return Test.getInstance(canvas, root);
	})
	.then((test) => {
		test.prepare(5);
	});
