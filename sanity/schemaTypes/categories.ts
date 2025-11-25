import { defineType } from "sanity";

export default defineType({
    name: 'categories',
    title: 'Categories',
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
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        },
        {
            name: 'categoriesList',
            title: 'Daftar Kategori (Maks. 6)',
            type: 'array',
            description: 'List of Categories (Max. 6)',
            validation: (Rule) => Rule.max(6),
            of: [
            {
            type: 'object', // An array of objects
            fields: [
                { name: 'icon', title: 'Ikon', type: 'image', description:'Icon'},
                { name: 'title', title: 'Judul Kategori', type: 'string', description: 'Category Title'},
                { name: 'description', title: 'Keterangan Kategori', type: 'text', description: 'Category Description' },
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