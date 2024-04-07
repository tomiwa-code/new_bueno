import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'bueno',

  projectId: 'ua7iwov2',
  dataset: 'production',
  basePath: "/buenoadmin",
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
