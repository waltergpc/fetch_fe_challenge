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
	dogs: Dog[] | []
}
