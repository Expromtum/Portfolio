const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const glob = require('glob').sync;


module.exports = function (paths) {
    return {
        entry: {
            sprite: glob('./src/icons/sprite/*.svg')
        },

        module: {
            rules: [
                {
                    test:  /\.svg$/, /*/\.svg((\?.*)?|$)/*/
                    use: [
                        {
                            loader: 'svg-sprite-loader',
                            options: {
                                extract: true,
                                spriteFilename: 'images/sprite.svg',
                                include: paths,
                            }
                        },
                        {
                            loader: 'svgo-loader',
                            options: {
                                plugins: [
                                    {removeTitle: true},
                                    {removeAttrs: { attrs: '(fill|stroke)' } },
                                    {minifyStyles: false},
                                    //{convertColors: {shorthex: false}},
                                    {convertPathData: false},
                                    {removeUselessDefs: false}
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new SpriteLoaderPlugin()
        ]
    };
};