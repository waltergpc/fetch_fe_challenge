import { createContext, useContext } from 'react'
import { DogContextData } from '../../types/types'

// interface DogContextProps {}

export const DogContext = createContext<DogContextData>({
	searchUrl: '/dogs/search?sort=breed:desc',
	nextUrl: '',
	prevUrl: '',
	selectedBreeds: [],
	updateDogState: () => {},
	maxAge: '',
	minAge: ''
})

export const useDogs = () => useContext(DogContext)
