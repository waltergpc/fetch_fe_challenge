import { Dog, DogIdResponse, Match } from '../types/types'
import customFetch from '../utils/customAxiosInstance'

export const getBreeds = async () => {
	const { data } = await customFetch.get<string[]>('/api/dogs/breeds')
	return data
}

export const getDogIds = async (searchUrl: string) => {
	const { data } = await customFetch.get<DogIdResponse>(`/api/${searchUrl}`)
	return data
}

export const getDogsArray = async (idsArray: string[]) => {
	const { data } = await customFetch.post<Dog[]>('/api/dogs', idsArray)
	return data
}

export const getDogsQuery = async (searchUrl: string) => {
	const dogIdsResponse = await getDogIds(searchUrl)
	const { resultIds, next: nextUrl, total } = dogIdsResponse
	let { prev: prevUrl } = dogIdsResponse
	if (!prevUrl) prevUrl = ''
	const dogs = await getDogsArray(resultIds)

	return {
		dogs,
		nextUrl,
		prevUrl,
		total
	}
}

export const getMatchedDog = async (dogsArr: Dog[]) => {
	const idsArr = dogsArr.map((dog) => dog.id)
	const { data } = await customFetch.post<Match>('/api/dogs/match', idsArr)
	const dogs = await getDogsArray([data.match])
	const matchedDog = dogs[0]
	return matchedDog
}
