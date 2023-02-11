import { Subject } from '../../models/subject';
import { Square } from '../shapes/square';

export class Softy extends Subject {
	constructor(x: number, y: number, r: number) {
		super(
			new Square(x, y, r, {
				h: 30,
				s: 100,
				l: 50,
				a: 1,
			})
		);
	}
}
