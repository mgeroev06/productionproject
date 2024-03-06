export type Mode = 'production' | 'development';

export type BuildPath = {
	entry: string;
	build: string;
	html: string;
	src: string;
};

export type BuildEnv = {
	mode: Mode;
	port: number;
};

export type BuildOptions = {
	mode: Mode;
	paths: BuildPath;
	isDev: boolean;
	port: number;
};
