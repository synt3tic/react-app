export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    dist: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}
