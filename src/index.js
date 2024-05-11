import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import YourBotArmy from './components/YourBotArmy';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/Bot-battlr-Alvin-code-challenge-2-ph2",
    element: <App />
  },
  {
    path: "/Bot-battlr-Alvin-code-challenge-2-ph2/:id",
    element: <YourBotArmy />

  }

])



root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
