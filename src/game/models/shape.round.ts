import { cShapeBasic } from './@';

export default abstract class ShapeRound extends cShapeBasic {
	constructor(
		color: string,
		speedX: number = 0,
		speedY: number = 0,
		private radius: number,
		private coordX: number,
		private coordY: number
	) {
		super(color, speedX, speedY);
	}

	/**
	 * Fires on every update.
	 */
	protected onUpdate(): void {}

	/**
	 * Update round shape path.
	 *
	 * @param payload
	 */
	override update(payload: { bbx: number; bby: number; dvx: number; dvy: number }): void {
		this.updateSpeed(payload.dvx, payload.dvy);
		this.updateCoord(payload.bbx, payload.bby);
		this.onUpdate();
	}

	/**
	 * Updates shape speed x & y values.
	 *
	 * @param dvx delta speed in x dimension
	 * @param dvy delta speed in y dimension
	 */
	protected abstract updateSpeed(dvx: number, dvy: number): void;

	/**
	 * updates shape coord x & y values.
	 *
	 * @param bbx board bounding box x
	 * @param bby board bounding box y
	 */
	protected abstract updateCoord(bbx: number, bby: number): void;

	/**
	 * Returns shape radius.
	 */
	public get r() {
		return this.radius;
	}

	/**
	 * Returns shape x coord.
	 */
	public get x() {
		return this.coordX;
	}

	/**
	 * Returns shape y coord.
	 */
	public get y() {
		return this.coordY;
	}

	/**
	 * Sets new shape x coord.
	 *
	 * @param newCoordX new shape x coord value
	 */
	protected set x(newCoordX: number) {
		this.coordX = newCoordX;
	}

	/**
	 * Sets new shape y coord.
	 *
	 * @param newCoordY new shape y coord value
	 */
	protected set y(newCoordY: number) {
		this.coordY = newCoordY;
	}
}
