const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            environment: path.resolve(__dirname, 'src', 'environment'),
            styles: path.resolve(__dirname, 'src', 'styles'),
        },
    },
    devServer: {
        contentBase: './src',
        publicPath: '/build',
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            { 
                test: /\.otf(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-otf",
                options: { 
                    limit: 8000, 
                    name: 'assets/fonts/[name].[ext]'
                }  
            },  
            { 
                test: /\.(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader",
                options: { 
                    limit: 8000, 
                    name: 'assets/fonts/[name].[ext]'
                }  
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff",
                options: { 
                    limit: 8000, 
                    name: 'assets/fonts/[name].[ext]'
                } 
            },
            {
                test: /\.(png|jp(e*)g)$/,  
				use: [{
					loader: 'url-loader',
					options: { 
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'assets/images/[name].[ext]'
					} 
				}]
            }
        ]
    }
}