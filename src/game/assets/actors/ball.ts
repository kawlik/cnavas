import { sCircle } from '../shapes/@';

export default class Ball extends sCircle {
	private dumping = 0;
	private gravity = 0;

	/**
	 * @param dumping applied dumping force
	 */
	set useDumping(dumping: number) {
		if (dumping > 0) this.dumping = dumping;
	}

	/**
	 * @param gravity applied gravity force
	 */
	set useGravity(gravity: number) {
		if (gravity > 0) this.gravity = gravity;
	}

	/**
	 * Fixes border exceeds via attempting to reflect shape back to context.
	 *
	 * @param bbx board bounding box x
	 * @param bby board bounding box y
	 */
	override fixBorderExceeds(bbx: number, bby: number) {
		if (this.exceedesBorders(bbx, bby, 'top')) {
			this.vy = -this.dumping * this.vy;
			this.y = this.r - this.y;

			// Prevent infinite bounce
			if (this.exceedesBorders(bbx, bby, 'top')) {
				this.y = this.r;
			}
		}

		if (this.exceedesBorders(bbx, bby, 'left')) {
			this.vx = -this.dumping * this.vx;
			this.x = this.r - this.x;

			// Prevent infinite bounce
			if (this.exceedesBorders(bbx, bby, 'left')) {
				this.x = this.r;
			}
		}

		if (this.exceedesBorders(bbx, bby, 'right')) {
			this.vx = -this.dumping * this.vx;
			this.x = 2 * bbx - (this.x + this.r);

			// Prevent infinite bounce
			if (this.exceedesBorders(bbx, bby, 'right')) {
				this.x = bbx - this.r;
			}
		}

		if (this.exceedesBorders(bbx, bby, 'bottom')) {
			this.vy = -this.dumping * this.vy;
			this.y = 2 * bby - (this.y + this.r);

			// Prevent infinite bounce
			if (this.exceedesBorders(bbx, bby, 'bottom')) {
				this.y = bby - this.r;
			}
		}
	}

	/**
	 * Applies grawity and air drag.
	 */
	protected override onUpdate(): void {
		this.vx *= 0.99;
		this.vy += this.gravity;
	}
}
