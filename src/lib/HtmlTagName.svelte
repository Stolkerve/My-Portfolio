<script lang="ts">
    export let tagName: String
    export let close: boolean = false
    export let values: [{name: String, value: String | Number}] | undefined = undefined
</script>

<div class="flex">
    {#if !close}
        <p class="text-html-arrow">{"<"}</p>
        <p class="text-html-name">{tagName}</p>
        {#if values != undefined}
            {#each values as {name, value}, index}
                <span class="whitespace-pre">
                    <p class="text-html-valueName">{` ${name}`}</p>
                </span>
                <span class="">{"="}</span>
                {#if typeof value === "string"}
                    <p class="text-html-string">
                        {values.length - 1 === index ? `"${value}"` : `"${value}" `}
                    </p>
                {:else} 
                    <p class="text-html-number">
                        {values.length - 1 === index ? `${value}` : `${value} `}
                    </p>
                {/if}
            {/each}
        {/if}
        <p class="text-html-arrow">{">"}</p>
    {:else}
        <div class="flex">
            <p class="text-html-arrow">{"</"}</p>
            <p class="text-html-name">{tagName}</p>
            <p class="text-html-arrow">{">"}</p>
        </div>
    {/if}
</div>