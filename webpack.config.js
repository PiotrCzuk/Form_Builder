var path = require("path");

module.exports = {
    entry:["whatwg-fetch", "./js/form_builder.jsx"],
    output: { filename: "./js/out.js"},
    mode: "development", watch: true,
    devtool: '#eval-source-map',
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "stage-2", "react"]
                }
            }
        }]
    },
    devServer:{
        inline:true,
        contentBase: "./",
        port: 3001
    }
}