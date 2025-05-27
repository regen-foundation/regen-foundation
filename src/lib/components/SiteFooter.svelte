<script lang="ts">
	import { page } from '$app/state';
	import BlockContent from './BlockContent/BlockContent.svelte';
	import NewsletterForm from './NewsletterForm.svelte';
	let { siteInfo } = $props();
</script>

<div
	class="{page.url.pathname.startsWith('/doc')
		? 'hidden'
		: ''} border-green bg-field flex w-dvw flex-col gap-8 border-t p-6 text-[14px] sm:px-8"
>
	<!-- row 1 -->
	<div class="flex flex-col justify-between gap-10 xl:flex-row xl:gap-16">
		<div>
			<NewsletterForm
				headerText={siteInfo.newsletterHeaderText}
				buttonText={siteInfo.newsletterButtonText}
				successText={siteInfo.newsletterSuccessText}
				isFooter={true}
			></NewsletterForm>
		</div>
		<div class="flex flex-col md:flex-row grow justify-between gap-8">
			<!-- contact us -->
			<div class="flex grow basis-0 sm:flex-col">
				<div class="w-24 font-bold">{siteInfo.contactHeader}</div>
				{#each siteInfo.contactLinks as link}
					<a class="cursor-pointer whitespace-nowrap hover:underline" href={link.url}
						>{link.label}</a
					>
				{/each}
			</div>
			<!-- connect -->
			<div class="flex grow basis-0 sm:flex-col">
				<div class="w-24 font-bold">{siteInfo.connectHeader}</div>
				<div class="flex sm:flex-col gap-8 sm:gap-0">
					{#each siteInfo.connectLinks as link}
						<a class="cursor-pointer whitespace-nowrap hover:underline" href={link.url}
							>{link.label}</a
						>
					{/each}
				</div>
			</div>
			<!-- resources -->
			<div class="flex grow basis-0 sm:flex-col">
				<div class="w-24 font-bold">{siteInfo.resourcesHeader}</div>
				<div class="flex flex-col gap-4  sm:gap-0">
					{#each siteInfo.textOnlyPages as page}
						<a
							class="cursor-pointer whitespace-nowrap hover:underline"
							href="/doc/{page.slug.current}"
							target="_blank">{page.title}</a
						>
					{/each}
				</div>
			</div>
			<!-- colophon -->
			<div class="flex sm:flex-col">
				<div class="w-24 font-bold">{siteInfo.colophonHeader}</div>
				<div>
					<BlockContent value={siteInfo.colophonContent}></BlockContent>
				</div>
			</div>
		</div>
	</div>

	<!-- row 2 -->
	<div class="text-[12px]">
		<div>{siteInfo.copyrightText}</div>
	</div>
</div>
