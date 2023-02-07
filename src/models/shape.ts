export type edge = 'bottom' | 'left' | 'right' | 'top';

export abstract class Shape {
	constructor(
		protected r: number,
		protected x: number,
		protected y: number,
		protected color: {
			r: number;
			g: number;
			b: number;
			a: number;
		}
	) {}

	public abstract render(ctx: CanvasRenderingContext2D): void;

	public adjust(edge: edge, bbx: number, bby: number): void {
		switch (edge) {
			case 'top':
				return void (this.y = 0 + this.r);
			case 'left':
				return void (this.x = 0 + this.r);
			case 'right':
				return void (this.x = bbx - this.r);
			case 'bottom':
				return void (this.y = bby - this.r);
		}
	}

	public borders(edge: edge, bbx: number, bby: number): boolean {
		switch (edge) {
			case 'top':
				return this.y - this.r < 0;
			case 'left':
				return this.x - this.r < 0;
			case 'right':
				return this.x + this.r > bbx;
			case 'bottom':
				return this.y + this.r > bby;
		}
	}

	public exceeds(edge: edge, bbx: number, bby: number): boolean {
		switch (edge) {
			case 'top':
				return this.y + this.r < 0;
			case 'left':
				return this.x + this.r < 0;
			case 'right':
				return this.x - this.r > bbx;
			case 'bottom':
				return this.y - this.r > bby;
		}
	}

	public update(vx: number, vy: number): void {
		this.x += vx;
		this.y += vy;
	}

	public get C() {
		return `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
	}

	public get R() {
		return this.r;
	}

	public get X() {
		return this.x;
	}

	public get Y() {
		return this.y;
	}
}
