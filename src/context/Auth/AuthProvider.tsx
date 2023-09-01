import { useState } from 'react'
import { AuthContext } from './AuthContext'
import { ProviderProps } from '../../types/types'

export const AuthProvider = ({ children }: ProviderProps) => {
	const [isAuth, setIsAuth] = useState(false)

	const setIsAuthTrue = () => {
		setIsAuth(true)
	}

	const setIsAuthFalse = () => {
		setIsAuth(false)
	}

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuthTrue, setIsAuthFalse }}>
			{children}
		</AuthContext.Provider>
	)
}
