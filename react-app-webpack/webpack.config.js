const HtmlWebPackPlugin=require('html-webpack-plugin');
const path=require('path');

module.exports={
    context:__dirname,
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js',
        publicPath:'/'
    },
    devServer:{
        historyApiFallback:true  //handles the route
 
    },

    module:{
        rules:[
            {
                test:/\.js?$/,        
                exclude:/node_modules/,
                use:'babel-loader'   //js loader
            },
            {
                test:/.css$/,
                use:[
                    'style-loader',
                    'css-loader' //css loaders
                ]
            },
            {
                test:/\.(png|jpg|jpeg|webp|svg|gif)?$/,
                use:'file-loader' //img/file loader
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:path.resolve(__dirname,'public/index.html'),
            filename:'index.html'
        })
    ]
};