import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import './assets/tailwind.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Projects from './routes/Projects';
import Routs from './routes/Routs';
import PhotographyMain from './routes/Photography';
import Belgium from './routes/photography/Belgium';
import Photography from './routes/photography/Photography';
import DigitalArt from './routes/DigitalArt';
import Oman from './routes/photography/Oman';
import Finland from './routes/photography/Finland';
import Canada from './routes/photography/Canada';
import Croatie from './routes/photography/croatie';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
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
        element: <DigitalArt />,
      },
      {
        path: 'photography',
        element: <PhotographyMain />,
        children: [
          {
            path: 'belgium',
            element: <Belgium />,
          },
          {
            path: 'oman',
            element: <Oman />,
          },
          {
            path: 'finland',
            element: <Finland />,
          },
          {
            path: 'canada',
            element: <Canada />,
          },
          {
            path: 'Croatia',
            element: <Croatie />,
          },
          {
            path: '',
            element: <Photography />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="min-h-screen bg-lemon-chiffon font-sans over">
        <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
