import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './home';
import Todo from './Todo';
import Lab from './lab';

import Error from './Error';
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
