const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

//Настройки webpack
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
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
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        //Точки входа
        entry: {
            'index': PATHS.source + '/views/pages/index/index.js',
            'blog': PATHS.source + '/views/pages/blog/blog.js'
        },

        // то, что получим на выходе
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },

        // загружаем плагины
        plugins: [
            //new webpack.NoErrorsPlugin(),//.NoEmitOnErrorsPlugin(),
            // Генерировать html файл с уже подключенным скриптом
            new HtmlWebpackPlugin({
                //title: 'Portfolio',
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/views/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                //title: 'Portfolio-blog',
                filename: 'blog.html',
                chunks: ['blog', 'common'],
                template: PATHS.source + '/views/pages/blog/blog.pug'
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
    images(),
    sprite(),
    fonts()
]);

//TODO: plumber

module.exports = function(env) {
    if (!env) {                //startw
        return merge([
                common,
                devserver()
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
            devserver()
            ]
        )
    }
}