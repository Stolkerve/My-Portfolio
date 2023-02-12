<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	onMount(() => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		const ctx = canvas.getContext('2d');

		ctx!.fillStyle = '#FFFFFF';
		const particles: { x: number; y: number; speedX: number; speedY: number;  color: number }[] = [];

		function init() {
			// change `100` with any number to increase the particles
			for (let i = 0; i < 100; i += 1) {
				const x = Math.floor(Math.random() * canvas.width);
				const y = Math.floor(Math.random() * canvas.height);
				const speedX = Math.random();
				const speedY = Math.random();
				const dirX = Math.random() > 0.5 ? 1 : -1;
				const dirY = Math.random() > 0.5 ? 1 : -1;

				particles.push({
					x,
					y,
					speedX: dirX * speedX,
					speedY: dirY * speedY,
					color: 0xFFFFFF
				});
			}
			draw(); // calling this function actually renders the particles
		}

		function draw() {
			// iterate over the particles
			if (ctx != null) {
				ctx!.clearRect(0,0, canvas.width, canvas.height);
				ctx!.beginPath()
				for (let i = 0; i < particles.length; i += 1) {

					let x = particles[i].x + particles[i].speedX;
					let y = particles[i].y + particles[i].speedY;
					let color = particles[i].color;
					if (Math.round(Math.random() * 100) > 50) {
						color -= 0x10101
						if (color <= 0) {
							color += 0x10101
						}
					}
					else {
						color += 0x10101
					}
					// if the particle goes off screen, re-assign the co-ordinates
					if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
						x = Math.floor(Math.random() * canvas.width);
						y = Math.floor(Math.random() * canvas.height);
					}

					ctx!.fillStyle = "#" + color.toString(16);
					ctx.beginPath();
					ctx!.moveTo(x, y);
					ctx!.arc(x, y, 2, 0, Math.PI * 2);
					ctx.closePath();
					ctx!.fill(); // finally render the particles
					particles[i].x = x;
					particles[i].y = y;
					particles[i].color = color
				}


				requestAnimationFrame(draw)
			}
		}
		init();
	});
</script>

<div class="relative ">
    <canvas bind:this={canvas} class="fixed z-10 w-full"/>
</div>