const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
	.default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
	name: 'server',
	target: 'node',
	externals,
	entry: './src/server/render.js',
	mode: 'production',
	output: {
		filename: 'prod-server-bundle.js',
		path: path.resolve(__dirname, '../build'),
		libraryTarget: 'commonjs2',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.scss', '.mjs'],
	},
	module: {
		rules: [
			//	----------------- new -----------------------
			{
				type: 'javascript/auto',
				test: /\.mjs$/,
				use: [],
				include: /node_modules/,
			},

			{
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				loader: 'graphql-tag/loader',
			},

			//	----------------- endnew --------------------
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
				options: {
					useCache: true,
					getCustomTransformers: () => ({
						before: [styledComponentsTransformer],
					}),
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							onlyLocals: true,
							modules: {
								getLocalIdent: (loaderContext, localIdentName, localName) => {
									if (path.basename(loaderContext.resourcePath).indexOf('graphiql.css') !== -1) {
										return localName;
									}
								},
								localIdentName: '[hash:base64:5]',
								mode: 'local',
							},
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							onlyLocals: true,
							modules: {
								mode: 'local',
								localIdentName: '[hash:base64:5]',
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							// Prefer `dart-sass`
							implementation: require('sass'),
						},
					},
				],
			},
			{
				test: /\.(jpg|svg|png|ico|gif|eot|otf|woff|woff2|ttf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false,
							name: '/images/[name].[ext]',
							emitFile: false,
						},
					},
				],
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'markdown-with-front-matter-loader',
					},
				],
			},
		],
	},
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				IS_CLIENT: JSON.stringify(false),
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new OptimizeCssnanoPlugin({
			cssnanoOptions: {
				preset: [
					'default',
					{
						discardComments: {
							removeAll: true,
						},
					},
				],
			},
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "./**", to: "./", context: "./public" },
			],
		}),
	],
};
