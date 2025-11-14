<script lang="ts">
    let { portableText } = $props();


</script>
<div class="flex justify-center my-4 sm:my-8">
<a href={portableText.value.url} target={
    portableText.value.url.startsWith('#') || 
    portableText.value.url.startsWith('/') ?
    '_top' : '_blank'
} class="no-underline border border-green  hover:bg-field hover:text-green transition-colors bg-green text-field px-4 py-3 rounded-xs cursor-pointer">
    {portableText.value.label}
</a>
</div>
