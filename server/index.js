require('@babel/register')({ // eslint-disable-line
  presets: ['@babel/preset-es2015', '@babel/preset-react'],
  plugins: [
    ['@babel/transform-modules-commonjs'],
    ['babel-plugin-styled-components'],
  ],
});
require('./server');
