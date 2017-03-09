var path = require('path');
var webpack = require('webpack');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
    ?   ['./src/index.js']
    :   [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ];

var plugins = PRODUCTION 
    ? []
    : [new webpack.HotModuleReplacementPlugin()]

plugins.push(
    new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(DEVELOPMENT),
        PRODUCTION: JSON.stringify(PRODUCTION)  
    })
);

const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';
module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: '/node_modules/',
        }],
        loaders: [{
            test: /\.(png|jpg|gif)$/,
            loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
            exclude: '/node_modules/',
        }],
        loaders: [{
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader?localIdentName=' + cssIdentifier],
            exclude: '/node_modules/',
        }],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    }
}