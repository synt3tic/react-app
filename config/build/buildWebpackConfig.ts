import webpack from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;

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
            rules: buildLoaders(),
        },

        resolve: buildResolvers(),
    };
}
