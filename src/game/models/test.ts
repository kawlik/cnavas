import { aBall } from '../assets/actors/@';

export default class Test {
	private set: Set<aBall> | undefined;

	constructor(
		private cvs: HTMLCanvasElement,
		private ctx: CanvasRenderingContext2D,
		private bbx = cvs.width,
		private bby = cvs.height
	) {}

	public prepare(numBalls: number): void {
		if (numBalls < 0) throw 'Number of balls can not be negative!';

		this.set = new Set();

		for (let i = 0; i < numBalls; i++) {
			const ball = this.createRandom();

			ball.useDumping = 0.91;
			ball.useGravity = Math.log(this.bby);

			this.set.add(ball);
		}

		this.render();
	}

	private render(): void {
		this.ctx.clearRect(0, 0, this.bbx, this.bby);

		this.calcMomentum();

		for (const currBall of this.set!) {
			currBall.update({
				bbx: this.bbx,
				bby: this.bby,
				dvx: 0,
				dvy: 0,
			});

			currBall.render(this.ctx);
		}

		requestAnimationFrame(this.render.bind(this));
	}

	private createRandom(): aBall {
		const c = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
		const vx = (Math.random() * this.bbx * 2 - this.bbx) / 20;
		const vy = (Math.random() * this.bby * 2 - this.bby) / 20;
		const r =
			(Math.random() * Math.min(this.bbx, this.bby)) / 10 +
			Math.min(this.bbx / 100, this.bby / 100);
		const x = (Math.random() * this.bbx) / 2;
		const y = (Math.random() * this.bby) / 2;

		return new aBall(c, vx, vy, r, x, y);
	}

	private calcMomentum(): void {
		const balls = Array.from(this.set!);

		for (let i = 0; i < balls.length; i++) {
			for (let j = i; j < balls.length; j++) {
				if (i === j) continue;

				const b1 = balls[i];
				const b2 = balls[j];

				if (Math.sqrt((b1.x - b2.x) ** 2 + (b1.y - b2.y) ** 2) > b1.r + b2.r) continue;

				const m1 = b1.r ** 3;
				const m2 = b2.r ** 3;

				const vx1 = b1.vx;
				const vy1 = b1.vy;

				const vx2 = b2.vx;
				const vy2 = b2.vy;

				const ux1 = ((m1 - m2) / (m1 + m2)) * vx1 + ((m2 + m2) / (m1 + m2)) * vx2;
				const ux2 = ((m1 + m1) / (m1 + m2)) * vx1 + ((m2 - m1) / (m1 + m2)) * vx2;
				const uy1 = ((m1 - m2) / (m1 + m2)) * vy1 + ((m2 + m2) / (m1 + m2)) * vy2;
				const uy2 = ((m1 + m1) / (m1 + m2)) * vy1 + ((m2 - m1) / (m1 + m2)) * vy2;

				b1.vx = ux1;
				b1.vy = uy1;

				b2.vx = ux2;
				b2.vy = uy2;
			}
		}
	}
}
