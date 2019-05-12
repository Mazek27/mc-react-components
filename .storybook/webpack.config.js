const path = require('path');
const genDefaultConfig = require('../default.webpack.config.js')
const cssRule = genDefaultConfig.module.rules[0]
module.exports = {
  ...genDefaultConfig,
  externals: {},
  module: {
    ...genDefaultConfig.module,
    rules: [
      {
        test: /\.stories\.(ts|js|jsx|tsx)?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig: {
                parser: 'babylon'
              }
            }
          }
        ],
        enforce: 'pre'
      },
      {
        oneOf: [
          // add themes here so they are loaded using the raw-loader
          {
            test: /alternative\/.*\.css$/,
            use: ['raw-loader']
          },
          // everything else should be loaded using style-loader, css-loader and postcss-loader
          {
            test: /\.css$/,
            use: ['style-loader', ...cssRule.use.slice(1)]
          }
        ]
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      ...genDefaultConfig.module.rules.slice(1)
    ]
  },
  plugins: []
}
