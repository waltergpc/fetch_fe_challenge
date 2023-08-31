import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Dogs from './pages/Dogs'
import { AuthProvider } from './context/AuthProvider'

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />
	},
	{
		path: '/dogs',
		element: <Dogs />
	}
])

function App() {
	return (
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</AuthProvider>
	)
}

export default App
