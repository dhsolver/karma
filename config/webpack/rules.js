const antdVars = require('./antdvars');

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    loader: 'file-loader'
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /node_modules/,
    loader: 'url-loader?prefix=font/&limit=5000'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.(jpe?g|png|gif)$/i,
    use: 'file-loader?name=[hash:base64:7].[ext]'
  },
  {
    test: /favicon\.png$/,
    loader: 'file-loader?name=[name].[ext]'
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader', // creates style nodes from JS strings
      'css-loader', // translates CSS into CommonJS
      'sass-loader' // compiles Sass to CSS, using Node Sass by default
    ]
  },
  {
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'less-loader',
        options: {
          strictMath: true,
          noIeCompat: true,
          options: {
            modifyVars: antdVars
          }
        }
      }
    ]
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          template: (
            { template },
            opts,
            { imports, componentName, props, jsx }
          ) => template.ast`
            ${imports}

            const ${componentName} = (${props}) => {
              return ${jsx};
            };

            export default ${componentName};
          `
        }
      }
    ]
  }
];
