import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Give a short and simple title',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Just generate this once title is provided',
    }),
    defineField({
      name: 'subtitle',
      title: 'Description',
      type: 'string',
      // of: [
      //   {
      //     type: 'block',
      //   },
      // ],
      description: 'Give a description on your project',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Choose an image of your project',
    }),
    // defineField({
    //   name: 'content',
    //   title: 'Content',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'block',
    //     },
    //     {
    //       type: 'image',
    //       fields: [
    //         {
    //           type: 'text',
    //           name: 'alt',
    //           title: 'Alternative Text',
    //         },
    //       ],
    //     },
    //   ],
    // }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
})
