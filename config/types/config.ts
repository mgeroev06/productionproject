export type Mode = 'production' | 'development';

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    mode: Mode;
    port: number;
}

export interface BuildOptions {
    mode: Mode;
    paths: BuildPath;
    isDev: boolean;
    port: number;
}
