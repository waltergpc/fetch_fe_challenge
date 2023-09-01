import { useState } from 'react'
import { ProviderProps, DogState } from '../../types/types'
import { DogContext } from './DogContext'

const initialState = {
	searchUrl: '/dogs/search?sort=breed:desc',
	nextUrl: '',
	prevUrl: '',
	dogs: []
}

export const DogProvider = ({ children }: ProviderProps) => {
	const [dogState, setDogState] = useState<DogState>(initialState)
	const [dogBreeds, setDogBreeds] = useState<string[]>([])

	const updateDogState = (newState: DogState) => {
		setDogState({ ...dogState, ...newState })
	}
	const updateBreeds = (breedsArr: string[]) => {
		setDogBreeds([...breedsArr])
	}

	return (
		<DogContext.Provider
			value={{ ...dogState, breeds: dogBreeds, updateDogState, updateBreeds }}
		>
			{children}
		</DogContext.Provider>
	)
}
