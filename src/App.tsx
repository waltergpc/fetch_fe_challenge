import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PrimeReactProvider } from 'primereact/api'
import './App.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Dogs from './pages/Dogs'
import { AuthProvider } from './context/Auth/AuthProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DogProvider } from './context/Dogs/DogProvider'

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
		<PrimeReactProvider>
			<AuthProvider>
				<DogProvider>
					<QueryClientProvider client={queryClient}>
						<RouterProvider router={router} />
						<ReactQueryDevtools initialIsOpen={true} />
					</QueryClientProvider>
				</DogProvider>
			</AuthProvider>
		</PrimeReactProvider>
	)
}

export default App
