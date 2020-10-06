# Webpack

## What is Webpack?
- Module Bundler
- Custom Files or NPM installed
- Generates Static Assets
- Extend with Plugins & Loaders

## Properties of a Module
- Discrete chunk of functionality
- Abstraction
- Encapsulation
- Usually a single task or responsibility
- Reusable

## How is Webpack Different?
- Code Splitting
- Loaders (CSS, SASS, JSX, etc)
- Clever Parsing (require("./templates/" + name + ".jade"))
- Plugins

## Example Loaders
- CSS & Style
- Sass & Less
- JSX (React)
- Babel
- Coffee
- TypeScript
- EJS, Pug, Handlebars
- json

## Webpack Installation
`npm install -g webpack`

// To use the dev server

`npm install Webpack-dev-server`

## How does Webpack work?
1. Webpack reads the entry point and analyzes its depedencies, its dependencies' dependencies, and so on. 
2. Webpack budles the entry point and all its dependencies into a sigle file.

## Getting started
1. install webpack-cli: `npm install -g webpack-cli`
2. by default (no config)
   1. entry point = "./src/index.js",
   2. output = "./dist/main.js"
3. config: 
   1. create `webpack.config.js`
   2. set entry point, output, mode, etc.
   3. run: `webpack`
4. watch webpack (automatically run after changes): `webpack --watch`

## loaders
1. install loader
   1. example: `npm install css-loader`
   2. at entry point file (app.js)
   3. put `require("!css-loader!style-loader!./style.css)` in the first line
    > *put ! to tell that we want to use css-loader and style-loader*
   4. or set `rules: { loaders: [{ test: "/\.css/", loader: "style-loader!css-loader" }]}` in webpack.config.js
    > *need to check syntax updated on webpack website*

## Webpack dev server

install `sudo npm install -g webpack-dev-server --save-dev`

add scripts in package.json: 

`"scripts": { "start": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js" }`

## Babel loader
Babel use to convert ES6 code to ES5 (maximum browser capability)

install: `npm install babel-core babel-loader babel-preset-es2015 --save-dev`

and then setup `webpack.config.js` by adding

`{ test: /\.js$/, loader: "babel-loader", exclude: /node_modules/, query: { presets: ["es2015]}}`

