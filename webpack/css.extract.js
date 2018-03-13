const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoPrefixer = require('autoprefixer');

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
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            }, {
                                loader: "postcss-loader",
                                options: {
                                    plugins: [
                                        autoPrefixer({
                                            browsers:['ie >= 8', 'last 4 version']
                                        })
                                    ],
                                    sourceMap: true
                                }
                            }, {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: true
                                }
                            }
                        ],
                    }),
                },
                {
                    test: /\.css$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
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