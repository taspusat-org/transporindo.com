import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import home from './home'
import whychooseus from './whychooseus'
import services from './services'
import categories from './categories'
import globalreach from './globalreach'
import testimonials from './testimonials'
import trustedby from './trustedby'
import contactsettings from './contactsettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, home, whychooseus, services, categories, globalreach, testimonials, trustedby, contactsettings],
}
