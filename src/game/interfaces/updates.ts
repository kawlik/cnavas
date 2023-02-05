export default interface Updates {
	/**
	 * Update a specific path via given rendering context.
	 *
	 * @param payload requested changes for update
	 */
	update(payload: unknown): void;
}
