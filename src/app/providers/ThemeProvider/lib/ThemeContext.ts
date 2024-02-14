import { createContext } from 'react';

export enum Themes {
	LIGHT = 'light',
	DARK = 'dark',
}

export type ThemeContextProps = {
	theme?: Themes;
	setTheme?: (theme: Themes) => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
