class Board {
	constructor(private cvs: HTMLCanvasElement, private ctx: CanvasRenderingContext2D) {}

	get DX() {
		return this.cvs.width;
	}

	get DY() {
		return this.cvs.height;
	}
}
