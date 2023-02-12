<script lang="ts">
	import HtmlTag from "./HtmlTag.svelte";
	import { assets } from '$app/paths';

</script>

<HtmlTag tagName="Education">
    <HtmlTag tagName="Collage" values={[{ name: 'src', value: 'unimet.jpg' }]}>
        <img class="my-1 ml-6 w-96" src="{assets}/unimet.jpg" alt="Me" />
    </HtmlTag>
    <HtmlTag tagName="Certificates" values={[{ name: 'src', value: 'ncd_certificate.jpg' }]}>
        <img class="my-1 ml-6 w-96" src="https://fleek.ipfs.io/ipfs/bafybeigvkfdskqoy6jzjs2qaeuibmtcf77d22sgn5wuqh4ytwm34eortim" alt="Me" />
    </HtmlTag>
</HtmlTag>