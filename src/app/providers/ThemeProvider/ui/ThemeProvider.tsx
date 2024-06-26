import React, {
    FC, ReactNode, useMemo, useState,
} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    Themes,
} from '../lib/ThemeContext';

type ThemeProviderProps = {
    children: ReactNode;
};

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes) || Themes.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Themes>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
