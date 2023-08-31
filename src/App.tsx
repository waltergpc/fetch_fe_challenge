import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
