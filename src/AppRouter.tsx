import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import Home from './pages/home';
import Error from './pages/Error';
import { app } from './lib/firebase';
import { getAuth } from 'firebase/auth';
import Loading from './pages/Loading';

const Todo = lazy(() => import('./pages/feats/Todo'));
const Lab = lazy(() => import('./pages/feats/lab'));
const ImageResizer = lazy(() => import('./pages/feats/imageResizer/ImageResizer'));
const Login = lazy(() => import('./pages/login'));
const Feats = lazy(() => import('./pages/feats/index'));

export const routeName = ['Home', 'Feats'];

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
    element: <Home />,
  },
  {
    path: RoutePath.get('Feats'),
    element: <Feats />,
  },
  {
    path: '/feats/image-resizer',
    element: <ImageResizer />,
  },
  {
    path: '/feats/todo',
    element: <Todo />,
  },
  {
    path: '/feats/lab',
    element: <Lab />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

const routes = routeElement.reduce<RouteObject[]>((acc, route) => {
  route.errorElement = <Error />;
  route.hasErrorBoundary = true;

  acc.push(route);
  return acc;
}, []);

const router = createBrowserRouter(routes);

export default function AppRouter() {
  getAuth(app);

  return <RouterProvider router={router} fallbackElement={<Loading />} />;
}
