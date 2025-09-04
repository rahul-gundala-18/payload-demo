import { Endpoint } from 'payload/config';

const frontendContent: Endpoint = {
  path: '/api/frontend-content',
  method: 'get',
  handler: async (
    req: import('express').Request,
    res: import('express').Response,
    next: import('express').NextFunction
  ) => {
    const payload = req.payload;
    try {
      const projectInfo = await payload.find({ collection: 'project-info' });
      const tabs = await payload.find({ collection: 'tabs' });
      const faqs = await payload.find({ collection: 'faqs' });
      const contact = await payload.find({ collection: 'contact' });
      const aboutUs = await payload.find({ collection: 'about-us' });

      res.json({
        projectInfo: projectInfo.docs[0],
        tabs: tabs.docs,
        faqs: faqs.docs,
        contact: contact.docs[0],
        aboutUs: aboutUs.docs[0],
      });
    } catch (err) {
      next(err);
    }
  },
};

export default frontendContent;
