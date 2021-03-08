const postcss = require('rollup-plugin-postcss');
// const scss = require('rollup-plugin-scss');

// const sassPlugin = scss({
//   output: 'dist/index.css',
// });

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: false,
        extract: 'index.css',
      })
    );
    return config;
  },
};
