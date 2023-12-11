/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");
const fs = require("fs");

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    // experimental: {
    //     appDir: true
    // },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com"],
        unoptimized: true,
    },
    env: {
        siteTitle: "VocabNiton",
        siteDescription: "Leitner System with Pronunciation",
        siteKeywords: "vocabnotion leitner system pronunciation prof stuart webb notion template flashcard",
        siteUrl: "vocabnotion.com",
        //siteImagePreviewUrl: "/images/preview.jpeg",
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    ...createSecureHeaders(),
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
