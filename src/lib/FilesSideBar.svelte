<script lang="ts">
	export let scrollToElemtens: { name: String; target: HTMLSpanElement | undefined }[];
	export let codeElement: HTMLDivElement | undefined;

	let showFiles = true;

	const scrollTo = (ref: HTMLSpanElement | undefined) => {
		if (ref && codeElement) {
			codeElement.scrollTo({
				top: ref.offsetTop,
				behavior: 'smooth'
			});
		}
	};
</script>

<style>
	.open {
		animation-duration: 0.5s;
		animation-name: slidein;
		animation-timing-function: ease-in-out;
	}

	.close {

		animation-duration: 0.5s;
		animation-name: slideout;
		animation-timing-function: ease-in-out;

		transform: scaleY(0.0);
	}

	.open-arrow {
		animation-duration: 0.5s;
		animation-name: rotate-open;
		animation-timing-function: ease-in-out;
	}

	.close-arrow {
		animation-duration: 0.5s;
		animation-name: rotate-close;
		animation-timing-function: ease-in-out;
		rotate: 270deg;
	}

	@keyframes rotate-open {
		from {
			rotate: 270deg;
		}
		to {
			rotate: 0deg;
		}
	}

	@keyframes rotate-close {
		from {
			rotate: 0deg;
		}
		to {
			rotate: 270deg;
		}
	}

	@keyframes slidein {
		from {
			transform: scaleY(0.0);
		}

		to {
			transform: scaleY(1.0);
		}
	}

	@keyframes slideout {
		from {
			transform: scaleY(1.0);
		}

		to {
			transform: scaleY(0.0);
		}
	}
</style>

<div class="max-md:h-auto max-md:w-full max-md:sticky max-md:bottom-0 z-30 h-screen bg-[#252526] text-sm text-white">
	<div class="flex items-center pt-2 pr-2">
		<div class="mr-2 ml-1">
			<button on:click={() => showFiles = !showFiles}>
				{#if showFiles}
					<svg width="20" height="20" stroke-width="0" class="open-arrow" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"></path></svg>
				{:else}
					<svg width="20" height="20" stroke-width="0" class="close-arrow" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"></path></svg>
				{/if}
			</button>
		</div>
		<p>My Portfolio</p>
	</div>
	{#if showFiles}
		<div class="mt-2 origin-top-left open pr-2 max-md:bottom-0 ">
				{#each scrollToElemtens as { name, target }}
				 	<div>

					<button
						on:click={() => scrollTo(target)}
						class="pl-8 py-2 w-full text-left text-gray-400 hover:bg-neutral-600">{name}</button
					>
					</div>
				{/each}
		</div>
	{:else}
		<div class="mt-2 origin-top-left close pr-2 max-md:absolute max-md:bottom-0 ">
				{#each scrollToElemtens as { name }}
					<!-- <p
						class="pl-8 py-2 w-full text-left text-gray-400 hover:bg-neutral-600">{name}</p
					> -->
				{/each}
		</div>
	{/if}
</div>
