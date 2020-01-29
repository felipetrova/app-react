const withSass = require('@zeit/next-sass');

module.exports = withSass({
    webpack (config, { isServer }) {
        config.node = {
            fs: 'empty'
        };

        config.module.rules.push(
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: 'sass-loader',
                  }
                ]
            }
        );

        config.module.rules.push(
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'file-loader',
            }
        );

        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        })

        return config;
    }
});