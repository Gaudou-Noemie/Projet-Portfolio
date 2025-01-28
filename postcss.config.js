module.exports = {
    plugins: [
      require('autoprefixer'), // Si tu utilises autoprefixer
      require('cssnano'), // Si tu utilises cssnano pour minifier ton CSS
      require('@fullhuman/postcss-purgecss')({
        content: [
          './src/**/*.html',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.scss', // Ajout de .scss pour scanner tes fichiers SCSS
          './public/index.html'
        ],
        safelist: ['body', 'html'], // Classes à préserver (facultatif)
      }),
    ],
  };