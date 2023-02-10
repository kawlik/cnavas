export abstract class Shape {
	constructor(
		private coordX: number,
		private coordY: number,
		private radius: number,
		private color: {
			h: number;
			s: number;
			l: number;
			a: number;
		}
	) {}

	public abstract render(ctx: CanvasRenderingContext2D): void;

	public update(vx: number, vy: number): void {
		this.coordX += vx;
		this.coordY += vy;
	}

	public get c() {
		return `hsla(${this.color.h}, ${this.color.s}%, ${this.color.l}%, ${this.color.a})`;
	}

	public get r() {
		return this.radius;
	}

	public get x() {
		return this.coordX;
	}

	public get y() {
		return this.coordY;
	}

	public set x(newValue: number) {
		this.coordX = newValue;
	}

	public set y(newValue: number) {
		this.coordY = newValue;
	}
}
