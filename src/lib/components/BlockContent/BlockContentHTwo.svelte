<script lang="ts">
    let { children, class: className = "" } = $props();
</script>
<h2 class="text-2xl font-basteB-black tracking-wide  mb-4 {className}">
    {@render children()}
</h2>