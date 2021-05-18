const withPlugins = require("next-compose-plugins");
const withImages = require('next-images')
const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');

const nextConfig = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg;
    }
}

const Sitemap = configureSitemap({
    baseUrl: 'https://bareworks.net',
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


module.exports = withPlugins([
    [withImages],
], nextConfig);