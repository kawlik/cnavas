import { Softy } from '../assets/subjects/softy';
import { Subject, tEdge } from '../models/subject';

export class PlayerController {
	public static getRandomAlign(): tEdge {
		return Math.random() > 0.5 ? 'left' : 'right';
	}

	private attract: tEdge;
	private subject: Subject;

	constructor(
		private vx: number,
		private vy: number,
		private x: number,
		private y: number,
		private r: number
	) {
		this.attract = PlayerController.getRandomAlign();
		this.subject = new Softy(this.x, this.y, this.r);

		this.alignEdge(this.attract);
	}

	public colides(subject: Subject): boolean {
		return Subject.collides(this.subject, subject);
	}

	public toggle(): void {
		switch (this.attract) {
			case 'left':
				return this.alignEdge('right');
			case 'right':
				return this.alignEdge('left');
		}
	}

	public render(ctx: CanvasRenderingContext2D): void {
		this.subject.render(ctx);
	}

	public update(bbx: number, bby: number): void {
		this.subject.update(this.vx, this.vy);

		if (this.subject.borders('left', bbx, bby)) {
			this.subject.adjust('left', bbx, bby);
		}

		if (this.subject.borders('right', bbx, bby)) {
			this.subject.adjust('right', bbx, bby);
		}
	}

	private alignEdge(edge: tEdge) {
		if (edge === 'left') {
			this.attract = 'left';
			this.vx = -Math.abs(this.vx);
		}

		if (edge === 'right') {
			this.attract = 'right';
			this.vx = +Math.abs(this.vx);
		}
	}
}
