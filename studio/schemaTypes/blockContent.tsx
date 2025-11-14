import {defineType, defineArrayMember} from 'sanity'
import { ImageIcon } from '@sanity/icons'
import { RxButton } from "react-icons/rx";
import { FaNoteSticky } from "react-icons/fa6";
import './styles.css';
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
        {title: 'Normal Centered', value: 'normal-centered', component: ({ children }) => <p style={{textAlign: "center"}}>{children}</p>},
        {title: 'Normal Indented', value: 'normal-indented', component: ({ children }) => <div style={{paddingLeft: "2rem", paddingRight: "2rem"}}>{children}</div>},
        {title: 'H1 Centered', value: 'h1-centered', component: ({ children }) => <h1 style={{textAlign: "center"}}>{children}</h1>},
        {title: 'H2 Centered', value: 'h2-centered', component: ({ children }) => <h2 style={{textAlign: "center"}}>{children}</h2>},
        {title: 'H3 Centered', value: 'h3-centered', component: ({ children }) => <h3 style={{textAlign: "center"}}>{children}</h3>},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet',},
        {title: 'Numbered', value: 'number'},
        {title: 'Bullet - Indented', value: 'bullet-indented'},
        {title: 'Numbered — Indented', value: 'number-indented'}
    ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},


        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              },
            ],
          },
          {
            title: 'Footnote',
            name: 'footnote',
            type: 'object',
            icon: FaNoteSticky,
            fields: [
              {
                name: 'text',
                type: 'array',
                of: [{type: 'block'}]
              }
            ]
          }
        ],
      },
    }),
    {
      type: 'image',
      fields: [
        { 
          type: 'string',
          name: 'alt',
          title: 'Alt Text',
        },
        { 
          type: 'blockContent',
          name: 'caption',
          title: 'Caption'
        },
        {
          type: 'string',
          name: 'alignment',
          title: 'Alignment',
          options: {
            list: ['left', 'center', 'right']
          }
        }
      ]
    },
    {
      type: 'object',
      name: 'button',
      title: 'Button',
      icon: RxButton,
      fields: [
        {
          type: 'string',
          name: 'label',
          title: 'Label'
        },
        {
          type: 'string',
          name: 'url',
          title: 'URL'
        },
      ]
    }
  ],
})
