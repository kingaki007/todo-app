var webpack = require('webpack');
var path = require('path');

const config = {
    entry : './src/index.js',
    output: {
        path : path.join(__dirname,'dist'),
        filename : 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude : /node_modules/
            },
            {
                test : /\.css$/,
                use: [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            }
        ]
    }
}
module.exports = config;