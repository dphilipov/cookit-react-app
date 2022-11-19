import { createBrowserRouter } from 'react-router-dom';
import { Layout, Home, Error } from './pages/';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
