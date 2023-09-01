import { useState } from 'react'
import { ProviderProps, DogState } from '../../types/types'
import { DogContext } from './DogContext'

const initialState = {
	searchUrl: '/dogs/search?sort=breed:desc',
	nextUrl: '',
	prevUrl: '',
	selectedBreeds: []
}

export const DogProvider = ({ children }: ProviderProps) => {
	const [dogState, setDogState] = useState<DogState>(initialState)
	const [selectedBreeds, setSelectedBreeds] = useState<string[]>([])

	const updateDogState = (newState: DogState) => {
		setDogState({ ...dogState, ...newState })
	}
	const updateBreeds = (breedsArr: string[]) => {
		setSelectedBreeds([...breedsArr])
	}

	return (
		<DogContext.Provider
			value={{ ...dogState, selectedBreeds, updateDogState, updateBreeds }}
		>
			{children}
		</DogContext.Provider>
	)
}
