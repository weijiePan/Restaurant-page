const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const { watch } = require("fs/promises");
module.exports ={
    mode:"development",
    entry:["./src/index.js"],
    devtool:"eval-source-map",
    devServer:{
        watchFiles:["./src/index.html", "./asset/morningRestaurant.jpg"]},
    output:{
        filename:"index.js",
        clean:true,
        path: path.resolve(__dirname, "dist"),
    },
    plugins:[
        new htmlWebpackPlugin({template:"./src/index.html"}),
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                 type: "asset/resource",
            }
            
        ]
    }

}