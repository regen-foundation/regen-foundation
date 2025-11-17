<script lang="ts">
    let { children, class: className = ""} = $props();
</script>
<h3 class="text-base font-basteB-black tracking-wide mb-4 {className}">
    {@render children()}
</h3>