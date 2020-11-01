  const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');

const Sitemap = configureSitemap({
  baseUrl: 'https://rpgstock.com',
  exclude: ['/public/admin/*', '/public/admin', '/admin/*'],
  excludeIndex: true,
  pagesConfig: {
    '/pages/*': {
      priority: '0.5',
      changefreq: 'daily',
    },
  },
  isTrailingSlashRequired: true,
  targetDirectory: __dirname + '/public',
  pagesDirectory: __dirname + '/pages',
});
Sitemap.generateSitemap();