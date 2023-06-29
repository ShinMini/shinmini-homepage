import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import Home from './pages/home';
const Todo = lazy(() => import('./pages/Todo'));
const Lab = lazy(() => import('./pages/lab'));
const Error = lazy(() => import('./pages/Error'));

export const routeName = ['Home', 'Todo', 'Lab'];

function createRoutePath(routeName: Array<string>) {
  const routePath: Array<[string, string]> = [['Home', '/']];

  routeName.forEach(name => {
    if (name === 'Home') return;
    routePath.push([name, `/${name.toLowerCase()}`]);
  });
  return routePath;
}

export const RoutePath = new Map<string, string>(createRoutePath(routeName));

const router = createBrowserRouter([
  {
    path: RoutePath.get('Home'),
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: RoutePath.get('Todo'),
    element: <Todo />,
  },
  {
    path: RoutePath.get('Lab'),
    element: <Lab />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
