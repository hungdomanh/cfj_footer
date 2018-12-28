const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withStylus = require('@zeit/next-stylus')
const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = withCSS(withSass(withStylus(
    {
    webpack(config, options) {
        config.module.rules.push(
            {
                test: /\.png$/,
                use: [
                    'file-loader?name=i/[hash].[ext]'
                ]
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        )

        config.resolve.modules.push("node_modules", "spritesmith-generated")

        config.plugins.push(
            new SpritesmithPlugin({
                src: {
                    cwd: path.resolve(__dirname, 'src/ico/'),
                    glob: '*.png'
                },
                target: {
                    image: path.resolve(__dirname, './static/sprite.png'),
                    css: [
                        path.resolve(__dirname, './src/spritesmith-generated/sprite.styl'),
                        [path.resolve(__dirname, './src/spritesmith-generated/sprite.scss'), {format: 'scss'}],
                        [path.resolve(__dirname, './src/spritesmith-generated/sprite.css'), {format: 'css'}]
                    ]
                },
                apiOptions: {
                    cssImageRef: '/static/sprite.png',
                    handlebarsHelpers: {
                        helperExample: (x) => 10 * x
                    }
                },
                retina: '@2x'
            })
        )

        return config
    }
}
)))