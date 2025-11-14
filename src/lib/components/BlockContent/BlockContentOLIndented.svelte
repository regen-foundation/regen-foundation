<script lang="ts">
    let { children } = $props();
</script>
<ol class="px-4 sm:px-8 max-w-3xl list-outside list-decimal ml-12">
    {@render children()}
</ol>