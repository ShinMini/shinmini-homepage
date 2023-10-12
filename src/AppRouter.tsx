import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { app } from '@lib/firebase';
import { getAuth } from 'firebase/auth';

/** Home */
import HomePage from '@src/pages/home/HomePage';
/** Memo */
import MemoPage from '@src/pages/memo/MemoPage';
/** Feature List */
import FeatureListPage from '@src/pages/featureList/featureListPage';
import TestingPage from '@src/pages/featureList/lab/TestingPage';
import PassportResizer from '@src/pages/featureList/passport-resizer/PassportResizer';

/** Login */
import LoginPage from '@src/pages/login/LoginPage';
/** Sign up */
import SignUpPage from '@pages/login/SignUpPage';
/** Find my id & pwd */
import FindMyPage from '@pages/login/FindMyPage';

import LoadingPage from '@src/pages/LoadingPage';
import ErrorPage from '@src/pages/ErrorPage';

export const routeName = ['Home', 'Memo', 'Feats'];

function createRoutePath(routeName: Array<string>) {
  const routePath: Array<[string, string]> = [['Home', '/']];

  routeName.forEach(name => {
    if (name === 'Home') return;
    routePath.push([name, `/${name.toLowerCase()}`]);
  });
  return routePath;
}

export const RoutePath = new Map<string, string>(createRoutePath(routeName));
const routeElement: RouteObject[] = [
  {
    path: RoutePath.get('Home'),
    element: <HomePage />,
  },
  {
    path: RoutePath.get('Feats'),
    element: <FeatureListPage />,
  },
  {
    path: '/feats/passport-resizer',
    element: <PassportResizer />,
  },
  {
    path: '/memo',
    element: <MemoPage />,
  },
  {
    path: '/feats/testing',
    element: <TestingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/find-my',
    element: <FindMyPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
];

const routes = routeElement.reduce<RouteObject[]>((acc, route) => {
  route.errorElement = <ErrorPage />;
  route.hasErrorBoundary = true;

  acc.push(route);
  return acc;
}, []);

const router = createBrowserRouter(routes);

export default function AppRouter() {
  getAuth(app);

  return <RouterProvider router={router} fallbackElement={<LoadingPage />} />;
}
