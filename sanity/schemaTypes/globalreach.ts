import { defineType } from "sanity";

export default defineType({
    name: 'globalReach',
    title: 'Global Reach',
    type: 'document',
    // @ts-ignore
    __experiemental_actions: ['update', 'publish'],
    
    fields: [
        {
            name: 'title',
            title: 'Judul',
            type: 'string',
            description: 'Title',
        },
        {
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        },
        {
            name: 'globalReach',
            title: 'Daftar Jangkauan Global',
            type: 'array',
            description: 'List of Global Reach',
            of: [
            {
            type: 'object', // An array of objects
            fields: [
                { name: 'value', title: 'Angka', type: 'string', description:'Value'},
                { name: 'label', title: 'Label', type: 'string'},
            ],
            preview: {
                select: { title: 'label' },
                    },
                },
            ],
        },
        
    ]

})