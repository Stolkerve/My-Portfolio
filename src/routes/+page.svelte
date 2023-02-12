<script lang="ts">
	import '../app.css';
	import FilesSideBar from '$lib/FilesSideBar.svelte';
	import { onMount } from 'svelte';
	import AboutMe from '$lib/AboutMe.svelte';
	import Skills from '$lib/Skills.svelte';
	import Education from '$lib/Education.svelte';
	import Contact from '$lib/Contact.svelte';

	let aboutMeRef: HTMLSpanElement;
	let skillsRef: HTMLSpanElement;
	let educationRef: HTMLSpanElement;
	let experienceRef: HTMLSpanElement;
	let contactRef: HTMLSpanElement;
	let codeRef: HTMLDivElement;

	let scrollElements: { name: string; target: HTMLSpanElement }[] = [];

	onMount(async () => {
		scrollElements = [
			{
				name: 'AboutMe.html',
				target: aboutMeRef
			},
			{
				name: 'Skills.html',
				target: skillsRef
			},
			{
				name: 'Education.html',
				target: educationRef
			},
			{
				name: 'Experience.html',
				target: experienceRef
			},
			{
				name: 'Contact.html',
				target: contactRef
			}
		];
	});

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

<div class="bg-[#1e1e1e] text-[#d4d4d4] text-lg">
	<div class="flex max-h-screen">
		<!-- Files side -->
		<FilesSideBar scrollToElemtens={scrollElements} codeElement={codeRef} />
		<div class="relative ">
			<canvas bind:this={canvas} class="fixed z-10 w-full"/>
		</div>
		<!-- With svelte:component this could be reduce and automate -->
		<!-- Code side -->
		<div bind:this={codeRef} class="w-screen overflow-scroll pl-2 z-20">
			<!-- AboutMe Section -->
			<span bind:this={aboutMeRef} />
			<AboutMe />

			<!-- Skills section -->
			<span bind:this={skillsRef} />
			<div class="mt-4" />
			<Skills />

			<!-- Education section -->
			<span bind:this={educationRef} />
			<div class="mt-4" />
			<Education />

			<!-- Proyects and  jobs section -->
			<span bind:this={experienceRef} />
			<div class="mt-4" />
			<Education />

			<!-- Contact section -->
			<span bind:this={contactRef} />
			<div class="mt-4" />
			<Contact />
		</div>
	</div>
</div>
