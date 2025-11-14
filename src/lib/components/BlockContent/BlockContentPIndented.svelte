<script lang="ts">
    let { children, class: className = '' } = $props();
</script>
<p class="mb-4 last:mb-0 px-4 sm:px-8 max-w-3xl mx-auto relative font-spaceGrotesk {className}">
    {@render children()}
</p>