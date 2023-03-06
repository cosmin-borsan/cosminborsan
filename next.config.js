/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["www.google.com", "links.papareact.com", "cdn.sanity.io"],
    },
};
