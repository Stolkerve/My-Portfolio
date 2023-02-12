<script lang="ts">
	import HtmlTag from "./HtmlTag.svelte";
	import { assets } from '$app/paths';

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
</script>

<HtmlTag tagName="AboutMe">
    <HtmlTag tagName="img" values={[{ name: 'src', value: 'me.jpg' }]}>
        <img class="my-1 ml-6 max-md:ml-[-1.5rem]  w-96 rounded-full" src="{assets}/yo.jpg" alt="Me" />
    </HtmlTag>
    <p class="pr-4 mt-3 mb-4">
        <span class="text-red-400">Hi! I'm Sebastian Gonzalez</span>, I study Systems Engineering
        at the Universidad Metropolitana. I love programaing and especially when is related with
        graphics, because you create something that other can iteract with their ayes. Also, I
        love video games 🎮, music 🎵, photography 📷, cats 🐱, nature 🏞, travel 🚲 and adventures ⛰.
    </p>
    {#each aboutMeTags as { tag, value, link }}
        <HtmlTag tagName={tag}>
            {#if link != undefined}
                <a class="text-decoration-line: underline" target="_blank" rel="noreferrer" href={link}>{value}</a>
            {:else}
                <div>{value}</div>
            {/if}
        </HtmlTag>
    {/each}
</HtmlTag>