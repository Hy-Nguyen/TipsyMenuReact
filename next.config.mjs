/** @type {import('next').NextConfig} */

export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-media0.fl.yelpcdn.com',  
        port: '',
      },
      
    ],
  },
};


