const path=require('path')

module.exports={
    mode:"production",

    //loader
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    //loader

    devServer:{
       static:{
        directory:path.join(__dirname,'dist')
       },
        compress:true,
        port:3500
    }

}