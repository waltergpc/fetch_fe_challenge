import { useState } from 'react'
import { ProviderProps, DogState } from '../types/types'
import { DogContext } from './DogContext'

const initialState = {
	searchUrl: '/dogs/search?sort=breed:desc',
	nextUrl: '',
	prevUrl: '',
	dogs: []
}

export const AuthProvider = ({ children }: ProviderProps) => {
	const [dogState, setDogState] = useState<DogState>(initialState)

	return (
		<DogContext.Provider value={{ ...dogState }}>
			{children}
		</DogContext.Provider>
	)
}
