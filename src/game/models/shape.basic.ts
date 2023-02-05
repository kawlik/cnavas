import { iLimites, iRenders, iUpdates } from '../interfaces/@';
import { tSides } from '../types/@';

export default abstract class Shape implements iLimites, iRenders, iUpdates {
	/**
	 *
	 * @param color shape fill color
	 * @param speedX shape x speed
	 * @param speedY shape y speed
	 */
	constructor(private color: string, private speedX: number, private speedY: number) {}

	public abstract exceedesBorders(bbx: number, bby: number, side: tSides): boolean;
	public abstract exceedesContext(bbx: number, bby: number, side: tSides): boolean;
	public abstract render(context: CanvasRenderingContext2D): void;
	public abstract update(payload: unknown): void;

	/**
	 * Returns shape color.
	 */
	public get c() {
		return this.color;
	}

	/**
	 * Sets shape color.
	 *
	 * @param newColor new color hex value
	 */
	public set c(newColor: string) {
		this.color = newColor;
	}

	/**
	 * Returns shape x speed.
	 */
	public get vx() {
		return this.speedX;
	}

	/**
	 * Sets shape x speed.
	 *
	 * @param newSpeed new shape x speed value
	 */
	public set vx(newSpeed: number) {
		this.speedX = newSpeed;
	}

	/**
	 * Returns shape x speed.
	 */
	public get vy() {
		return this.speedY;
	}

	/**
	 * Sets shape x speed.
	 *
	 * @param newSpeed new shape x speed value
	 */
	public set vy(newSpeed: number) {
		this.speedY = newSpeed;
	}
}
