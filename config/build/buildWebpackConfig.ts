import webpack from "webpack";
import { BuildOptions } from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        entry: paths.entry,

        mode,

        output: {
            path: paths.dist,
            filename: '[name].[contenthash].js',
            clean: true,
        },

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options),
        },

        resolve: buildResolvers(),

        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
