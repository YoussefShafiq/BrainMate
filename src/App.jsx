import { useState } from 'react'
import brainmateLogo from '/brainmate.png'
import './App.css'
import Notfound from './components/Notfound/Notfound';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {

  const routers = createBrowserRouter([
    { index: true, element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: '*', element: <Notfound /> },
  ]);


  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
