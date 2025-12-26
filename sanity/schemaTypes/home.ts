// Singleton
import { defineType } from "sanity";

export default defineType({
    name: 'home',
    title: 'Home Page',
    type: 'document',
    // @ts-ignore
    __experimental_actions: ['update', 'publish'], // Only allow editing and publishing
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
            name: 'description',
            title: 'Keterangan',
            type: 'text',
            description: 'Description'
        },
        {
            name: 'image1',
            title: 'Foto Pertama (Belakang)',
            type: 'image',
            description: 'First image (behind)'
        },
        {
            name: 'image2',
            title: 'Foto Pertama (Depan)',
            type: 'image',
            description: 'Second image (front)'
        },
        {
            name: 'visionTitle',
            title: 'Judul Visi',
            type: 'string',
            description: 'Vision Title'
        },
        { name: 'vision', title: 'Visi', type: 'array', description: 'Vision', of: [
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
            ], 
        },
        {
            name: 'missionTitle',
            title: 'Judul Misi',
            type: 'string',
            description: 'Mission Title'
        },
        { name: 'mission', title: 'Misi', type: 'array', description: 'Mission', of: [
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
            ], 
        },
    ],
    
})
