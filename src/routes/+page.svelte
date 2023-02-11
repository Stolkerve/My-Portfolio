<script lang="ts">
	import '../app.css';
	import FilesSideBar from '$lib/FilesSideBar.svelte';
	import HtmlTag from '../lib/HtmlTag.svelte';
    import { onMount } from 'svelte'

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
            value: 'devsebasgr@gmail',
        },
        {
            tag: 'Linkedin',
			value: 'Profile',
			link: 'https://www.linkedin.com/in/sebastian-gonzalez-a2060a215/'
        },
    ]

    let aboutMeRef: HTMLSpanElement | undefined = undefined;
    let skillsRef: HTMLSpanElement | undefined = undefined;
    let contactRef: HTMLSpanElement | undefined = undefined;
    let codeRef: HTMLDivElement | undefined = undefined;

    let scrollElements: { name: string; target: HTMLSpanElement | undefined; }[] = []

    onMount(() => {
        scrollElements = [
            {
                name: "AboutMe.html",
                target: aboutMeRef
            },
            {
                name: "Skills.html",
                target: skillsRef 
            },
            {
                name: "Contact.html",
                target: contactRef 
            },
        ]
    })


	const iconsModules = import.meta.glob('../assets/icons/*.svg');
    let iconsPaths: String[] = []
    let collageSkills: String[][] = []
	for (const modulePath in iconsModules) {
		iconsModules[modulePath]().then(({ default: imageUrl }) => {
        });
        iconsPaths.push("src" + modulePath.substring(2));
	}

    let center = false
    for (let i = 0; i < iconsPaths.length; i++) {
        iconsPaths[i];

        let rowSize = Math.ceil((iconsPaths.length - i) / 2)
        if (!center) {
            collageSkills.push(iconsPaths.slice(i, rowSize))
            center = true
            i += rowSize
        }
        else {
            collageSkills.unshift(iconsPaths.slice(i - 1, i + rowSize - 1))
            collageSkills.push(iconsPaths.slice(i + rowSize - 1, i + rowSize * 2))
            i += rowSize * 2
        }
    }
</script>

<div class="bg-[#1e1e1e] text-[#d4d4d4] text-lg">
	<div class="flex max-h-screen">
		<FilesSideBar scrollToElemtens={scrollElements} codeElement={codeRef}/>

		<div bind:this={codeRef} class="w-screen overflow-scroll pl-2">
            <!--  -->
            <span bind:this={aboutMeRef}/>
			<HtmlTag tagName="AboutMe">
				<HtmlTag tagName="img" values={[{ name: 'src', value: 'me.jpg' }]}>
                    
					<img class="ml-6 w-96 rounded-full" src="src/assets/yo.jpg" alt="Me" />
				</HtmlTag>
                <p class="pr-4">
                    <span class="text-red-400">Hi! I'm Sebastian Gonzalez</span>, I study Systems Engineering at the Universidad Metropolitana.
                    I love programaing and especially when is related with graphics, because you create something
                    that other can iteract with their ayes. Also, I love video games, music, nature, travel and adventures.
                </p>
				{#each aboutMeTags as { tag, value, link }}
					<HtmlTag tagName={tag} oneLine={true}>
						{#if link != undefined}
							<a class="text-decoration-line: underline" target="_blank" href={link}>{value}</a>
						{:else}
							<div>{value}</div>
						{/if}
					</HtmlTag>
				{/each}
                <HtmlTag tagName="More">
                </HtmlTag>
			</HtmlTag>

            <!--  -->

            <span bind:this={skillsRef}/>
            <div class="mt-4"/>
			<HtmlTag tagName="Skills">
                <p>
                    <span class="text-red-400">I'm a multi paradigms developer</span>, web developing, compute graphics and some knowledge about networking,
                    relational databases and backend.
                </p>
                {#each collageSkills as collage}
                    <div class="flex justify-center my-6">
                        {#each collage as path}
                            <img class="w-32 mx-3" src={path} alt="asd"/>
                        {/each}
                    </div>
                {/each}
            </HtmlTag>

            <!--  -->
            <span bind:this={contactRef}/>
            <div class="mt-4"/>
            <HtmlTag tagName="Contact">
				{#each contactTags as { tag, value, link }}
					<HtmlTag tagName={tag} oneLine={true}>
						{#if link != undefined}
							<a class="text-decoration-line: underline" target="_blank" href={link}>{value}</a>
						{:else}
							<div>{value}</div>
						{/if}
					</HtmlTag>
				{/each}
            </HtmlTag>
		</div>
	</div>
</div>
