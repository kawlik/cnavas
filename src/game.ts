import { Spike } from './assets/subjects/spike';
import { CanvasController } from './controllers/canvas';
import { PlayerController } from './controllers/player';
import { Subject } from './models/subject';

export class Game {
	private canvas: CanvasController;
	private player: PlayerController;

	private clouds: Set<Subject> = new Set();
	private sparks: Set<Subject> = new Set();
	private spikes: Set<Subject> = new Set();

	private frames: number = 0;
	private passes: number = 0;
	private speedY: number = 0;

	private readonly flags = {
		renderNextFrame: true,
	};

	constructor(public container: HTMLElement) {
		this.container.addEventListener('keydown', ({ key }) => {
			if (key === ' ') this.player.toggle();
		});

		this.player = new PlayerController(75, 0, 450, 1200, 50);
		this.canvas = new CanvasController(this.container, {
			x: 900,
			y: 1600,
		});
	}

	public start(): void {
		this.clouds.clear();
		this.sparks.clear();
		this.spikes.clear();

		this.animate();
	}

	private animate(): void {
		this.frames++;
		this.updatePipeline();
		this.renderPipeline();

		if (this.flags.renderNextFrame) {
			requestAnimationFrame(this.animate.bind(this));
		}
	}

	private renderPipeline(): void {
		this.canvas.clear();

		for (const spark of this.sparks) {
			spark.render(this.canvas.ctx);
		}

		for (const trace of this.clouds) {
			trace.render(this.canvas.ctx);
		}

		this.player.render(this.canvas.ctx);

		for (const spike of this.spikes) {
			spike.render(this.canvas.ctx);
		}
	}

	private updatePipeline(): void {
		this.player.update(this.canvas.x, this.canvas.y);

		this.updateSpikes();
	}

	private updateSpikes(): void {
		if (this.frames % (60 - this.speedY) < 1) {
			this.speedY = 40 * Math.tanh((40 + this.passes) / 100);
			this.spikes.add(new Spike(Spike.getRandomStart(this.canvas.x), -50, 50));
		}

		for (const spike of this.spikes) {
			spike.update(0, this.speedY);

			if (this.player.colides(spike)) {
				this.flags.renderNextFrame = false;
			}

			if (spike.exceeds('bottom', this.canvas.x, this.canvas.y)) {
				this.spikes.delete(spike);
			}
		}
	}
}
