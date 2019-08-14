const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
var S3Plugin = require('webpack-s3-plugin');

const paths = require('./paths');
const plugins = [
  new CleanWebpackPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
];

if (process.env.GZIP) {
  plugins.push(
    new CompressionPlugin({
      filename: '[file]',
      algorithm: 'gzip'
    })
  );
}

if (process.env.ANALYZE) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  );
}

if (process.env.DEPLOY_S3) {
  plugins.push(
    new S3Plugin({
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
      },
      s3UploadOptions: {
        Bucket: process.env.S3_BUCKET,
        ContentEncoding(fileName) {
          if (/\.js$|\.html$|\.css/.test(fileName)) {
            return 'gzip';
          }
        }
      },
      cloudfrontInvalidateOptions: {
        DistributionId: process.env.AWS_CLOUDFRONT_ID,
        Items: ['/*']
      }
    })
  );
}

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    publicPath: '/',
    chunkFilename: '[name].[chunkhash].js'
  },
  plugins,
  devtool: 'source-map'
};
