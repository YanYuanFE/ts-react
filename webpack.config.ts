import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const config = {
  context: path.resolve(__dirname, "../"),
  entry: {
    app: "./src/index.tsx",
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    inline: true
  },
  output: {
    filename: "[name].[fullhash].js",
    path: path.resolve(process.cwd(), "dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React TypeScript App",
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    }),
  ]
};

export default config;
