import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: 'contacts/:contactId',
    element: <div>hello</div>,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
