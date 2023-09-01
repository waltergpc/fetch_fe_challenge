import { createContext, useContext } from 'react'
import { DogState } from '../types/types'

// interface DogContextProps {}

export const DogContext = createContext<DogState>({
	searchUrl: '/dogs/search?sort=breed:desc',
	nextUrl: '',
	prevUrl: '',
	dogs: []
})

export const useDogs = () => useContext(DogContext)
