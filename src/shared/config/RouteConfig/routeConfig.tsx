import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/Main';
import { AboutPage } from 'pages/About';
import { NotFound } from 'pages/NotFound';

enum Routes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const routePath: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about',
    [Routes.NOT_FOUND]: '*',
};

export const routeConfig: Record<Routes, RouteProps> = {
    [Routes.MAIN]: {
        path: routePath.main,
        element: <MainPage />,
    },
    [Routes.ABOUT]: {
        path: routePath.about,
        element: <AboutPage />,
    },
    [Routes.NOT_FOUND]: {
        path: routePath.not_found,
        element: <NotFound />,
    },
};
