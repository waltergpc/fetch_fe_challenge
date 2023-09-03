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

export interface SearchParams {
	selectedBreeds: string[]
	maxAge?: string
	minAge?: string
}

export interface DogState extends SearchParams {
	searchUrl: string
	nextUrl: string
	prevUrl: string
}

export interface DogContextData extends DogState {
	updateDogState: (arg: Partial<DogState>) => void
	updateBreeds?: (arg: string[]) => void
}

export interface DogIdResponse {
	resultIds: string[]
	next: string
	prev?: string
	total: number
}
