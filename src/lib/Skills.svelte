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