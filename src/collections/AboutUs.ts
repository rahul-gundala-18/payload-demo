import { CollectionConfig } from 'payload/types';

const AboutUs: CollectionConfig = {
  slug: 'about-us',
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
      defaultValue: '<p>We are a team dedicated to building awesome products.</p>',
    },
  ],
};

export default AboutUs;
