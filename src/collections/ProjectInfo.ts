import { CollectionConfig } from 'payload/types';

const ProjectInfo: CollectionConfig = {
  slug: 'project-info',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'socialLoginsAllowed',
      type: 'array',
      label: 'Allowed Social Logins',
      fields: [
        {
          name: 'provider',
          type: 'text',
        },
      ],
    },
  ],
};

export default ProjectInfo;

{
  "title": "My Awesome Project",
  "socialLoginsAllowed": [
    { "provider": "google" },
    { "provider": "facebook" },
    { "provider": "github" }
  ]
}
