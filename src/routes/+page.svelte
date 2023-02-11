<script lang="ts">
	import '../app.css';
	import FilesSideBar from '$lib/FilesSideBar.svelte';
	import HtmlTag from '../lib/HtmlTag.svelte';
	import { onMount } from 'svelte';
	import { assets, base } from '$app/paths';
	import HtmlTagName from '$lib/HtmlTagName.svelte';

	const aboutMeTags = [
		{
			tag: 'Age',
			value: '19 years old'
		},
		{
			tag: 'Profession',
			value: 'Software developer 🖥️'
		},
		{
			tag: 'Country',
			value: 'Venezuela 🇻🇪'
		},
		{
			tag: 'Github',
			value: 'Stolkerve',
			link: 'https://github.com/Stolkerve'
		},
		{
			tag: 'Medium',
			value: 'Articles',
			link: 'https://medium.com/@devsebasgr'
		}
	];

	const contactTags = [
		{
			tag: 'Email',
			value: 'devsebasgr@gmail.com'
		},
		{
			tag: 'Linkedin',
			value: 'Profile',
			link: 'https://www.linkedin.com/in/sebastian-gonzalez-a2060a215/'
		}
	];

	let aboutMeRef: HTMLSpanElement | undefined = undefined;
	let skillsRef: HTMLSpanElement | undefined = undefined;
	let educationRef: HTMLSpanElement | undefined = undefined;
	let experienceRef: HTMLSpanElement | undefined = undefined;
	let contactRef: HTMLSpanElement | undefined = undefined;
	let codeRef: HTMLDivElement | undefined = undefined;

	let scrollElements: { name: string; target: HTMLSpanElement | undefined }[] = [];

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
			},
		];
	});

	let iconsPaths: String[] = [
		'/c.svg',
		'/css.svg',
		'/git.svg',
		'/html.svg',
		'/mysql.svg',
		'/near-protocol-near-logo.svg',
		'/nodejs.svg',
		'/opengl.svg',
		'/react.svg',
		'/rust.svg',
		'/typescript.svg'
	];
	let collageSkills: String[][] = [];

	let center = false;
	for (let i = 0; i < iconsPaths.length; i++) {
		iconsPaths[i];

		let rowSize = Math.ceil((iconsPaths.length - i) / 2);
		if (!center) {
			collageSkills.push(iconsPaths.slice(i, rowSize));
			center = true;
			i += rowSize;
		} else {
			collageSkills.unshift(iconsPaths.slice(i - 1, i + rowSize - 1));
			collageSkills.push(iconsPaths.slice(i + rowSize - 1, i + rowSize * 2));
			i += rowSize * 2;
		}
	}
</script>

<div class="bg-[#1e1e1e] text-[#d4d4d4] text-lg">
	<div class="flex max-h-screen">
		<!-- Files side -->
		<FilesSideBar scrollToElemtens={scrollElements} codeElement={codeRef} />

		<!-- Code side -->
		<div bind:this={codeRef} class="w-screen overflow-scroll pl-2">
			<!-- AboutMe Section -->
			<span bind:this={aboutMeRef} />
			<HtmlTag tagName="AboutMe">
				<HtmlTag tagName="img" values={[{ name: 'src', value: 'me.jpg' }]}>
					<img class="my-1 ml-6 w-96 rounded-full" src="{assets}/yo.jpg" alt="Me" />
				</HtmlTag>
				<p class="pr-4 mt-3 mb-4">
					<span class="text-red-400">Hi! I'm Sebastian Gonzalez</span>, I study Systems Engineering
					at the Universidad Metropolitana. I love programaing and especially when is related with
					graphics, because you create something that other can iteract with their ayes. Also, I
					love video games 🎮, music 🎵, cats 🐱, nature 🏞, travel 🚲 and adventures ⛰.
				</p>
				{#each aboutMeTags as { tag, value, link }}
					<HtmlTag tagName={tag} oneLine={true}>
						{#if link != undefined}
							<a class="text-decoration-line: underline" target="_blank" rel="noreferrer" href={link}>{value}</a>
						{:else}
							<div>{value}</div>
						{/if}
					</HtmlTag>
				{/each}
			</HtmlTag>

			<!-- Skills section -->
			<span bind:this={skillsRef} />
			<div class="mt-4" />
			<HtmlTag tagName="Skills">
				<p>
					<span class="text-red-400">I'm a multi paradigms developer</span>, web developing, desktop apps, compute
					graphics, blockchain and some knowledge about networking, databases and backend.
				</p>
				{#each collageSkills as collage}
					<div class="flex justify-center my-6">
						{#each collage as path}
							<img class="w-32 mx-3" src="{base}{path}" alt="asd" />
						{/each}
					</div>
				{/each}
			</HtmlTag>

			<!-- Education section -->
			<span bind:this={educationRef}/>
			<div class="mt-4" />
			<HtmlTag tagName="Education">
				<HtmlTag tagName="Collage" values={[{ name: 'src', value: 'unimet.jpg' }]}>
					<img class="my-1 ml-6 w-96" src="{assets}/unimet.jpg" alt="Me" />
				</HtmlTag>
				<HtmlTag tagName="Certificates" values={[{ name: 'src', value: 'ncd_certificate.jpg' }]}>
					<img class="my-1 ml-6 w-96" src="https://fleek.ipfs.io/ipfs/bafybeigvkfdskqoy6jzjs2qaeuibmtcf77d22sgn5wuqh4ytwm34eortim" alt="Me" />
				</HtmlTag>
			</HtmlTag>

			<!-- Proyects and  jobs section -->
			<span bind:this={experienceRef}/>
			<div class="mt-4" />
			<HtmlTag tagName="Experience">
				<HtmlTag tagName="Work">
					<HtmlTag tagName="blockjobs.site">
						<HtmlTag tagName="Details">
							NEAR University has scholarship programs (Fellowship Programs) to
							support the certified users to materialize their proyects and create educational
							content. One of these programs is the Developer in Residence, of which I was a part,
							working on the development of a freelance job marketplace with decentralized dispute resolution
							system, called BlockJobs
						</HtmlTag>
						<HtmlTag tagName="Roles" oneLine={true}>Web developer, contracts developer and unit tester</HtmlTag>
						<HtmlTag tagName="Results" >
							<HtmlTag tagName="Articles" oneLine={true}>Five Medium educational articles about developing on NEAR blockchain</HtmlTag>
							<HtmlTag tagName="Libs" oneLine={true}>Deploy on crate.io near-rng a compact RNG lib to work with NEAR smarts contracts</HtmlTag>
						</HtmlTag>
					</HtmlTag>
					<p class="mt-4">Waiting for more...</p>
				</HtmlTag>
				<HtmlTag tagName="PersonalProyects">
					<HtmlTag tagName="borsh-cpp" oneLine={true}>The official Borsh encode/decoder for C++ on Borsh github repo</HtmlTag>
					<HtmlTag tagName="RoraymaEngine" oneLine={true}>A 2D game engine with editor and scripting</HtmlTag>
					<HtmlTag tagName="chat-console" oneLine={true}>A Rust GUI chat room</HtmlTag>
					<HtmlTag tagName="easy-opengl" oneLine={true}>A Rust lib to make an opengl app more easy</HtmlTag>
					<HtmlTag tagName="ThisPorfolio!!!" oneLine={true}>This awasome portfolio!!! Made with SVELTE GOD!</HtmlTag>
				</HtmlTag>
			</HtmlTag>

			<!-- Contact section -->
			<span bind:this={contactRef} />
			<div class="mt-4" />
			<HtmlTag tagName="Contact">
				{#each contactTags as { tag, value, link }}
					<HtmlTag tagName={tag} oneLine={true}>
						{#if link != undefined}
							<a class="text-decoration-line: underline" target="_blank" rel="noreferrer" href={link}>{value}</a>
						{:else}
							<div>{value}</div>
						{/if}
					</HtmlTag>
				{/each}
			</HtmlTag>
		</div>
	</div>
</div>
