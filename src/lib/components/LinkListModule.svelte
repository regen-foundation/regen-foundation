<script lang="ts">
	import BlockContent from './BlockContent/BlockContent.svelte';

	let { listItems } = $props();
</script>

<div class="flex w-full max-w-4xl flex-col gap-8 px-4 text-sm">
	{#each listItems as item}
		<div class="flex flex-col sm:flex-row sm:gap-4">
			{#if item.subinfo || item.subinfoTwo}
				<div class="w-40 sm:w-48 shrink-0">
					{#if item.subinfo}
						<div>
							{item.subinfo}
						</div>
					{/if}
					{#if item.subinfoTwo}
						<div>
							{item.subinfoTwo}
						</div>
					{/if}
				</div>
			{/if}
			{#if item.title || item.titleTwo}
				{#if item.link}
					<a href={item.link} target="_blank" class="hover:underline flex flex-col">
						{#if item.title}
							<div class="font-bold">{item.title}</div>
						{/if}
						{#if item.titleTwo}
							<div class="font-bold">{item.titleTwo}</div>
						{/if}
					</a>
				{:else}
					<div class="flex flex-col">
						{#if item.title}
							<div class="font-bold">{item.title}</div>
						{/if}
						{#if item.titleTwo}
							<div class="font-bold">{item.titleTwo}</div>
						{/if}
					</div>
				{/if}
			{/if}
		</div>
	{/each}
</div>
