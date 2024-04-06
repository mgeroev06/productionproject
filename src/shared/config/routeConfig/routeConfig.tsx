import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/Main';
import { AboutPage } from 'pages/About';

enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routePath: Record<Routes, string> = {
    [Routes.MAIN]: '/',
    [Routes.ABOUT]: '/about',
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
};
