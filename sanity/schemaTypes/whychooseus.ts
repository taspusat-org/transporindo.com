import { defineType } from "sanity";

export default defineType({
    name: 'whychooseus',
    title: 'Why Choose Us',
    type: 'document',
    // @ts-ignore
    __experiemental_actions: ['update', 'publish'],
    
    fields: [
        {
            name: 'smallHeading',
            title: 'Teks Kecil',
            type: 'string',
            description: 'Small Text',
        },
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
            name: 'reasonsList',
            title: 'Daftar Alasan (Maks. 6)',
            type: 'array',
            description: 'List of Reasons (Max. 6)',
            validation: (Rule) => Rule.max(6),
            of: [
            {
            type: 'object', // An array of objects
            fields: [
                { name: 'icon', title: 'Ikon', type: 'image', description:'Icon'},
                { name: 'title', title: 'Judul Alasan', type: 'string', description: 'Reason Title'},
                { name: 'description', title: 'Keterangan Alasan', type: 'text', description: 'Reason Description' },
            ],
            preview: {
                select: { title: 'title', media: 'icon' },
                    },
                },
            ],
        },
        {
            name: 'image',
            title: 'Foto',
            type: 'image',
            description: 'Image'
        }
    ]

})