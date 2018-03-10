module.exports = function (paths) {
    return {
        // Настройка загрузчиков, они выполняют роль обработчика исходного файла в конечный
        module: {
            rules: [
                {
                    test: /\.css/,
                    include: paths,
                    use: [
                        'style-loader',  // 2 Добавляет стили в DOM-дерево при помощи тега style
                        'css-loader',    // 1 Добавляет css-модули в граф зависимостей
                    ]
                }
            ]
        }
    }
}