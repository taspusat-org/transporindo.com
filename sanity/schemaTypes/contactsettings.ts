import { defineType } from "sanity";

export default defineType({
    name: 'contactsettings',
    title: 'Contact',
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
            name: 'description',
            title: 'Keterangan',
            type: 'string',
            description: 'Description'
        },
        {
            name: 'emailIcon',
            title: 'Ikon E-mail',
            type: 'image',
            description: 'Email Icon'
        },
        {
            name: 'emailTitle',
            title: 'Judul E-mail (contoh: Email Kami)',
            type: 'string',
            description: 'Email Title (e.g Our E-mail)'
        },
        {
            name: 'email',
            title: 'Alamat E-mail (contoh: info@transporindo.co.id)',
            type: 'string',
            description: 'Email Address (e.g info@transporindo.co.id)'
        },
        {
            name: 'officeIcon',
            title: 'Ikon Buat Kantor',
            type: 'image',
            description: 'Office Icon'
        },
        {
            name: 'officeTitle',
            title: 'Judul Buat Kantor (contoh: Kantor Kami)',
            type: 'string',
            description: 'Office Title (e.g Our Office)'
        },

        {
            name: 'offices',
            title: 'Daftar Cabang Kantor',
            type: 'array',
            of: [
            {
            type: 'object', // An array of objects
            fields: [
                { name: 'city', title: 'Kota', type: 'string', description: 'City' },
                { name: 'address', title: 'Alamat', type: 'string', description: 'Address' },
                { name: 'phoneNum', title: 'No. HP', type: 'string', description: 'Phone Number' },
                { name: 'mapURL', title: 'Link Google Maps', type: 'string', description: 'Google Maps URL' }
                
            ],
            preview: {
                select: { title: 'city' },
                    },
                },
            ],
        },
    ]
})