<script lang="ts">
	import HtmlTag from "./HtmlTag.svelte";
	import { base } from '$app/paths';

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

</script>

<HtmlTag tagName="Skills">
    <p>
        <span class="text-red-400">I'm a multi paradigms developer</span>, web developing, desktop apps, compute
        graphics, blockchain and some knowledge about networking, databases and backend.
    </p>
	<div class="flex flex-wrap justify-center my-6">
		{#each iconsPaths as icons}
				<img class="w-32 max-md:w-14 mx-3" src="{base}{icons}" alt="asd" />
		{/each}
	</div>
</HtmlTag>