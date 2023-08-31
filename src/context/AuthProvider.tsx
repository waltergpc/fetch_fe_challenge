import  { useState } from 'react'
import { AuthContext } from './AuthContext'

type AuthProviderProps = {children : JSX.Element[] | JSX.Element}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(false)

  const setIsAuthTrue = () => {
    setIsAuth(true)
  }

  const setIsAuthFalse = () => {
    setIsAuth(false)
  }


  return (
    <AuthContext.Provider
      value={{isAuth, setIsAuthTrue, setIsAuthFalse}}
    >
      {children}
    </AuthContext.Provider>
  )
}
