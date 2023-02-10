import { Shape } from '../../models/shape';

export class Circle extends Shape {
	private static finalAngle = 2 * Math.PI;
	private static startAngle = 0;

	public render(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, Circle.startAngle, Circle.finalAngle, false);
		ctx.fillStyle = this.c;
		ctx.fill();
	}
}
