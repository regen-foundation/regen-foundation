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
	<div class="flex flex-col xl:flex-row justify-between gap-10 xl:gap-16">
		<div>
			<NewsletterForm
				headerText={siteInfo.newsletterHeaderText}
				buttonText={siteInfo.newsletterButtonText}
				successText={siteInfo.newsletterSuccessText}
				isFooter={true}
			></NewsletterForm>
		</div>
		<div class="flex justify-between gap-8 grow max-sm:flex-wrap ">
			<div class="flex flex-col basis-0 grow">
				<div class="font-bold">{siteInfo.connectHeader}</div>
				{#each siteInfo.connectLinks as link}
					<a class="cursor-pointer hover:underline whitespace-nowrap" href={link.url}>{link.label}</a>
				{/each}
			</div>

			<div class="flex flex-col basis-0 grow">
				<div class="font-bold">{siteInfo.resourcesHeader}</div>
				{#each siteInfo.textOnlyPages as page}
					<a class="cursor-pointer hover:underline whitespace-nowrap" href="/doc/{page.slug.current}" target="_blank"
						>{page.title}</a
					>
				{/each}
			</div>
			<div class="flex flex-col basis-0 grow">
				<div class="font-bold">{siteInfo.contactHeader}</div>
				{#each siteInfo.contactLinks as link}
					<a class="cursor-pointer hover:underline whitespace-nowrap" href={link.url}>{link.label}</a>
				{/each}
			</div>
			<div class="flex flex-col ">
				<div class="font-bold">{siteInfo.colophonHeader}</div>
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
