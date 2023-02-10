import { CanvasController } from './controllers/canvas';
import { PlayerController } from './controllers/player';

export class Game {
	private canvas: CanvasController;
	private player: PlayerController;
	private frame?: number;

	constructor(public container: HTMLElement) {
		this.canvas = this.getNewCanvas();
		this.player = this.getNewPlayer();

		document.addEventListener('keypress', ({ key }) => {
			if (key === ' ') {
				this.player.toggle();
			}
		});
	}

	public animate(): void {
		this.canvas.clear();

		this.player.update(this.canvas.x, this.canvas.y);
		this.player.render(this.canvas.ctx);

		this.frame = requestAnimationFrame(this.animate.bind(this));
	}

	private getNewCanvas(): CanvasController {
		return new CanvasController(this.container, {
			x: 900,
			y: 1600,
		});
	}

	private getNewPlayer(): PlayerController {
		return new PlayerController(75, 0, 450, 1200, 50);
	}
}
