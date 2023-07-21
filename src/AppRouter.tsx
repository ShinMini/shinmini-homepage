import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import Home from './pages/home';
import Error from './pages/Error';
import { app } from './lib/firebase';
import { getAuth } from 'firebase/auth';

const Todo = lazy(() => import('./pages/Todo'));
const Lab = lazy(() => import('./pages/lab'));

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
  getAuth(app);

  return (
    <RouterProvider
      router={router}
      fallbackElement={
        <div className="w-full h-full items-center justify-center bg-slate-700">
          <h1 className="m-auto text-5xl text-cyan-500">Loading...</h1>
        </div>
      }
    />
  );
}
