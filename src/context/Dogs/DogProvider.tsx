import { useState } from 'react'
import { ProviderProps, DogState } from '../../types/types'
import { DogContext } from './DogContext'

const initialState = {
	searchUrl: '/dogs/search?sort=breed:asc&size=25&from=0',
	selectedBreeds: [],
	total: 0,
	page: 1,
	skip: 25,
	maxAge: '',
	minAge: ''
}

export const DogProvider = ({ children }: ProviderProps) => {
	const [dogState, setDogState] = useState<DogState>(initialState)
	const [selectedIds, setSelectedIds] = useState<string[]>([])

	const updateDogState = (newState: Partial<DogState>) => {
		setDogState({ ...dogState, ...newState })
	}
	const updateBreeds = (breedsArr: string[]) => {
		setSelectedIds([...breedsArr])
	}

	return (
		<DogContext.Provider
			value={{ ...dogState, selectedIds, updateDogState, updateBreeds }}
		>
			{children}
		</DogContext.Provider>
	)
}
