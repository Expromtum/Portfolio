module.exports = function () {
    return {
        // Настройка загрузчиков, они выполняют роль обработчика исходного файла в конечный
        module: {
            rules: [
                {
                    test: /\.pug$/,   //работаем с файлами, заканчивающимися на ".pag"
                    loader: 'pug-loader',
                    options: {
                        pretty: true //Расставить отступы и переносы строк
                    }
                }
            ]
        }
    }
}