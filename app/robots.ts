export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
        },
      ],
      sitemap: 'https://emojihack.com/sitemap.xml',
      host: 'https://emojihack.com',
    };
  }