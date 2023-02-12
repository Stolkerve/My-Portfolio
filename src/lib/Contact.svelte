<script lang="ts">
	import HtmlTag from "./HtmlTag.svelte";

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
</script>

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