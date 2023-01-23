export const schemaTypes = [
 {
  title: 'Work',
  name: 'work',
  type: 'document',
  fields: [
   {
    title: 'Title',
    name: 'title',
    type: 'string',
   },
   {
    title: 'Description',
    name: 'description',
    type: 'text',
    rows: 4,
   },
   {
    title: 'Image',
    name: 'image',
    type: 'image',
   },
   {
    title: 'Stack',
    name: 'stack',
    type: 'array',
    of: [{ type: 'string' }],
   },
   {
    title: 'Tags',
    name: 'tags',
    type: 'array',
    of: [{ type: 'string' }],
    options: {
     layout: 'tags',
    },
   },
   {
    title: 'Links',
    name: 'links',
    type: 'object',
    fields: [
     { name: 'github', type: 'url', title: 'Github' },
     { name: 'website', type: 'url', title: 'Website' },
     { name: 'appStore', type: 'url', title: 'App Store' },
     { name: 'playStore', type: 'url', title: 'Play Store' },
    ],
   },
  ],
 },
];
