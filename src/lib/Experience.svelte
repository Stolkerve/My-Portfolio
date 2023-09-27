<script lang="ts">
	import HtmlTag from "./HtmlTag.svelte";
</script>

<HtmlTag tagName="Experience">
    <HtmlTag tagName="Work">
        <HtmlTag tagName="blockjobs.site">
            <HtmlTag tagName="Details">
                NEAR University has scholarship programs (Fellowship Programs) to
                support the certified users to materialize their proyects and create educational
                content. One of these programs is the Developer in Residence, of which I was a part,
                working on the development of a freelance job marketplace with decentralized dispute resolution
                system, called BlockJobs
            </HtmlTag>
            <HtmlTag tagName="Roles" >Web developer, contracts developer and unit tester</HtmlTag>
            <HtmlTag tagName="Results" >

                <HtmlTag tagName={"Website"} >
                    <a class="text-decoration-line: underline" target="_blank" rel="noreferrer" href={"https://blockjobs.site/"}>blockjobs.site</a>
                </HtmlTag>
                <HtmlTag tagName="Articles" >Five Medium educational articles about developing on NEAR blockchain</HtmlTag>
                <HtmlTag tagName="Libs" >Deploy on crate.io near-rng a compact RNG lib to work with NEAR smarts contracts</HtmlTag>
            </HtmlTag>
        </HtmlTag>
        <p class="mt-4">Waiting for more...</p>
    </HtmlTag>
    <HtmlTag tagName="PersonalProyects">
        <HtmlTag tagName="borsh-cpp" >The official Borsh encode/decoder for C++ on Borsh github repo</HtmlTag>
        <HtmlTag tagName="RoraymaEngine" >A 2D game engine with editor and scripting</HtmlTag>
        <HtmlTag tagName="RustyChat" >A Rust GUI chat room</HtmlTag>
        <HtmlTag tagName="easy-opengl" >A Rust lib to make an opengl app more easy</HtmlTag>
        <HtmlTag tagName="pana-lang">The most pana™ programaing language 😎. (It's not a joke, the language works)</HtmlTag>
        <HtmlTag tagName="ThisPorfolio!!!" >This awasome portfolio!!! Made with SVELTE GOD!</HtmlTag>
    </HtmlTag>
</HtmlTag>