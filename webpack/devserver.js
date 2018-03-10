module.exports = function () {
    // Когда запущен webpack-dev-server – промежуточные файлы (chunks) попадают в оперативную память RAM.
    // Браузер же, получает их по протоколу webpack:// прямо из контейнера
    return {
        devServer: {
            port: 9000,
            stats: 'errors-only' //В консоль выводятся только ошибки
        }
    }
}