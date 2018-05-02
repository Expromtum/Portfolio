const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (PATHS) {
    return {
        // Настройка загрузчиков, они выполняют роль обработчика исходного файла в конечный
        module: {
            rules: [
                {
                    test: /\.(jpg|png)$/,
                    //exclude: /sprite/,
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    //Эти иконки svg копируем как есть картинками, без спрайта
                    from: PATHS.source + '/icons/*.svg',
                    to: PATHS.build + '/images/[name].[ext]',
                    test: /\.svg$/,
                }
            ])
        ]
    };
};