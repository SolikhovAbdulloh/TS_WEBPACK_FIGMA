// const path = require('path')

// module.exports = {
//     entry: "./src/index.js", // shu yerdagi kodlar kamplitasya bosin
//     output: {
//         filename : "main.js", // shu faylga
//         path: path.resolve(__dirname,"dist"), //shu papkani ichida 
// }, 



// } 


const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};