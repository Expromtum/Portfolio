const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = function () {
    return {
        // Настройка загрузчиков, они выполняют роль обработчика исходного файла в конечный
        module: {
            rules: [
                {
                    test:  /\.svg$/, /*/\.svg((\?.*)?|$)/*/
                    use: [
                        {
                            loader: 'svg-sprite-loader',
                            options: {
                                extract: true,
                                spriteFilename: 'images/sprite.svg'
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