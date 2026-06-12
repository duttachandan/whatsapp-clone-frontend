import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './pages/Layout/Layout'
import Home from './pages/Home/Home'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          index:true,
          element: <Home/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
