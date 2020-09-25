const withPlugins = require("next-compose-plugins");
const withImages = require('next-images')

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


module.exports = withPlugins([
    [withImages],
], nextConfig);
