module.exports = function () {
    return {
        // Настройка загрузчиков, они выполняют роль обработчика исходного файла в конечный
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: [{
                        loader: 'babel-loader',
                        // options: {
                        //     presets: ['env']
                        // }
                    }]
                }
            ]
        }
    }
}