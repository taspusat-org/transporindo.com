import { defineType } from "sanity"

export default defineType({
  name: 'testimonials',
  title: 'Data Testimoni', // Title in Indonesian
  description: 'Testimony Data', // Description in English
  type: 'document',
  fields: [
    {
      name: 'smallHeading',
      title: 'Judul Kecil',
      description: 'Small Heading',
      type: 'string',
    },
    {
      name: 'bigHeading',
      title: 'Judul Besar',
      description: 'Big Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Deskripsi',
      description: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'testimonylist',
      title: 'Daftar Testimoni',
      description: 'Testimony List',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Item Testimoni',
          fields: [
            {
              name: 'name',
              title: 'Nama',
              description: 'Name',
              type: 'string',
            },
            {
              name: 'role',
              title: 'Peran',
              description: 'Role',
              type: 'string',
            },
            {
              name: 'company',
              title: 'Perusahaan',
              description: 'Company',
              type: 'string',
            },
            {
              name: 'logo',
              title: 'Logo',
              description: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'rating',
              title: 'Peringkat',
              description: 'Rating',
              type: 'number',
              validation: (Rule) => Rule.min(1).max(5).precision(1),
            },
            {
              name: 'content',
              title: 'Konten',
              description: 'Content',
              type: 'text',
            },
          ],
          // Preview configuration for the Studio UI
          preview: {
            select: {
              title: 'name',
              subtitle: 'company',
              media: 'logo',
            },
          },
        },
      ],
    },
  ],
})