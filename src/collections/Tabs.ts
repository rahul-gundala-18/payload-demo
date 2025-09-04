import { CollectionConfig } from 'payload/types';

const Tabs: CollectionConfig = {
  slug: 'tabs',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  endpoints: {
    list: () => '/api/tabs',
    read: () => '/api/tabs/:id',
    create: () => '/api/tabs',
    update: () => '/api/tabs/:id',
    delete: () => '/api/tabs/:id',
  },
};

export default Tabs;

[
  {
    "label": "Home",
    "content": "<p>Welcome to our homepage!</p>"
  },
  {
    "label": "Features",
    "content": "<ul><li>Fast</li><li>Secure</li></ul>"
  }
]
