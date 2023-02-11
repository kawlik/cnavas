import { Shape } from '../../models/shape';

export class Square extends Shape {
	public render(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.roundRect(this.x - this.r, this.y - this.r, 2 * this.r, 2 * this.r, this.r / 2);
		ctx.fillStyle = this.c;
		ctx.fill();
	}
}
