import { Subject } from '../../models/subject';
import { Rhombus } from '../shapes/rhombus';

export class Spike extends Subject {
	public static getRandomStart(bbx: number): number {
		return Math.random() > 0.5 ? 0 : bbx;
	}

	constructor(x: number, y: number, r: number) {
		super(
			new Rhombus(x, y, r, {
				h: 100,
				s: 100,
				l: 50,
				a: 1,
			})
		);
	}
}
