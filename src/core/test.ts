import { cTest } from '../game/models/@';

export function getInstance(canvas: HTMLCanvasElement, root: HTMLElement): cTest {
	const cvs = canvas;
	const ctx = canvas.getContext('2d');

	if (!ctx) throw 'Rendering context is null!';

	const instance = new cTest(cvs, ctx);

	return instance;
}
