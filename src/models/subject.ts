import { Shape } from './shape';

export type tEdge = 'bottom' | 'left' | 'right' | 'top';

export abstract class Subject {
	public static collides(s1: Subject, s2: Subject): boolean {
		const dx = s1.shape.x - s2.shape.x;
		const dy = s1.shape.y - s2.shape.y;

		return Math.sqrt(dx ** 2 + dy ** 2) < s1.shape.r + s2.shape.r;
	}

	constructor(protected shape: Shape) {}

	public borders(edge: tEdge, bbx: number, bby: number): boolean {
		switch (edge) {
			case 'top':
				return this.shape.y - this.shape.r < 0;
			case 'left':
				return this.shape.x - this.shape.r < 0;
			case 'right':
				return this.shape.x + this.shape.r > bbx;
			case 'bottom':
				return this.shape.y + this.shape.r > bby;
		}
	}

	public exceeds(edge: tEdge, bbx: number, bby: number): boolean {
		switch (edge) {
			case 'top':
				return this.shape.y + this.shape.r < 0;
			case 'left':
				return this.shape.x + this.shape.r < 0;
			case 'right':
				return this.shape.x - this.shape.r > bbx;
			case 'bottom':
				return this.shape.y - this.shape.r > bby;
		}
	}

	public adjust(edge: tEdge, bbx: number, bby: number): void {
		switch (edge) {
			case 'top':
				return void (this.shape.y = this.shape.r);
			case 'left':
				return void (this.shape.x = this.shape.r);
			case 'right':
				return void (this.shape.x = bbx - this.shape.r);
			case 'bottom':
				return void (this.shape.y = bby - this.shape.r);
		}
	}

	public update(vx: number, vy: number): void {
		this.shape.update(vx, vy);
	}

	public render(ctx: CanvasRenderingContext2D): void {
		this.shape.render(ctx);
	}
}
