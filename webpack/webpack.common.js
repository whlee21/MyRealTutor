const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rxPaths = require('rxjs/_esm5/path-mapping');
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

const utils = require('./utils.js');

module.exports = (options) => ({
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules'],
        alias: {
            app: utils.root('src/main/webapp/app/'),
            ...rxPaths()
        }
    },
    stats: {
        children: false
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                    caseSensitive: true,
                    removeAttributeQuotes:false,
                    minifyJS:false,
                    minifyCSS:false
                },
                exclude: ['./src/main/webapp/index.html']
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
                loader: 'file-loader',
                options: {
                    digest: 'hex',
                    hash: 'sha512',
                    name: 'content/[hash].[ext]'
                }
            },
            {
                test: /manifest.webapp$/,
                loader: 'file-loader',
                options: {
                    name: 'manifest.webapp'
                }
            },
            // Ignore warnings about System.import in Angular
            { test: /[\/\\]@angular[\/\\].+\.js$/, parser: { system: true } },
                {
                    // Transpile ES2015 (aka ES6) to ES5. Accept the JSX syntax by React
                    // as well.

                    exclude: [
                        new RegExp(`${__dirname}/node_modules/(?!js-utils)`)
                    ],
                    loader: 'babel-loader',
                    options: {
                        // XXX The require.resolve bellow solves failures to locate the
                        // presets when lib-jitsi-meet, for example, is npm linked in
                        // jitsi-meet.
                        plugins: [
                            require.resolve('@babel/plugin-transform-flow-strip-types'),
                            require.resolve('@babel/plugin-proposal-class-properties'),
                            require.resolve(
                                '@babel/plugin-proposal-export-default-from'),
                            require.resolve(
                                '@babel/plugin-proposal-export-namespace-from')
                        ],
                        presets: [
                            [
                                require.resolve('@babel/preset-env'),

                                // Tell babel to avoid compiling imports into CommonJS
                                // so that webpack may do tree shaking.
                                { modules: false }
                            ],
                            require.resolve('@babel/preset-flow'),
                            require.resolve('@babel/preset-react')
                        ]
                    },
                    test: /\.jsx?$/
                }, {
                    // Expose jquery as the globals $ and jQuery because it is expected
                    // to be available in such a form by multiple jitsi-meet
                    // dependencies including lib-jitsi-meet.

                    loader: 'expose-loader?$!expose-loader?jQuery',
                    test: /\/node_modules\/jquery\/.*\.js$/
                }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'${options.env}'`,
                BUILD_TIMESTAMP: `'${new Date().getTime()}'`,
                VERSION: `'${utils.parseVersion()}'`,
                DEBUG_INFO_ENABLED: options.env === 'development',
                // The root URL for API calls, ending with a '/' - for example: `"https://www.jhipster.tech:8081/myservice/"`.
                // If this URL is left empty (""), then it will be relative to the current context.
                // If you use an API server, in `prod` mode, you will need to enable CORS
                // (see the `jhipster.cors` common JHipster property in the `application-*.yml` configurations)
                SERVER_API_URL: `''`
            }
        }),
        new CopyWebpackPlugin([
            { from: './node_modules/swagger-ui/dist/css', to: 'swagger-ui/dist/css' },
            { from: './node_modules/swagger-ui/dist/lib', to: 'swagger-ui/dist/lib' },
            { from: './node_modules/swagger-ui/dist/swagger-ui.min.js', to: 'swagger-ui/dist/swagger-ui.min.js' },
            { from: './src/main/webapp/swagger-ui/', to: 'swagger-ui' },
            { from: './src/main/webapp/content/', to: 'content' },
            { from: './src/main/webapp/favicon.ico', to: 'favicon.ico' },
            { from: './src/main/webapp/manifest.webapp', to: 'manifest.webapp' },
            // jhipster-needle-add-assets-to-webpack - JHipster will add/remove third-party resources in this array
            { from: './src/main/webapp/robots.txt', to: 'robots.txt' },
            { from: './node_modules/jquery/dist', to: 'jquery' },
            { from: './src/main/webapp/vendor/jitsi/external_api.js', to: 'external_api.js' },
            { from: './node_modules/lib-jitsi-meet/dist', to: 'lib-jitsi-meet' }
        ]),
        new MergeJsonWebpackPlugin({
            output: {
                groupBy: [
                    { pattern: "./src/main/webapp/i18n/ko/*.json", fileName: "./i18n/ko.json" },
                    { pattern: "./src/main/webapp/i18n/en/*.json", fileName: "./i18n/en.json" }
                    // jhipster-needle-i18n-language-webpack - JHipster will add/remove languages in this array
                ]
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/main/webapp/index.html',
            chunks: ['vendors', 'polyfills', 'global', 'main'],
            chunksSortMode: 'manual',
            inject: 'body'
        })
    ]
});
