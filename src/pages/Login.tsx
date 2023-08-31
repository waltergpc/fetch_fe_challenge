import { useState, FormEvent, ChangeEvent } from 'react'
import Input from '../components/Input'
import { useQuery } from '@tanstack/react-query'
import { login } from '../services/LoginService'
import { UserData } from '../types/types'

const Login = () => {
	const [userData, setUserData] = useState<UserData>({
		name: '',
		email: ''
	})

	const { refetch } = useQuery({
		queryKey: ['login'],
		queryFn: () => login({ name: 'Willy', email: 'wonka@gmail.com' }),
		enabled: false
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault()
		await refetch()
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Input name="name" value={userData.name} handleChange={handleChange} />
				<Input
					name="email"
					value={userData.email}
					handleChange={handleChange}
				/>
				<button type="submit">Login</button>
			</form>
		</>
	)
}

export default Login
