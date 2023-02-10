export class CanvasController {
	private canvas: HTMLCanvasElement;
	private context: CanvasRenderingContext2D;

	constructor(
		private container: HTMLElement,
		private resolution: {
			x: number;
			y: number;
		}
	) {
		this.canvas = this.container.appendChild(document.createElement('canvas'));
		this.context = this.canvas.getContext('2d')!;

		this.canvas.width = this.resolution.x;
		this.canvas.height = this.resolution.y;

		this.adjust();
	}

	public adjust(): void {
		const cx = this.container.clientWidth;
		const cy = this.container.clientHeight;

		const scaleX = cx / this.x;
		const scaleY = cy / this.y;
		const scalar = Math.min(scaleX, scaleY);
		const transX = (cx - this.x * scalar) / 2;

		this.canvas.style.transformOrigin = '0 0';
		this.canvas.style.transform = `translateX(${transX}px) scale(${scalar})`;
	}

	public clear(): void {
		this.context.clearRect(0, 0, this.x, this.y);
	}

	public get ctx() {
		return this.context;
	}

	public get x() {
		return this.canvas.width;
	}

	public get y() {
		return this.canvas.height;
	}
}
