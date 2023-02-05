export default interface Renders {
	/**
	 * Render a specific path via given rendering context.
	 *
	 * @param context rendering context
	 */
	render(context: CanvasRenderingContext2D): void;
}
