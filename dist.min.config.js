var webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path         : __dirname + "/dist",
        libraryTarget: 'umd',
        library      : 'ColorPicker',
        filename     : require('./DIST_FILE_NAME') + '.min.js'
    },
    module: {
        loaders: require('./loaders.config')
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    },
	  plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('production')
				}
			}),
			new webpack.optimize.UglifyJsPlugin()	
		]
}
