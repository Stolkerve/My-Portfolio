<script lang="ts">
	import { redirect } from "@sveltejs/kit";


    export let scrollToElemtens: {name: String, target: HTMLSpanElement | undefined}[]
    export let codeElement: HTMLDivElement | undefined

    const scrollTo = (ref: HTMLSpanElement | undefined) => {
        if (ref && codeElement) {
            codeElement.scrollTo({
                top: ref.offsetTop,
                behavior: "smooth"
            })
        }
    }
</script>

<div class="h-screen w-64 bg-[#252526] text-sm text-white">
    <div class="flex items-center pt-2">
        <div class="mr-2 ml-1">
            <svg width="20" height="20" stroke-width="0" fill="white" class="block" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
        </div>
        <p>My Portfolio</p>
    </div>
    <div class="mt-2">
        {#each scrollToElemtens as {name, target}}
            <button on:click={() => scrollTo(target)} class="pl-8 py-2 w-full text-left text-gray-400 hover:bg-neutral-600">{name}</button>
        {/each}
    </div>
</div>