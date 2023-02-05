import { cShapeRound } from '../../models/@';
import sides from '../../types/side';

export default abstract class Circle extends cShapeRound {
	private static StartAngle = 0;
	private static FinalAngle = 2 * Math.PI;

	/**
	 * Fixes border exceeds via individual key.
	 *
	 * @param bbx board bounding box x
	 * @param bby board bounding box y
	 */
	protected abstract fixBorderExceeds(bbx: number, bby: number): void;

	override exceedesBorders(bbx: number, bby: number, side: sides): boolean {
		switch (side) {
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

	override exceedesContext(bbx: number, bby: number, side: sides): boolean {
		switch (side) {
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

	override render(context: CanvasRenderingContext2D): void {
		context.beginPath();

		context.arc(this.x, this.y, this.r, Circle.StartAngle, Circle.FinalAngle, false);
		context.fillStyle = this.c;

		context.closePath();
		context.fill();
	}

	override updateCoord(bbx: number, bby: number): void {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;

		this.fixBorderExceeds(bbx, bby);
	}

	override updateSpeed(dvx: number, dvy: number): void {
		this.vx = this.vx + dvx;
		this.vy = this.vy + dvy;
	}
}
