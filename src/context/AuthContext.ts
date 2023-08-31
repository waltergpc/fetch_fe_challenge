import { createContext, useContext } from 'react'

interface AuthContextProps {
	isAuth: boolean
	setIsAuthTrue?: () => void
	setIsAuthFalse?: () => void
}

export const AuthContext = createContext<AuthContextProps>({ isAuth: false })

export const useAuth = () => useContext(AuthContext)
