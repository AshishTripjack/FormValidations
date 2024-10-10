
const path=require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');
const { context, entry, output } = require('../react-app-webpack/webpack.config');

module.exports={
    context:__dirname,
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js',
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]

            },
            {
                test:/\.(png|webp|jpg|jpeg|svg)/,
                use:'file-loader'
            }
        ]
    },
    devServer:{
        historyApiFallback:true
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:path.resolve(__dirname,'public/index.html'),
            filename:'index.html'
        })
    ]
}