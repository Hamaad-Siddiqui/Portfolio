import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './lib/schemas';

export default defineConfig({
 name: 'default',
 title: 'Portfolio',

 projectId: 'z59tidwh',
 dataset: 'production',

 plugins: [deskTool(), visionTool()],

 schema: {
  types: schemaTypes,
 },
});
