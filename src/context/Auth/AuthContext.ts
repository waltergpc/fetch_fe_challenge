import { createContext, useContext } from 'react'

interface AuthContextProps {
	isAuth: boolean
	setIsAuthTrue: (email: string) => void
	setIsAuthFalse: () => void
	email: string
}

export const AuthContext = createContext<AuthContextProps>({
	isAuth: false,
	email: '',
	setIsAuthTrue: () => {},
	setIsAuthFalse: () => {}
})

export const useAuth = () => useContext(AuthContext)
