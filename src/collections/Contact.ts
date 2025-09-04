import { CollectionConfig } from 'payload/types';

const Contact: CollectionConfig = {
  slug: 'contact',
  fields: [
    {
      name: 'getInTouchContent',
      type: 'richText',
      defaultValue: '<p>Contact us for more information.</p>',
    },
    {
      name: 'callUs',
      type: 'text',
      label: 'Call Us Number',
      defaultValue: '+1-234-567-890',
    },
    {
      name: 'faqButtonLabel',
      type: 'text',
      label: 'FAQ Button Label',
      defaultValue: 'View FAQs',
    },
    {
      name: 'feedbackFormFields',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'type',
          type: 'text',
        },
        {
          name: 'required',
          type: 'checkbox',
        },
      ],
      defaultValue: [
        { label: 'Your Name', type: 'text', required: true },
        { label: 'Email', type: 'email', required: true },
        { label: 'Message', type: 'textarea', required: false },
      ],
    },
  ],
};

export default Contact;
