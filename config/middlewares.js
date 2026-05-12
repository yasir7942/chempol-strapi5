module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',

  // ✅ Keep ONLY this CORS block (and remove enabled)
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: ['https://chempol.co.uk'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
