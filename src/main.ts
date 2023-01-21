import { adjustCanvasTransform, adjustCanvasDimension } from './core/canvas';
import { createRoot } from './core/root';

// Initialize project
createRoot()
	.then((root) => {
		// Create canvas
		const cvs = document.createElement('canvas');
		const ctx = cvs.getContext('2d');

		// Configure canvas
		adjustCanvasDimension(cvs);
		adjustCanvasTransform(cvs);

		// Update DOM
		root.append(cvs);
	})
	.catch((err) => {
		alert(err);
	});
