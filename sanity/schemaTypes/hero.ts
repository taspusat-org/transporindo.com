// Singleton with multiple images
import { defineType } from "sanity";

export default defineType({
    name: 'hero',
    title: 'Hero Slider',
    type: 'document',
    // @ts-ignore
    __experimental_actions: ['update', 'publish'], // Only allow editing and publishing
    fields: [
        {
            name: 'title',
            title: 'Judul (Opsional)',
            type: 'string',
            description: 'Title (Optional)',
        },
        {
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        },
        {
            name: 'slides',
            title: 'Slides',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'image', title: 'Image', type: 'image' },
                        { name: 'heading', title: 'Heading', type: 'string' },
                        { name: 'subheading', title: 'Subheading', type: 'string' },
                        { name: 'ctaText', title: 'CTA Text', type: 'string' },
                        { name: 'ctaUrl', title: 'CTA URL', type: 'url' },
                        { name: 'order', title: 'Order', type: 'number' },
                    ],
                    preview: {
                        select: {
                            title: 'heading',
                            media: 'image',
                        },
                    },
                }
            ]
        }
    ]
})