const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const path = require('path')

// function generateHtmlPlugins (templateDir) {
//     const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
//     return templateFiles.map(item => {
//         const parts = item.split('.')
//         const name = parts[0]
//         const extension = parts[1]
//         return new HtmlWebpackPlugin({
//             filename: `${name}.html`,
//             template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
//         })
//     })
// }

// const htmlPlugins = generateHtmlPlugins('./src/pages')


module.exports =  {

    mode: 'development',
    entry: {
        dashboard: './src/assets/js/demo_1/dashboard.js',
        // scss: './src/assets/scss/demo_1/style.scss'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '',
        assetModuleFilename: (pathData) => {
            const filepath = path
                .dirname(pathData.filename)
                .split("/")
                .slice(1)
                .join("/")
            return `${filepath}/[name].[ext]`
        },
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: 'asset/resource',
                
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].css",
            chunkFilename: 'chunk-[id].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/pages',
                    to: path.resolve(__dirname, 'dist/pages')
                },
                {
                    from: path.resolve(__dirname, './src/assets/images'),
                    to: path.resolve(__dirname, 'dist/assets/images')
                },
                {
                    from: path.resolve(__dirname, './src/assets/vendors'),
                    to: path.resolve(__dirname, 'dist/assets/vendors')
                },
                {
                    from: path.resolve(__dirname, './src/assets/js'),
                    to: path.resolve(__dirname, 'dist/assets/js')
                }
            ],
            
        })
    ]
    // .concat(htmlPlugins)

}