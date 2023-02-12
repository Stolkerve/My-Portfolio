<script lang="ts">
	import HtmlTag from "./HtmlTag.svelte";
	import { assets } from '$app/paths';

    const data = [
        {
            tag: 'Unimet',
            srcName: 'unimet.jpg',
            src: `${assets}/unimet.jpg`
        },
        {
            tag: 'NCDCertificate',
            srcName: 'ncd_certificate.jpg',
            src: 'https://fleek.ipfs.io/ipfs/bafybeigvkfdskqoy6jzjs2qaeuibmtcf77d22sgn5wuqh4ytwm34eortim'
        }
    ]
</script>

<HtmlTag tagName="Education">
    {#each data as {srcName, src, tag} }
        <HtmlTag tagName={tag} values={[{ name: 'src', value: srcName}]}>
            <img class="my-1 ml-6 w-96 max-md:w-48" src={src} alt="Me" />
        </HtmlTag>
    {/each}
</HtmlTag>