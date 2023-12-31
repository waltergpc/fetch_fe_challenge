import { createContext, useContext } from 'react'
import { DogContextData } from '../../types/types'

// interface DogContextProps {}

export const DogContext = createContext<DogContextData>({
	searchUrl: '/dogs/search?sort=breed:asc&size=25&from=0',
	selectedBreeds: [],
	updateDogState: () => {},
	updateSelectedDogs: () => {},
	resetState: () => {},
	maxAge: '',
	minAge: '',
	page: 1,
	skip: 25,
	selectedDogs: [],
	sortOrder: 'asc'
})

export const useDogs = () => useContext(DogContext)
