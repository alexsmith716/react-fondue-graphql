import express from "express";
import cookieParser from "cookie-parser";
const server = express();
server.use(cookieParser());
import path from "path";
const expressStaticGzip = require("express-static-gzip");
import webpack from "webpack";
import webpackHotServerMiddleware from "webpack-hot-server-middleware";

import { apolloServer } from './apolloServer';

import configDevClient from "../../config/webpack.dev-client.js";
import configDevServer from "../../config/webpack.dev-server.js";
import configProdClient from "../../config/webpack.prod-client.js";
import configProdServer from "../../config/webpack.prod-server.js";

import defineHeaders from '../utils/defineHeaders';

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;
const PORT = process.env.PORT || 8080;
let isBuilt = false;

defineHeaders();

const done = async () => {
	if (!isBuilt) {
		await apolloServer(server);
		server.listen(PORT, (err) => {
			isBuilt = true;
			console.log(`Server listening on \x1b[42m\x1b[1mhttp://localhost:${PORT}\x1b[0m in \x1b[41m${process.env.NODE_ENV}\x1b[0m 🌎...`,);
			if (err) {
				console.log('>>>> EXPRESS > SERVER > ERROR:', err);
			}
		});
	}
};

if (isDev) {
	const compiler = webpack([configDevClient, configDevServer]);

	const clientCompiler = compiler.compilers[0];
	const serverCompiler = compiler.compilers[1];

	const webpackDevMiddleware = require("webpack-dev-middleware")(
		compiler,
		configDevClient.devServer,
	);

	const webpackHotMiddlware = require("webpack-hot-middleware")(
		clientCompiler,
		configDevClient.devServer,
	);

	server.use(webpackDevMiddleware);
	server.use(webpackHotMiddlware);
	server.use(webpackHotServerMiddleware(compiler));
	console.log("Middleware enabled");
	done();
} else {
	webpack([configProdClient, configProdServer]).run((err, stats) => {
		const clientStats = stats.toJson().children[0];
		const render = require("../../build/prod-server-bundle.js").default;
		console.log(
			stats.toString({
				colors: true,
			}),
		);
		server.use(
			expressStaticGzip("dist", {
				enableBrotli: true,
			}),
		);
		server.use(render({ clientStats }));
		done();
	});
}
