const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = function () {
    return {
        // Настройка загрузчиков, они выполняют роль обработчика исходного файла в конечный
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'svg-sprite-loader',
                            options: {
                                //extract: true,
                                spriteFilename: 'icons-sprite.svg'
                            }
                        }/*,
                        'svg-fill-loader'*//*,
                        'svgo-loader'*/
                    ]
                }
            ]
        },
        plugins: [
            new SpriteLoaderPlugin()
        ]
    };
};