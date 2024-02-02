import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from './ThemeContext';
import { useContext } from 'react';

interface useThemeRes {
    theme: Themes;
    toggleTheme: () => void;
}

export function useTheme(): useThemeRes {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggleTheme };
}
