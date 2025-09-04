import { CollectionConfig } from 'payload/types';

const FAQs: CollectionConfig = {
  slug: 'faqs',
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
    },
  ],
  access: {
    read: () => true,
  },
  endpoints: [
    {
      path: '/faqs',
      method: 'get',
      handler: async (req, res) => {
        const faqs = await req.payload.find({ collection: 'faqs' });
        return res.json(faqs);
      },
    },
  ],
};

export default FAQs;
