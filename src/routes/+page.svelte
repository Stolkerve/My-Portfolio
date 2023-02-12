<script lang="ts">
	import '../app.css';
	import FilesSideBar from '$lib/FilesSideBar.svelte';
	import { onMount } from 'svelte';
	import AboutMe from '$lib/AboutMe.svelte';
	import Skills from '$lib/Skills.svelte';
	import Education from '$lib/Education.svelte';
	import Contact from '$lib/Contact.svelte';
	import Background from '$lib/Background.svelte';
	import Experience from '$lib/Experience.svelte';

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

</script>

<div class="bg-[#1e1e1e] text-[#d4d4d4] text-lg">
	<div class="flex max-h-screen">
		<!-- Files side -->
		<FilesSideBar scrollToElemtens={scrollElements} codeElement={codeRef} />
		<Background />
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
			<Experience />

			<!-- Contact section -->
			<span bind:this={contactRef} />
			<div class="mt-4" />
			<Contact />
		</div>
	</div>
</div>
