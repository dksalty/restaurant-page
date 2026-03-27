import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'node:path';

export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(process.cwd(), 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
    }),
  ],
  module: {
  rules: [
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: "asset/resource",
    },  {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
  ],
}
};