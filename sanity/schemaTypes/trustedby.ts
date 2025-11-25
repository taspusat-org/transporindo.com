import { defineType } from "sanity";

export default defineType({
    name: 'trustedby',
    title: 'Trusted By',
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
            name: 'companyList',
            title: 'Logo',
            type: 'array',
            of: [
            {
            type: 'object', // An array of objects
            fields: [
                { name: 'logo', title: 'Logo Perusahaan', type: 'image', description:'Company Logo'},
                { name: 'name', title: 'Nama Perusahaan', type: 'string', description: 'Company Name'},
            ],
            preview: {
                select: { title: 'name', media: 'logo' },
                    },
                },
            ],
        },
    ]
})