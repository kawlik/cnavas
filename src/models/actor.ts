import { Shape } from './shape';

export abstract class Actor {
	constructor(private shape: Shape, private vx: number, private vy: number) {}
}
