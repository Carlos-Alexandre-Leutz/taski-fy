const mix = require('laravel-mix');

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }]
            ]
          }
        }
      }
    ]
  }
});

mix.js('resources/js/app.mjs', 'public/js')
   .vue()
   .postCss('resources/css/app.css', 'public/css');
