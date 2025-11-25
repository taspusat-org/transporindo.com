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
        }
    ],
    
})
