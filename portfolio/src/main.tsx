import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import './assets/tailwind.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './routes/Projects';
import Routs from './routes/Routs';
import PhotographyMain from './routes/Photography';
import Belgium from './routes/photography/Belgium';
import Photography from './routes/photography/Photography';

const router = createBrowserRouter([
  {
    path: '',
    element: <Routs />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'digital-art',
        element: <div>test</div>,
      },
      {
        path: 'photography',
        element: <PhotographyMain />,
        children: [
          {
            path: 'belgium',
            element: <Belgium/>,
          },
          {
            path: '',
            element: <Photography/>,
          },],
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="min-h-screen bg-lemon-chiffon font-sans">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
