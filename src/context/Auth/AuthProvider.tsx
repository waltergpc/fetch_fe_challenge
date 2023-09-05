import { useState } from 'react'
import { AuthContext } from './AuthContext'
import { ProviderProps } from '../../types/types'

export const AuthProvider = ({ children }: ProviderProps) => {
	const [isAuth, setIsAuth] = useState(false)
	const [email, setEmail] = useState('')

	const setIsAuthTrue = (email: string) => {
		setEmail(email)
		setIsAuth(true)
	}

	const setIsAuthFalse = () => {
		setIsAuth(false)
	}

	return (
		<AuthContext.Provider
			value={{ isAuth, email, setIsAuthTrue, setIsAuthFalse }}
		>
			{children}
		</AuthContext.Provider>
	)
}
