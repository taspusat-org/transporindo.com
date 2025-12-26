import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet

// Note: Untuk developer" yang handle source code ini, setiap kali ingin membuat komponen baru 
// (yang berhubungan dengan Sanity CMS), diharapkan untuk mengubah:
// 1. structure.ts
// 2. sanity.config.tsx
// 3. index.ts

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')
        ),
      S.listItem()
        .title('Hero Section')
        .child(
          S.document()
            .schemaType('hero')
            .documentId('hero')
        ),
      S.listItem()
        .title('Why Choose Us')
        .child(
          S.document()
            .schemaType('whychooseus')
            .documentId('whychooseus')
        ),
        S.listItem()
        .title('Services')
        .child(
          S.document()
            .schemaType('services')
            .documentId('services')
        ),
        S.listItem()
        .title('Categories')
        .child(
          S.document()
            .schemaType('categories')
            .documentId('categories')
        ),
        S.listItem()
        .title('Global Reach')
        .child(
          S.document()
            .schemaType('globalReach')
            .documentId('globalReach')
        ),
        S.listItem()
        .title('Testimonials')
        .child(
          S.document()
            .schemaType('testimonials')
            .documentId('testimonials')
        ),
        S.listItem()
        .title('Trusted By')
        .child(
          S.document()
            .schemaType('trustedby')
            .documentId('trustedby')
        ),
        S.listItem()
        .title('Contact Us')
        .child(
          S.document()
            .schemaType('contactsettings')
            .documentId('contactsettings')
        ),

        S.divider(),

        S.listItem()
        .title('Blog Posts')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('All Posts')
        ),  
    ]);
