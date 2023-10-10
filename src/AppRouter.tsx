import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { app } from '@lib/firebase';
import { getAuth } from 'firebase/auth';

import Error from '@pages/Error';
import Feats from '@pages/feats/index';
import Home from '@pages/home';
import PassportResizer from '@src/pages/feats/passport-resizer/PassportResizer';
import Lab from '@pages/feats/lab';
import Loading from '@pages/Loading';
import Login from '@pages/login';
import Todo from '@src/pages/feats/todo';
import FindMy from './pages/login/find-my/FindMy';
import SignUp from './pages/login/sign-up/SignUp';

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
    path: '/feats/passport-resizer',
    element: <PassportResizer />,
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
  {
    path: '/login/find-my',
    element: <FindMy />,
  },
  {
    path: '/login/sign-up',
    element: <SignUp />,
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
