import { Shape } from '../../models/shape';

export class Rhombus extends Shape {
	public render(ctx: CanvasRenderingContext2D): void {
		ctx.beginPath();
		ctx.moveTo(this.x, this.y + this.r);
		ctx.lineTo(this.x + this.r, this.y);
		ctx.lineTo(this.x, this.y - this.r);
		ctx.lineTo(this.x - this.r, this.y);
		ctx.lineTo(this.x, this.y + this.r);
		ctx.fillStyle = this.c;
		ctx.fill();
	}
}
