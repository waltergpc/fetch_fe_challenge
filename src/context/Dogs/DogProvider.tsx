import { useState } from 'react'
import { ProviderProps, DogState, Dog } from '../../types/types'
import { DogContext } from './DogContext'
import { toast } from 'react-toastify'

const initialState = {
	searchUrl: '/dogs/search?sort=breed:asc&size=25&from=0',
	selectedBreeds: [],
	total: 0,
	page: 1,
	skip: 25,
	maxAge: '',
	minAge: '',
	sortOrder: 'asc'
}

export const DogProvider = ({ children }: ProviderProps) => {
	const [dogState, setDogState] = useState<DogState>(initialState)
	const [selectedDogs, setSelectedDogs] = useState<Dog[]>([])

	const updateDogState = (newState: Partial<DogState>) => {
		setDogState({ ...dogState, ...newState })
	}
	const updateSelectedDogs = (dogsArr: Dog[]) => {
		if (dogsArr.length > 100) {
			toast.error('Cannot select over 100 dogs')
			return
		}
		setSelectedDogs([...dogsArr])
	}

	const resetState = () => {
		setDogState(initialState)
	}

	return (
		<DogContext.Provider
			value={{
				...dogState,
				selectedDogs,
				updateDogState,
				updateSelectedDogs,
				resetState
			}}
		>
			{children}
		</DogContext.Provider>
	)
}
