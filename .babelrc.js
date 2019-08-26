module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    [
      'module-resolver',
      {
        root: [__dirname],
        cwd: __dirname,
        alias: {
          '@root': './',
          '@assets': './src/assets',
          '@config': './config',
          '@styles': './src/styles',
          '@components': './src/components',
          '@containers': './src/containers',
          '@pages': './src/pages',
          '@redux': './src/redux',
          '@utils': './src/utils',
          '@services': './src/services',
          '@appConfig': './src/appConfig',
          '@models': './src/models'
        }
      }
    ]
  ],
  env: {
    development: {
      plugins: ['react-hot-loader/babel']
    },
    production: {
      plugins: ['transform-react-remove-prop-types']
    }
  }
};
