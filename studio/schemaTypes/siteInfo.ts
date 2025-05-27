import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'siteInfo',
  title: 'Site Info',
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'other',
      title: 'Other',
    },
  ],
  fields: [
    defineField({
      name: 'headerText',
      title: 'Header Blurb',
      description: 'Blurb that appears in the navigational header.',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'donateButtonLabel',
      title: 'Donate Button Label',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'donateButtonLink',
      title: 'Donate Button Link',
      type: 'string',
      group: 'header',
    }),
    defineField({
      name: 'publicationPageHeader',
      title: 'Publications Page Header',
      type: 'string',
      group: 'other'
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      description: 'Copyright text in footer.',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'newsletterHeaderText',
      title: 'Newsleader Header',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'newsletterButtonText',
      title: 'Newsleader Submit Button Label',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'newsletterSuccessText',
      title: 'Newsleader Success Message',
      type: 'string',
      group: 'footer',
    }),
    
    defineField({
      name: 'connectHeader',
      title: 'Connect Header',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'connectLinks',
      title: 'Connect Links',
      type: 'array',
      group: 'footer',
      of: [
        defineField({
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'resourcesHeader',
      title: 'Resources Header',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'textOnlyPages',
      title: 'Resource Pages',
      description: 'ex: Privacy Policy or Terms of Use',
      type: 'array',
      group: 'footer',
      of: [
        defineField({
          name: 'textOnlyPage',
          title: 'Resource Page',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              validation: (Rule) => Rule.required(),
              options: {
                source: (_, {parent}) => {
                  return parent.title
                },
                maxLength: 96,
              },
            }),

            defineField({
              name: 'content',
              title: 'Content',
              type: 'blockContent',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'contactHeader',
      title: 'Contact Us Header',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'contactLinks',
      title: 'Contact Links',
      type: 'array',
      group: 'footer',
      of: [
        defineField({
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'colophonHeader',
      title: 'Colophon Header',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'colophonContent',
      title: 'Colophon Content',
      type: 'blockContent',
      group: 'footer',
    }),
  ],
})
