const path = require('path');
const fs = require('fs');

const files = fs
    .readdirSync('./src')
    .filter(file => file.match(/.*\.scss/))
    .map(file => `./src/${file}`);

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    entry: files,
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                    {loader: "file-loader", options: {name: "css/[name].css"}},
                    {loader: "extract-loader"},
                    {loader: "css-loader"},
                    {loader: "postcss-loader"},
                    {loader: "sass-loader"}
                ]
            }
        ]
    }
}
