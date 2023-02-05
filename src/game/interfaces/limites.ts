import { tSides } from '../types/@';

export default interface Limites {
	/**
	 * Test if a specific path exceedes given bounding boxes at least partialy.
	 *
	 * @param bbx board bounding box x
	 * @param bby board bounding box y
	 * @param side tested board side
	 */
	exceedesBorders(bbx: number, bby: number, side: tSides): boolean;

	/**
	 * Test if a specific path exceedes given bounding boxes completly.
	 *
	 * @param bbx board bounding box x
	 * @param bby board bounding box y
	 * @param side tested board side
	 */
	exceedesContext(bbx: number, bby: number, side: tSides): boolean;
}
