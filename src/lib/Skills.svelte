<script lang="ts">
	import HtmlTag from "./HtmlTag.svelte";
	import { base } from '$app/paths';

	let iconsPaths: String[] = [
		'/c.svg',
		'/css.svg',
		'/html.svg',
		'/mysql.svg',
		'/nodejs.svg',
		'/opengl.svg',
		'/react.svg',
		'/rust.svg',
		'/typescript.svg',
		'/svelte.svg',
		'/javascript.svg',
		'/go.svg'
	];

</script>

<HtmlTag tagName="Skills">
    <p>
        <span class="text-red-400">I'm a multi paradigms developer</span>, web developing, desktop apps, compute
        graphics, blockchain and some knowledge about networking, databases and backend.
    </p>
	<div class="flex flex-wrap justify-center my-6 gap-8 p-10">
		{#each iconsPaths as icons}
				<img class="w-32 max-md:w-14" src="{base}{icons}" alt="asd" />
		{/each}
	</div>
</HtmlTag>