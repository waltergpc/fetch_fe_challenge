export type ProviderProps = { children: JSX.Element[] | JSX.Element }

export interface UserData {
	name: string
	email: string
}

export interface Dog {
	id: string
	img: string
	name: string
	age: number
	zip_code: string
	breed: string
}

export interface DogState {
	searchUrl: string
	nextUrl: string
	prevUrl: string
	selectedBreeds: string[]
	maxeAge?: string
	minAge?: string
}

export interface DogContextData extends DogState {
	updateDogState?: (arg: DogState) => void
	updateBreeds?: (arg: string[]) => void
}

export interface DogIdResponse {
	resultIds: string[]
	next: string
	prev?: string
	total: number
}
