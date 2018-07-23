module.exports = function () {
    return {
        module: {
            rules: [
                // {
                //     //test: /\.(eot|ttf|woff|woff2)$/,
                //     test: /\.(eot|ttf|woff|woff2)$/,
                //     loader: 'file-loader',
                //     options: {
                //         name: 'fonts/[name].[ext]'
                //     }
                // }
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        //outputPath: 'css',
                        useRelativePath: true
                    }
                }
            ]
        }
    };
};