const path = require('path');
const cloudinaryBaseUrl = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    loader: 'cloudinary',
    path: cloudinaryBaseUrl,
  },
};

module.exports = nextConfig;
