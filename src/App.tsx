import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPageAsync as AboutPage } from './pages/About/AboutPage.async';
import { MainPageAsync as MainPage } from './pages/Main/MainPage.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to="/">MainPage</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
