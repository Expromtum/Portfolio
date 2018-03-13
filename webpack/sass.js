const autoprefixer = require('autoprefixer');

module.exports = function (paths) {
    return {
        // Настройка загрузчиков, они выполняют роль обработчика исходного файла в конечный
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    // use: [
                    //     'style-loader',  // 3 Добавляет стили в DOM-дерево при помощи тега style
                    //     'css-loader',    // 2 Добавляет css-модули в граф зависимостей
                    //     'sass-loader'    // 1 Компиляция cscc в css
                    // ]

                    use: [{
                        loader: "style-loader"// 3 Добавляет стили в DOM-дерево при помощи тега style
                    }, {
                        loader: "css-loader", // 2 Добавляет css-модули в граф зависимостей
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", // 1 Компиляция cscc в css
                        options: {
                            sourceMap: true
                        }
                    }]
                }
            ]
        }
    }
};