module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb66e77c0f548a10615b5e62ad3fa867'),
  },
});
