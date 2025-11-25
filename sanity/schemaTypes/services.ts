import { defineType } from "sanity";

export default defineType({
    name: 'services',
    title: 'Services',
    type: 'document',
    // @ts-ignore
    __experiemental_actions: ['update', 'publish'],

    fields: [
        {
            name: 'title',
            title: 'Judul',
            type: 'string',
            description: 'Title'
        },
        {
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        },
        {
            name: 'servicesList',
            title: 'Daftar Jasa (Maks. 3 jasa)',
            description: 'List of Services (Max. 3 services)',
            type: 'array',
            validation: (Rule) => Rule.max(3),
            of: [
            {
            type: 'object', // An array of objects
            fields: [
                { name: 'image', title: 'Foto', type: 'image', description: 'Image Cover' },
                { name: 'cardTitle', title: 'Judul Kartu', type: 'string', description: 'Card Title' },
                { name: 'cardDescription', title: 'Keterangan Kartu', type: 'array', description: 'Card Description', of: [
                    {
                      type: 'block', // This enables the rich text editor
                      styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'Heading 2', value: 'h2'},
                        {title: 'Heading 3', value: 'h3'},
                        {title: 'Quote', value: 'blockquote'},
                      ],
                      lists: [
                        {title: 'Bullet', value: 'bullet'},
                        {title: 'Numbered', value: 'number'},
                      ],
                      marks: {
                        decorators: [
                          {title: 'Strong', value: 'strong'},
                          {title: 'Emphasis', value: 'em'},
                          {title: 'Code', value: 'code'},
                        ],
                        // For custom links, e.g., internal links
                        annotations: [
                          {
                            name: 'link',
                            type: 'object',
                            title: 'External link',
                            fields: [
                              {
                                name: 'href',
                                type: 'url',
                                title: 'URL'
                              }
                            ]
                          },
                        ]
                      },
                    },
                    {
                      type: 'image',
                      options: {hotspot: true}, // Allows cropping
                    },
                  ], },
                { name: 'cardExtendedDescription', title: 'Keterangan Tambahan', type: 'array', description: "Additional Description", of: [
                  {
                    type: 'block', // This enables the rich text editor
                    styles: [
                      {title: 'Normal', value: 'normal'},
                      {title: 'Heading 2', value: 'h2'},
                      {title: 'Heading 3', value: 'h3'},
                      {title: 'Quote', value: 'blockquote'},
                    ],
                    lists: [
                      {title: 'Bullet', value: 'bullet'},
                      {title: 'Numbered', value: 'number'},
                    ],
                    marks: {
                      decorators: [
                        {title: 'Strong', value: 'strong'},
                        {title: 'Emphasis', value: 'em'},
                        {title: 'Code', value: 'code'},
                      ],
                      // For custom links, e.g., internal links
                      annotations: [
                        {
                          name: 'link',
                          type: 'object',
                          title: 'External link',
                          fields: [
                            {
                              name: 'href',
                              type: 'url',
                              title: 'URL'
                            }
                          ]
                        },
                      ]
                    },
                  },
                  // You can also add custom objects to your Portable Text
                  {
                    type: 'image',
                    options: {hotspot: true}, // Allows cropping
                  },
                ]},
            ],
            preview: {
                select: { title: 'cardTitle', media: 'image' },
                    },
                },
            ],

        }
    ]
})