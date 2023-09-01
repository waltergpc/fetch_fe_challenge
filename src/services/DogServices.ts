import { Dog, DogIdResponse } from '../types/types'
import customFetch from '../utils/customAxiosInstance'

export const getBreeds = async () => {
	const { data } = await customFetch.get<string[]>('/dogs/breeds')
	return data
}

export const getDogIds = async (searchUrl: string) => {
	const { data } = await customFetch.get<DogIdResponse>(searchUrl)
	return data
}

export const getDogsArray = async (idsArray: string[]) => {
	const { data } = await customFetch.post<Dog[]>('/dogs', idsArray)
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
