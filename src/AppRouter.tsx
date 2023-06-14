import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import About from './pages/about';
import Lab from './pages/lab';

import Error from './pages/Error';

export enum RoutePath {
  Home = '/',
  Login = '/login',
  About = '/about',
  Lab = '/lab',
}

const router = createBrowserRouter([
  {
    path: RoutePath.Home,
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: RoutePath.Login,
    element: <Login />,
  },
  {
    path: RoutePath.About,
    element: <About />,
  },
  {
    path: RoutePath.Lab,
    element: <Lab />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
