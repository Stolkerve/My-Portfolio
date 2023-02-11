<script lang="ts">
	import HtmlTagName from './HtmlTagName.svelte';

	export let tagName: String;
	export let values: [{ name: String; value: String }] | undefined = undefined;
	export let oneLine: boolean = false;
</script>

<div class={(oneLine ? 'flex' : '') + ' my-1'}>
	<!-- Begin tag name -->
	<HtmlTagName {values} {tagName} />

	<!-- Content children -->
	<div class={oneLine ? '' : 'pl-12'}>
		<slot />
	</div>

	<!-- End tag name -->
	<HtmlTagName {tagName} close={true} />
</div>
