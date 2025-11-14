<script lang="ts">
	import { PortableText, type PortableTextComponents } from '@portabletext/svelte';
	import BlockContentImg from '$lib/components/BlockContent/BlockContentImg.svelte';
	import BlockContentParagraph from '$lib/components/BlockContent/BlockContentP.svelte';
	import BlockContentLink from '$lib/components/BlockContent/BlockContentLink.svelte';
	import BlockContentHOne from './BlockContentHOne.svelte';
	import BlockContentHTwo from './BlockContentHTwo.svelte';
	import BlockContentHThree from './BlockContentHThree.svelte';
	import BlockContentUl from './BlockContentUL.svelte';
	import BlockContentOl from './BlockContentOL.svelte';
	import BlockContentListItem from './BlockContentListItem.svelte';
	import BlockContentFootnote from './BlockContentFootnote.svelte';
	import BlockContentBlockQuote from './BlockContentBlockQuote.svelte';
	import BlockContentPCentered from './BlockContentPCentered.svelte';
	import BlockContentPIndented from './BlockContentPIndented.svelte';
	import BlockContentHOneCentered from './BlockContentHOneCentered.svelte';
	import BlockContentHTwoCentered from './BlockContentHTwoCentered.svelte';
	import BlockContentHThreeCentered from './BlockContentHThreeCentered.svelte';
	import BlockContentButton from './BlockContentButton.svelte';
	import BlockContentOLIndented from './BlockContentOLIndented.svelte';
	import BlockContentULIndented from './BlockContentULIndented.svelte';
	let { value } = $props();
	const components: Partial<PortableTextComponents> = {
		block: {
			normal: BlockContentParagraph,
			h1: BlockContentHOne,
			h2: BlockContentHTwo,
			h3: BlockContentHThree,
			blockquote: BlockContentBlockQuote,
			'normal-centered': BlockContentPCentered,
			'normal-indented': BlockContentPIndented,
			'h1-centered': BlockContentHOneCentered,
			'h2-centered': BlockContentHTwoCentered,
			'h3-centered': BlockContentHThreeCentered
		},
		types: {
			image: BlockContentImg,
			button: BlockContentButton
		},
		marks: {
			link: BlockContentLink,
			footnote: BlockContentFootnote
		},
		list: {
			bullet: BlockContentUl,
			number: BlockContentOl,
			'bullet-indented': BlockContentULIndented,
			'number-indented': BlockContentOLIndented
		},
		listItem: {
			normal: BlockContentListItem
		}
	};
</script>

{#if value}
	<PortableText {components} {value}></PortableText>
{/if}
