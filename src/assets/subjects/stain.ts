import { Subject } from '../../models/subject';
import { Circle } from '../shapes/circle';

export class Stain extends Subject {
	constructor(x: number, y: number, r: number) {
		super(
			new Circle(x, y, r, {
				h: 30,
				s: 100,
				l: 50,
				a: 1,
			})
		);
	}
}
