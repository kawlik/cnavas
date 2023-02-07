import { Shape } from '../../models/shape';

export class Circle extends Shape {
	private static eAngle = 2 * Math.PI;
	private static sAngle = 0;

	public render(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, Circle.sAngle, Circle.eAngle, false);
		ctx.fillStyle = this.C;
		ctx.fill();
		ctx.closePath();
	}
}
