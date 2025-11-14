<script lang="ts">
    import { getImgUrl } from "$lib/sanity";
	import BlockContent from "./BlockContent.svelte";
    let { portableText } = $props();
    console.log(portableText);
</script>

<div class="my-6 flex {portableText.value.alignment === 'center' ? 'justify-center' : portableText.value.alignment === 'right' ? 'justify-end' : 'justify-start'}">
    <img src={getImgUrl(portableText.value)} alt={portableText.value.alt ? portableText.value.alt : ''}/>
    {#if portableText.value.caption}
        <div class="text-xs mt-1">
            <BlockContent value={portableText.value.caption}></BlockContent>
    
        </div>
    {/if}
    
</div>
