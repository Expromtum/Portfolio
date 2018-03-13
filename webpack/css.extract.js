const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (paths) {
    return {
        // Настройка загрузчиков, они выполняют роль обработчика исходного файла в конечный
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({ //ExtractTextPlugin заменяет style-loader
                        publicPath: '../', //Нужен для того, чтобы пути к картинкам для фоновых изображениях в css файлах были правильными после сборки
                        fallback: 'style-loader',  // Применяется, если ExtractTextPlugin не может завершить работу
                        use: [
                            'css-loader',
                            'sass-loader'
                        ],
                    }),
                },
                {
                    test: /\.css$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader',
                    }),
                },
            ],
        },
        // загружаем плагины
        plugins: [
            new ExtractTextPlugin('./css/[name].css'),
        ]
    };
};