const path = require("path");

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query: { presets: ["es2015"]}},
        ]
    },
    mode: "development",
}