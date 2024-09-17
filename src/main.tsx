import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.tsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Tankstelle from './Tankstelle.tsx';
import Transporte from './Transporte.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/tankstelle',
    element: <Tankstelle />
  },
  {
    path: '/Transporte',
    element: <Transporte />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
