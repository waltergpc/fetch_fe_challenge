import { SearchParams } from '../types/types'

export const createUrlStringFromArray = (array: string[]) => {
	let finalQueryString = ''
	array.forEach((element) => {
		finalQueryString += `breed=${element}&`
	})

	finalQueryString = finalQueryString.slice(0, -1)

	return finalQueryString
}

export const createFinalSearchUrl = (searchParams: SearchParams) => {
	const { selectedBreeds, maxAge, minAge } = searchParams
	let queryString = '/dogs/search?'
	if (selectedBreeds.length > 0) {
		selectedBreeds.forEach((breed) => {
			queryString += `breed=${breed}`
		})
	}
	if (maxAge) {
		queryString += `&maxAge=${maxAge}`
	}
	if (minAge) {
		queryString += `&minAge=${minAge}`
	}

	queryString += 'size=25&from=0'

	return queryString
}
