module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }
            ,
            {
                test: /\.(sass|scss|css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: ['file-loader']
            }
        ]
    }
};