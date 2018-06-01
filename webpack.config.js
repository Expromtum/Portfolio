const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

//Настройки webpack
const pug = require('./webpack/pug');
const devServer = require('./webpack/devserver');
// const sass = require('./webpack/sass');
// const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
// const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const sprite = require('./webpack/svg.sprite');
const babelJS = require('./webpack/js.babel');
const fonts = require('./webpack/fonts');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build'),
    node_modules: path.join(__dirname, 'node_modules')
};

//locals.basedir = PATHS.source;
//app.locals.basedir = PATHS.source;

const common = merge([
    {
        //Точки входа
        entry: {
            //'google-map': PATHS.source + '/js/google-map.js',
            'index': PATHS.source + '/views/pages/index/index.js',
            'about': PATHS.source + '/views/pages/about/about.js',
            'blog' : PATHS.source + '/views/pages/blog/blog.js',
            'login': PATHS.source + '/views/pages/login/login.js'
        },

        resolve: {
            // extensions: ['.js', '.pug', '.scss'],
            // modules: [PATHS.source , 'node_modules'],

            alias: {
                src: PATHS.source
            }
        },

        // то, что получим на выходе
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },

        // загружаем плагины
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            //new webpack.NoErrorsPlugin(),//.NoEmitOnErrorsPlugin(),
            // Генерировать html файл с уже подключенным скриптом
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/views/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'about.html',
                chunks: ['about', 'common'],
                template: PATHS.source + '/views/pages/about/about.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog', 'common'],
                template: PATHS.source + '/views/pages/blog/blog.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'login.html',
                chunks: ['login', 'common'],
                template: PATHS.source + '/views/pages/login/login.pug'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common' //Вынесем общий код в отдельный модуль с именем common
            }),
        ]
    },
    babelJS(),
    pug(),
    // sass(),
    // css()
    extractCSS(),
    images(PATHS),
    sprite(),
    fonts()
]);

//TODO: plumber

module.exports = function(env) {
    if (!env) {                //startw
        return merge([
                common,
                devServer()
            ]
        )
    }
    if (env === 'production'){  //build
        return merge([
            common,
            //uglifyJS() // Минификация кода
            ]
        )
    }
    if (env === 'development') { //start
        return merge([
            common,
            devServer()
            ]
        )
    }
}