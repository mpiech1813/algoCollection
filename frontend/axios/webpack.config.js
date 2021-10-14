module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './index.js',
    output: {
        filename: './bundle.js',
        path: __dirname,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react'],
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
};
